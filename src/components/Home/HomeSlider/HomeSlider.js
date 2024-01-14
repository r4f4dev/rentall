import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import { flowRight as compose } from 'lodash';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './HomeSlider.css';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

// Component
import HomeItem from '../HomeItem';
import Loader from '../../Loader';
import SeeAll from '../../Home/SeeAll';

//images
import nextIcon from '../../../../public/SiteIcons/popular-right.png';
import prevIcon from '../../../../public/SiteIcons/popular-left.png';

//Helper
import { isRTL } from '../../../helpers/formatLocale';

// Locale
import messages from '../../../locale/messages';
import HomeSliderSkleton from '../../Skeleton/HomeSliderSkleton';

const nextArrowStyle = {
  position: 'absolute',
  right: '-18px',
  background: 'transparent',
  color: '#00B0CD',
  zIndex: '2',
  width: 'auto',
  height: 'auto',
  top: '38%',
  fontSize: '40px',
  cursor: 'pointer',
  borderRadius: '50%',
  textAlign: 'center',
};

const prevArrowStyle = {
  position: 'absolute',
  left: '-13px',
  background: 'transparent',
  color: '#00B0CD',
  zIndex: '2',
  width: 'auto',
  height: 'auto',
  top: '38%',
  fontSize: '40px',
  cursor: 'pointer',
  borderRadius: '50%',
  textAlign: 'center',
};



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={nextArrowStyle}
      onClick={onClick}
    >
      <img src={nextIcon} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={prevArrowStyle}
      onClick={onClick}
    >
      <img src={prevIcon} />
    </div>
  );
}
class HomeSlider extends React.Component {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      listPhotos: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
      })),
      coverPhoto: PropTypes.number,
      listingData: PropTypes.shape({
        basePrice: PropTypes.number,
        currency: PropTypes.string,
      }),
      settingsData: PropTypes.arrayOf(PropTypes.shape({
        listsettings: PropTypes.shape({
          itemName: PropTypes.string,
        }),
      })),
      id: PropTypes.number,
      beds: PropTypes.number,
      title: PropTypes.string,
      bookingType: PropTypes.string,
      reviewsCount: PropTypes.number,
      reviewsStarRating: PropTypes.number
    }))
  };

  static defaultProps = {
    data: [],
    arrow: true
  }

  constructor(props) {
    super(props);
    this.swiper = null;
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.progress = this.progress.bind(this);
    this.state = {
      isBeginning: true,
      isEnd: false,
      load: false,
      isClient: false,
      showArrow: false
    };
  }

  componentDidMount() {
    const { data, fromPage } = this.props;
    const isBrowser = typeof window !== 'undefined';
    let smallDevice = isBrowser ? window.matchMedia('(max-width: 640px)').matches : true;
    let showArrow = false;
    if (smallDevice) {
      showArrow = data && data.length > 1 ? true : false
    } else {
      if (fromPage) {
        showArrow = data && data.length > 2 ? true : false
      } else {
        showArrow = data && data.length > 4 ? true : false
      }
    }
    this.setState({
      showArrow
    })

    this.setState({
      isClient: true,
      load: true
    });
  }


  componentDidUpdate(prevProps) {
    const { locale } = this.props.intl;
    const { locale: prevLocale } = prevProps.intl;

    if (locale !== prevLocale) {
      this.setState({
        load: false
      });
      clearTimeout(this.loadSync);
      this.loadSync = null;
      this.loadSync = setTimeout(() => {
        this.setState({
          load: true
        })
        this.progress()
      }, 3000);
    }
  }
  goNext() {
    this.swiper.slideNext();
  }

  goPrev() {
    this.swiper.slidePrev();
  }
  progress() {
    if (!this.swiper) return;
    if (this.swiper.isEnd) {
      this.setState({ isEnd: true });
    } else if (this.swiper.isBeginning) {
      this.setState({ isBeginning: true });
    } else {
      this.setState({ isEnd: false, isBeginning: false });
    }
  }


  render() {
    const { arrow, intl: { locale }, isRecommand, data, hideHeading, fromPage, isViewListing, viewListingSimilarItem } = this.props;
    const { load, isClient, showArrow } = this.state;
    let arrow_display = this.props.arrow;
    arrow_display = false;
    let th = this;

    const params = {
      slidesPerView: fromPage == 'viewProfile' ? 2 : 4,
      spaceBetween: 15,
      breakpoints: {
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 1,
        }
      }
    };

    if (showArrow)
    params['navigation'] = {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    };

    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className={cx("noPadding", 'homeSliderPaading', 'homeSwiper', s.marginTop, viewListingSimilarItem)}>
            {
              !load && !hideHeading && <div>
                <h3 className={cx(s.containerTitle, 'textWhite')}>
                  {isRecommand ? <FormattedMessage {...messages.recommended} /> : <FormattedMessage {...messages.mostViewed} />}
                </h3>
                {[1, 2, 3, 4].map((n) => <Col xs={12} sm={6} md={3} lg={3} key={n}>
                  <HomeSliderSkleton key={n} />
                </Col>
                )}
              </div>
            }
            {
              data && data.length > 0 && load && !hideHeading && isClient && <h3 className={cx(s.containerTitle, 'textWhite', s.floatLeft, 'floatRight')}>
                {isRecommand ? <FormattedMessage {...messages.recommended} /> : <FormattedMessage {...messages.mostViewed} />}
              </h3>
            }
            {
              load && isClient && data && data.length > 0 && !hideHeading && <SeeAll className={s.floatRight} />
            }
            <div className='clearBoth'></div>
            {
              load && isClient && <Swiper {...params} rtl={isRTL(locale)} className={cx('row homeSlickSlider', s.noMargin)} ref={node => th.swiper = node !== null ? node.swiper : null}>
                {
                  data && data.length > 0 && data.map((item, key) => {
                    if (item.listPhotos.length > 0) {
                      return (
                        <div
                          key={key}
                        >
                          <div className='swiperSliderMobielWidth'>
                            <HomeItem
                              key={key}
                              id={item.id}
                              title={item.title}
                              basePrice={item.listingData.basePrice}
                              currency={item.listingData.currency}
                              roomType={item.settingsData && item.settingsData[0] && item.settingsData[0].listsettings && item.settingsData[0].listsettings.itemName}
                              beds={item.beds}
                              listPhotos={item.listPhotos}
                              coverPhoto={item.coverPhoto}
                              photo={item.listPhotos[0].name}
                              bookingType={item.bookingType}
                              reviewsCount={item.reviewsCount}
                              reviewsStarRating={item.reviewsStarRating}
                              wishListStatus={item.wishListStatus}
                              isListOwner={item.isListOwner}
                              userId={item && item.user && item.user.id}
                              isViewListing={isViewListing}
                            />
                          </div>
                        </div>
                      )
                    }
                  })
                }
              </Swiper>
            }

            {/* {
              arrow == true && load && isClient && showArrow &&
              <div>
                <SamplePrevArrow
                  className={cx(s.displayNone, 'arrowPrevRTL')}
                  onClick={this.goPrev}
                />
                <SampleNextArrow
                  className={cx(s.displayNone, 'arrowNextRTL')}
                  onClick={this.goNext}
                />
              </div>
            } */}
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default compose(
  injectIntl,
  withStyles(s),
)(HomeSlider);
