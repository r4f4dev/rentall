// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Redux Form
import { Field, reduxForm, formValueSelector } from 'redux-form';
// Translation
import { injectIntl, FormattedMessage } from 'react-intl';
// Redux
import { connect } from 'react-redux';
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import s from './ListPlaceStep1.css';
import bt from '../../components/commonStyle.css';

// Locale
import messages from '../../locale/messages';

// components
import FooterButton from './FooterButton';
import SidePanel from './SidePanel';

// Helpers
import validate from './validate';
import update from './update';

//Image
import toolTipIcon from '../../../public/SiteIcons/listCommonToolTip.svg';

class Page2 extends Component {

  static propTypes = {
    initialValues: PropTypes.object,
    previousPage: PropTypes.any,
    nextPage: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      houseType: [],
      roomType: [],
      buildingSize: [],
    }
  }

  UNSAFE_componentWillMount() {
    const { listingFields } = this.props;

    if (listingFields != undefined) {
      this.setState({
        houseType: listingFields.houseType,
        roomType: listingFields.roomType,
        buildingSize: listingFields.buildingSize
      });
    }
  }

  componentDidMount() {
    const { valid } = this.props;
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

    if (listingFields != undefined) {
      this.setState({
        houseType: listingFields.houseType,
        roomType: listingFields.roomType,
        buildingSize: listingFields.buildingSize
      });
    }
  }

  renderSelectField = ({ input, label, meta: { touched, error }, children }) => {
    const { formatMessage } = this.props.intl;

    return (
      <div>
        <select
          {...input}
        >
          {children}
        </select>
        {touched && error && <span>{formatMessage(error)}</span>}
      </div>
    )
  }

  renderFormControlSelect = ({ input, label, meta: { touched, error }, children, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <FormControl componentClass="select" {...input} className={className} >
          {children}
        </FormControl>
      </div>
    )
  }

  render() {
    const { handleSubmit, previousPage, nextPage, existingList, formPage, step } = this.props;
    const { formatMessage } = this.props.intl;
    const { isDisabled, houseType, roomType, buildingSize } = this.state;
    let path = "index";
    if (existingList) {
      path = "home";
    }

    return (
      <div>
        <div className={s.grid}>
          <SidePanel
            title={formatMessage(messages.stepOneCommonHeading)}
            landingContent={formatMessage(messages.whatKindOfPlaceListing)}
          />
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <div className={s.landingMainContent}>
                  <FormGroup className={s.space5}>
                    <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
                      <FormattedMessage {...messages.whatTypeOfProperty} />
                    </ControlLabel>
                    <Field name="houseType" component={this.renderFormControlSelect} className={cx(s.formControlSelect, s.listCommonJumboSelect, 'listCommonJumboSelectRTL')}>
                      {
                        houseType.map((value, key) => {
                          return (
                            value.isEnable == 1 && <option value={value.id} key={key}>{value.itemName}</option>
                          )
                        })
                      }
                    </Field>
                  </FormGroup>
                  <FormGroup className={s.space5}>
                    <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
                      <FormattedMessage {...messages.whatGuestHave} />
                    </ControlLabel>
                    <Field name="roomType" component={this.renderFormControlSelect} className={cx(s.formControlSelect, s.listCommonJumboSelect, 'listCommonJumboSelectRTL')}>
                      {
                        roomType.map((value, key) => {
                          return (
                            value.isEnable == 1 && <option value={value.id} key={key}>{value.itemName}</option>
                          )
                        })
                      }
                    </Field>
                  </FormGroup>
                  <FormGroup className={s.space5}>
                    <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
                      <FormattedMessage {...messages.howManyRooms} />
                    </ControlLabel>
                    <Field name="buildingSize" component={this.renderFormControlSelect} className={cx(s.formControlSelect, s.listCommonJumboSelect, 'listCommonJumboSelectRTL')} >
                      {
                        buildingSize.map((value, key) => {
                          return (
                            value.isEnable == 1 && <option value={value.id} key={key}>{value.itemName}</option>
                          )
                        })
                      }
                    </Field>
                  </FormGroup>
                  <FormGroup className={s.space5}>
                    <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
                      <FormattedMessage {...messages.isPersonalHome} />
                    </ControlLabel>
                    <Field name="residenceType" component={this.renderFormControlSelect} className={cx(s.formControlSelect, s.listCommonJumboSelect, 'listCommonJumboSelectRTL')}>
                      <option value={"1"} >{formatMessage(messages.yesText)}</option>
                      <option value={"0"} >{formatMessage(messages.noText)}</option>
                    </Field>
                  </FormGroup>
                  <div className={s.tipCommonCss}>
                    <img src={toolTipIcon} />
                    <span className={cx(s.commonTipCsss, 'textWhite')}><FormattedMessage {...messages.isPersonalHomeInfo} /></span>
                  </div>
                </div>
                <FooterButton
                  isDisabled={isDisabled}
                  nextPage={nextPage}
                  previousPage={previousPage}
                  nextPagePath={"bedrooms"}
                  previousPagePath={path}
                  formPage={formPage}
                  step={step}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Page2 = reduxForm({
  form: 'ListPlaceStep1', // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
  onSubmit: update
})(Page2);

// Decorate with connect to read form values
const selector = formValueSelector('ListPlaceStep1'); // <-- same as form name

const mapState = (state) => ({
  existingList: state.location.isExistingList,
  listingFields: state.listingFields.data
});

const mapDispatch = {};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(Page2)));