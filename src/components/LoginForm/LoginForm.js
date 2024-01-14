// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Translation
import { FormattedMessage, injectIntl } from 'react-intl';
import InputMask from "react-input-mask";
import { toastr } from 'react-redux-toastr';

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

import { openForgotPasswordModal, openSignupModal } from '../../actions/modalActions';

//Images
import ShowPassword from '../../../public/SiteIcons/pswVisible.svg';
import HidePassword from '../../../public/SiteIcons/pwdHidden.svg';

// Process SMS
import { processSms } from '../../core/sms/processSms';

class LoginForm extends Component {

  static propTypes = {
    openForgotPasswordModal: PropTypes.func.isRequired,
    openSignupModal: PropTypes.func.isRequired,
    formatMessage: PropTypes.func,
    siteName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      showPassword: '',
      verificationCodeSent:false,
      phoneNumber: {
        value: '+998',
        mask: '+\\9\\98 99 999-99-99'
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onPhoneNumberInputChange = (event) => {
    var value = event.target.value;
    var newState = {
      mask: '+\\9\\98 99 999-99-99',
      value: value
    };
    if (/^3[47]/.test(value)) {
      newState.mask = '+\\9\\98 99 999-99-99';
    }
    this.setState({phoneNumber: newState});
  }

  sendVerificationCode = async (event)=>{ 
    let unmaskedPhoneNumber = this.state.phoneNumber.value.replace(/[+ -]/g, '');

    if(/^998[0-9]{9}/.test(unmaskedPhoneNumber)){
      try {
        const { status, errorMessage } = await processSms("verification", "998", unmaskedPhoneNumber.replace('+998', ""), unmaskedPhoneNumber.replace('+998', ""), unmaskedPhoneNumber)
  
        if (errorMessage) {
          
          toastr.error("Error!", errorMessage ? errorMessage : 'Sorry, something went wrong. Please try again');
          return {
              status: '400',
              errorMessage
          }
      }
  
      this.setState({verificationCodeSent: true});
  
      } catch (error) {
        console.log('error', error)
        this.setState({verificationCodeSent: false});
      }
    } else{
      toastr.error('Введите корректный номер телефона');
    }
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
    const { openForgotPasswordModal, openSignupModal } = this.props;

    return (
      <form onSubmit={handleSubmit((values,dispatch)=>submit(values,dispatch, this.state.phoneNumber))}>
        {error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
        <h4 className={s.titleText}>{formatMessage(messages.dashBoardHeader)} {siteName}</h4>
        {/* <FormGroup className={bt.space3}>
          <Field
            name="email"
            type="text"
            component={this.renderFormControl}
            label={formatMessage(messages.email)}
            className={cx(bt.commonControlInput, s.backgroundOne, 'backgroundOneRTL')}
          />
        </FormGroup> */}
        <div class="form-group"> 
          <label className={cx(s.labelText, 'textWhite')}>
          <FormattedMessage {...messages.phoneNumber} />
          </label>
          <div>  
            <InputMask name='phone' {...this.state.phoneNumber} onChange={this.onPhoneNumberInputChange} alwaysShowMask="true"  className={cx(bt.commonControlInput, s.backgroundOne, 'backgroundOneRTL', 'w-100')} />
          </div>
        </div>
        {/* <FormGroup className={cx(bt.space3, bt.pwdSection)}>
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
        </FormGroup> */}
        {this.state.verificationCodeSent==false && (
            <Button className={cx(bt.btnPrimary, bt.btnBig, bt.space4)} block type="" disabled={submitting} onClick={this.sendVerificationCode}>
            {formatMessage(messages.login)}
            </Button>
        )}
       

       {this.state.verificationCodeSent==true && (
        <>
         <FormGroup className={cx(bt.space3, bt.pwdSection)}>
         <Field
           name="verificationCode"
           type="text"
           component={this.renderFormControl}
           label={formatMessage(messages.verificationCodeLabel)}
           className={cx(bt.commonControlInput, s.backgroundTwo, 'backgroundOneRTL')}
         />
         {/* <a onClick={openForgotPasswordModal} className={s.modalCaptionLink}>
           <FormattedMessage {...messages.cantLogin} />
         </a> */}
       </FormGroup>
       <Button className={cx(bt.btnPrimary, bt.btnBig, bt.space4)} block type="submit" disabled={submitting}>
         {formatMessage(messages.login)}
       </Button>
       </>
        )}

        
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
  openSignupModal
};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(LoginForm)));