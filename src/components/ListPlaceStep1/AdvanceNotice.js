// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux Form
import { Field, reduxForm, formValueSelector } from 'redux-form';

// Translation
import { injectIntl, FormattedMessage } from 'react-intl';

// Locale
import messages from '../../locale/messages';

// Helpers
import validateStep3 from './validateStep3';

// Redux
import { connect } from 'react-redux';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import {
  Row,
  FormGroup,
  ControlLabel,
  FormControl,
  Col
} from 'react-bootstrap';
import s from './ListPlaceStep1.css';
import bt from '../../components/commonStyle.css';

// Component
import FooterButton from './FooterButton';
import SidePanel from './SidePanel';
import updateStep3 from './updateStep3';

//Image
import toolTipIcon from '../../../public/SiteIcons/listCommonToolTip.svg';

class AdvanceNotice extends Component {

  static propTypes = {
    initialValues: PropTypes.object,
    previousPage: PropTypes.any,
    nextPage: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      bookingNoticeTime: [],
      policyContent: ''
    }
    this.handleCancellation = this.handleCancellation.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { listingFields } = this.props;
    const { cancellationPolicies, cancelPolicy } = this.props;
    if (cancellationPolicies && cancellationPolicies.length > 0) {
      let itemListData = cancelPolicy ? cancellationPolicies.filter(policy => { if (policy.id == cancelPolicy) return policy; }) : cancellationPolicies[0];
      this.setState({
        policyContent: itemListData && itemListData[0] ? itemListData[0].policyContent : itemListData.policyContent
      });
    }
    if (listingFields != undefined) {
      this.setState({
        bookingNoticeTime: listingFields.bookingNoticeTime,
      });
    }
  }

  componentDidMount() {
    const { valid } = this.props;
    const { cancellationPolicies, cancelPolicy } = this.props;
    if (cancellationPolicies && cancellationPolicies.length > 0) {
      let itemListData = cancelPolicy ? cancellationPolicies.filter(policy => { if (policy.id == cancelPolicy) return policy; }) : cancellationPolicies[0];
      this.setState({
        policyContent: itemListData && itemListData[0] ? itemListData[0].policyContent : itemListData.policyContent
      });
    }
    if (valid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { valid, listingFields } = nextProps;
    const { cancellationPolicies, cancelPolicy } = nextProps;
    if (cancellationPolicies && cancellationPolicies.length > 0) {
      let itemListData = cancelPolicy ? cancellationPolicies.filter(policy => { if (policy.id == cancelPolicy) return policy; }) : cancellationPolicies[0];
      this.setState({
        policyContent: itemListData && itemListData[0] ? itemListData[0].policyContent : itemListData.policyContent
      });
    }
    if (valid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }

    if (listingFields != undefined) {
      this.setState({
        bookingNoticeTime: listingFields.bookingNoticeTime,
      });
    }
  }

  renderFormControlSelect = ({ input, label, meta: { touched, error }, children, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
        <FormControl componentClass="select" {...input} className={className} >
          {children}
        </FormControl>
      </div>
    )
  }

  renderTimeSelect = ({ input, label, meta: { touched, error }, children, className, startValue, endValue }) => {
    const { formatMessage } = this.props.intl;
    let start = (startValue) ? startValue : 8;
    let end = (endValue) ? endValue : 25;
    let timeArray = [];
    for (let i = start; i <= end; i++) {
      timeArray.push(i);
    }

    return (
      <div>
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
        <FormControl componentClass="select" {...input} className={className} >
          <option value="Flexible">{formatMessage(messages.flexible)}</option>
          {
            timeArray.map((item, key) => {
              return (
                <option value={item} key={key}>
                  {((item > 12) ? ((item > 24) ? item - 24 : item - 12) : item)}
                  {(item >= 12 && item < 24) ? 'PM' : 'AM'}
                  {(item == 12) ? ' (noon)' : ''}
                  {(item == 24) ? ' (mid night)' : ''}
                  {(item > 24) ? ' (next day)' : ''}
                </option>
              )
            })
          }
        </FormControl>
      </div>
    )
  }

  handleCancellation() {
    const { cancellationPolicies, cancelPolicy } = this.props;
    let itemListData = cancellationPolicies && cancellationPolicies.length > 0 ? cancellationPolicies.filter(policy => policy.id == cancelPolicy) : [];
    this.setState({
      policyContent: itemListData && itemListData[0] ? itemListData[0].policyContent : ''
    });
  }

  render() {
    const { handleSubmit, previousPage, nextPage, formPage, step } = this.props;
    const { bookingNoticeTime, policyContent } = this.state;
    const { formatMessage } = this.props.intl;

    return (
      <div className={s.grid}>
        <SidePanel
          title={formatMessage(messages.stepThreeCommonHeading)}
          landingContent={formatMessage(messages.whatamenitiesPanel)}
        />
        <form onSubmit={handleSubmit}>
          <div className={s.landingMainContent}>
            <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
              <FormattedMessage {...messages.advanceNoticeCheckInTitle} />
            </ControlLabel>
            <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                <FormGroup className={s.formGroup}>
                  <ControlLabel className={cx(s.landingLabel, 'textWhite', s.FromTextCss)}>
                    <FormattedMessage {...messages.advanceNoticeFrom} />
                  </ControlLabel>
                  <Field
                    name="checkInStart"
                    component={this.renderTimeSelect}
                    className={cx(s.formControlSelect, s.jumboSelect, s.listCommonJumboSelect, 'listCommonJumboSelectRTL')}
                    startValue={8}
                    endValue={25}
                  />
                </FormGroup>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <FormGroup className={s.formGroup}>
                  <ControlLabel className={cx(s.landingLabel, 'textWhite', s.FromTextCss)}>
                    <FormattedMessage {...messages.advanceNoticeTo} />
                  </ControlLabel>
                  <Field
                    name="checkInEnd"
                    component={this.renderTimeSelect}
                    className={cx(s.formControlSelect, s.jumboSelect, s.listCommonJumboSelect, 'listCommonJumboSelectRTL')}
                    startValue={9}
                    endValue={26} />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup className={cx(s.formGroup, s.spaceTop4)}>
              <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
                <FormattedMessage {...messages.chooseCancellationPolicy} />
              </ControlLabel>
              <Field name="cancellationPolicy" component={this.renderFormControlSelect} className={cx(s.formControlSelect, s.jumboSelect, s.listCommonJumboSelect, 'listCommonJumboSelectRTL')} onChange={() => this.handleCancellation()}>
                <option value={"1"}>{formatMessage(messages.flexible)}</option>
                <option value={"2"}>{formatMessage(messages.moderate)}</option>
                <option value={"3"}>{formatMessage(messages.strict)}</option>
              </Field>
            </FormGroup>
            <div className={s.tipCommonCss}>
              <img src={toolTipIcon} />
              <span className={cx(s.commonTipCsss, 'textWhite')}>{policyContent}</span>
            </div>
          </div>
          <FooterButton
            nextPage={nextPage}
            previousPage={previousPage}
            nextPagePath={"pricing"}
            previousPagePath={"house-rules"}
            formPage={formPage}
            step={step}
          />
        </form>
      </div>
    );
  }
}

AdvanceNotice = reduxForm({
  form: 'ListPlaceStep3', // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: validateStep3,
  onSubmit: updateStep3
})(AdvanceNotice);

const selector = formValueSelector('ListPlaceStep3'); // <-- same as form name

const mapState = (state) => ({
  cancelPolicy: selector(state, 'cancellationPolicy'),
  listingFields: state.listingFields.data,
  existingList: state.location.isExistingList,
  cancellationPolicies: state.location.cancellationPolicies,
});

const mapDispatch = {};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(AdvanceNotice)));