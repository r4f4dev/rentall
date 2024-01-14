import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import moment from 'moment'
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector, reset, change } from 'redux-form';
import {
  Row,
  Col,
  FormControl
} from 'react-bootstrap';
import {
  injectStripe,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from 'react-stripe-elements';
import { toastr } from 'react-redux-toastr';
import InputMask from "react-input-mask";

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Payment.css';
import bt from '../../../components/commonStyle.css';

// Component
import HouseRules from './HouseRules';
import Loader from '../../Loader';
import Link from '../../Link';
import ModalForm from './ModalForm/ModalForm';

// Locale
import { makePayment } from '../../../actions/booking/makePayment';
import { processCardAction } from '../../../actions/PaymentIntent/processCardAction';
import { openPaymentModal } from '../../../actions/modalActions';

// Helpers
import validate from './validate';
import fetch from '../../../core/fetch';
import { isRTL } from '../../../helpers/formatLocale'
import messages from '../../../locale/messages';

//Images 
import imageOne from '../../../../public/SiteIcons/payment-icons.png';
import imageTwo from '../../../../public/SiteIcons/stripe-connect.png';
import arrow from '../../../../public/SiteIcons/chevron-right.svg';
import defaultPic from '../../../../public/SiteImages/defaultPic.png';

import * as FontAwesome from 'react-icons/lib/fa'
import { processUzcardPayment } from '../../../core/payment/uzcard/processUzcardPayment';

const createOptions = (theme) => {
  return {
    style: {
      base: {
        color: theme == 'dark' ? '#fff' :'#484848',
        fontWeight: 400,
        fontFamily: 'inherit',
        fontSize: '14px',
        fontSmoothing: 'antialiased',
        ':focus': {
          color: theme == 'dark' ? '#fff' :'#484848',
        },

        '::placeholder': {
          color: '#aaa',
        },

        ':focus::placeholder': {
          color: '#aaa',
        },
      },
      invalid: {
        color: theme == 'dark' ? '#fff' :'#484848',
        ':focus': {
          color: theme == 'dark' ? '#fff' :'#484848',
        },
        '::placeholder': {
          color: '#aaa',
        },
      },
    }
  }
};
class PaymentForm extends Component {
  static propTypes = {
    houseRules: PropTypes.arrayOf(PropTypes.shape({
      listsettings: PropTypes.shape({
        itemName: PropTypes.string.isRequired
      })
    })),
    hostDisplayName: PropTypes.string.isRequired,
    allowedPersonCapacity: PropTypes.number.isRequired,
    initialValues: PropTypes.shape({
      listId: PropTypes.number.isRequired,
      listTitle: PropTypes.string.isRequired,
      hostId: PropTypes.string.isRequired,
      guestId: PropTypes.string.isRequired,
      checkIn: PropTypes.object.isRequired,
      checkOut: PropTypes.object.isRequired,
      guests: PropTypes.number.isRequired,
      basePrice: PropTypes.number.isRequired,
      cleaningPrice: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      weeklyDiscount: PropTypes.number,
      monthlyDiscount: PropTypes.number,
      paymentType: PropTypes.number
    }).isRequired,
    paymentCurrencyList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      symbol: PropTypes.string.isRequired,
      isEnable: PropTypes.bool.isRequired,
      isPayment: PropTypes.bool.isRequired
    })),
    paymentLoading: PropTypes.bool,
    formatMessage: PropTypes.any,
  };

  static defaultProps = {
    paymentCurrencyList: [],
    paymentLoading: false
  };

  constructor(props) {
    super(props);
    this.state = {
      paymentStatus: 3,
      load: true,
      personCapacityData: [],
      paymentProcessState: 0, 
      cardNumber: {
        value: '',
        mask: '9999-9999-9999-9999'
      },
      cardExpire: {
        value: '',
        mask: '99 / 99'
      },
      paymentConfirmCode: {
        value: '',
        mask: '999999'
      },
      uzcardResultData: {}
    }
    this.renderpaymentCurrencies = this.renderpaymentCurrencies.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { listingFields, stripePayment, uzcardPayment } = this.props;
    if (listingFields != undefined) {
      this.setState({
        personCapacityData: listingFields.personCapacity
      });
    }
    this.setState({
      paymentStatus: !!uzcardPayment ? 3 :!stripePayment ? 1 : 2
    });
  }


  UNSAFE_componentWillReceiveProps(nextProps) {
    const { listingFields } = nextProps;
    if (listingFields != undefined) {
      this.setState({
        personCapacityData: listingFields.personCapacity
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { locale } = this.props.intl;
    const { locale: prevLocale } = prevProps.intl;

    if (locale !== prevLocale) {
      this.setState({ load: false });
      clearTimeout(this.loadSync);
      this.loadSync = null;
      this.loadSync = setTimeout(() => this.setState({ load: true }), 1);
    }
  }

  renderFormControlSelect = ({ input, label, meta: { touched, error }, children, className, disabled }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <FormControl disabled={disabled} componentClass="select" {...input} className={className} >
          {children}
        </FormControl>
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </div>
    )
  }

  renderFormControlTextArea = ({ input, label, meta: { touched, error }, children, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <FormControl
          {...input}
          className={className}
          componentClass="textarea"
          placeholder={label}
        >
          {children}
        </FormControl>
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </div>
    );
  }

  renderGuests(personCapacity) {
    const { formatMessage } = this.props.intl;
    const { personCapacityData } = this.state;

    let rows = [];
    for (let i = 1; i <= personCapacity; i++) {
      rows.push(<option key={i} value={i}>{i} {i > 1 ? personCapacityData[0].otherItemName : personCapacityData[0].itemName}</option>);
    }
    return rows;
  }

  renderpaymentCurrencies() {
    const { paymentCurrencyList } = this.props;
    let rows = [];

    if (paymentCurrencyList != null && paymentCurrencyList.length > 0) {
      paymentCurrencyList.map((item, index) => {
        if (item.isEnable && item.isPayment) {
          rows.push(<option key={index} value={item.symbol}>{item.symbol}</option>);
        }
      })
    }
    return rows;
  }

  renderFormControl = ({ input, label, type, placeholder, meta: { touched, error }, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <FormControl {...input} placeholder={placeholder} type={type} className={className} maxLength={11} />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </div>
    )
  }

  handleClick() {
    const { dispatch } = this.props;
    dispatch(reset('BookingForm'));
  }

  async handleSubmit(values, dispatch) {
    const { stripe, processCardAction } = this.props;
    
    let paymentType = values.paymentType;
    let paymentCurrency = values.paymentType == 1 ? values.paymentCurrency : null;

    let query = `query checkReservation ($checkIn: String,$checkOut: String,$listId: Int ){
      checkReservation(checkIn: $checkIn, checkOut:$checkOut, listId:$listId ){
        id
        listId
        hostId
        guestId
        checkIn
        checkOut
        status
      }
    }`;

    values.checkIn = moment(values.checkIn).format('YYYY-MM-DD');
    values.checkOut = moment(values.checkOut).format('YYYY-MM-DD');

    const params = {
      listId: values.listId,
      checkIn: values.checkIn,
      checkOut: values.checkOut,
    };

    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: params,
      }),
      credentials: 'include',
    });

    const { data } = await resp.json();

    if (data && data.checkReservation && data.checkReservation.status == "200") {
      let msg = '', paymentMethodId, createPaymentMethod;

        if(paymentType == 3 && this.state.paymentProcessState == 0) {
          let unmaskedCardNumber = this.state.cardNumber.value.replace(/-/g, '');
          let unmaskedCardExpire = this.state.cardExpire.value.replace(/[\/ ]/g, '');
          unmaskedCardExpire = unmaskedCardExpire.slice(2,4) + unmaskedCardExpire.slice(0,2)
    
          try {
           let prePaymentResult = await processUzcardPayment('paymentWithoutRegistration', {
              amount: values.totalValue,
              cardNumber: unmaskedCardNumber,
              expireDate: unmaskedCardExpire
            })

          //   this.setState({uzcardResultData: {
          //     "transactionId": 6933020,
          //     "session": 17891398,
          //     "otpSentPhone": "99893*****54"
          // }});

            if(prePaymentResult.status == 400){
              return toastr.error("Oops!", prePaymentResult.errorMessage);
            }

            this.setState({uzcardResultData: prePaymentResult.resultData});
            this.setState({paymentProcessState: 1});
          } catch (error) {
            console.log('error on payment myuzcard', error)
            toastr.error("Oops!", "Что-то пошло не так");
          }
    
          return
        }
        if(paymentType == 3 && this.state.paymentProcessState == 1 && !!(this.state.uzcardResultData||{}).session && !!this.state.paymentConfirmCode.value){
          // try {
          //   let paymentResult = await processUzcardPayment('confirmPayment', {
          //       session: this.state.uzcardResultData.session,
          //       otp: this.state.paymentConfirmCode.value,
          //    })
 
          // //    this.setState({uzcardResultData: {
          // //      "transactionId": 6933020,
          // //      "session": 17891398,
          // //      "otpSentPhone": "99893*****54"
          // //  }});
 
          //    if(paymentResult.status == 400){
          //      return toastr.error("Oops!", paymentResult.errorMessage);
          //    }

          //    console.log('paymentResult', paymentResult)
 
          //    this.setState({uzcardResultData: paymentResult});
          //  } catch (error) {
          //    console.log('error on payment myuzcard', error)
          //    toastr.error("Oops!", "Что-то пошло не так");
          //  }
        } else if (paymentType == 3 && this.state.paymentProcessState == 1) {
          return 
        }

      if (paymentType == 2) {
        createPaymentMethod = await stripe.createPaymentMethod('card', {
          card: <CardElement />,
          billing_details: {
            address: {
              postal_code: values.zipcode
            }
          }
        })

        if (createPaymentMethod && createPaymentMethod.paymentMethod) {
          paymentMethodId = createPaymentMethod.paymentMethod.id
        }
      }

      if (createPaymentMethod && createPaymentMethod.error && createPaymentMethod.error.message && paymentType == 2) {
        msg = createPaymentMethod.error.message
        toastr.error("Oops!", msg);
      } else {

        if (Number(values.paymentType) == 2 && !values.zipcode) {
          toastr.error("Oops!", 'Your Zip code is incomplete.');
          return;
        }

        const { status, paymentIntentSecret, reservationId } = await dispatch(makePayment(
          values.listId,
          values.listTitle,
          values.hostId,
          values.guestId,
          values.checkIn,
          values.checkOut,
          values.guests,
          values.message,
          values.basePrice,
          values.cleaningPrice,
          values.currency,
          values.discount,
          values.discountType,
          values.guestServiceFee,
          values.hostServiceFee,
          values.total,
          values.bookingType,
          paymentCurrency,
          paymentType,
          values.guestEmail,
          values.bookingSpecialPricing,
          values.isSpecialPriceAssigned,
          values.isSpecialPriceAverage,
          values.dayDifference,
          paymentMethodId,
          null,
          values.checkInStart,
          values.checkInEnd,
          values.hostServiceFeeType,
          values.hostServiceFeeValue,
          this.state.uzcardResultData,
          this.state.paymentConfirmCode.value
        )
        );

        if (status == 400 && paymentType == 2) {
          const cardAction = await stripe.handleCardAction(
            paymentIntentSecret,
          );
          let amount = values.total + values.guestServiceFee;
          let confirmPaymentIntentId;

          if (cardAction && cardAction.paymentIntent && cardAction.paymentIntent.id) {
            confirmPaymentIntentId = cardAction.paymentIntent.id;

            const { handleCardActionStatus, errorMessage } = await processCardAction(
              reservationId,
              values.listId,
              values.hostId,
              values.guestId,
              values.listTitle,
              values.guestEmail,
              amount,
              values.currency,
              confirmPaymentIntentId
            );

          } else {
            if (cardAction && cardAction.error && cardAction.error.message) {
              msg = cardAction.error.message;
              toastr.error("Oops!", msg);
            }
          }
        }

      }

    } else {
      toastr.error("Oops!", "Those dates are not available.");

    }

  }

  handlePayment(e) {
    const { change } = this.props;
    let paymentType = e.target.value;

    if (paymentType == 3) {
      this.setState({ paymentStatus: 3 })
    } else if (paymentType == 2) {
      this.setState({ paymentStatus: 2 })
    } else {
      change('zipcode', null);
      this.setState({ paymentStatus: 1 })
    }
  }

  setPaymentProcessState(state = 0){
    this.setState({ paymentProcessState: state })
  }

  onCardNumberInputChange = (event) => {
    var value = event.target.value;
    var newState = {
      mask: '9999-9999-9999-9999',
      value: value
    };
    if (/^3[47]/.test(value)) {
      newState.mask = '9999-999999-99999';
    }
    this.setState({cardNumber: newState});
  }

  onCardExpireInputChange = (event) => {
    var value = event.target.value;
    var newState = {
      mask: '99 / 99',
      value: value
    };
    if (/^3[47]/.test(value)) {
      newState.mask = '99 / 99';
    }
    this.setState({cardExpire: newState});
  }

  onPaymentConfirmCodeInputChange = (event) => {
    var value = event.target.value;
    var newState = {
      mask: '999999',
      value: value
    };
    if (/^3[47]/.test(value)) {
      newState.mask = '999999';
    }
    this.setState({paymentConfirmCode: newState});
  }

  render() {
    const { hostDisplayName, houseRules, hostPicture, hostProfileId, paymentLoading, intl: { locale } } = this.props;
    const { handleSubmit, submitting, error, pristine, paymentType, restrictEdit } = this.props;
    const { listId, checkIn, checkOut, guests, openPaymentModal, maximumStay, stripePayment, payPalPayment, uzcardPayment, theme } = this.props;
    const { paymentStatus, load } = this.state;
    const { formatMessage } = this.props.intl;
    let checkInDate = checkIn != null ? moment(moment(checkIn).format('YYYY-MM-DD')).format('MM/DD/YYYY') : '';
    let checkOutDate = checkOut != null ? moment(moment(checkOut).format('YYYY-MM-DD')).format('MM/DD/YYYY') : '';
    let paymentModalInitialValues = {
      checkIn,
      checkOut,
      guests,
    }

    return (
      <div className={cx(s.bookItPanel, s.spaceTop2, s.aboutNoMargin, 'customRatioButton')}>
        <ModalForm listId={listId} initialValues={paymentModalInitialValues} />
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <h1 className={s.titleText}><FormattedMessage {...messages.reviewAndPay} /></h1>
          <div className={s.flex}>
            <div>
              <div className={s.dateTitle}><FormattedMessage {...messages.dates} /></div>
              <div className={cx(s.showDate, 'textWhite')}>{checkInDate}{' - '}{checkOutDate}</div>
            </div>
            {!restrictEdit && <div>
              <div><a onClick={() => openPaymentModal()} className={s.editCss}><span><FormattedMessage {...messages.editLabel} /></span> <span className={cx(s.editIcon, 'editIconPayRTL')}><img src={arrow} /></span></a></div>
            </div>}
          </div>
          <div className={cx(s.flex, s.marginTop)}>
            <div>
              <div className={s.dateTitle}><FormattedMessage {...messages.guests} /></div>
              <div className={cx(s.showDate, 'textWhite')}>{guests}{' '}{guests > 1 ? <FormattedMessage {...messages.guests} /> : <FormattedMessage {...messages.guest} />}</div>
            </div>
            {!restrictEdit && <div>
              <div><a onClick={() => openPaymentModal()} className={s.editCss}><span><FormattedMessage {...messages.editLabel} /></span> <span className={cx(s.editIcon, 'editIconPayRTL')}><img src={arrow} /></span></a></div>
            </div>}
          </div>
          <div className={s.commonBorder}></div>
          {
            houseRules.length > 0 && <div className={s.space4}>
              <HouseRules
                hostDisplayName={hostDisplayName}
                houseRules={houseRules}
              />
              <div className={s.commonBorder}></div>
            </div>
          }

          <div className={cx(s.textLeft, 'textAlignRightRtl')}>
            <div className={cx(s.h3, s.bold)}>
              <FormattedMessage {...messages.aboutYourTrip} />
            </div>
            <div className={s.aboutPaymentDesc}>
              <FormattedMessage {...messages.aboutDescPayment} />
            </div>
            <div className={s.hostFlex}>
              <Link to={"/users/show/" + hostProfileId}>
                {<img src={hostPicture ? ('/images/avatar/medium_' + hostPicture) : defaultPic} className={s.avatarImage} />}
              </Link>
              <div className={cx(s.messageSection)}>
                <span><FormattedMessage {...messages.hostedBy} /></span> <span>{hostDisplayName}</span>
              </div>
            </div>
            <div>
              <Field
                className={s.textArea}
                name="message"
                component={this.renderFormControlTextArea}
                label={formatMessage(messages.descriptionInfo)}
              />
            </div>
            <div className={s.commonBorder}></div>
          </div>
          <Col md={10} className={cx(s.textLeft, 'textAlignRightRtl', s.noPadding)}>
            <section>
              <header className={s.paymentHeader}>
                <Row>
                  <Col md={10} className={cx(s.textLeft, s.paymentPadding, 'textAlignRightRtl')}>
                    <h3 className={cx(s.pullLeft, s.h3, s.space2, 'pullRightBooking')}><FormattedMessage {...messages.payment} /></h3>
                  </Col>
                </Row>
              </header>
            </section>

            {uzcardPayment && <span>
              <label 
                onClick={(e) => { this.handlePayment(e) }}
              >
                <Field
                  name="paymentType"
                  component="input"
                  type="radio"
                  value="3"
                  className={cx(s.cursorPointer)}
                />
                <span className={cx(s.radioTextSection, 'radioTextSectionRTL')}> <FormattedMessage {...messages.uzcardPayment} /></span>
              </label>
            </span>}
            {
              paymentStatus == 3 ? (!load ? <Loader /> : <Row className={cx(s.responsivecardSection)}>
                <Col lg={10} md={11} sm={8} xs={12} className={cx(s.noPadding, s.cardSection, s.noPaddingLeft)}>
                  <div className={cx('placeHolderFont', 'darkInputColor')}>
                    <div class="form-group"> 
                      <label className={cx(s.labelText, 'textWhite')}>
                      <FormattedMessage {...messages.paymentCardNumber} />
                      </label>
                      <div>  
                        <InputMask {...this.state.cardNumber} onChange={this.onCardNumberInputChange} alwaysShowMask="true"  className={cx('form-control', s.cardNumber, s.cardNumberSection, s.cardNumberSectionOne, 'cardNumberRtl', isRTL(locale) ? 'placeHolderNameRTL' : 'placeHolderNameLTR', 'textWhite')} />
                        {/* <span class="input-group-addon"> <FontAwesome.FaCreditCard /></span> */}
                      </div>
                    </div>
                    <Col lg={4} md={4} sm={4} xs={6} className={cx(s.noPaddingLeft, 'noPaddingRightRTL')}>
                      <label className={cx(s.labelText, 'textWhite')}>
                        <FormattedMessage {...messages.cardExpires} />
                      </label>
                      <div class="form-group"> 
                        <InputMask {...this.state.cardExpire} onChange={this.onCardExpireInputChange} alwaysShowMask="true"  className={cx('form-control', s.cardNumber, s.cardNumberSectionTwo, s.cardNumberSection, 'cardNumberRtl', 'textWhite')} />
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} className={cx(s.noPaddingLeft, 'noPaddingRightRTL')}>
                      {this.state.paymentProcessState == 1 && <div class="form-group"> 
                        <label className={cx(s.labelText, 'textWhite')}>
                        {/* <FormattedMessage {...messages.paymentCardNumber} /> */}
                        Код подтверждения
                        </label>
                        <div> 
                        <InputMask {...this.state.paymentConfirmCode} onChange={this.onPaymentConfirmCodeInputChange} alwaysShowMask="true"  className={cx('form-control', s.cardNumber, s.cardNumberSectionTwo, s.cardNumberSection, 'cardNumberRtl', 'textWhite')} />
                        </div>
                      </div>}
                    </Col>
                  </div>
                </Col>
              </Row>) : <span></span>
            }

            {stripePayment && <span>
              <label
                onClick={(e) => { this.handlePayment(e) }}
              >
                <Field
                  name="paymentType"
                  component="input"
                  type="radio"
                  value="2"
                  className={cx(s.cursorPointer)}
                />
                <span className={cx(s.radioTextSection, 'radioTextSectionRTL')}> <FormattedMessage {...messages.creditCard} /></span>
              </label>
            </span>}
            {
              paymentStatus == 2 ? (!load ? <Loader /> : <Row className={cx(s.responsivecardSection)}>
                <Col lg={10} md={11} sm={8} xs={12} className={cx(s.noPadding, s.cardSection, s.noPaddingLeft)}>
                  <div className={cx('placeHolderFont', 'darkInputColor')}>
                    <label className={cx(s.labelText, 'textWhite')}>
                      <FormattedMessage {...messages.paymentCardNumber} />
                    </label>
                    <CardNumberElement
                      {...createOptions(theme)}
                      placeholder={"4242 4242 4242 4242"}
                      className={cx(s.cardNumber, s.cardNumberSection, s.cardNumberSectionOne, 'cardNumberRtl', isRTL(locale) ? 'placeHolderNameRTL' : 'placeHolderNameLTR', 'textWhite')}
                    />

                    <Col lg={4} md={4} sm={4} xs={6} className={cx(s.noPaddingLeft, 'noPaddingRightRTL')}>
                      <label className={cx(s.labelText, 'textWhite')}>
                        <FormattedMessage {...messages.cardExpires} />
                      </label>
                      <CardExpiryElement
                        placeholder="MM / YY"
                        {...createOptions(theme)}
                        className={cx(s.cardNumber, s.cardNumberSectionTwo, s.cardNumberSection, 'cardNumberRtl', 'textWhite')}
                      />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={6} className={cx(s.noMobileRightPadding, 'noMobileLeftPaddingRTL')}>
                      <label className={cx(s.labelText, 'textWhite')}>
                        <FormattedMessage {...messages.cvv} />
                      </label>
                      <CardCvcElement
                        placeholder="_ _ _"
                        {...createOptions(theme)}
                        className={cx(s.cardNumber, s.cardNumberSectionThree, s.cardNumberSection, 'cardNumberRtlTwo', 'textWhite')}
                      />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={12} className={cx(s.noPaddingRight, s.noMobileLeftPadding, 'noLeftPaddingRTL', 'zipCodeMobilePaddingRTL')}>
                      <label className={cx(s.labelText, 'textWhite')}>
                        <FormattedMessage {...messages.zipcode} />
                      </label>
                      <Field
                        name="zipcode"
                        component={this.renderFormControl}
                        className={cx(s.cardInput, s.cardNumber, s.noBoxShadow, s.cardNumberSection, s.cardNumberSectionFour, 'cardNumberRtlTwo')}
                        placeholder={formatMessage(messages.zipcode)}
                      />
                    </Col>
                    <Col lg={6} md={6} sm={5} xs={7} className={s.noPaddingLeft}>
                      <img src={imageOne} className={cx(s.fullWidth, s.stripeImg)} />
                    </Col>
                    <Col lg={5} md={5} sm={4} xs={5} className={cx(s.pullRight, s.textRight, s.noPaddingRight)}>
                      <img src={imageTwo} className={cx(s.fullWidth, s.stripeImg)} />
                    </Col>
                  </div>
                </Col>
              </Row>) : <span></span>
            }

            {payPalPayment && <Row className={s.payPalTop}>
              <Col xs={12} sm={12} md={12} lg={12}>
                <span>
                  <label
                    onClick={(e) => { this.handlePayment(e) }}
                  >
                    <Field
                      name="paymentType"
                      component="input"
                      type="radio"
                      value="1"
                      className={cx(s.cursorPointer)}
                    />
                    <span className={cx(s.radioTextSection, 'radioTextSectionRTL')}> <FormattedMessage {...messages.paypal} /></span>
                  </label>
                </span>
              </Col>
            </Row>}

            {
              paymentStatus == 1 &&
              <Row className={cx(s.space4, s.spaceTop3)}>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className={s.countryName}>
                    <span>
                      <FormattedMessage {...messages.paymentCurrency} />
                    </span>
                  </div>
                  <div className={s.selectContainer}>
                    <Field name="paymentCurrency" disabled={paymentType == 2} component={this.renderFormControlSelect} className={cx(s.formControlSelect, bt.commonControlSelect, 'selectPaymentDropdown')} >
                      <option value="">{formatMessage(messages.chooseCurrency)}</option>
                      {
                        this.renderpaymentCurrencies()
                      }
                    </Field>
                  </div>
                  <span className={cx(s.textLight)}>
                    <FormattedMessage {...messages.loginInfo} />
                  </span>
                </Col>
              </Row>
            }

            <div className={s.footerBtns}>
              {
                !paymentLoading && <div className={s.cancelBtn}>
                  <Link
                    to={"/rooms/" + listId}
                    className={cx(s.cancelLinkText)}
                    onClick={this.handleClick}
                  >
                    <FormattedMessage {...messages.cancel} />
                  </Link>
                </div>
              }
              {
                paymentLoading && <div className={s.cancelBtn}>
                  <a
                    href="javascript:void(0)"
                    className={cx(s.cancelLinkText, { [s.disabledLink]: submitting == true })}
                  >
                    <FormattedMessage {...messages.cancel} />
                  </a>
                </div>
              }
              <div className={s.cancelBtn}>
                <Loader
                  type={"button"}
                  buttonType={"submit"}
                  className={cx(bt.btnPrimary, 'arButtonLoader', s.loaderFlex)}
                  disabled={pristine || submitting || error || maximumStay}
                  show={paymentLoading}
                  label={formatMessage(messages.payNow)}
                />
              </div>
            </div>
          </Col>
        </form>
      </div >
    );
  }
}

PaymentForm = reduxForm({
  form: 'PaymentForm', // a unique name for this form
  validate
})(PaymentForm);

// Decorate with connect to read form values
const selector = formValueSelector('PaymentForm'); // <-- same as form name

const mapState = (state) => ({
  paymentCurrencyList: state.currency.availableCurrencies,
  paymentLoading: state.book.paymentLoading,
  paymentType: selector(state, 'paymentType'),
  listingFields: state.listingFields.data,
  checkIn: selector(state, 'checkIn'),
  checkOut: selector(state, 'checkOut'),
  guests: Number(selector(state, 'guests')),
  maximumStay: state.viewListing.maximumStay,
  payPalPayment: state.book.payPalPayment,
  stripePayment: state.book.stripePayment,
  uzcardPayment: state.book.uzcardPayment,
  restrictEdit: state.viewListing.restrictEdit,
  theme: state.currency.theme,
});

const mapDispatch = {
  // makePayment,
  processCardAction,
  openPaymentModal
};

export default injectStripe(injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(PaymentForm))));
