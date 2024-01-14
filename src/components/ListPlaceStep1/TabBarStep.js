// General
import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Translation
import { injectIntl } from 'react-intl';

// Style
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TabBarStep.css';

// Locale
import messages from '../../locale/messages';
import history from '../../core/history';

//image 
import nextIcon from '../../../public/SiteIcons/popular-right.png';
import prevIcon from '../../../public/SiteIcons/popular-left.png';
import iconOne from '../../../public/SiteIcons/hostStepIcons/placeType.svg';
import iconTwo from '../../../public/SiteIcons/hostStepIcons/bed.svg';
import iconThree from '../../../public/SiteIcons/hostStepIcons/location.svg';
import iconFour from '../../../public/SiteIcons/hostStepIcons/amenities.svg';
import iconFive from '../../../public/SiteIcons/hostStepIcons/sharedSpaces.svg';
import iconSix from '../../../public/SiteIcons/hostStepIcons/photos.svg';
import iconSeven from '../../../public/SiteIcons/hostStepIcons/nameDesc.svg';
import iconEight from '../../../public/SiteIcons/hostStepIcons/houseRules.svg';
import iconNine from '../../../public/SiteIcons/hostStepIcons/notification.svg';
import iconTen from '../../../public/SiteIcons/hostStepIcons/pricing.svg';
import iconEleven from '../../../public/SiteIcons/hostStepIcons/discount.svg';
import iconTwelve from '../../../public/SiteIcons/hostStepIcons/availability.svg';
import iconThirteen from '../../../public/SiteIcons/hostStepIcons/calendar.svg'
import iconFourteen from '../../../public/SiteIcons/hostStepIcons/guestRequirement.svg'
import iconFifteen from '../../../public/SiteIcons/hostStepIcons/bookingType.svg'
import iconSixteen from '../../../public/SiteIcons/hostStepIcons/law.svg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
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
      onClick={onClick}
    >
      <img src={prevIcon} />
    </div>
  );
}
class TabBarStep extends Component {

  static propTypes = {
    listingSteps: PropTypes.shape({
      step1: PropTypes.string,
      step2: PropTypes.string,
      step3: PropTypes.string
    }),
  };

  static defaultProps = {
    arrow: true,
    listingSteps: {
      step1: 'inactive',
      step2: 'inactive',
      step3: 'inactive'
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      load: false,
      isClient: false,
      isBeginning: true,
      isEnd: false,
    };
    this.swiper = null;
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
  }

  componentDidMount() {
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
        });
      }, 3000);
    }
  }


  goNext() {
    if (!this.swiper) return;
    this.swiper.slideNext();
    this.setState({
      isEnd: this.swiper.isEnd,
      isBeginning: this.swiper.isBeginning,
    });
  }

  goPrev() {
    if (!this.swiper) return;
    this.swiper.slidePrev();
    this.setState({
      isBeginning: this.swiper.isBeginning,
      isEnd: this.swiper.isEnd,
    });
  }

  nextPage(formPage) {
    history.push(formPage);
  }

  render() {
    const { formPage, step, arrow, listingSteps } = this.props;
    const { formatMessage } = this.props.intl;
    const { load, isClient } = this.state;

    let pathname = formPage;
    let tabBarData = [], tabBarStep1 = [], tabBarStep2 = [], tabBarStep3 = [];
    let arrow_display = this.props.arrow;
    arrow_display = false;
    let th = this;

    if (listingSteps && listingSteps.step1 === 'completed') {
      tabBarStep1 = [
        {
          pathname: "room",
          icon: iconOne,
          text: formatMessage(messages.tabPlaceType)
        },
        {
          pathname: "bedrooms",
          icon: iconTwo,
          text: formatMessage(messages.bedrooms)
        },
        {
          pathname: "map",
          icon: iconThree,
          text: formatMessage(messages.location)
        },
        {
          pathname: "amenities",
          icon: iconFour,
          text: formatMessage(messages.aminities)
        },
        {
          pathname: "spaces",
          icon: iconFive,
          text: formatMessage(messages.sharedSpaces)
        }
      ];
    }


    if (listingSteps && listingSteps.step2 === 'completed') {
      tabBarStep2 = [
        {
          pathname: "photos",
          icon: iconSix,
          text: formatMessage(messages.photos)
        },
        {
          pathname: "description",
          icon: iconSeven,
          text: formatMessage(messages.descriptionAdminLabel)
        },
      ];
    }

    if (listingSteps && listingSteps.step4 === 'completed') {
      tabBarStep3 = [
        {
          pathname: "house-rules",
          icon: iconEight,
          text: formatMessage(messages.houseRules)
        },
        {
          pathname: "advance-notice",
          icon: iconNine,
          text: formatMessage(messages.advanceNotice)
        },
        {
          pathname: "pricing",
          icon: iconTen,
          text: formatMessage(messages.tabPricing)
        },
        {
          pathname: "discount",
          icon: iconEleven,
          text: formatMessage(messages.tabDiscount)
        },
        {
          pathname: "min-max-nights",
          icon: iconTwelve,
          text: formatMessage(messages.minMaxPanel)
        },
        {
          pathname: "calendar",
          icon: iconThirteen,
          text: formatMessage(messages.tabCalendar)
        },
        {
          pathname: "guest-requirements",
          icon: iconFourteen,
          text: formatMessage(messages.guestRequirements)
        },
        {
          pathname: "booking-scenarios",
          icon: iconFifteen,
          text: formatMessage(messages.bookingType)
        },
        {
          pathname: "local-laws",
          icon: iconSixteen,
          text: formatMessage(messages.tabLocalLaws)
        }
      ]
    }

    step && step == 1 ? tabBarData = tabBarStep1 : (step == 2 ? tabBarData = tabBarStep2 : tabBarData = tabBarStep3);

    const params = {
      slidesPerView: 'auto',
      spaceBetween: 20,
      breakpoints: {
        1200: {
          slidesPerView: 'auto',
          // centeredSlides: true,

        },
        768: {
          slidesPerView: 'auto',
          // centeredSlides: true,

        },
        640: {
          slidesPerView: 2,
          // centeredSlides: true,
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      activeSlideKey: pathname,
    };

    return (
      <div>
        {tabBarData && tabBarData.length > 0 && <div className={cx(s.progressContainer, 'listHeaderSlider', (step == 2 ? 'tabBar2Slider' : ''), (step == 3 ? 'tabBar3Slider' : ''))}>
          {load && isClient && <Swiper {...params} ref={node => th.swiper = node !== null ? node.swiper : null}>
            {
              tabBarData.map((item, index) => {
                return (
                  <div key={item.pathname}
                  >
                    <a onClick={() => this.nextPage(item.pathname)} href="javascript:void(0);">
                      <div
                        className={cx(s.progressSection, s.progressStyle, s.linkReset, 
                          { [s.active]: pathname === item.pathname }, { ['darkActive']: pathname === item.pathname }, 'linkResetDarkHover')}
                      >
                        <span className={s.iconCss}>
                          <img src={item.icon} />
                        </span>
                        <span className={cx(s.progressStep, s.textTrunck, 'textWhite', 'progressStepRTL')}>{item.text} </span>
                      </div>
                    </a>
                  </div>
                )
              })
            }
          </Swiper>}
          {/* {
            arrow == true && load && isClient && tabBarData.length > 5 && <div className={s.arrowCenter}>
              {!this.state.isBeginning && <SamplePrevArrow
                className={cx(s.displayInline, s.arrowPrev)}
                onClick={this.goPrev}
              />}
              {!this.state.isEnd && <SampleNextArrow
                className={cx(s.displayInline, s.arrowNext)}
                onClick={this.goNext}
              />}
            </div>
          } */}
        </div>}
      </div>
    );
  }

}

const mapState = (state) => ({
  listingSteps: state.location.listingSteps,
  existingList: state.location.isExistingList,
});

const mapDispatch = {};

export default injectIntl(withStyles(s)(connect(mapState, mapDispatch)(TabBarStep)));

