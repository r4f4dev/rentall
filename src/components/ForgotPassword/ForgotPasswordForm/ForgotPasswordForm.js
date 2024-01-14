// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux form
import { Field, reduxForm } from 'redux-form';

// Translation
import { FormattedMessage, injectIntl } from 'react-intl';

// Internal Helpers
import validate from './validate';
import submit from './submit';

// Locale
import messages from '../../../locale/messages';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './ForgotPasswordForm.css';
import c from '../../../components/LoginModal/LoginModal.css';
import bt from '../../../components/commonStyle.css';
import {
  Button,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
class ForgotPasswordForm extends Component {

  static propTypes = {
    formatMessage: PropTypes.any,
  };

  renderFormControl = ({ input, label, type, meta: { touched, error }, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space3}>
        <FormControl {...input} placeholder={label} type={type} className={className} />
        {touched && error && <span className={bt.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }

  render() {
    const { error, handleSubmit, submitting, dispatch } = this.props;
    const { formatMessage } = this.props.intl;
    const { openLoginModal } = this.props;
    return (
      <form onSubmit={handleSubmit(submit)}>
        {error && <span className={bt.errorMessage}>{formatMessage(error)}</span>}
        <p><FormattedMessage {...messages.forgotPasswordInfo} /></p>
        <Field
          name="email"
          type="text"
          component={this.renderFormControl}
          label={formatMessage(messages.email)}
          className={bt.commonControlInput}
        />
        <Button
          className={cx(bt.btnPrimary, bt.btnBig, bt.space3)}
          type="submit"
          block
          disabled={submitting}
        >
          <FormattedMessage {...messages.sendLink} />
        </Button>
        <div className={bt.textAlignCenter}>
          <a onClick={openLoginModal} className={c.modalCaptionLink}>
            <FormattedMessage {...messages.backToLogin} />
          </a>
        </div>
      </form>
    )
  }

}

ForgotPasswordForm = reduxForm({
  form: 'ForgotPasswordForm', // a unique name for this form
  validate,
  destroyOnUnmount: true
})(ForgotPasswordForm);

export default injectIntl(withStyles(s, bt, c)(ForgotPasswordForm));