
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Translation
import { injectIntl, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MoreFilters.css';
import {
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import cx from 'classnames';
// Redux Form
import { reduxForm, formValueSelector, change, submit as submitForm, getFormValues } from 'redux-form';
// Redux
import { connect } from 'react-redux';
// Locale
import messages from '../../../../locale/messages';
// Submit
import submit from '../../SearchForm/submit';
// Internal Components
import RoomsBeds from './RoomsBeds';
import CheckboxListItems from './CheckboxListItems';
import HomeType from './HomeType';
import Price from './Price';
import InstantBook from './InstantBook';
import { openMoreFiltersModal, closeMoreFiltersModal } from '../../../../actions/modalActions';
class MoreFilters extends Component {

  static propTypes = {
    className: PropTypes.any,
    handleTabToggle: PropTypes.any,
    isExpand: PropTypes.bool
  };

  static defaultProps = {
    isExpand: false,
    fieldsSettingsData: {
      roomType: [],
      essentialsAmenities: [],
      spaces: [],
      houseRules: []
    },
    homeType: []
  };

  constructor(props) {
    super(props);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount() {
    const { isExpand } = this.props;
    document.addEventListener('mousedown', this.handleClickOutside);
    if (isExpand) {
      document.querySelector('body').setAttribute('style', 'overflow: hidden');
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.querySelector('body').removeAttribute('style');
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { isExpand } = nextProps;
    if (isExpand) {
      document.querySelector('body').setAttribute('style', 'overflow: hidden');
    } else {
      document.querySelector('body').removeAttribute('style');
    }
  }

  async handleSubmitForm() {
    const { closeMoreFiltersModal, handleSubmit, change } = this.props;
    await change('currentPage', 1);
    handleSubmit();
    closeMoreFiltersModal()
  }

  async handleReset() {
    const { change, handleSubmit, closeMoreFiltersModal, smallDevice, tabletDevice } = this.props;
    await change('amenities', []);
    await change('spaces', []);
    await change('houseRules', []);
    await change('bathrooms', 0);
    await change('bedrooms', 0);
    await change('beds', 0);
    if (smallDevice || tabletDevice) {
      await change('roomType', []);
      await change('priceRange', null);
      await change('priceRangeLabel', null);
      await change('bookingType', null);
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }


  handleClickOutside(event) {
    const { change, submitForm } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      change('currentPage', 1);
      submitForm('SearchForm');
    }
  }

  async handleOpen() {
    const { openMoreFiltersModal } = this.props;
    openMoreFiltersModal()
  }

  render() {
    const { className, formValues, searchSettings } = this.props;
    const { fieldsSettingsData: { essentialsAmenities, spaces, houseRules } } = this.props;
    const { formatMessage } = this.props.intl;

    let isActive = false;

    if (formValues && (formValues.beds || formValues.bedrooms || formValues.bathrooms
      || (formValues.amenities && formValues.amenities.length) || (formValues.spaces && formValues.spaces.length)
      || (formValues.houseRules && formValues.houseRules.length))) {
      isActive = true;
    }

    return (
      <div className={className} ref={this.setWrapperRef}>
        <div className={s.filterSection}>
          <div>
            <HomeType
              className={cx(s.filters, 'visible-xs', s.space4, s.showTabletSection)}
            />
            <Price
              className={cx(s.filters, 'visible-xs', s.space4, s.showTabletSection)}
              searchSettings={searchSettings}
            />
            <InstantBook
              className={cx(s.filters, 'visible-xs', s.space4, s.showTabletSection)}
            />
            <RoomsBeds
              className={cx(s.filters, s.space4)}
            />
            <CheckboxListItems
              className={cx(s.filters, s.space4)}
              fieldName={'amenities'}
              options={essentialsAmenities}
              captionTitle={formatMessage(messages.aminities)}
              showLabel={formatMessage(messages.showAmenities)}
              hideLabel={formatMessage(messages.closeAmenities)}
              isActive={formValues && formValues.amenities && formValues.amenities.length > 0}
              showImage={true}
            />
            <CheckboxListItems
              className={cx(s.filters, s.space4)}
              fieldName={'spaces'}
              options={spaces}
              captionTitle={formatMessage(messages.facilities)}
              showLabel={formatMessage(messages.showAllFacilities)}
              hideLabel={formatMessage(messages.closeFacilities)}
              isActive={formValues && formValues.spaces && formValues.spaces.length > 0}
            />
            <CheckboxListItems
              // className={s.filters}
              fieldName={'houseRules'}
              options={houseRules}
              captionTitle={formatMessage(messages.houseRules)}
              showLabel={formatMessage(messages.showAllHouseRules)}
              hideLabel={formatMessage(messages.closeHouseRules)}
              isActive={formValues && formValues.houseRules && formValues.houseRules.length > 0}
            />
          </div>
        </div>
        <div className={cx(s.footerSection)}>
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12} >
              <Col lg={6} md={6} sm={6} xs={6} className={cx(s.spaceTop2, s.textAlignLeft, s.textCenterFooterBtn, s.footerBtnMargin, 'modaltextAlignLeftRtl')}>
                <Button
                  bsStyle="link"
                  className={cx(s.btnLink, s.linkText, 'bgBlack')}
                  onClick={this.handleReset}>
                  <FormattedMessage {...messages.clear} />
                </Button>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className={cx(s.textAignRight, s.textCenterFooterBtn, 'modaltextAignRightRtl')}>
                <Button
                  className={cx(s.btn, s.btnSecondary, s.applyBtn)}
                  onClick={this.handleSubmitForm}>
                  <FormattedMessage {...messages.applyFilters} />
                </Button>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

MoreFilters = reduxForm({
  form: 'SearchForm', // a unique name for this form
  onSubmit: submit,
  destroyOnUnmount: false,
})(MoreFilters);

// Decorate with connect to read form values
const selector = formValueSelector('SearchForm'); // <-- same as form name

const mapState = (state) => ({
  fieldsSettingsData: state.listingFields.data,
  homeType: selector(state, 'roomType'),
  formValues: getFormValues('SearchForm')(state),
});

const mapDispatch = {
  change,
  submitForm,
  openMoreFiltersModal,
  closeMoreFiltersModal
};

export default injectIntl(withStyles(s)(connect(mapState, mapDispatch)(MoreFilters)));