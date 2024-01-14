import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import InputMask from "react-input-mask";
import { toastr } from 'react-redux-toastr';

import { Field, reduxForm } from 'redux-form';
import submit from './submit';
import validate from './validate';
import { injectIntl } from 'react-intl';

// Locale
import messages from '../../locale/messages';
import PopulateData from '../../helpers/populateData';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './RegisterForm.css';
import bt from '../../components/commonStyle.css';
import {
  Button,
  FormGroup,
  FormControl,
  Row,
  Col,
  ControlLabel
} from 'react-bootstrap';

//Images
import ShowPassword from '../../../public/SiteIcons/pswVisible.svg';
import HidePassword from '../../../public/SiteIcons/pwdHidden.svg';

// Process SMS
import { processSms } from '../../core/sms/processSms';

class RegisterForm extends Component {

  static propTypes = {
    formatMessage: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      showPassword: '',
      dateOfBirthData: {},
      phoneNumber: {
        value: '+998',
        mask: '+\\9\\98 99 999-99-99'
      },
      verificationCodeSent:false,
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

  UNSAFE_componentWillMount() {
    let now = new Date();
    let currentYear = now.getFullYear();
    let years = PopulateData.generateData(1920, currentYear, "desc");
    let days = PopulateData.generateData(1, 31);
    let months = PopulateData.generateData(0, 11);
    this.setState({
      dateOfBirthData: {
        years: years,
        months: months,
        days: days
      }
    });
  }

  handleChange(fieldName) {
    this.setState({ showPassword: fieldName === this.state.showPassword ? "" : fieldName });
  }

  renderFormControl = ({ input, label, type, meta: { touched, error }, className, showPassword, placeHolder, max }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={cx(bt.space3, bt.pwdSection)}>
        <label className={s.loginLabel}>{label}</label>
        <FormControl {...input} placeholder={placeHolder ? placeHolder : label} type={showPassword === input.name ? input : type} className={className} max={max} />
        {type == 'password' && <span className={cx(bt.pwdImage, bt.loginPwdSection, 'svgImg', 'pwdImageRTL')} onClick={() => this.handleChange(input.name)}>
          {showPassword === input.name ? <img src={ShowPassword} /> : <img src={HidePassword} />}
        </span>}
        {touched && error && <span className={bt.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }

  renderFormControlSelect = ({ input, label, meta: { touched, error }, children, className }) => {
    return (
      <FormGroup className={cx(bt.space3, bt.pwdSection)}>

        <FormControl componentClass="select" {...input} className={className}>
          {children}
        </FormControl>
      </FormGroup>
    )
  }

  render() {
    const { error, handleSubmit, submitting, dispatch } = this.props;
    const { formatMessage } = this.props.intl;
    const { dateOfBirthData } = this.state;

    return (
      <form onSubmit={handleSubmit((values, dispatch,)=>submit(values, dispatch, this.state.phoneNumber))} className={cx('SelectFocus', 'inputDateHide')}>
        {error && <span className={bt.errorMessage}>{formatMessage(error)}</span>}
        <Field
          name="firstName"
          type="text"
          component={this.renderFormControl}
          label={formatMessage(messages.firstName)}
          className={bt.commonControlInput}
        />
        <Field name="lastName"
          type="text"
          component={this.renderFormControl}
          label={formatMessage(messages.lastName)}
          className={bt.commonControlInput}
        />
        {/* <Field name="email"
          type="text"
          component={this.renderFormControl}
          label={formatMessage(messages.email)}
          className={bt.commonControlInput}
        /> */}
          <div class="form-group"> 
          <label className={cx(s.labelText, 'textWhite')}>
            {formatMessage(messages.phoneNumber)}
          </label>
          <div>  
            <InputMask name='phone' {...this.state.phoneNumber} onChange={this.onPhoneNumberInputChange} alwaysShowMask="true"  className={cx(bt.commonControlInput, s.backgroundOne, 'backgroundOneRTL', 'w-100')} />
          </div>
        </div>
        {/* <Field name="password"
          type="password"
          component={this.renderFormControl}
          label={formatMessage(messages.password)}
          className={bt.commonControlInput}
          showPassword={this.state.showPassword}
        /> */}
        <div className={s.Birthpadding}>
          <label className={s.loginLabel}>{formatMessage(messages.birthDay)}</label>
          <div className={s.birthFlex}>
            <Field
              name="month"
              component={this.renderFormControlSelect}
              className={cx(s.birthForm, 'birthFormRtl', bt.commonControlSelect)}
            >
              <option value="">{formatMessage(messages.month)}</option>
              {
                dateOfBirthData && dateOfBirthData.months && dateOfBirthData.months.length > 0 && dateOfBirthData.months.map((item, key) => {
                  return (
                    <option key={key} value={item}>{item + 1}</option>
                  )
                })
              }
            </Field>

            <Field
              name="day"
              component={this.renderFormControlSelect}
              className={cx(s.birthForm, 'birthFormRtl', bt.commonControlSelect)}
            >
              <option value="">{formatMessage(messages.day)}</option>
              {
                dateOfBirthData && dateOfBirthData.days && dateOfBirthData.days.length > 0 && dateOfBirthData.days.map((item, key) => {
                  return (
                    <option key={key} value={item}>{item}</option>
                  )
                })
              }
            </Field>

            <Field name="year" component={this.renderFormControlSelect} className={cx(s.birthForm, 'birthFormRtl', bt.commonControlSelect)}>
              <option value="">{formatMessage(messages.year)}</option>
              {
                dateOfBirthData && dateOfBirthData.years && dateOfBirthData.years.length > 0 && dateOfBirthData.years.map((item, key) => {
                  return (
                    <option key={key} value={item}>{item}</option>
                  )
                })
              }
            </Field>
          </div>
        </div>

        {this.state.verificationCodeSent==false && (
            <Button className={cx(bt.btnPrimary, bt.btnBig, bt.space4)} block type="" disabled={submitting} onClick={this.sendVerificationCode}>
            {formatMessage(messages.signUp)}
            </Button>
        )}
        {this.state.verificationCodeSent==true && (
          <>
            <FormGroup className={cx(bt.space3, bt.pwdSection)}>
            <Field
              name="verificationCode"
              type="number"
              component={this.renderFormControl}
              label={formatMessage(messages.verificationCodeLabel)}
              className={cx(bt.commonControlInput, s.backgroundTwo, 'backgroundOneRTL')}
            />
          </FormGroup>

          <Button
            className={cx(bt.btnPrimary, bt.btnBig, bt.space4)}
            block type="submit"
            disabled={submitting}
          >
            {formatMessage(messages.signUp)}
          </Button>
          </>
        )}
      </form>
    )
  }
}

RegisterForm = reduxForm({
  form: 'RegisterForm', // a unique name for this form
  validate
})(RegisterForm);

export default injectIntl(withStyles(s, bt)(RegisterForm));