
import React from 'react';
import PropTypes from 'prop-types';
import { flowRight as compose } from 'lodash';

// Redux
import { connect } from 'react-redux';

// Translation
import { FormattedMessage, injectIntl } from 'react-intl';
import {
  submit as submitForm,
  change
} from 'redux-form';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchForm.css';
import bt from '../../commonStyle.css';

import {
  Button,
  Grid,
  Row,
  Col,
  FormControl
} from 'react-bootstrap';
import cx from 'classnames';
import * as FontAwesome from 'react-icons/lib/fa';

// History
import history from '../../../core/history';

// Components
import DateRange from '../../Home/DateRange/DateRange';
import PlaceGeoSuggest from '../../Home/PlaceGeoSuggest/PlaceGeoSuggest';
import MobileDateRange from '../../Home/MobileDateRange/MobileDateRange';

// Redux Action
import { getSpecificSettings } from '../../../actions/getSpecificSettings';
import { setPersonalizedValues } from '../../../actions/personalized';

// Helper
import detectMobileBrowsers from '../../../helpers/detectMobileBrowsers';

// Locale
import messages from '../../../locale/messages';

//Imaage
import searchIcon from '../../../../public/SiteIcons/searchIconHome.svg';

class SearchForm extends React.Component {
  static propTypes = {
    setPersonalizedValues: PropTypes.any.isRequired,
    getSpecificSettings: PropTypes.any.isRequired,
    personalized: PropTypes.shape({
      location: PropTypes.string,
      lat: PropTypes.number,
      lng: PropTypes.number,
      chosen: PropTypes.number,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      personCapacity: PropTypes.number,
      formatMessage: PropTypes.any,
    }),
    settingsData: PropTypes.shape({
      listSettings: PropTypes.array.isRequired
    }).isRequired
  };

  static defaultProps = {
    listingFields: []
  };

  static defaultProps = {
    personalized: {
      location: null,
      lat: null,
      lng: null,
      startDate: null,
      endDate: null,
      personCapacity: null,
      chosen: null
    },
    settingsData: {
      listSettings: []
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      mobileDevice: false,
      personCapacity: [],
      isLoad: false,
      smallDevice: false,
      verySmallDevice: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoad: false });
    let isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { listingFields } = nextProps;
    if (listingFields != undefined) {
      this.setState({
        personCapacity: listingFields.personCapacity
      });
    }
  }

  UNSAFE_componentWillMount() {
    const { listingFields } = this.props;
    if (listingFields != undefined) {
      this.setState({
        personCapacity: listingFields.personCapacity
      });
    }
    if (detectMobileBrowsers.isMobile() === true) {
      this.setState({ mobileDevice: true });
    }
  }

  componentWillUnmount() {
    let isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      window.removeEventListener('resize', this.handleResize);
    }
  }


  handleResize(e) {
    let isBrowser = typeof window !== 'undefined';
    let smallDevice = isBrowser ? window.matchMedia('(max-width: 767px)').matches : true;
    let verySmallDevice = isBrowser ? window.matchMedia('(max-width: 480px)').matches : false;

    this.setState({
      smallDevice,
      verySmallDevice
    });
  }


  handleClick() {
    const { personalized, page, submitForm } = this.props;
    let updatedURI, uri = '/s?';
    if (page != 'search' || (page == 'search' && (personalized.chosen != null || personalized.location != null))) {
      if (personalized.chosen != null) {
        uri = uri + '&address=' + personalized.location + '&chosen=' + personalized.chosen;
      } else if (personalized.location != null) {
        uri = uri + '&address=' + personalized.location;
      }
      if (personalized.startDate != null && personalized.endDate != null) {
        uri = uri + '&startdate=' + personalized.startDate + '&enddate=' + personalized.endDate;
      }
      if (personalized.personCapacity != null && !isNaN(personalized.personCapacity)) {
        uri = uri + '&guests=' + personalized.personCapacity;
      }
      updatedURI = encodeURI(uri);
      history.push(updatedURI);
    } else {
      submitForm('SearchForm');
    }
  }

  render() {

    const { setPersonalizedValues, personalized, change } = this.props;
    const { formatMessage } = this.props.intl;
    const { personCapacity, smallDevice, verySmallDevice } = this.state;
    let rows = [];
    let guestCount = 1;
    if (personCapacity && personCapacity[0] && personCapacity[0].startValue) {
      for (let i = personCapacity[0].startValue; i <= personCapacity[0].endValue; i++) {
        rows.push(<option value={i} key={i}>{i} {i > 1 ? personCapacity[0].otherItemName : personCapacity[0].itemName}</option>);
      }
    }
    if (personalized.personCapacity) {
      guestCount = personalized.personCapacity;
    } else if (personCapacity && personCapacity[0] && personCapacity[0].startValue) {
      guestCount = personCapacity[0].startValue;
    }

    return (
      <div className={cx('searchHeaderForm')}>
        <div>
          <div className={cx(s.grid, 'searchHeaderPaddingRTL')}>
            <div className={cx(s.location, 'tableCellRTL', s.divider)}>
              <PlaceGeoSuggest
                label={formatMessage(messages.homeWhere)}
                className={cx(s.formControlInput, s.input)}
                containerClassName={s.geoSuggestContainer}
              />
            </div>
            <div className={cx(s.dates, s.divider, s.dividerTop, 'dividerTopRTL')}>

              <span className={cx('homeDate', s.formControlInput, s.input, 'homeDateAR', 'headerSearchDate')}>
                {
                  !smallDevice && <DateRange
                    formName={'SearchForm'}
                    numberOfMonths={2}
                  />
                }

                {
                  smallDevice && <MobileDateRange
                    formName={'SearchForm'}
                    numberOfMonths={1}
                  />
                }

              </span>
            </div>
            <div className={cx(s.guests, s.guestPadding, s.mobilePadding, 'tableCellLeftRTL')}>

              <FormControl
                componentClass="select"
                className={cx(s.formControlSelect, s.input, s.inputPadding, 'inputPaddingAR')}
                onChange={(e) => {
                  change('SearchForm', 'personCapacity', e.target.value)
                  setPersonalizedValues({ name: 'personCapacity', value: Number(e.target.value) })
                }}
                defaultValue={guestCount}
                value={guestCount}
              >
                {rows}
              </FormControl>
            </div>
            <div className={cx(s.search, s.noBroderRight, 'layOut5SearchBtnBottom', 'noBroderRightRTL')}>
              <Button className={cx(bt.btnPrimary, s.btnBlock, s.searchButton, 'layOut5SearchBtn')} onClick={this.handleClick}>
                <span>
                  {/* <img src={searchIcon} /> */}
                  <FontAwesome.FaSearch className={cx(s.iconStyle, 'textWhite')} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div >
    );
  }
}



const mapState = (state) => ({
  personalized: state.personalized,
  settingsData: state.viewListing.settingsData,
  listingFields: state.listingFields.data,
});

const mapDispatch = {
  getSpecificSettings,
  setPersonalizedValues,
  submitForm,
  change
};

export default compose(
  injectIntl,
  withStyles(s, bt),
  connect(mapState, mapDispatch),
)(SearchForm);