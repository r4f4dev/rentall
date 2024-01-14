import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Redux form
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage, injectIntl } from 'react-intl';

import submit from './submit';
import validate from './validate';

// Locale
import messages from '../../locale/messages';

// Style
import {
  Button,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ChangePasswordForm.css';
import bt from '../../components/commonStyle.css';

//Images
import ShowPassword from '../../../public/SiteIcons/pswVisible.svg';
import HidePassword from '../../../public/SiteIcons/pwdHidden.svg';

class ChangePasswordForm extends React.Component {

  static propTypes = {
    formatMessage: PropTypes.any,
    initialValues: PropTypes.shape({
      registeredType: PropTypes.string.isRequired,
    }).isRequired
  };

  static defaultProps = {
    initialValues: {
      registeredType: 'email'
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      showPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(fieldName) {
    this.setState({ showPassword: fieldName === this.state.showPassword ? "" : fieldName });
  }

  renderFormControl = ({ input, label, type, meta: { touched, error }, className, showPassword }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={cx(bt.space4, bt.pwdSection)}>
        <label className={cx(bt.commonLabelText, 'textWhite')}>{label}</label>
        <FormControl {...input} type={showPassword === input.name ? input : type} className={cx(bt.commonControlInput)} />
        {type == 'password' && <span className={cx(bt.pwdImage, 'svgImg', 'pwdImageRTL')} onClick={() => this.handleChange(input.name)}>
          {showPassword === input.name ? <img src={ShowPassword} /> : <img src={HidePassword} />}
        </span>}
        {touched && error && <span className={bt.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    );
  }

  render() {
    const { error, handleSubmit, submitting, dispatch, initialValues, valid } = this.props;
    const { formatMessage } = this.props.intl;
    let isDisabled = true;
    if (valid) {
      isDisabled = false;
    }

    return (
      <div className={cx('inputFocusColor', 'commonListingBg', 'noMarginBottom')}>
        <h1 className={bt.listingTitleText}>{formatMessage(messages.changePassword)}</h1>
        <form onSubmit={handleSubmit(submit)}>
          {error && <strong>{error}</strong>}
          {
            initialValues && initialValues.registeredType === 'email' && <Field
              name="oldPassword"
              type="password"
              component={this.renderFormControl}
              label={formatMessage(messages.oldPassword)}
              className={cx(s.formControlInput, bt.commonControlInput)}
              showPassword={this.state.showPassword}
            />
          }
          <Field name="newPassword" type="password" component={this.renderFormControl} label={formatMessage(messages.newPassword)} className={cx(s.formControlInput, bt.commonControlInput)} showPassword={this.state.showPassword} />
          <Field name="confirmPassword" type="password" component={this.renderFormControl} label={formatMessage(messages.confirmPassword)} className={cx(s.formControlInput, bt.commonControlInput)} showPassword={this.state.showPassword} />
          <div className={bt.textAlignRight}>
            <Button className={cx(bt.btnPrimary, bt.btnBig)} type="submit" disabled={isDisabled}>
              <FormattedMessage {...messages.updatePassword} />
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

ChangePasswordForm = reduxForm({
  form: 'ChangePasswordForm', // a unique name for this form
  validate
})(ChangePasswordForm);

export default injectIntl(withStyles(s, bt)(ChangePasswordForm));