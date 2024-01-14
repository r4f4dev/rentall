import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

// Redux form
import { Field, reduxForm, formValueSelector } from 'redux-form';

// React redux
import { connect } from 'react-redux';

// Style
import {
  Button,
  Row,
  FormGroup,
  Col,
  FormControl,
} from 'react-bootstrap';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './SiteConfigForm.css';
import bt from '../../../components/commonStyle.css';

import submit from './submit';
import validate from './validate';

import messages from '../../../locale/messages';

class SiteConfigForm extends Component {

  static propTypes = {
    initialValues: PropTypes.object,
    title: PropTypes.string.isRequired,
  };

  renderFormControl = ({ input, label, type, meta: { touched, error }, className, maxlength }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space3}>
        <label className={s.labelTextNew} >{label}</label>
        <FormControl {...input} type={type} className={bt.commonControlInput} maxlength={maxlength} placeholder={label} />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    );
  }

  renderFormControlSelect = ({ input, label, meta: { touched, error }, children, className }) => {
    return (
      <FormGroup className={bt.space3}>
        <label className={s.labelTextNew}>{label}</label>
        <FormControl componentClass="select" {...input} className={className} >
          {children}
        </FormControl>
      </FormGroup>
    )
  }

  render() {
    const { error, handleSubmit, submitting } = this.props;
    const { formatMessage } = this.props.intl;
    return (
      <div className={cx(s.pagecontentWrapper, 'pagecontentAR')}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1 className={s.headerTitle}><FormattedMessage {...messages.manageSiteConfig} /></h1>
            <form onSubmit={handleSubmit(submit)}>
              {error && <strong>{error}</strong>}
              <div className={s.girdOne}>
                <Field name="pushNotificationKey" type="text" component={this.renderFormControl} label={formatMessage(messages.pushNotificationKey)} />
                <Field name="deepLinkBundleId" type="text" component={this.renderFormControl} label={formatMessage(messages.deepLinkBundleId)} />
                <Field name="stripePublishableKey" type="text" component={this.renderFormControl} label={formatMessage(messages.stripePublishableKey)} />
                <Field name="maxUploadSize" type="text" component={this.renderFormControl} label={formatMessage(messages.maxUploadLabel)} />
              </div>

              <div className={s.girdTwo}>
                <Field name="smtpHost" type="text" component={this.renderFormControl} label={formatMessage(messages.smtpHost)} />
                <Field name="smtpPort" type="text" component={this.renderFormControl} label={formatMessage(messages.smtpPort)} />
                <Field name="smptEmail" type="text" component={this.renderFormControl} label={formatMessage(messages.smptEmail)} />
                <Field name="smtpSender" type="text" component={this.renderFormControl} label={formatMessage(messages.smtpSender)} />
                <Field name="smtpSenderEmail" type="text" component={this.renderFormControl} label={formatMessage(messages.smtpSenderEmail)} />
                <Field name="smtpPassWord" type="text" component={this.renderFormControl} label={formatMessage(messages.smtpPassWord)} />
                <Field name="twillioAccountSid" type="text" component={this.renderFormControl} label={formatMessage(messages.twillioAccountSid)} />
                <Field name="twillioAuthToken" type="text" component={this.renderFormControl} label={formatMessage(messages.twillioAuthToken)} />
                <Field name="twillioPhone" type="text" component={this.renderFormControl} label={formatMessage(messages.twillioPhone)} />
                <Field name="paypalEmail" type="text" component={this.renderFormControl} label={formatMessage(messages.paypalEmailLabel)} />
                <Field name="paypalClientId" type="text" component={this.renderFormControl} label={formatMessage(messages.paypalClientId)} />
                <Field name="paypalSecret" type="text" component={this.renderFormControl} label={formatMessage(messages.paypalSecret)} />
                <Field name="paypalHost" type="text" component={this.renderFormControl} label={formatMessage(messages.paypalHost)} />
                <Field
                  name="paypalHostMode"
                  type="text"
                  className={cx(bt.commonControlSelect, 'commonAdminSelect')}
                  component={this.renderFormControlSelect}
                  label={formatMessage(messages.paypalHostMode)}
                >
                  <option value={'live'}>{formatMessage(messages.liveMode)}</option>
                  <option value={'sandbox'}>{formatMessage(messages.sandboxMode)}</option>
                </Field>
              </div>
              <div xs={12} sm={12} md={12} lg={12} className={cx(bt.textAlignRight, 'textAlignLeftRtl')}>
                <Button className={cx(bt.btnPrimary, bt.btnLarge)} type="submit" disabled={submitting} >
                  <FormattedMessage {...messages.save} />
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }

}


SiteConfigForm = reduxForm({
  form: 'SiteConfigForm', // a unique name for this form
  validate
})(SiteConfigForm);

const selector = formValueSelector('SiteConfigForm');

const mapState = (state) => ({
  homePageType: selector(state, 'homePageType'),
  appAvailableStatus: selector(state, 'appAvailableStatus')
});

const mapDispatch = {};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(SiteConfigForm)));