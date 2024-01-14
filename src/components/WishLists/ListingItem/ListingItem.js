
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListingItem.css';
import cx from 'classnames';
import * as FontAwesome from 'react-icons/lib/fa';


import CurrencyConverter from '../../CurrencyConverter';
import ListingPhotos from '../ListingPhotos';
import StarRating from '../../StarRating';
import WishListIcon from '../../WishListIcon';

// Locale
import messages from '../../../locale/messages';


class ListingItem extends React.Component {
  static propTypes = {
    formatMessage: PropTypes.any,
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
    reviewsStarRating: PropTypes.number
  };

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
      userId,
      account,
      wishListStatus
    } = this.props;
    let bedsLabel = 'bed';
    let guestsLabel = 'guest';
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

    let currentUser = account && account.userId;

    let isWhisListIcon = false;
    if (userId == currentUser) {
      isWhisListIcon = true;
    }

    return (
      <div className={cx(s.listItemContainer)}>
        {
          !isWhisListIcon && <WishListIcon listId={id} key={id} isChecked={wishListStatus} />
        }
        <ListingPhotos
          id={id}
          coverPhoto={coverPhoto}
          listPhotos={photosList}
        />
        <div className={s.listInfo}>
          <a className={s.listInfoLink} href={"/rooms/" + id} target={"_blank"}>
            <div className={cx(s.textEllipsis, s.infoTitle, s.infoText, s.infoSpace, 'textWhite')}>
              <div className={cx(s.pricingText, 'textWhite')}>
                {
                  <CurrencyConverter
                    amount={basePrice}
                    from={currency}
                  />
                }
                {' '} <span className={s.nightText}>/ <FormattedMessage {...messages.perNight} /></span>
                {
                  bookingType === "instant" && <span><FontAwesome.FaBolt className={s.instantIcon} /></span>
                }
              </div>{' '}
              {starRatingValue > 0 && <div className={s.reviewStar}>
                <span className={cx(s.displayInlineBlock)}>
                  <StarRating value={starRatingValue} name={'review'} />
                </span>
                <span className={cx(s.reviewText, s.displayInlineBlock)}>
                  &nbsp; {starRatingValue}
                </span>
              </div>}
            </div>
            <div className={cx(s.titletext, 'textWhite')}>
              {title}
            </div>
            <div className={cx(s.space1, s.textEllipsis, s.infoDesc, s.infoText)}>
              <div className={cx(s.listingInfo, 'textWhite')}>
                <span>{roomType}</span>
                {beds > 0 && <span><span>&nbsp;-&nbsp;</span>{beds} {beds > 1 ? formatMessage(messages.beds) : formatMessage(messages.bed)}</span>}
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default injectIntl(withStyles(s)(ListingItem));
