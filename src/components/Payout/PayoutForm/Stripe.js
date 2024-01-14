import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
// Redux
import { connect } from 'react-redux';
// Redux Form
import {
    Field, reduxForm, formValueSelector, change,
    getFormSyncErrors, submit as submitForm, getFormValues
} from 'redux-form';
import {
    Button,
    FormGroup,
    Col,
    FormControl,
    Panel,
} from 'react-bootstrap';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// Stripe
import { injectStripe } from 'react-stripe-elements';
import { toastr } from 'react-redux-toastr';
import s from '../Payout.css';
import bt from '../../../components/commonStyle.css';

// Helpers
import validateStripe from './validateStripe';
import submit from './submit';
import { isEuropeCountry } from '../../../helpers/europeCountryHelpers';
import generateStripePayoutToken from '../../../helpers/generateStripePayoutToken';

// Redux
import { startPayoutLoading, stopPayoutLoading } from '../../../actions/Payout/addPayoutAction';

// Locale
import messages from '../../../locale/messages';

// Components
import Loader from '../../Loader';
import Link from '../../Link';

class Stripe extends Component {
    static propTypes = {
        handleSubmit: PropTypes.any.isRequired,
        previousPage: PropTypes.any.isRequired,
        siteName: PropTypes.string.isRequired,
        formatMessage: PropTypes.any,
    };

    static defaultProps = {
        businessType: 'individual'
    };

    constructor(props) {
        super(props)
        this.handleSubmitAction = this.handleSubmitAction.bind(this);
    }

    componentDidMount() {
        const { userId, change } = this.props;
        // change('userId', userId);
    }

    UNSAFE_componentWillReceiveProps() {
        const { userId, change } = this.props;
        // change('userId', userId);
    }

    renderField = ({ input, label, type, meta: { touched, error, dirty }, placeHolder }) => {
        const { formatMessage } = this.props.intl;
        return (
            <FormGroup className={bt.space3}>
                <label className={cx(bt.commonLabelText, 'textWhite')}>{label}</label>
                <FormControl
                    {...input}
                    componentClass="input"
                    className={cx(bt.commonControlInput, s.formControlInput)}
                    placeholder={placeHolder}
                />
                {touched && error && <span className={bt.errorMessage}>{formatMessage(error)}</span>}
            </FormGroup>
        );
    }

    renderSelectField = ({ input, label, type, meta: { touched, error, dirty }, children, placeHolder }) => {
        const { formatMessage } = this.props.intl;
        return (
            <FormGroup className={bt.space3}>
                <label className={cx(bt.commonLabelText, 'textWhite')}>{label}</label>
                <FormControl
                    {...input}
                    componentClass="select"
                    className={cx(s.formControlInput, bt.commonControlSelect, 'formSelectAR')}
                    placeholder={placeHolder}
                >
                    {children}
                </FormControl>
                {touched && error && <span className={bt.errorMessage}>{formatMessage(error)}</span>}
            </FormGroup>
        );
    }

    async handleSubmitAction(event) {
        event.preventDefault();
        const { stripe, change, submitForm, handleSubmit } = this.props;
        const { formValues, errors, startPayoutLoading, stopPayoutLoading } = this.props;
        let accountToken, personToken;

        if (errors && JSON.stringify(errors) !== '{}') { // If any error trigger the submit action to show the error messages
            // submitForm('PayoutForm');
	   await handleSubmit();
        }

        if ((!errors || (errors && JSON.stringify(errors) === '{}')) && formValues && stripe) {
            await startPayoutLoading();
            const generateTokens = await generateStripePayoutToken(stripe, formValues);
            if (generateTokens && generateTokens.status === 200) {
                accountToken = generateTokens.result && generateTokens.result.accountToken;
                personToken = generateTokens.result && generateTokens.result.personToken || null;
                await change('isTokenGenerated', true);
                await change('accountToken', accountToken);
                await change('personToken', personToken);
		
                //await submitForm('PayoutForm');
	        await handleSubmit();
            } else {
                toastr.error('Error!', generateTokens.errorMessage);
                await stopPayoutLoading();
            }
            return;
        }
    }

    render() {
        const { handleSubmit, pristine, previousPage, submitting, error } = this.props;
        const { base, availableCurrencies, siteName, payoutLoading, businessType, payoutCountry } = this.props;
        const { formatMessage } = this.props.intl;


        return (
            <div className={cx('inputFocusColor', 'commonListingBg', 'payoutMethodList', 'noMarginBottom')}>
                <form onSubmit={handleSubmit}>
                    <h3 className={bt.listingTitleText}>{formatMessage(messages.addPayout)}</h3>
                    <Field
                        name="businessType"
                        component={this.renderSelectField}
                        label={formatMessage(messages.payoutType)}
                    >
                        <option value="individual">{formatMessage(messages.payoutIndividual)}</option>
                        <option value="company">{formatMessage(messages.payoutCompany)}</option>
                    </Field>
                    <div className={[(businessType === 'individual' ? s.displayGrid : s.displayBlock)]}>
                        <Field
                            name="firstname"
                            component={this.renderField}
                            label={(businessType === 'individual' ? formatMessage(messages.payoutFirstName) : formatMessage(messages.payoutCompanyName))}
                            placeHolder={(businessType === 'individual' ? formatMessage(messages.payoutFirstName) : formatMessage(messages.payoutCompanyName))}
                        />

                        {
                            businessType && businessType === 'individual' && <Field
                                name="lastname"
                                component={this.renderField}
                                label={formatMessage(messages.payoutLastName)}
                                placeHolder={formatMessage(messages.payoutLastName)}
                            />
                        }
                    </div>

                    {
                        payoutCountry && ['US', 'CA', 'GB'].includes(payoutCountry) &&
                        <Field
                            name="routingNumber"
                            component={this.renderField}
                            label={payoutCountry === 'GB' ? formatMessage(messages.payoutSortNumber) : formatMessage(messages.payoutRouting)}
                            placeHolder={payoutCountry === 'CA' ? "eg: 11000-000" : (payoutCountry === 'GB' ? "eg: 108800" : "eg: 110000000")}
                        />
                    }

                    <Field
                        name="accountNumber"
                        component={this.renderField}
                        label={isEuropeCountry(payoutCountry) ? formatMessage(messages.ibanNumber) : formatMessage(messages.accountNumber)}
                        placeHolder={isEuropeCountry(payoutCountry) ? `eg: ${payoutCountry}89370400440532013000` : (payoutCountry === 'GB' ? "eg: 00012345" : "eg: 000123456789")}
                    />

                    <Field
                        name="confirmAccountNumber"
                        component={this.renderField}
                        label={isEuropeCountry(payoutCountry) ? formatMessage(messages.confirmIbanNumber) : formatMessage(messages.confirmAccountNumber)}
                        placeHolder={isEuropeCountry(payoutCountry) ? `eg: ${payoutCountry}89370400440532013000` : (payoutCountry === 'GB' ? "eg: 00012345" : "eg: 000123456789")}
                    />

                    {
                        payoutCountry && payoutCountry === 'US' && businessType && businessType === 'individual' && <Field
                            name="ssn4Digits"
                            component={this.renderField}
                            label={formatMessage(messages.ssn4Digits)}
                            placeHolder={"1234"}
                        />
                    }
                    <p className={cx(s.infoBox, 'textWhite', bt.space2)}>{formatMessage(messages.payoutStripeInfo)}</p>
                    <p className={cx(s.infoBox, 'textWhite', bt.space4)}>
                        {formatMessage(messages.stripeTokenInfo1)}{' '}
                        <a href={'https://stripe.com/connect-account/legal'} target={'_blank'} className={s.stripeLink}>{formatMessage(messages.stripeTokenInfo2)}</a>.
                    </p>
                    <div className={bt.textAlignRight}>
                        <Button className={cx(bt.btnLarge, bt.btnPrimaryBorder, s.btnRight, s.backBtn, 'spaceRight2AR')} onClick={previousPage}>
                            <FormattedMessage {...messages.back} />
                        </Button>
                        <div className={s.displayInline}>
                            <Loader
                                type={'button'}
                                buttonType={'button'}
                                className={cx(bt.btnPrimary, bt.btnLarge, s.displayInline, 'arButtonLoader')}
                                disabled={pristine || submitting || error || payoutLoading}
                                show={payoutLoading}
                                label={formatMessage(messages.finish)}
                                handleClick={this.handleSubmitAction}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

Stripe = reduxForm({
    form: 'PayoutForm', // a unique name for this form
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validateStripe,
    onSubmit: submit
})(Stripe);

const selector = formValueSelector('PayoutForm');

const mapState = (state) => ({
    siteName: state.siteSettings.data.siteName,
    availableCurrencies: state.currency.availableCurrencies,
    base: state.currency.base,
    payoutLoading: state.reservation.payoutLoading,
    businessType: selector(state, 'businessType'),
    payoutCountry: selector(state, 'country'),
    formValues: getFormValues('PayoutForm')(state),
    errors: getFormSyncErrors('PayoutForm')(state),
    userId: state.account.data.userId
});

const mapDispatch = {
    submitForm,
    change,
    startPayoutLoading,
    stopPayoutLoading
};

export default injectStripe(injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(Stripe))));