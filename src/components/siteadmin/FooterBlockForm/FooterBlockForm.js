import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form';
import submit from './submit';
import validate from './validate';
import { injectIntl } from 'react-intl';

// Style
import cx from 'classnames';
import {
  Button,
  FormGroup,
  Col,
  FormControl,
  Panel
} from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FooterBlockForm.css';
import bt from '../../../components/commonStyle.css';

// Translation
import { FormattedMessage } from 'react-intl';
import messages from '../../../locale/messages';

class FooterBlockForm extends Component {

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
          maxLength={255}
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
        <FormControl maxLength={255} {...input} placeholder={label} type={type} className={bt.commonControlInput} />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }


  render() {
    const { error, handleSubmit, submitting, dispatch, initialValues } = this.props;
    const { formatMessage } = this.props.intl;

    return (
      <div className={cx(s.pagecontentWrapper, 'pagecontentAR')}>
        <h1 className={s.headerTitle}><FormattedMessage {...messages.footerBlockLabel} /></h1>
        <Col xs={12} sm={12} md={8} lg={8} className={s.blockcenter}>
          <Panel className={cx(s.panelHeader, 'bgBlack')}>
            <form onSubmit={handleSubmit(submit)}>
              {error && <strong>{formatMessage(error)}</strong>}
              <Field
                name="title1"
                type="text"
                component={this.renderFormControl}
                label={formatMessage(messages.titleAdminLabel)}
                labelNumber={'1'}
              />
              <Field
                name="content1"
                component={this.renderFormControlTextArea}
                label={formatMessage(messages.contentLabel)}
                labelNumber={'1'}
              />
              <Field
                name="title2"
                type="text"
                component={this.renderFormControl}
                label={formatMessage(messages.titleAdminLabel)}
                labelNumber={'2'}
              />
              <Field
                name="content2"
                component={this.renderFormControlTextArea}
                label={formatMessage(messages.contentLabel)}
                labelNumber={'2'}
              />
              <Field
                name="title3"
                type="text"
                component={this.renderFormControl}
                label={formatMessage(messages.titleAdminLabel)}
                labelNumber={'3'}
              />
              <Field
                name="content3"
                component={this.renderFormControlTextArea}
                label={formatMessage(messages.contentLabel)}
                labelNumber={'3'}
              />
              <div className={cx(bt.textAlignRight, 'textAlignLeftRtl')}>
                <Button className={cx(bt.btnPrimary, bt.btnLarge)} type="submit" disabled={submitting}>
                  <FormattedMessage {...messages.save} />
                </Button>
              </div>
            </form>
          </Panel>
        </Col>
      </div>
    );
  }

}

FooterBlockForm = reduxForm({
  form: 'FooterBlockForm', // a unique name for this form
  validate
})(FooterBlockForm);

export default injectIntl(withStyles(s, bt)(FooterBlockForm));