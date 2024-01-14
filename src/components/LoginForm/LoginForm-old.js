// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Translation
import { FormattedMessage, injectIntl } from 'react-intl';

// Redux form
import { Field, reduxForm } from 'redux-form';

// Internal Helpers
import validate from './validate';
import submit from './submit';

// Locale
import messages from '../../locale/messages';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './Login.css';
import bt from '../../components/commonStyle.css';
import {
  Button,
  FormGroup,
  FormControl
} from 'react-bootstrap';

import { openForgotPasswordModal } from '../../actions/modalActions';

//Images
import ShowPassword from '../../../public/SiteIcons/pswVisible.svg';
import HidePassword from '../../../public/SiteIcons/pwdHidden.svg';

class LoginForm extends Component {

  static propTypes = {
    openForgotPasswordModal: PropTypes.func.isRequired,
    formatMessage: PropTypes.func,
    siteName: PropTypes.string.isRequired,
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
      <>
        <label className={s.loginLabel}>{label}</label>
        <FormControl {...input} placeholder={label} type={showPassword === input.name ? input : type} className={className} />
        {type == 'password' && <span className={cx(bt.pwdImage, bt.loginPwdSection, 'svgImg', 'pwdImageRTL')} onClick={() => this.handleChange(input.name)}>
          {showPassword === input.name ? <img src={ShowPassword} /> : <img src={HidePassword} />}
        </span>}
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </>
    );
  }

  render() {
    const { error, handleSubmit, submitting, dispatch, siteName } = this.props;
    const { formatMessage } = this.props.intl;
    const { openForgotPasswordModal } = this.props;

    return (
      <form onSubmit={handleSubmit(submit)}>
        {error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
        <h4 className={s.titleText}>{formatMessage(messages.dashBoardHeader)} {siteName}</h4>
        <FormGroup className={bt.space3}>
          <Field
            name="email"
            type="text"
            component={this.renderFormControl}
            label={formatMessage(messages.email)}
            className={cx(bt.commonControlInput, s.backgroundOne, 'backgroundOneRTL')}
          />
        </FormGroup>
        <FormGroup className={cx(bt.space3, bt.pwdSection)}>
          <Field
            name="password"
            type="password"
            component={this.renderFormControl}
            label={formatMessage(messages.password)}
            className={cx(bt.commonControlInput, s.backgroundTwo, 'backgroundOneRTL')}
            showPassword={this.state.showPassword}
          />
          <a onClick={openForgotPasswordModal} className={s.modalCaptionLink}>
            <FormattedMessage {...messages.cantLogin} />
          </a>
        </FormGroup>
        <Button className={cx(bt.btnPrimary, bt.btnBig, bt.space4)} block type="submit" disabled={submitting}>
          {formatMessage(messages.login)}
        </Button>
      </form>
    );
  }

}

LoginForm = reduxForm({
  form: 'LoginForm', // a unique name for this form
  validate,
  destroyOnUnmount: false
})(LoginForm);

const mapState = state => ({
  siteName: state.siteSettings.data.siteName
});

const mapDispatch = {
  openForgotPasswordModal,
};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(LoginForm)));