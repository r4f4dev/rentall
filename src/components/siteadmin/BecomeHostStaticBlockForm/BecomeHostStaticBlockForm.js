import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Translation
import { FormattedMessage, injectIntl } from 'react-intl';
import { Field, reduxForm } from 'redux-form';

// Style
import cx from 'classnames';
import {
  Button,
  Row,
  FormGroup,
  Col,
  FormControl,
} from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BecomeHostStaticBlockForm.css';
import bt from '../../../components/commonStyle.css';
import submit from './submit';
import validate from './validate';

import messages from '../../../locale/messages';

class BecomeHostStaticBlockForm extends Component {

  static propTypes = {
    initialValues: PropTypes.object,
    title: PropTypes.string.isRequired,
  };

  renderFormControlTextArea = ({ input, label, meta: { touched, error }, children, className, labelNumber }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space3}>
        <label className={s.labelTextNew}>{label} {labelNumber}</label>
        <FormControl
          {...input}
          className={className}
          componentClass="textarea"
        >
          {children}
        </FormControl>
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }

  renderFormControl = ({ input, label, type, meta: { touched, error }, className, labelNumber }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space3}>
        <label className={s.labelTextNew}>{label} {labelNumber}</label>
        <FormControl {...input} type={type} className={bt.commonControlInput} />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }


  render() {
    const { formatMessage } = this.props.intl;
    const { error, handleSubmit, submitting, dispatch, initialValues } = this.props;

    return (
      <div className={cx(s.pagecontentWrapper, 'pagecontentAR')}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1 className={s.headerTitle}><FormattedMessage {...messages.sideMenu} /></h1>
            <form onSubmit={handleSubmit(submit)}>
              <Row>
                {error && <strong>{formatMessage(error)}</strong>}
                <Col lg={4} md={12} sm={12} xs={12}>
                  <h3><FormattedMessage {...messages.blockLabel} /> #1</h3>
                  <Field
                    name="blockTitle1"
                    type="text"
                    component={this.renderFormControl}
                    label={formatMessage(messages.blockTitleLabel)}
                    labelNumber={'1'}
                  />
                  <Field
                    name="blockContent1"
                    component={this.renderFormControlTextArea}
                    label={formatMessage(messages.blockContentLabel)}
                    labelNumber={'1'}
                  />
                </Col>
                <Col lg={4} md={12} sm={12} xs={12}>
                  <h3><FormattedMessage {...messages.blockLabel} /> #2</h3>
                  <Field
                    name="blockTitle2"
                    type="text"
                    component={this.renderFormControl}
                    label={formatMessage(messages.blockTitleLabel)}
                    labelNumber={'2'}
                  />
                  <Field
                    name="blockContent2"
                    component={this.renderFormControlTextArea}
                    label={formatMessage(messages.blockContentLabel)}
                    labelNumber={'2'}
                  />
                </Col>
                <Col lg={4} md={12} sm={12} xs={12}>
                  <h3><FormattedMessage {...messages.blockLabel} /> #3</h3>
                  <Field
                    name="blockTitle3"
                    type="text"
                    component={this.renderFormControl}
                    label={formatMessage(messages.blockTitleLabel)}
                    labelNumber={'3'}
                  />
                  <Field
                    name="blockContent3"
                    component={this.renderFormControlTextArea}
                    label={formatMessage(messages.blockContentLabel)}
                    labelNumber={'3'}
                  />
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className={cx(bt.textAlignRight, s.spaceTop3, 'textAlignLeftRtl')}>
                  <Button className={cx(bt.btnPrimary, bt.btnLarge)} type="submit" disabled={submitting}>
                    <FormattedMessage {...messages.save} />
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    );
  }

}

BecomeHostStaticBlockForm = reduxForm({
  form: 'BecomeHostStaticBlockForm', // a unique name for this form
  validate
})(BecomeHostStaticBlockForm);

export default injectIntl((withStyles(s, bt)(BecomeHostStaticBlockForm)));