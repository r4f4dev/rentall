import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Field, reduxForm, change } from 'redux-form';
import { FormattedMessage } from 'react-intl';
// Style
import {
  Button,
  FormGroup,
  Col,
  Row,
  FormControl,
  Panel,
  InputGroup,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';

// Style
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './EditCancellation.css';
import bt from '../../../../components/commonStyle.css';

import Link from '../../../Link';

import submit from './submit';
import validate from './validate';

// Translation
import messages from '../../../../locale/messages';
import Faq from '../../../../../public/SiteIcons/question.svg'


class EditCancellation extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    initialValues: PropTypes.object,
  };

  static defaultProps = {
    data: []
  };

  renderFormControl = ({ input, label, placeholder, type, meta: { touched, error }, className, disabled }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space3}>
        <label className={s.labelTextNew} >{label}</label>
        <FormControl {...input} type={type} className={bt.commonControlInput} placeholder={placeholder} disabled={disabled} />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    );
  }



  renderFormAddon = ({ input, label, type, meta: { touched, error }, className, addOnLabel, toolTipText }) => {
    const { formatMessage } = this.props.intl;

    function LinkWithTooltip({ id, children, href, tooltip }) {
      return (
        <OverlayTrigger
          overlay={<Tooltip className={s.tooltip} id={id}>{tooltip}</Tooltip>}
          placement="top"
          delayShow={300}
          delayHide={150}
        >
          {children}
        </OverlayTrigger>
      );
    }

    return (
      <FormGroup className={bt.space3}>
        <div className={s.labelAddonSec}>
          <label className={cx(s.labelTextNew, s.labelAddon)} >{label}</label>
          <LinkWithTooltip
            tooltip={toolTipText}
            id={label}>
            <img src={Faq} className={cx(s.faqImage, 'faqImageRTL')} />
          </LinkWithTooltip>
        </div>
        <InputGroup>
          <FormControl {...input} placeholder={label} type={type} className={className} />
          <InputGroup.Addon className={s.addonStyle}>
            {addOnLabel}
          </InputGroup.Addon>
        </InputGroup>
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }

  renderFormControlTextArea = ({ input, label, meta: { touched, error }, children, className, placeholder, maxLength }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space3}>
        <label className={s.labelTextNew} >{label}</label>
        <FormControl
          {...input}
          className={className}
          componentClass={"textarea"}
          placeholder={placeholder}
          maxLength={maxLength}
        />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }

  render() {
    const { error, handleSubmit, submitting, } = this.props;
    const { formatMessage } = this.props.intl;

    return (
      <div className={cx(s.pagecontentWrapper, 'pagecontentAR')}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1 className={s.headerTitle}><FormattedMessage {...messages.editCancelPageDetails} /></h1>
            <div className={cx(s.space4, bt.textAlignRight, 'textAlignLeftRtl')}>
              <Link to={"/siteadmin/cancellation-policies/management"} className={cx(bt.btnPrimaryBorder, bt.btnLarge, bt.noTextDecoration, bt.btnPrimaryLink, 'bgBlack')}>
                <FormattedMessage {...messages.goBack} />
              </Link>
            </div>
            <Panel className={cx(s.panelHeader, 'bgBlack')}>
              <form onSubmit={handleSubmit(submit)}>
                {error && <strong>{formatMessage(error)}</strong>}
                <Field
                  name="policyName"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.policyName)}
                  placeholder={formatMessage(messages.policyName)}
                  disabled={true}
                />
                <Field
                  name="policyContent"
                  className={s.textareaInput}
                  component={this.renderFormControlTextArea}
                  label={formatMessage(messages.policyContent)}
                  placeholder={formatMessage(messages.policyContent)}
                  maxLength={255}
                />
                <Field
                  name="subTitle"
                  className={s.textareaInput}
                  component={this.renderFormControlTextArea}
                  label={formatMessage(messages.subTitle)}
                  placeholder={formatMessage(messages.subTitle)}
                />
                <Field
                  name="subContent"
                  className={s.textareaInput}
                  component={this.renderFormControlTextArea}
                  label={formatMessage(messages.subContent)}
                  placeholder={formatMessage(messages.subContent)}
                />
                <Field
                  name="content1"
                  className={s.textareaInput}
                  component={this.renderFormControlTextArea}
                  label={formatMessage(messages.content1)}
                  placeholder={formatMessage(messages.content1)}
                />
                <Field
                  name="content2"
                  className={s.textareaInput}
                  component={this.renderFormControlTextArea}
                  label={formatMessage(messages.content2)}
                  placeholder={formatMessage(messages.content2)}
                />
                <Field
                  name="content3"
                  className={s.textareaInput}
                  component={this.renderFormControlTextArea}
                  label={formatMessage(messages.content3)}
                  placeholder={formatMessage(messages.content3)}
                />
                <div className={s.displayGrid}>
                  <Field
                    name="priorDays"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.priorDays)}
                    placeholder={formatMessage(messages.priorDays)}
                    addOnLabel={formatMessage(messages.howManydays)}
                    toolTipText={formatMessage(messages.toolTipContent1)}
                    className={cx(bt.commonControlInput)} />
                  <Field name="accommodationPriorCheckIn"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.accommodationPriorCheckIn)}
                    placeholder={formatMessage(messages.accommodationPriorCheckIn)}
                    addOnLabel={'%'}
                    toolTipText={formatMessage(messages.toolTipContent4)}
                    className={cx(bt.commonControlInput)} />
                  <Field
                    name="guestFeePriorCheckIn"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.guestFeePriorCheckIn)}
                    placeholder={formatMessage(messages.guestFeePriorCheckIn)}
                    addOnLabel={'%'}
                    toolTipText={formatMessage(messages.toolTipContent7)}
                    className={cx(bt.commonControlInput)} />
                  <Field
                    name="hostFeePriorCheckIn"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.hostFeePriorCheckIn)}
                    placeholder={formatMessage(messages.hostFeePriorCheckIn)} addOnLabel={'%'}
                    toolTipText={formatMessage(messages.toolTipContent10)}
                    className={cx(bt.commonControlInput)} />
                  <Field
                    name="accommodationBeforeCheckIn"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.accommodationBeforeCheckIn)} placeholder={formatMessage(messages.accommodationBeforeCheckIn)}
                    addOnLabel={'%'}
                    toolTipText={formatMessage(messages.toolTipContent3)}
                    className={cx(bt.commonControlInput)} />
                  <Field name="guestFeeBeforeCheckIn"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.guestFeeBeforeCheckIn)}
                    placeholder={formatMessage(messages.guestFeeBeforeCheckIn)}
                    addOnLabel={'%'}
                    toolTipText={formatMessage(messages.toolTipContent6)}
                    className={cx(bt.commonControlInput)} />
                  <Field
                    name="hostFeeBeforeCheckIn"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.hostFeeBeforeCheckIn)}
                    placeholder={formatMessage(messages.hostFeeBeforeCheckIn)}
                    addOnLabel={'%'}
                    toolTipText={formatMessage(messages.toolTipContent9)}
                    className={cx(bt.commonControlInput)} />
                  <Field
                    name="accommodationDuringCheckIn"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.accommodationDuringCheckIn)}
                    placeholder={formatMessage(messages.accommodationDuringCheckIn)}
                    addOnLabel={'%'}
                    toolTipText={formatMessage(messages.toolTipContent2)}
                    className={cx(bt.commonControlInput)} />
                  <Field
                    name="guestFeeDuringCheckIn"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.guestFeeDuringCheckIn)} placeholder={formatMessage(messages.guestFeeDuringCheckIn)}
                    addOnLabel={'%'}
                    toolTipText={formatMessage(messages.toolTipContent5)}
                    className={cx(bt.commonControlInput)} />
                  <Field name="hostFeeDuringCheckIn"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.hostFeeDuringCheckIn)}
                    placeholder={formatMessage(messages.hostFeeDuringCheckIn)}
                    addOnLabel={'%'}
                    toolTipText={formatMessage(messages.toolTipContent8)}
                    className={cx(bt.commonControlInput)} />
                  <Field
                    name="nonRefundableNightsPriorCheckIn"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.nonRefundableNightsPriorCheckIn)} placeholder={formatMessage(messages.nonRefundableNightsPriorCheckIn)}
                    addOnLabel={formatMessage(messages.nights)}
                    toolTipText={formatMessage(messages.toolTipContent13)}
                    className={cx(bt.commonControlInput)} />
                  <Field
                    name="nonRefundableNightsBeforeCheckIn"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.nonRefundableNightsBeforeCheckIn)} placeholder={formatMessage(messages.nonRefundableNightsBeforeCheckIn)}
                    addOnLabel={formatMessage(messages.nights)}
                    toolTipText={formatMessage(messages.toolTipContent12)}
                    className={cx(bt.commonControlInput)} />
                  <Field
                    name="nonRefundableNightsDuringCheckIn"
                    type="text"
                    component={this.renderFormAddon}
                    label={formatMessage(messages.nonRefundableNightsDuringCheckIn)} placeholder={formatMessage(messages.nonRefundableNightsDuringCheckIn)}
                    addOnLabel={formatMessage(messages.nights)}
                    toolTipText={formatMessage(messages.toolTipContent11)}
                    className={cx(bt.commonControlInput)} />
                </div>
                <div className={cx(bt.textAlignRight, 'textAlignLeftRtl')}>
                  <Button className={cx(bt.btnPrimary, bt.btnLarge)} type="submit" disabled={submitting} >
                    <FormattedMessage {...messages.save} />
                  </Button>
                </div>
              </form>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

EditCancellation = reduxForm({
  form: 'EditCancellation', // a unique name for this form
  validate
})(EditCancellation);

const mapState = (state) => ({
});

const mapDispatch = {
  change
};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(EditCancellation)));