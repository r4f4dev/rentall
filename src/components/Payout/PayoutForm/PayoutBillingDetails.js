import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

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

// Component
import CountryList from '../../CountryList';

// Helpers
import validate from './validate';

// Locale
import messages from '../../../locale/messages';

class PayoutBillingDetails extends Component {
  static propTypes = {
    handleSubmit: PropTypes.any.isRequired,
    formatMessage: PropTypes.any,
  };

  renderField = ({ input, label, type, meta: { touched, error, dirty } }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space3}>
        <label className={cx(bt.commonLabelText, 'textWhite', 'responsiveTextAlignRtl')}>{label}</label>
        <FormControl {...input} componentClass="input" className={cx(bt.commonControlInput, s.formControlInput)} />
        {touched && error && <span className={bt.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    );
  }

  renderCountryList = ({ input, label, meta: { touched, error }, children, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space3}>
        <label className={cx(bt.commonLabelText, 'textWhite', 'responsiveTextAlignRtl')}><FormattedMessage {...messages.country} /></label>
        <CountryList input={input} className={cx(className, s.selectFormControl, bt.commonControlSelect, 'selectFormControlRTL')} isEmptyFirst />
        {touched && error && <span className={bt.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    const { formatMessage } = this.props.intl;

    return (
      <div className={cx('inputFocusColor', 'commonListingBg', 'noMarginBottom')}>
        <form onSubmit={handleSubmit}>
          <h3 className={s.titleText}>{formatMessage(messages.addPayout)}</h3>
          <Field name="country" component={this.renderCountryList} className={cx(s.formControlSelect, bt.commonControlSelect)} />
          <Field name="address1" component={this.renderField} label={formatMessage(messages.address1)} />
          <Field name="address2" component={this.renderField} label={formatMessage(messages.address2)} />
          <div className={s.displayGrid}>
            <Field name="city" component={this.renderField} label={formatMessage(messages.city)}  className={s.childOne} />
            <Field name="state" component={this.renderField} label={formatMessage(messages.state)} className={s.childOne} />
          </div>
          <Field name="zipcode" component={this.renderField} label={formatMessage(messages.zipCode)} />
          <div className={bt.textAlignRight}>
            <Button
              className={cx(bt.btnLarge, bt.btnPrimary)}
              type="submit"
            ><FormattedMessage {...messages.next} />
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

PayoutBillingDetails = reduxForm({
  form: 'PayoutForm', // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(PayoutBillingDetails);

export default injectIntl(withStyles(s, bt)(PayoutBillingDetails));