// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Redux Form
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import update from './update';
import validate from './validate';

// Translation
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from '../../../locale/messages';

// Redux
import { connect } from 'react-redux';
import { deleteListSettings } from '../../../actions/siteadmin/deleteListSettings';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './ListSettingsForm.css';
import bt from '../../../components/commonStyle.css';
import {
  Button,
  FormGroup,
  Col,
  Row,
  FormControl
} from 'react-bootstrap';
import DropZone from './DropZone'
import { url } from '../../../config'

// Asset
import defaultPic from '../../../../public/adminIcons/defaultAdmin.svg';
import DeleteIcon from '../../../../public/adminIcons/dlt.png';

class EditListSettingsForm extends Component {

  static propTypes = {
    isEnable: PropTypes.string,
    id: PropTypes.number,
    typeId: PropTypes.number,
    fieldType: PropTypes.string,
    deleteListSettings: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      fieldType: null
    },
      this.handleChange = this.handleChange.bind(this);

  }

  UNSAFE_componentWillMount() {
    const { fieldType } = this.props;
    if (fieldType != undefined) {
      this.setState({ fieldType: fieldType });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { fieldType } = nextProps;
    if (fieldType != undefined) {
      this.setState({ fieldType: fieldType });
    }
  }

  renderFormControl = ({ input, label, type, meta: { touched, error }, className, maxLength }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <label className={s.labelTextNew}>{label}</label>
        <FormControl {...input} type={type} className={className} maxLength={maxLength} />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </div>
    )
  }

  renderFormControlTextArea = ({ input, label, meta: { touched, error }, children, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup>
        <label className={s.labelTextNew}>{label}</label>
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
    );
  }

  async handleChange(e) {
    const { change } = this.props;
    await change('image', null)
  }


  render() {
    const { error, handleSubmit, submitting, dispatch } = this.props;
    const { formatMessage } = this.props.intl;
    const { id, typeId, deleteListSettings, image } = this.props;
    const { fieldType } = this.state;

    return (
      <div className={cx(s.formMaxWidth, 'maxwidthcenter', 'empty', 'adminRadioBtn')}>
        <form onSubmit={handleSubmit(update)}>
          {error && <strong>{formatMessage(error)}</strong>}
          <FormGroup className={s.space3}>
            <Field
              name="itemName"
              type="text"
              component={this.renderFormControl}
              label={formatMessage(messages.addItemNew)}
              className={cx(bt.commonControlInput)}
              maxLength={200}
            />
          </FormGroup>
          {
            typeId == 1 && <FormGroup className={s.space3}>
              <Field
                name="itemDescription"
                component={this.renderFormControlTextArea}
                label={formatMessage(messages.addNewDescription)}
                className={cx(bt.commonControlInput, s.space3)}
              />
            </FormGroup>
          }
          {
            (typeId === 11 || typeId === 10 || typeId === 12 || typeId === 1) &&
            <Col xs={12} sm={12} md={12} lg={12} className={s.noPadding}>
              <p className={s.labelTextNew}><FormattedMessage {...messages.IconLabel} /></p>
              <div className={bt.picContainerMain}>
                <div className={cx(bt.picContainer, 'bgBlack')}>
                  <p className={cx('hidden-md hidden-lg hidden-sm')}>&nbsp;</p>
                  {image && <div
                    style={{ backgroundImage: `url(/images/amenities/${image})` }}
                    className={s.bannerImageBg}
                  />}
                  {image == null && <div
                    style={{ backgroundImage: `url(${defaultPic})` }}
                    className={bt.profileImageBg}
                  />}
                  {
                    image && <a href="javascript:void(0);" onClick={() => this.handleChange()}
                      className={bt.trashIconNew}>
                      <img src={DeleteIcon} />
                    </a>
                  }
                </div>
              </div>
              <Col xs={12} sm={12} md={12} lg={12} className={cx(s.space2, s.spaceTop2, s.noPadding)}>
                <div className={cx(s.fullWidth, bt.btnPrimary, s.noPadding, 'photoUploadBtn')}>
                  <DropZone formName={'EditListSettingsForm'} defaultMessage={formatMessage(messages.UploadImage)} />
                </div>
              </Col>
            </Col>
          }
          {
            fieldType == "numberType" && <div>
              <FormGroup className={s.space3}>
                <Field
                  name="otherItemName"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.addOtherItem)}
                  className={bt.commonControlInput}
                  maxLength={200}
                />
              </FormGroup>
              <FormGroup className={s.space3}>
                <Field
                  name="startValue"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.startValue)}
                  className={bt.commonControlInput}
                  maxLength={5}
                />
              </FormGroup>
              <FormGroup className={s.space3}>
                <Field
                  name="endValue"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.endValue)}
                  className={bt.commonControlInput}
                  maxLength={5}
                />
              </FormGroup>
            </div>
          }
          {
            fieldType != "numberType" && <div>
              <FormGroup className={s.space3}>
                <label className={cx(s.labelTextNew, s.btnUPdate, bt.curderPointer)}>
                  <Field name="isEnable" component="input" type="radio" value="1" /> <span className={s.radioBtn}>{formatMessage(messages.enable)}</span>
                </label>
                <label className={cx(s.labelTextNew, s.btnModalDelete, bt.curderPointer, 'adminDelete')}>
                  <Field name="isEnable" component="input" type="radio" value="0" /> <span className={s.radioBtn}>{formatMessage(messages.disable)}</span>
                </label>
              </FormGroup>
              <FormGroup className={cx(s.space3)}>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} className={cx(bt.textAlignRight, 'textAlignLeftRtl')}>
                    <div className={s.btnUPdate}>
                      <Button className={cx(bt.btnPrimary, s.btnWidth)} type="submit" disabled={submitting}>
                        {formatMessage(messages.update)}
                      </Button>
                    </div>
                    <div className={cx(s.btnModalDelete, 'adminUpdate')}>
                      <Button className={cx(bt.btnPrimaryBorder, s.btnWidth, 'bgBlack')} onClick={() => deleteListSettings(id, typeId)} disabled={submitting}>
                        {formatMessage(messages.delete)}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </FormGroup>
            </div>
          }
          {
            fieldType === "numberType" && <FormGroup className={s.space3}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} className={cx(bt.textAlignRight, 'textAlignLeftRtl')}>
                  <Button className={cx(bt.btnPrimary, bt.btnLarge)} type="submit" disabled={submitting}>
                    {formatMessage(messages.update)}
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          }
        </form>
      </div>
    )
  }

}

EditListSettingsForm = reduxForm({
  form: "EditListSettingsForm", // a unique name for this form
  validate
})(EditListSettingsForm);

// Decorate with connect to read form values
const selector = formValueSelector("EditListSettingsForm"); // <-- same as form name

const mapState = (state) => ({
  isEnable: selector(state, 'isEnable'),
  id: selector(state, 'id'),
  typeId: selector(state, 'typeId'),
  image: selector(state, 'image')
});

const mapDispatch = {
  deleteListSettings,
  change
};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(EditListSettingsForm)));