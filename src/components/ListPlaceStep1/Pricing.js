// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux Form
import { Field, reduxForm } from 'redux-form';

// Redux
import { connect } from 'react-redux';

// Translation
import { injectIntl, FormattedMessage } from 'react-intl';

// Locale
import messages from '../../locale/messages';


// Helpers
import validateStep3 from './validateStep3';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import {
  Grid,
  Button,
  Row,
  FormGroup,
  Col,
  ControlLabel,
  FormControl
} from 'react-bootstrap';
import s from './ListPlaceStep1.css';
import bt from '../../components/commonStyle.css';

// Component
import updateStep3 from './updateStep3';
import FooterButton from './FooterButton';
import SidePanel from './SidePanel';

//Image
import toolTipIcon from '../../../public/SiteIcons/listCommonToolTip.svg';

class Pricing extends Component {

  static propTypes = {
    previousPage: PropTypes.any,
    nextPage: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }

  UNSAFE_componentWillMount() {
    const { valid, listingFields } = this.props;

    if (valid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { valid, listingFields } = nextProps;

    if (valid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  renderFormControl = ({ input, label, type, meta: { touched, error }, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <FormControl
          {...input}
          placeholder={label}
          type={type}
          className={className}
          maxLength={12}
        />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </div>
    )
  }

  renderFormControlSelect = ({ input, label, meta: { touched, error }, children, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <FormControl componentClass="select" {...input} className={className} >
          {children}
        </FormControl>
      </div>
    )
  }

  render() {
    const { handleSubmit, nextPage, previousPage, formPage, step } = this.props;
    const { isDisabled } = this.state;
    const { formatMessage } = this.props.intl;
    const { availableCurrencies } = this.props;
    return (
      <div className={s.grid}>
        <SidePanel
          title={formatMessage(messages.stepThreeCommonHeading)}
          landingContent={formatMessage(messages.tabPricing)}
        />
        <form onSubmit={handleSubmit}>
          <div className={s.landingMainContent}>
            <FormGroup className={s.formGroup}>
              <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
                <FormattedMessage {...messages.currency} />
              </ControlLabel>

              <Field name="currency" component={this.renderFormControlSelect} className={cx(s.formControlSelect, s.jumboSelect, s.listCommonJumboSelect, 'listCommonJumboSelectRTL')} >
                {
                  availableCurrencies.map((currency, key) => {
                    if (currency.isEnable === true) {
                      return <option key={key} value={currency.symbol}>{currency.symbol}</option>
                    }
                  })
                }
              </Field>
            </FormGroup>
            <FormGroup className={cx(s.formGroup, s.space4, s.spaceTop4)}>
              <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
                <FormattedMessage {...messages.basePrice} />
              </ControlLabel>
              <Field
                name="basePrice"
                type="text"
                component={this.renderFormControl}
                label={formatMessage(messages.basePriceLabel)}
                className={cx(s.formControlInput, s.jumboSelect, s.listCommonJumboSelect, 'listCommonJumboSelectRTL')}
              />
            </FormGroup>
            <div className={s.tipCommonCss}>
              <img src={toolTipIcon} />
              <span className={cx(s.commonTipCsss, 'textWhite')}><FormattedMessage {...messages.basePriceTip} /></span>
            </div>
            <FormGroup className={cx(s.formGroup, s.space4)}>
              <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
                <FormattedMessage {...messages.cleaningPrice} />
              </ControlLabel>
              <Field
                name="cleaningPrice"
                type="text"
                component={this.renderFormControl}
                label={formatMessage(messages.cleaningPrice)}
                className={cx(s.formControlInput, s.jumboSelect, s.listCommonJumboSelect, 'listCommonJumboSelectRTL')}
              />
            </FormGroup>
          </div>
          <FooterButton
            nextPage={nextPage}
            previousPage={previousPage}
            nextPagePath={"discount"}
            previousPagePath={"advance-notice"}
            formPage={formPage}
            step={step}
            isDisabled={isDisabled}
          />
        </form>
      </div>
    );
  }
}

Pricing = reduxForm({
  form: 'ListPlaceStep3', // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: validateStep3,
  onSubmit: updateStep3
  // onSubmit: updateStep4

})(Pricing);

const mapState = (state) => ({
  listingFields: state.listingFields.data,
  availableCurrencies: state.currency.availableCurrencies,
  base: state.currency.base,
  mapUpdateLoading: state.location.mapUpdateLoading
});

const mapDispatch = {};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(Pricing)));