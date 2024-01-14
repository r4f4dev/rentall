import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Translation
import { FormattedMessage, injectIntl } from 'react-intl';
import { Field, reduxForm, FieldArray, change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

// Style
import cx from 'classnames';
import {
  Button,
  Row,
  Col,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import DropZone from './DropZone';

import s from './WhyHostForm.css';
import bt from '../../../components/commonStyle.css';
import submit from './submit';
import validate from './validate';
import messages from '../../../locale/messages';
import defaultPic from '../../../../public/adminIcons/defaultAdmin.svg';
import deleteIcon from '../../../../public/SiteIcons/deleteIcon.svg'

class WhyHostForm extends Component {

  static propTypes = {
    initialValues: PropTypes.object,
    title: PropTypes.string.isRequired,
  };

  renderField = ({ input, label, type, meta: { touched, error }, labelClass, fieldClass, placeholder }) => {
    return (
      <FormGroup className={bt.space3}>
        <label className={s.labelTextNew}>{label}</label>
        <FormControl {...input} placeholder={placeholder} type={type} className={cx(fieldClass, bt.commonControlInput)} maxLength={255} />
        {touched && error && <span className={s.errorMessage}>{error.defaultMessage}</span>}
      </FormGroup>
    )
  };

  renderDocument = ({ fields, meta: { touched, error } }) => {
    const { formatMessage } = this.props.intl;

    return (
      <div className={s.whyFromGrid}>
        {fields && fields.length > 0 && fields.map((document, index) => {
          let fieldLength = fields.length - 1;
          let image = fields.get(index) && fields.get(index).imageName;
          return (
            <div>
              <div className={s.sectionBorder}>
                {fields && fields.length > 1 && <div className={cx(s.removeSection, 'removeSectionRTL', bt.textAlignRight, 'textAlignLeftRtl')}>
                  <img src={deleteIcon} onClick={() => fields.remove(index)} className={s.removeIcon} />
                </div>}
                <FormGroup className={bt.space3}>
                  <label className={s.labelTextNew}>{formatMessage(messages.imageLabel)}</label>
                  <div className={bt.picContainerMain}>
                    <div className={cx(bt.picContainer, 'bgBlack')}>
                      <div className={cx(bt.profilePic, bt.whiteBgImageUploadSec)}>
                        {image && <div
                          style={{ backgroundImage: `url(/images/whyhost/${image})` }}
                          className={s.bannerImageBg}
                        />}
                        {image == null && <div
                          style={{ backgroundImage: `url(${defaultPic})` }}
                          className={bt.profileImageBg}
                        />}
                      </div>
                    </div>
                  </div>
                  <div className={cx(s.fullWidth, s.noPadding, 'photoUploadBtn', s.space2, s.spaceTop2)}>
                    <DropZone
                      className={cx(s.profileNoPadding, bt.btnPrimary, bt.noPadding)}
                      subText={formatMessage(messages.uploadSizedLabel)}
                      defaultMessage={formatMessage(messages.dropzoneUpload)}
                      url={'/uploadWhyHost'}
                      fieldName={`${document}.imageName`}
                      maxUploadText={cx(s.spaceTop2, bt.textAlignCenter)}
                    />
                  </div>
                </FormGroup>
                <Field
                  name={`${document}.title`}
                  type="text"
                  placeholder={formatMessage(messages.tabTitle)}
                  component={this.renderField}
                  label={formatMessage(messages.tabTitle)}
                />
                <Field
                  name={`${document}.buttonLabel`}
                  type="text"
                  placeholder={formatMessage(messages.buttonLabel)}
                  component={this.renderField}
                  label={formatMessage(messages.buttonLabel)}
                />
              </div>
              {
                fieldLength == index &&
                <div className={cx(s.spaceTop3, 'textAlignRightRtl')}>
                  <Button
                    variant="primary"
                    onClick={() => fields.push({ imageName: null, title: null, buttonLabel: null })}
                    className={cx(bt.btnPrimary, bt.btnLarge)}
                  >
                    {formatMessage(messages.add)}
                  </Button>
                </div>
              }
            </div>
          )
        })
        }
      </div>
    )
  }


  render() {
    const { formatMessage } = this.props.intl;
    const { error, handleSubmit, submitting, dispatch, initialValues } = this.props;

    return (
      <div className={cx(s.pagecontentWrapper, 'pagecontentAR')}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1 className={s.headerTitle}><FormattedMessage {...messages.whyHostPage} /></h1>
            <form onSubmit={handleSubmit(submit)}>
              <FieldArray
                name="dataList"
                rerenderOnEveryChange={true}
                component={this.renderDocument}
              />
              <div className={cx(bt.textAlignRight, s.spaceTop3, 'textAlignLeftRtl')}>
                <Button className={cx(bt.btnPrimary, bt.btnLarge)} type="submit" disabled={submitting}>
                  <FormattedMessage {...messages.save} />
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }

}

WhyHostForm = reduxForm({
  form: 'WhyHostForm', // a unique name for this form
  validate
})(WhyHostForm);

const selector = formValueSelector('WhyHostForm');

const mapState = (state) => ({
  dataList: selector(state, 'dataList')
});

const mapDispatch = {
  change
};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(WhyHostForm)));