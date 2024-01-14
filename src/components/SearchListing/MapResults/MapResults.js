import React from 'react';
import PropTypes from 'prop-types';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MapResults.css';
import cx from 'classnames';

// Redux
import { connect } from 'react-redux';

// Redux form
import { formValueSelector, change, submit as submitForm, reduxForm } from 'redux-form';

// Google Places Map Component
//import GoogleMapLoader from "react-google-maps-loader";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView
} from "react-google-maps";
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';

// Assets
import mapPinIcon from '../../../../public/SiteIcons/map-pin-small.png';

// Component
import MapListingItem from '../MapListingItem';
import RedoSearch from '../RedoSearch';
import CustomOverlayView from './CustomOverlayView';
import CurrencyConverter from '../../CurrencyConverter';

// Actions
import { setPersonalizedValues } from '../../../actions/personalized';
import { searchListing } from '../../../actions/searchListing';
import ExpandToggle from '../ExpandToggle/ExpandToggle';
import submit from '../SearchForm/submit';
import { mapThemeStyle } from '../../../helpers/mapThemeStyle';

const refs = {};

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height + 8),
});

const GoogleMapPlace =
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      ref={(map) => {
        props.handleFitBounds(map)
        refs.map = map;
      }}
      center={props.center}
      onClick={props && props.onMapClick}
      onDragStart={props.handleOnDragStart}
      onDragEnd={props.handleOnDragEnd}
      onZoomChanged={props.onZoomChanged}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
      clickableIcons={false}
      onCenterChanged={(e) => props.onCenterChanged(e)}
      options={{
        minZoom: 2,
        maxZoom: 18,
        mapTypeControl: false,
        streetViewControl: false,
        navigationControl: false,
        backgroundColor: '',
        streetViewControl: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        },
        draggable: true,
        fullscreenControl: false,
        styles: props.styles
      }}
    >
      {
        props.markers.map((marker, key) => {
          let icon = props.getMarkerIcon(marker);
          let pixelOffset = new google.maps.Size(-140, 0);

          return (
            <div key={key}>
              <Marker
                position={marker.position}
                clickable={true}
                icon={{
                  url: icon,
                  scale: 5,
                }}
                onClick={() => props.onMarkerClick(marker)}
                key={Math.random()}
                zIndex={100 + key}
              >
                {
                  !marker.showInfo && <CustomOverlayView
                    position={{ lat: marker.lat, lng: marker.lng }}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    getPixelPositionOffset={getPixelPositionOffset}
                  >
                    <div className={cx(s.customMarkerContainer, { [s.hoveredMarker]: marker.hovered == true })}>
                      <div className={s.customMarkerPointBorder}></div>
                      <div className={cx(s.customMarkerContent, 'textWhite', 'bgBlack')}>
                        <CurrencyConverter
                          amount={marker.basePrice}
                          from={marker.currency}
                        />
                      </div>
                      <div className={cx(s.customMarkerPoint, 'bgBlack')}></div>
                    </div>
                  </CustomOverlayView>
                }
                {
                  marker.showInfo && <InfoBox
                    onCloseClick={() => {
                      props.onMarkerClose(marker)
                    }}
                    options={{
                      closeBoxURL: ``,
                      alignBottom: true,
                      boxStyle: {
                        width: "278px",
                        paddingTop: '50px',
                        paddingBottom: '5px',
                        minHeight: "145px",
                        maxWidth: "278px",
                        overflow: "hidden"
                      },
                      pixelOffset: pixelOffset,
                      enableEventPropagation: true,
                    }}
                    defaultPosition={marker.position}
                    zIndex={330}
                  >
                    <div>
                      <MapListingItem
                        id={marker.id}
                        basePrice={marker.basePrice}
                        currency={marker.currency}
                        title={marker.title}
                        beds={marker.beds}
                        personCapacity={marker.personCapacity}
                        roomType={marker.roomType}
                        coverPhoto={marker.coverPhoto}
                        listPhotos={marker.listPhotos}
                        bookingType={marker.bookingType}
                        reviewsCount={marker.reviewsCount}
                        reviewsStarRating={marker.reviewsStarRating}
                        wishListStatus={marker.wishListStatus}
                        isListOwner={marker.isListOwner}
                        onCloseClick={() => { props.onMarkerClose(marker) }}
                        personCount={props.guests}
                      />
                    </div>
                  </InfoBox>
                }
              </Marker>
            </div>
          )
        })
      }
    </GoogleMap>
  ));

class MapResults extends React.Component {
  static propTypes = {
    initialFilter: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
      personCapacity: PropTypes.number,
      dates: PropTypes.string
    }),
    searchSettings: PropTypes.shape({
      minPrice: PropTypes.number.isRequired,
      maxPrice: PropTypes.number.isRequired,
      priceRangeCurrency: PropTypes.string,
      defaultLocation: PropTypes.string,
      defaultLat: PropTypes.number,
      defaultLng: PropTypes.number
    }).isRequired,
    chosenLat: PropTypes.number,
    chosenLng: PropTypes.number,
    total: PropTypes.number,
    results: PropTypes.array,
    personalized: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    change: PropTypes.any,
    submitForm: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      zoom: 12,
      center: {
        lat: 0,
        lng: 0
      },
      markers: [],
      bounds: {},
      searchByMapResults: false,
      isMapDrag: false,
      isMapZoom: false,
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{
            color: '#a4ddf5'
          }]
        }
      ]
    };
    this.onMapClick = this.onMapClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
    this.handleFitBounds = this.handleFitBounds.bind(this);
    this.handleBoundsChanged = this.handleBoundsChanged.bind(this);
    this.getCenter = this.getCenter.bind(this);
    this.handleOnDragStart = this.handleOnDragStart.bind(this);
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
    this.handleZoomChanged = this.handleZoomChanged.bind(this);
    this.handleMapTouch = this.handleMapTouch.bind(this);
    this.handleMapUnTouch = this.handleMapUnTouch.bind(this);
    this.getMarkerIcon = this.getMarkerIcon.bind(this);
    this.generateIcon = this.generateIcon.bind(this);
  }

  componentDidMount() {
    const { results, initialFilter, searchSettings, personalized, markerHighlight, theme } = this.props;
    const { hover, center } = this.state;
    let bounds = new google.maps.LatLngBounds();
    let southWest, northEast, initialBounds, boundsData, new_bounds;
    if (initialFilter && initialFilter.lat && initialFilter.lng) {
      southWest = new google.maps.LatLng(initialFilter.sw_lat, initialFilter.sw_lng);
      northEast = new google.maps.LatLng(initialFilter.ne_lat, initialFilter.ne_lng);
      bounds.extend(southWest);
      bounds.extend(northEast);
    }

    if (results && results.length > 0) {
      let positions = [];

      results.map((item) => {
        let data = {};
        data["lat"] = item.lat,
          data["lng"] = item.lng,
          data["position"] = new google.maps.LatLng(item.lat, item.lng);
        data["id"] = item.id;
        data["basePrice"] = item.listingData.basePrice;
        data["currency"] = item.listingData.currency;
        data["title"] = item.title;
        data["beds"] = item.beds;
        data["personCapacity"] = item.personCapacity;
        data["roomType"] = item.settingsData && item.settingsData[0] && item.settingsData[0].listsettings && item.settingsData[0].listsettings.itemName;
        data["coverPhoto"] = item.coverPhoto;
        data["listPhotos"] = item.listPhotos;
        data['bookingType'] = item.bookingType;
        data["reviewsCount"] = item.reviewsCount;
        data['reviewsStarRating'] = item.reviewsStarRating;
        data["wishListStatus"] = item.wishListStatus;
        data['isListOwner'] = item.isListOwner;
        data['hovered'] = hover;
        positions.push(data);
        bounds.extend(new google.maps.LatLng(item.lat, item.lng));
      })
      this.setState({ markers: positions, bounds });
    } else {
      let defaultCordinates;
      if (personalized && personalized.lat && personalized.lng) {
        let centerValue = {
          lat: personalized.lat,
          lng: personalized.lng
        };
        defaultCordinates = new google.maps.LatLng(centerValue.lat, centerValue.lng);
        bounds.extend(defaultCordinates);
        this.setState({ markers: [], bounds, center: centerValue });
      } else if (initialFilter && initialFilter.lat && initialFilter.lng) {
        let centerValue = {
          lat: initialFilter.lat,
          lng: initialFilter.lng
        };
        defaultCordinates = new google.maps.LatLng(centerValue.lat, centerValue.lng);
        bounds.extend(defaultCordinates);
        this.setState({ markers: [], bounds, center: centerValue });
      } else {
        let defaultCordinates = new google.maps.LatLng(center.lat, center.lng);
        bounds.extend(defaultCordinates);
        this.setState({ markers: [], bounds });
      }
    }

    this.setState({
      styles: mapThemeStyle(theme)
    })

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { results, personalized, initialFilter, searchByMapValue, markerHighlight, theme } = nextProps;
    const { searchByMapResults } = this.state;
    let { hover, center } = this.state;
    let bounds = new google.maps.LatLngBounds();
    this.setState({
      searchByMapResults: searchByMapValue
    });

    let southWest, northEast;
    if (initialFilter && initialFilter.lat && initialFilter.lng) {
      southWest = new google.maps.LatLng(initialFilter.sw_lat, initialFilter.sw_lng);
      northEast = new google.maps.LatLng(initialFilter.ne_lat, initialFilter.ne_lng);
      bounds.extend(southWest);
      bounds.extend(northEast);
    }

    if (results && results.length > 0) {
      let positions = [];

      results.map((item) => {
        let data = {};
        if (markerHighlight) {
          hover = markerHighlight.id == item.id ? true : false;
        }
        let position = new google.maps.LatLng(item.lat, item.lng);
        data["lat"] = item.lat,
          data["lng"] = item.lng,
          data["position"] = new google.maps.LatLng(item.lat, item.lng);
        bounds.extend(position);
        data["id"] = item.id;
        data["basePrice"] = item.listingData.basePrice;
        data["currency"] = item.listingData.currency;
        data["title"] = item.title;
        data["beds"] = item.beds;
        data["personCapacity"] = item.personCapacity;
        data["roomType"] = item.settingsData && item.settingsData[0] && item.settingsData[0].listsettings && item.settingsData[0].listsettings.itemName;
        data["coverPhoto"] = item.coverPhoto;
        data["listPhotos"] = item.listPhotos;
        data['bookingType'] = item.bookingType;
        data["reviewsCount"] = item.reviewsCount;
        data['reviewsStarRating'] = item.reviewsStarRating;
        data["wishListStatus"] = item.wishListStatus;
        data['isListOwner'] = item.isListOwner;
        data['hovered'] = hover;
        positions.push(data);
      });
      this.setState({
        markers: positions,
        bounds
      });
    } else {
      let defaultCordinates;
      if (personalized && personalized.lat && personalized.lng) {
        let centerValue = {
          lat: personalized.lat,
          lng: personalized.lng
        };
        defaultCordinates = new google.maps.LatLng(centerValue.lat, centerValue.lng);
        bounds.extend(defaultCordinates);
        this.setState({ bounds, center: centerValue });
      } else if (initialFilter && initialFilter.lat && initialFilter.lng) {
        let centerValue = {
          lat: initialFilter.lat,
          lng: initialFilter.lng
        };
        defaultCordinates = new google.maps.LatLng(centerValue.lat, centerValue.lng);
        bounds.extend(defaultCordinates);
        if (!searchByMapResults) {
          this.setState({ bounds, center: centerValue });
        }
      } else {
        let defaultCordinates = new google.maps.LatLng(center.lat, center.lng);
        bounds.extend(defaultCordinates);
        if (!searchByMapResults) {
          this.setState({ bounds });
        }
      }
      this.setState({ markers: [] });
    }

    this.setState({
      styles: mapThemeStyle(theme)
    })

  }

  componentWillUnmount() {
    const { change } = this.props;
    change('initialLoad', true);
  }

  async handleFitBounds(map) {
    const { bounds, markers, searchByMapResults } = this.state;
    const { initialLoad, initialFilter, searchListing, results, searchByMapValue, personalized } = this.props;
    let southWest, northEast, initialBounds, boundsData, new_bounds;
    if (results && results.length > 0) {
      boundsData = bounds;
    } else if (initialFilter && initialFilter.lat && initialFilter.lng) {
      new_bounds = new google.maps.LatLngBounds();
      southWest = new google.maps.LatLng(initialFilter.sw_lat, initialFilter.sw_lng);
      northEast = new google.maps.LatLng(initialFilter.ne_lat, initialFilter.ne_lng);
      new_bounds.extend(southWest);
      new_bounds.extend(northEast);
      boundsData = new_bounds;
    } else if (personalized && personalized.lat && personalized.lng) {
      new_bounds = new google.maps.LatLngBounds();
      let defaultCordinates = new google.maps.LatLng(personalized.lat, personalized.lng);
      new_bounds.extend(defaultCordinates);
    } else {
      new_bounds = new google.maps.LatLngBounds();
      southWest = new google.maps.LatLng(9.854550803628602, 80.12749270688475);
      northEast = new google.maps.LatLng(46.588831619427665, -120.63917188786621);
      new_bounds.extend(southWest);
      new_bounds.extend(northEast);
      boundsData = new_bounds;
    }
    // boundsData = results && results.length > 0 ? bounds : new_bounds;
    if (map != null && bounds != null) {
      //setCenter
      if (initialLoad) {
        map.fitBounds(boundsData);
      }
    }

  }

  handleBoundsChanged() {
    let center = new google.maps.getCenter();
  }

  onMapClick() {
    const { markers } = this.state;
    if (markers.length > 0) {
      /*this.setState({
        markers: markers.map(marker => {
          return {
            ...marker,
            showInfo: false,
            icon: mapPinIcon2
          };
          return marker;
        })
      });*/
    }
  }

  getCenter(e) {
    let center, lat, lng, northEast, southWest;
    if (refs && refs.map) {
      center = refs.map.getCenter();
      lat = center.lat();
      lng = center.lng();
    }
  }

  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state && this.state.markers && this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
            icon: mapPinIcon,
            hovered: true
          };
        } else {
          return {
            ...marker,
            showInfo: false,
            icon: mapPinIcon,
            hovered: false
          };
        }
        return marker;
      }),
      center: {
        lat: targetMarker.lat,
        lng: targetMarker.lng
      },
      bounds: null
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
            icon: mapPinIcon,
            hovered: false
          };
        }
        return marker;
      }),
    });
  }

  getMarkerIcon(marker) {
    const svg = this.generateIcon(marker);

    return 'data:image/svg+xml;base64,' + window.btoa(svg);
  }

  generateIcon(marker) {
    let opts = {
      fontSize: '10px',
      fontColor: 'transparent',
      strokeColor: 'transparent',
      strokeWeight: 0,
      path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
      fillColor: 'transparent',
    };

    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="35" viewBox="-24 -48 48 48">
        <defs>
        </defs>
        <path class="marker-icon" stroke="${opts.strokeColor}" stroke-width="${opts.strokeColor}" fill="${opts.fillColor}" 
          d="${opts.path}" />
      </svg>
    `;
  }

  async handleOnDragStart() {
    const { change, submitForm } = this.props;
    this.setState({
      isMapDrag: true
    });
    await change('initialLoad', false);
  }

  async handleMapTouch() {
    const { change, submitForm } = this.props;
  }

  async handleMapUnTouch() {
    const { change, submitForm } = this.props;
  }

  async handleZoomChanged() {
    const { change, submitForm, searchByMapValue } = this.props;
    const { isMapDrag, isMapZoom } = this.state;
    if (refs && refs.map && isMapZoom === false) {
      this.setState({
        isMapZoom: !isMapZoom
      });
    }

    let center, lat, lng, bounds, northEast, southWest, zoom;
    let new_sw, new_ne, new_bounds;

    if (refs && refs.map && isMapZoom) {
      center = refs.map.getCenter();
      zoom = refs.map.getZoom();
      lat = center.lat();
      lng = center.lng();
      bounds = refs.map.getBounds();
      northEast = bounds.getNorthEast();
      southWest = bounds.getSouthWest();
      new_sw = new google.maps.LatLng(southWest.lat(), southWest.lng());
      new_ne = new google.maps.LatLng(northEast.lat(), northEast.lng());
      new_bounds = new google.maps.LatLngBounds(new_sw, new_ne);
      // this.setState({
      //   bounds: new_bounds,
      //   searchByMapResults: searchByMapValue,

      // });
      // refs.map.panToBounds(new_bounds);
      // refs.map.fitBounds(bounds);

      await change('initialLoad', false);

      if (searchByMapValue) {
        await change('lat', lat);
        await change('lng', lng);
        await change('sw_lat', southWest.lat());
        await change('sw_lng', southWest.lng());
        await change('ne_lat', northEast.lat());
        await change('ne_lng', northEast.lng());
        await change('zoomLevel', zoom);
        await change('currentPage', 1);
        await submitForm('SearchForm');
      }
    }

  }

  async handleOnDragEnd() {
    const { change, submitForm, searchByMapValue, setPersonalizedValues } = this.props;
    const { isMapDrag } = this.state;
    let center, lat, lng, bounds, northEast, southWest;
    let new_sw, new_ne, new_bounds, zoom;

    if (refs && refs.map && isMapDrag) {
      center = refs.map.getCenter();
      zoom = refs.map.getZoom();
      lat = center.lat();
      lng = center.lng();
      bounds = refs.map.getBounds();
      northEast = bounds.getNorthEast(); // Max
      southWest = bounds.getSouthWest(); // Min
      new_sw = new google.maps.LatLng(southWest.lat(), southWest.lng());
      new_ne = new google.maps.LatLng(northEast.lat(), northEast.lng());
      new_bounds = new google.maps.LatLngBounds(new_sw, new_ne);

      await change('initialLoad', false);
      if (searchByMapValue) {
        await change('lat', lat);
        await change('lng', lng);

        await setPersonalizedValues({ name: 'lat', value: Number(lat) });
        await setPersonalizedValues({ name: 'lng', value: Number(lng) });

        await change('sw_lat', southWest.lat());
        await change('sw_lng', southWest.lng());
        await change('ne_lat', northEast.lat());
        await change('ne_lng', northEast.lng());
        await change('zoomLevel', zoom);
        await change('currentPage', 1);

        await submitForm('SearchForm');
      }
    }
  }

  render() {
    const { center, markers, bounds, zoom, styles } = this.state;
    const { searchByMapValue, guests } = this.props;
    return (
      <div className={cx(s.mapCanvas, 'searchMap')}>
        <GoogleMapPlace
          containerElement={
            <div style={{ width: '100%', height: '100%' }} />
          }
          mapElement={
            <div style={{ width: '100%', height: '100%' }} />
          }
          center={center}
          markers={markers}
          onMapClick={this.onMapClick}
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
          handleOnDragStart={this.handleOnDragStart}
          handleOnDragEnd={this.handleOnDragEnd}
          onZoomChanged={this.handleZoomChanged}
          handleFitBounds={this.handleFitBounds}
          handleBoundsChanged={this.handleBoundsChanged}
          onCenterChanged={this.getCenter}
          onMouseOver={this.handleMapTouch}
          onMouseOut={this.handleMapUnTouch}
          getMarkerIcon={this.getMarkerIcon}
          guests={guests}
          styles={styles}
        />
        <div className={s.responsiveView}>
          <RedoSearch />
        </div>
        <div className={s.responsiveView}>
          <ExpandToggle />
        </div>
      </div>
    );
  }
}

MapResults = reduxForm({
  form: 'SearchForm', // a unique name for this form
  onSubmit: submit,
  destroyOnUnmount: false,
})(MapResults);

const selector = formValueSelector('SearchForm');

const mapState = (state) => ({
  results: state.search.data,
  total: state.search.count,
  personalized: state.personalized,
  searchByMapValue: selector(state, 'searchByMap'),
  initialLoad: selector(state, 'initialLoad'),
  markerHighlight: selector(state, 'markerHighlight'),
  guests: Number(selector(state, 'personCapacity')),
  theme: state.currency.theme
  //chosenLat: selector(state, 'lat'),
  //chosenLng: selector(state, 'lng'),
});

const mapDispatch = {
  change,
  submitForm,
  setPersonalizedValues,
  searchListing
};

export default withStyles(s)(connect(mapState, mapDispatch)(MapResults));
