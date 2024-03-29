
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MapListingItem.css';
import {
  Row,
  Col
} from 'react-bootstrap';
import cx from 'classnames';
import * as FontAwesome from 'react-icons/lib/fa';

import CurrencyConverter from '../../CurrencyConverter';
import MapListingPhotos from '../MapListingPhotos';
import StarRating from '../../StarRating';
import WishListIcon from '../../WishListIcon';

// Locale
import messages from '../../../locale/messages';

import { formatURL } from '../../../helpers/formatURL';


class MapListingItem extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    basePrice: PropTypes.number,
    currency: PropTypes.string,
    title: PropTypes.string,
    beds: PropTypes.number,
    personCapacity: PropTypes.number,
    roomType: PropTypes.string,
    listPhotos: PropTypes.array,
    coverPhoto: PropTypes.number,
    bookingType: PropTypes.string.isRequired,
    reviewsCount: PropTypes.number,
    reviewsStarRating: PropTypes.number,
    formatMessage: PropTypes.any,
    wishListStatus: PropTypes.bool,
    isListOwner: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('touchstart', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('touchstart', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    const { onCloseClick } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      onCloseClick();
    }
  }

  render() {
    const { formatMessage } = this.props.intl;
    const {
      id,
      basePrice,
      currency,
      title,
      beds,
      personCapacity,
      roomType,
      coverPhoto,
      listPhotos,
      bookingType,
      reviewsCount,
      reviewsStarRating,
      wishListStatus,
      isListOwner,
      personCount,
      personalized
    } = this.props;
    const { count } = this.state;
    let bedsLabel = 'bed';
    let guestsLabel = 'guest';
    let personalizedURL = '', startDate, endDate, guestCount;

    if (beds > 1) {
      bedsLabel = 'beds';
    }

    if (personCapacity > 1) {
      guestsLabel = 'guests';
    }

    let starRatingValue = 0;
    if (reviewsCount > 0 && reviewsStarRating > 0) {
      starRatingValue = Math.round(reviewsStarRating / reviewsCount)
    }
    let activeItem = 0, photoTemp, photosList = listPhotos.slice();
    if (listPhotos && listPhotos.length > 1) {
      listPhotos.map((x, y) => { if (x.id === coverPhoto) activeItem = y });
      if (activeItem > 0) {
        photoTemp = photosList[0];
        photosList[0] = photosList[activeItem];
        photosList[activeItem] = photoTemp;
      }
    }

    startDate = personalized && personalized.startDate ? "?&startdate=" + personalized.startDate : '';
    endDate = personalized && personalized.endDate ? "&enddate=" + personalized.endDate : '';
    guestCount = personCapacity && personalized.startDate && personalized.endDate ? "&guests=" + personCount : '';
    personalizedURL = startDate + endDate + guestCount;

    return (
      <div className={cx(s.listItemContainer, 'mapInfoWindow-', 'bgBlack')} ref={this.setWrapperRef}>
        <div className={cx(s.listPhotoContainer)}>
          {
            !isListOwner && <WishListIcon listId={id} key={id} isChecked={wishListStatus} />
          }
          <Row>
            <Col xs={12} sm={12} md={12}>
              {
                photosList && photosList.length > 0 && <MapListingPhotos
                  id={id}
                  coverPhoto={coverPhoto}
                  listPhotos={photosList}
                  formatURL={formatURL}
                  title={title}
                  personalizedURL={personalizedURL}
                />
              }
            </Col>
          </Row>
          <div className={s.listInfo}>
            <a className={s.listInfoLink} href={"/rooms/" + formatURL(title) + '-' + id + personalizedURL} target={"_blank"}>
              <div className={s.flexMap}>
                <div className={cx(s.textEllipsis, s.infoPrice, s.infoText, s.infoSpaceTop1, 'textWhite')}>
                  <span className={s.fontBold}>
                    {
                      <CurrencyConverter
                        amount={basePrice}
                        from={currency}
                      />
                    }
                  </span>

                  {' '}<span className={s.nightCss}>/ <FormattedMessage {...messages.perNight} /></span>
                  {
                    bookingType === "instant" && <span><FontAwesome.FaBolt className={s.instantIcon} /></span>
                  }
                </div>
                {starRatingValue > 0 && <div
                  className={cx(s.textEllipsis, s.infoReview, s.infoSpaceTop1, 'textWhite')}
                >
                  <div className={cx(s.reviewStar, 'small-star-rating')}>
                    <StarRating
                      value={starRatingValue}
                      name={'review'}
                      className={s.displayInline}
                      starColor={'#484848'}
                      emptyStarColor={'#cccccc'}
                    />
                    <span className={s.textInline}>&nbsp; {starRatingValue + ' '}
                    </span>
                  </div>

                </div>}
              </div>
              <div className={cx(s.listingTitle, 'textWhite')}>
                {title}
              </div>
              <div className={cx(s.textEllipsis, s.infoDesc, s.infoText, s.infoSpace, 'textWhite')}>
                <div className={cx(s.listingInfo, 'displayInlineFlex', 'textWhite')}>
                  <span>{roomType}</span>
                  {beds > 0 && <span><span>&nbsp;&#183;&nbsp;</span>{beds} {beds > 1 ? formatMessage(messages.beds) : formatMessage(messages.bed)}</span>}
                </div>
              </div>

            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  personalized: state.personalized
});

const mapDispatch = {
};

export default injectIntl(withStyles(s)(connect(mapState, mapDispatch)(MapListingItem)));