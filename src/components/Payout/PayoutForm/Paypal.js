import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

// Redux
import { connect } from 'react-redux';

// Redux Form
import { Field, reduxForm } from 'redux-form';

import {
    Button,
    FormGroup,
    FormControl,
} from 'react-bootstrap';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../Payout.css';
import bt from '../../../components/commonStyle.css';
import logourl from '../../../../public/PaymentGateway/paypal.svg';

// Helpers
import validate from './validate';
import submit from './submit';

// Locale
import messages from '../../../locale/messages';

class Paypal extends Component {
    static propTypes = {
        handleSubmit: PropTypes.any.isRequired,
        previousPage: PropTypes.any.isRequired,
        siteName: PropTypes.string.isRequired,
        formatMessage: PropTypes.any,
    };

    renderField = ({ input, label, type, meta: { touched, error, dirty } }) => {
        const { formatMessage } = this.props.intl;
        return (
            <FormGroup className={bt.space3}>
                <label className={cx(bt.commonLabelText, 'textWhite')}>{label}</label>
                <FormControl {...input} componentClass="input" className={cx(bt.commonControlInput)} />
                {touched && error && <span className={bt.errorMessage}>{formatMessage(error)}</span>}
            </FormGroup>
        );
    }

    renderFormControlSelect = ({ input, label, meta: { touched, error }, children, className }) => {
        const { formatMessage } = this.props.intl;
        return (
            <FormGroup className={bt.space3}>
                <label className={cx(bt.commonLabelText, 'textWhite')}>{label}</label>
                <FormControl componentClass="select" {...input} className={cx(bt.commonControlSelect, 'formSelectAR')}>
                    {children}
                </FormControl>
                {touched && error && <span className={bt.errorMessage}>{formatMessage(error)}</span>}
            </FormGroup>
        )
    }

    render() {
        const { handleSubmit, pristine, previousPage, submitting } = this.props;
        const { base, availableCurrencies, siteName } = this.props;
        const { formatMessage } = this.props.intl;

        return (
            <div className={cx('inputFocusColor', 'commonListingBg', 'noMarginBottom')}>
                <form onSubmit={handleSubmit(submit)}>
                    <h3 className={bt.listingTitleText}>{formatMessage(messages.addPayout)}</h3>
                    <img src={logourl} />
                    <p className={cx(s.infoBox, bt.spaceTop2, bt.space2)}>
                        <FormattedMessage {...messages.paypalIntro1} /> {siteName}.
                        <FormattedMessage {...messages.paypalIntro2} /> {siteName}, <FormattedMessage {...messages.paypalIntro3} />
                        {' '}<a href={"https://www.paypal.com/"} target="_blank" className={s.stripeLink}><FormattedMessage {...messages.paypalIntro4} /></a>
                    </p>
                    <Field name="payEmail" component={this.renderField} label={formatMessage(messages.paypalEmail)} />
                    <Field name="currency" label={formatMessage(messages.paypalCurrency)} component={this.renderFormControlSelect} className={cx(bt.commonControlSelect, 'formSelectAR')} >
                        <option value="">{formatMessage(messages.chooseCurrency)}</option>
                        {
                            availableCurrencies.map((currency, key) => {
                                if (currency.isEnable === true) {
                                    return <option key={key} value={currency.symbol}>{currency.symbol}</option>
                                }
                            })
                        }
                    </Field>
                    <div className={bt.textAlignRight}>
                        <Button className={cx(bt.btnLarge, bt.btnPrimaryBorder, s.btnRight, s.backBtn, 'spaceRight2AR')} onClick={previousPage}>
                            <FormattedMessage {...messages.back} />
                        </Button>
                        <Button
                            className={cx(s.button, bt.btnPrimary, bt.btnLarge)}
                            type="submit"
                            disabled={pristine || submitting}
                        ><FormattedMessage {...messages.finish} /></Button>
                    </div>
                </form >
            </div >
        );
    }
}

Paypal = reduxForm({
    form: 'PayoutForm', // a unique name for this form
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(Paypal);

const mapState = (state) => ({
    siteName: state.siteSettings.data.siteName,
    availableCurrencies: state.currency.availableCurrencies,
    base: state.currency.base,
});

const mapDispatch = {};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(Paypal)));