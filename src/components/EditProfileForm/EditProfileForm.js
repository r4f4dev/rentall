// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import moment from 'moment';
// Redux Form
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import { graphql, gql, compose } from 'react-apollo';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'


import submit from './submit';
import validate from './validate';

// Locale
import messages from '../../locale/messages';
import PopulateData from '../../helpers/populateData';

// Redux
import { connect } from 'react-redux';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './EditProfileForm.css';
import bt from '../../components/commonStyle.css';
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  FormGroup,
  Row,
  Col,
  ControlLabel,
} from 'react-bootstrap';

// Internal Components
import PhoneVerificationModal from '../PhoneVerificationModal';
import CountryList from '../CountryList';

//Images
import infoImage from '../../../public/SiteIcons/editInfoTipIcon.svg';

class EditProfileForm extends Component {

  static propTypes = {
    loadAccount: PropTypes.func,
    formatMessage: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      dateOfBirthData: {},
      countryCode: 'US',
      country: '+1'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  componentDidMount() {
    const { change, initialValues } = this.props;
    let loggedinEmail;
    if (initialValues && initialValues.email) {
      loggedinEmail = initialValues.email;
    }
    change('loggedinEmail', loggedinEmail);
    if (initialValues && initialValues.countryCode) {
      this.setState({
        countryCode: initialValues.countryName,
        country: initialValues.countryCode
      });
    }
  }

  UNSAFE_componentWillReceiveProps() {
    const { change, initialValues } = this.props;
    const { country, countryCode } = this.state;
    let loggedinEmail;
    if (initialValues && initialValues.email) {
      loggedinEmail = initialValues.email;
    }

    change('loggedinEmail', loggedinEmail);

    if (countryCode && country) {
      change('countryCode', countryCode);
      change('dialCode', country);
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

  renderFormControlTextArea = ({ input, label, meta: { touched, error }, children, className }) => {
    const { formatMessage } = this.props.intl;

    return (
      <FormGroup className={bt.space5}>
        <label className={cx(bt.commonLabelText, 'textWhite')}>{label}</label>
        <FormControl
          {...input}
          className={className}
          componentClass="textarea" rows={5}
        >
          {children}
        </FormControl>
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }

  renderFormControl = ({ input, label, type, meta: { touched, error }, className, isDisabled, infoText, showToolTip, max }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space5}>
        <label className={cx(bt.commonLabelText, 'textWhite')}>
          {label}
          {showToolTip &&
            <div className={cx(s.specialPriceIcon, 'specialpriceRtl')}>
              <span className={'svgImg'}>
                <img src={infoImage} className={cx(s.faqImage, 'specialpriceRtl')} />
              </span>
              <div className={cx(s.tltip, s.relativeSection, 'tltipDarkMode', 'rtlrelativeSection')}>
                {infoText}
              </div>
            </div>
          }
        </label>
        <FormControl {...input} placeholder={label} type={type} className={className} disabled={isDisabled} max={max} />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }

  renderFormControlEmail = ({ input, label, type, meta: { touched, error }, className, disabled }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space5}>
        <label className={cx(bt.commonLabelText, 'textWhite')}>{label}</label>
        <FormControl {...input} placeholder={label} type={type} className={className} disabled={disabled} />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }

  renderFormControlSelect = ({ input, label, meta: { touched, error }, children, className, infoText, infoIcon, showToolTip }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space5}>
        <label className={cx(bt.commonLabelText, 'textWhite')}>
          {label}
          {showToolTip &&
            <div className={cx(s.specialPriceIcon, 'specialpriceRtl')}>
              <span className={'svgImg'}>
                <img src={infoImage} className={cx(s.faqImage, 'specialpriceRtl')} />
              </span>
              <div className={cx(s.tltip, s.relativeSection, 'tltipDarkMode', 'rtlrelativeSection')}>
                {infoText}
              </div>
            </div>
          }
        </label>
        <FormControl componentClass="select" {...input} className={className} >
          {children}
        </FormControl>
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }

  renderFormControlSelectBirth = ({ input, label, meta: { touched, error }, children, className, infoText, infoIcon, showToolTip }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space5}>
        <FormControl componentClass="select" {...input} className={className} >
          {children}
        </FormControl>
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }

  renderFormControlCurrency = ({ input, label, type, meta: { touched, error }, className, country }) => {
    const { formatMessage } = this.props.intl;
    return (
      <>
        <InputGroup>
          <InputGroup.Addon>
            {country}
          </InputGroup.Addon>
          <FormControl {...input} placeholder={label} type={type} className={className} />
        </InputGroup>
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </>
    )
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCountryChange(e, selectedData) {
    this.setState({
      country: selectedData.dialCode,
      countryCode: selectedData.countryCode
    });
  }

  render() {

    const { error, handleSubmit, submitting, availableCurrencies, phoneNumber, countryName } = this.props;
    const { formatMessage } = this.props.intl;
    const { siteSettingStatus } = this.props;
    const { country, countryCode, dateOfBirthData } = this.state;


    let isPhoneStatus = siteSettingStatus && siteSettingStatus.phoneNumberStatus == 1 ? true : false;
    const title = <span>{formatMessage(messages.editProfileInfo)}</span>;
    let now = moment().format("YYYY-MM-DD");

    return (
      <div className={cx('inputFocusColor', 'commonListingBg', 'inputDateHide', 'noMarginBottom')}>
        {error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
        <h3 className={cx(bt.listingTitleText, bt.space5)}>{title}</h3>
        <Form onSubmit={handleSubmit(submit)}>
          <div className={s.displayGrid}>
            <Field name="firstName"
              type="text"
              component={this.renderFormControl}
              label={formatMessage(messages.firstName)}
              className={cx(bt.commonControlInput, 'commonControlSelectRTL')}
              infoText={formatMessage(messages.lastNameInfo)}
              showToolTip
            />
            <Field name="lastName"
              type="text"
              component={this.renderFormControl}
              label={formatMessage(messages.lastName)}
              className={cx(bt.commonControlInput, 'commonControlSelectRTL')}
            />
            <Field name="gender"
              label={formatMessage(messages.gender)}
              className={cx(bt.commonControlSelect, 'commonControlSelectRTL')}
              component={this.renderFormControlSelect}
            >
              <option value="">{formatMessage(messages.gender)}</option>
              <option value="Male">{formatMessage(messages.genderMale)}</option>
              <option value="Female">{formatMessage(messages.genderFemale)}</option>
              <option value="Other">{formatMessage(messages.genderOther)}</option>
            </Field>

            <div className={cx(s.formGroup)} >
              <label className={cx(bt.commonLabelText, 'textWhite')} >{formatMessage(messages.dateOfBirth)}</label>
              <div className={s.birthDayFlex}>
                <Field name="month" className={cx(bt.commonControlSelect, 'commonControlSelectRTL')} component={this.renderFormControlSelectBirth} >
                  <option value="">{formatMessage(messages.month)}</option>
                  {
                    dateOfBirthData && dateOfBirthData.months && dateOfBirthData.months.length > 0 && dateOfBirthData.months.map((item, key) => {
                      return (
                        <option key={key} value={item}>{item + 1}</option>
                      )
                    })
                  }
                </Field>
                <Field name="day" className={cx(bt.commonControlSelect, 'commonControlSelectRTL')} component={this.renderFormControlSelectBirth} >
                  <option value="">{formatMessage(messages.day)}</option>
                  {
                    dateOfBirthData && dateOfBirthData.days && dateOfBirthData.days.length > 0 && dateOfBirthData.days.map((item, key) => {
                      return (
                        <option key={key} value={item}>{item}</option>
                      )
                    })
                  }
                </Field>
                <Field name="year" className={cx(bt.commonControlSelect, 'commonControlSelectRTL')} component={this.renderFormControlSelectBirth} >
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
            <Field name="email"
              type="text"
              component={this.renderFormControlEmail}
              label={formatMessage(messages.email)}
              className={cx(bt.commonControlInput, 'commonControlSelectRTL')}
              disabled={true}
            />
            <Field name="location"
              type="text"
              component={this.renderFormControl}
              label={formatMessage(messages.liveLocation)}
              className={cx(bt.commonControlInput, 'commonControlSelectRTL')}
              placeholder="e.g. Paris, France /Brooklyn, NY, IL"
            />
            {/* <Field name="preferredLanguage"
              label={formatMessage(messages.preferredLanguage)}
              className={cx(bt.commonControlSelect, 'commonControlSelectRTL')} component={this.renderFormControlSelect}
              infoText={formatMessage(messages.preferredLanguageInfo)}
              showToolTip
            >
              <option value="">{formatMessage(messages.chooseLanguage)}</option>
              <option value="id">Bahasa Indonesia</option>
              <option value="ms">Bahasa Melayu</option>
              <option value="ca">Català</option>
              <option value="da">Dansk</option>
              <option value="de">Deutsch</option>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="el">Eλληνικά</option>
              <option value="fr">Français</option>
              <option value="it">Italiano</option>
              <option value="hu">Magyar</option>
              <option value="nl">Nederlands</option>
              <option value="no">Norsk</option>
              <option value="pl">Polski</option>
              <option value="pt">Português</option>
              <option value="fi">Suomi</option>
              <option value="sv">Svenska</option>
              <option value="tr">Türkçe</option>
              <option value="is">Íslenska</option>
              <option value="cs">Čeština</option>
              <option value="ru">Русский</option>
              <option value="th">ภาษาไทย</option>
              <option value="zh">中文 (简体)</option>
              <option value="zh-TW">中文 (繁體)</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
            </Field>
            <Field name="preferredCurrency"
              label={formatMessage(messages.preferredCurrency)}
              className={cx(bt.commonControlSelect, 'commonControlSelectRTL')} component={this.renderFormControlSelect}
              infoText={formatMessage(messages.preferredCurrencyInfo)}
              showToolTip
            >
              <option value="">{formatMessage(messages.chooseCurrency)}</option>
              {
                availableCurrencies.map((currency, key) => {
                  if (currency.isEnable === true) {
                    return <option key={key} value={currency.symbol}>{currency.symbol}</option>
                  }
                })
              }
            </Field> */}
          </div>

          <div className={bt.space5}>
            <label className={cx(bt.commonLabelText, 'textWhite')}>{formatMessage(messages.phoneNumber)}</label>
            <div>
              {/* {
                  !isPhoneStatus && <Field 
                    name="phoneNumber"
                    type="text"
                    component={this.renderFormControl}
                    label={formatMessage(messages.phoneNumber)}
                    className={cx(s.formControlInput, s.commonBorder)}
                  />
                } */}
              {!isPhoneStatus && <div className={s.widthredcd}>
                <CountryList
                  input={
                    {
                      name: 'countryCode',
                      onChange: this.handleChange,
                      value: countryCode,
                    }
                  }
                  className={cx(bt.commonControlSelect, bt.space3)}
                  dialCode={false}
                  getSelected={this.handleCountryChange}
                  formName={'EditProfileForm'}

                />
                <Field
                  name="phoneNumber"
                  type="text"
                  component={this.renderFormControlCurrency}
                  label={formatMessage(messages.phoneNumber)}
                  className={bt.commonControlInput}
                  onChange={this.handleChange}
                  country={country}
                />
              </div>}
              {
                isPhoneStatus && <PhoneVerificationModal />
              }
              <p className={cx(s.noMarginBottom, bt.spaceTop1)}>{formatMessage(messages.phoneNumberInfo)}</p>
            </div>
          </div>
          <Field name="info"
            component={this.renderFormControlTextArea}
            className={cx(bt.commonControlInput, 'commonControlSelectRTL')}
            label={formatMessage(messages.info)}
          />
          <div className={bt.textAlignRight}>
            <Button bsSize="small" className={cx(bt.btnPrimary, bt.btnLarge, s.spaceTop3)} type="submit" disabled={submitting}>
              {formatMessage(messages.save)}
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

EditProfileForm = reduxForm({
  form: 'EditProfileForm', // a unique name for this form
  validate,
})(EditProfileForm);
const selector = formValueSelector('EditProfileForm');

const mapState = (state) => ({
  initialValues: state.account.data,
  availableCurrencies: state.currency.availableCurrencies,
  base: state.currency.base,
  siteSettingStatus: state.siteSettings.data,
  phoneNumber: selector(state, 'phoneNumber'),
  countryName: selector(state, 'countryName'),
  countryCode: selector(state, 'countryCode'),
});
const mapDispatch = {
  change
};

export default compose(
  injectIntl,
  withStyles(s, bt),
  connect(mapState, mapDispatch),
  graphql(gql`
      query getCountries {
          getCountries{
              id
              countryCode
              countryName
              isEnable
              dialCode
          }
      }
  `, {
    options: {
      ssr: false,
      fetchPolicy: 'network-only'
    }
  })
)(EditProfileForm);