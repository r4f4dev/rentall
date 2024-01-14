import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import cx from 'classnames';
import {
  Button,
  FormGroup,
  Col,
  FormControl,
  Panel,
  Grid,
  Row
} from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import s from './WhyHostFormBlock2.css';
import bt from '../../../../components/commonStyle.css';

import ImageUploadComponent from '../../../Common/ImageUploadComponent';

// Translation
import messages from '../../../../locale/messages';
import submit from './submit';
import validate from './validate';

//Images
import defaultPic from '../../../../../public/adminIcons/defaultAdmin.svg';
class WhyHostFormBlock2 extends Component {

  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
  }

  async success(file, fromServer) {
    const { change } = this.props;
    await change('image', fromServer && fromServer.file.filename);
  }

  renderFormControlTextArea = ({ input, label, meta: { touched, error }, children, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space3}>
        <label className={s.labelTextNew}>{label}</label>
        <FormControl
          {...input}
          className={className}
          componentClass="textarea"
          maxLength={250}
        >
          {children}
        </FormControl>
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }

  renderFormControl = ({ input, label, type, meta: { touched, error }, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space3}>
        <label className={s.labelTextNew}>{label}</label>
        <FormControl {...input} type={type} className={bt.commonControlInput} maxLength={250} />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }

  renderFormControlSelect = ({ input, meta: { touched, error }, children, className, disabled, label }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space3}>
        <label className={s.labelTextNew}>{label}</label>
        <FormControl disabled={disabled} componentClass="select" {...input} className={className} >
          {children}
        </FormControl>
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }


  render() {

    const { error, handleSubmit, submitting, reviewId, image } = this.props;
    const { formatMessage } = this.props.intl;

    return (
      <div className={cx(s.pagecontentWrapper, 'pagecontentAR')}>
        <Grid fluid>
          <Row>
            <h1 className={s.headerTitle}><FormattedMessage {...messages.whyBecomeHostBlock2} /></h1>
            <Col xs={12} sm={12} md={8} lg={8} className={s.blockcenter}>
              <Panel className={cx(s.panelHeader, 'bgBlack')}>
                <form onSubmit={handleSubmit(submit)}>
                  {error && <strong>{formatMessage(error)}</strong>}
                  <Field
                    name="userName"
                    type="text"
                    component={this.renderFormControl}
                    label={formatMessage(messages.userNameLabel)}
                  />
                  <div className={cx(bt.picContainerMain, bt.space3)}>
                    <label className={s.labelTextNew} >{formatMessage(messages.imageLabel)}</label>
                    <div className={cx(bt.picContainer, 'bgBlack')}>
                      {
                        image && <div className={s.bannerImageBg} style={{ backgroundImage: `url(/images/home/${image})` }} />
                      }
                      {
                        !image &&
                        <div className={bt.profileImageBg} style={{ backgroundImage: `url(${defaultPic})` }} />
                      }
                    </div>
                    <div className={cx('uploadPicInputHide', bt.spaceTop3)}>
                      <ImageUploadComponent
                        className={cx(bt.btnPrimary, 'fileNoPadding')}
                        subTextClass={s.subText}
                        subText={formatMessage(messages.Maximumupload)}
                        defaultMessage={formatMessage(messages.dropzoneUpload)}
                        componentConfig={{
                          iconFiletypes: ['.jpg', '.png', '.svg'],
                          multiple: false,
                          showFiletypeIcon: false,
                          postUrl: '/uploadHomeBanner'
                        }}
                        success={this.success}
                      />
                    </div>
                  </div>
                  <Field
                    name="reviewContent"
                    component={this.renderFormControlTextArea}
                    label={formatMessage(messages.reviewContentLabel)}
                  />
                  {reviewId && <Field
                    name="isEnable"
                    className={cx(bt.commonControlSelect, 'commonAdminSelect')}
                    component={this.renderFormControlSelect}
                    label={formatMessage(messages.status)}
                  >
                    <option value={true}>{formatMessage(messages.enableLabel)}</option>
                    <option value={false}>{formatMessage(messages.disableLabel)}</option>
                  </Field>}
                  <div className={cx(bt.textAlignRight, 'textAlignLeftRtl')}>
                    <Button className={cx(bt.btnPrimary, bt.btnLarge)} type="submit" disabled={submitting}>
                      <FormattedMessage {...messages.save} />
                    </Button>
                  </div>
                </form>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}

WhyHostFormBlock2 = reduxForm({
  form: 'WhyHostForm',
  validate
})(WhyHostFormBlock2);


const selector = formValueSelector('WhyHostForm');
const mapState = state => ({
  image: selector(state, 'image'),
  loading: state.loader.AddPromoCode
});
const mapDispatch = {
  change
};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(WhyHostFormBlock2)));