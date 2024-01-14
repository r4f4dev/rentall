// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux Form
import { Field, reduxForm } from 'redux-form';

// Redux
import { connect } from 'react-redux';

// Translation
import { injectIntl, FormattedMessage } from 'react-intl';

// Locale
import messages from '../../locale/messages';

// Helpers
import validateStep3 from './validateStep3';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import {
  Grid,
  Button,
  Row,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  InputGroup
} from 'react-bootstrap';
import s from './ListPlaceStep1.css';
import bt from '../../components/commonStyle.css';

// Component
import FooterButton from './FooterButton';
import SidePanel from './SidePanel';
import updateStep3 from './updateStep3';

//Image
import toolTipIcon from '../../../public/SiteIcons/listCommonToolTip.svg';

class Discount extends Component {

  static propTypes = {
    previousPage: PropTypes.any,
    nextPage: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }

  UNSAFE_componentWillMount() {
    const { valid, listingFields } = this.props;

    if (valid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { valid, listingFields } = nextProps;

    if (valid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  renderFormControl = ({ input, label, type, meta: { touched, error }, className, prefixLabel }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <InputGroup>
          <FormControl {...input} placeholder={label} type={type} className={className} maxLength={2} />
          <InputGroup.Addon className={s.prefixIcon}>{prefixLabel}</InputGroup.Addon>
        </InputGroup>

        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </div>
    )
  }


  render() {
    const { handleSubmit, nextPage, previousPage, formPage, step } = this.props;
    const { isDisabled } = this.state;
    const { formatMessage } = this.props.intl;
    return (
      <div className={s.grid}>
        <SidePanel
          title={formatMessage(messages.stepThreeCommonHeading)}
          landingContent={formatMessage(messages.discount)}
        />
        <form onSubmit={handleSubmit}>
          <div className={cx(s.landingMainContent, 'disCountAddon')}>
            <FormGroup className={s.formGroup}>
              <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
                <FormattedMessage {...messages.discountWeekly} />
              </ControlLabel>
              <Field
                name="weeklyDiscount"
                type="text"
                component={this.renderFormControl}
                label={formatMessage(messages.discountLabel)}
                className={cx(s.formControlInput, s.jumboSelect, s.formControlInputMaxWidth, s.listCommonJumboSelect, 'listCommonJumboSelectRTL')}
                prefixLabel={'%'}
              />
            </FormGroup>
            <FormGroup className={cx(s.formGroup, s.spaceTop4)}>
              <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
                <FormattedMessage {...messages.discountMonthly} />
              </ControlLabel>
              <Field
                name="monthlyDiscount"
                type="text"
                component={this.renderFormControl}
                label={formatMessage(messages.discountLabel)}
                className={cx(s.formControlInput, s.jumboSelect, s.formControlInputMaxWidth, s.listCommonJumboSelect, 'listCommonJumboSelectRTL')}
                prefixLabel={'%'}
              />
            </FormGroup>
            <div className={s.tipCommonCss}>
              <img src={toolTipIcon} />
              <span className={cx(s.commonTipCsss, 'textWhite')}><FormattedMessage {...messages.discountTip} /></span>
            </div>
          </div>
          <FooterButton
            nextPage={nextPage}
            previousPage={previousPage}
            nextPagePath={"min-max-nights"}
            previousPagePath={"pricing"}
            formPage={formPage}
            step={step}
            isDisabled={isDisabled}
          />
        </form>
      </div>
    );
  }
}

Discount = reduxForm({
  form: 'ListPlaceStep3', // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: validateStep3,
  onSubmit: updateStep3
})(Discount);

const mapState = (state) => ({
  listingFields: state.listingFields.data
});

const mapDispatch = {};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(Discount)));
