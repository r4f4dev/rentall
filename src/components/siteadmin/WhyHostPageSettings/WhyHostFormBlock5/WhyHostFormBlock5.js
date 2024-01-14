import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import submit from './submit';
import validate from './validate';
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
import s from './WhyHostFormBlock5.css';
import bt from '../../../../components/commonStyle.css';
import Image from './Image/Image'

// Translation
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from '../../../../locale/messages';

class WhyHostFormBlock5 extends Component {


  renderFormControl = ({ input, label, type, meta: { touched, error }, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={bt.space3}>
        <label className={s.labelTextNew}>{label}</label>
        <FormControl {...input} placeholder={label} type={type} className={bt.commonControlInput} maxLength={255} />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </FormGroup>
    )
  }


  render() {

    const { error, handleSubmit, submitting } = this.props;
    const { formatMessage } = this.props.intl;

    return (
      <div className={cx(s.pagecontentWrapper, 'pagecontentAR')}>
        <Grid fluid>
          <Row>
            <h1 className={s.headerTitle}><FormattedMessage {...messages.whyBecomeHostBlock1} /></h1>
            <Col xs={12} sm={12} md={8} lg={8} className={s.blockcenter}>
              <Panel className={cx(s.panelHeader, 'bgBlack')}>
                <form onSubmit={handleSubmit(submit)}>
                  {error && <strong>{formatMessage(error)}</strong>}
                  <FormGroup className={bt.space3}>
                    <label className={s.labelTextNew}><FormattedMessage {...messages.hostBannerLabel} /></label>
                    <Image />
                  </FormGroup>
                  <Field
                    name="whyhostBannerHeading"
                    type="text"
                    component={this.renderFormControl}
                    label={formatMessage(messages.hostBannerTitle)}
                  />
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

WhyHostFormBlock5 = reduxForm({
  form: 'WhyHostForm',
  validate
})(WhyHostFormBlock5);

export default injectIntl(withStyles(s, bt)(WhyHostFormBlock5));