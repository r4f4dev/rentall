// General
import React from 'react';
import PropTypes from 'prop-types';
import { flowRight as compose } from 'lodash';
// Redux
import { connect } from 'react-redux';
// Redux Form
import { reduxForm } from 'redux-form';
// Translation
import { injectIntl } from 'react-intl';

// Styles
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import cx from 'classnames';
import {
  Navbar
} from 'react-bootstrap';

// Internal Components
import Link from '../Link';
import Navigation from '../Navigation';
import Logo from '../Logo';

// External Components
import Toaster from '../Toaster';
import LoadingBar from 'react-redux-loading-bar';
import HeaderLocationSearch from './HeaderLocationSearch';

// Redux action
import { toggleOpen, toggleClose } from '../../actions/Menu/toggleControl';

import history from '../../core/history';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

//Image
import closeIcon from '../../../public/SiteIcons/loginClose.svg';


class HomeHeader extends React.Component {
  static propTypes = {
    borderLess: PropTypes.bool,
    showMenu: PropTypes.bool,
    toggleOpen: PropTypes.any.isRequired,
    formatMessage: PropTypes.any,
    checked: PropTypes.any,
  };

  static defaultProps = {
    borderLess: false,
    showMenu: false,
    searchDisablePages: [
      '/',
      '/home'
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      searchHide: true,
      load: false,
      isOpen: 0,
      fixedBgClass: '', //fixedBgHeader
      checked: false,
      scrollLogo: false
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleDisableSearchPages = this.handleDisableSearchPages.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.openClose = this.openClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.handleDisableSearchPages();
  }

  componentDidMount() {
    this.setState({
      load: true
    });
    this.handleDisableSearchPages();
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleMenu() {
    const { showMenu, toggleOpen, toggleClose } = this.props;
    if (showMenu) {
      toggleClose();
    } else {
      toggleOpen();
    }
  }

  handleDisableSearchPages() {
    const { searchDisablePages } = this.props;
    let location = history.location ? history.location.pathname : null;
    let searchHide = false;
    if (location && searchDisablePages.length > 0) {
      searchHide = searchDisablePages.find((o) => location === o);
      searchHide = (searchHide) ? true : false;
    }
    this.setState({
      searchHide
    })
  }
  async openMenu() {
    this.setState({
      isOpen: 1,
    })
  }

  async openClose() {

    this.setState({
      isOpen: 0,
    })
  }



  handleScroll(event) {
    let top = document.documentElement.scrollTop || document.body.scrollTop,
      isWeb = (document.documentElement.clientWidth || document.body.clientWidth) >= 1200 ? true : false;
    let fixedBgClass = '', scrollLogo = false;
    if (isWeb && top >= 50) {
      fixedBgClass = 'fixedBgHeader';
      scrollLogo = true;
    }
    this.setState({
      fixedBgClass,
      scrollLogo
    });
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    const { siteSettings, borderLess, showMenu, toggleOpen, layoutType, homeHeaderOnly } = this.props;
    const { searchHide, load } = this.state;
    const { fixedBgClass, scrollLogo } = this.state;
    let borderClass, headerDesignClass;
    let location;
    if (borderLess) {
      borderClass = s.rentAllHeaderBorderLess;
    }

    if (layoutType && (layoutType != 2)) {
      headerDesignClass = 'headerNewDesign';
    }

    if (history.location) {
      location = history.location.pathname;
    }

    if (!load) {
      return (
        <div className={cx(headerDesignClass)}>
          <div className={s.root} key={new Date().getTime()}>
            <Toaster />
            <LoadingBar />
            <div className={cx(s.container, 'bgBlack')}>
              <Navbar className={cx(s.rentAllHeader, 'rentAllHeader', borderClass, { ['homeHeader']: location === '/' || location === '/home' }, (layoutType == 5 ? fixedBgClass : ''), (layoutType == 2 ? 'darkBgHeder' : ''))}
                expanded={showMenu} onToggle={this.handleMenu}>
                <Navbar.Header className={cx('logoPadding', !showMenu ? 'normalPosition' : 'fixedPosition')}>
                  <Navbar.Brand>
                    <Logo link={"/"} className={cx(s.brand, s.brandImg)} scrollLogo={scrollLogo} />
                  </Navbar.Brand>

                  <div onClick={() => this.openMenu()}>
                    <div className={'hidden-lg hamburgerButton'}>
                      <DropDownMenu />
                    </div>
                  </div>
                </Navbar.Header>
                {/* {
                  !searchHide && <Navbar.Form pullLeft className={('hidden-xs', s.breakPoint)}>
                    <HeaderLocationSearch />
                  </Navbar.Form>
                } */}
                <div className={cx({ [s.menuOpen]: this.state.isOpen == 1 }, s.mobileMenu, 'mobileMenuDark')}>
                  <div className={cx({ [s.menuClose]: this.state.isOpen == 0 }, s.rightMenuClose, 'hidden-lg')}>
                    <div className={cx(s.closeButtonPosition, 'closeButtonPositionDark')}>
                      <div className={cx(s.closeColor, 'textWhite', 'closeColorRTL', 'svgImg')} onClick={() => this.openClose()} >
                        <img src={closeIcon} />
                      </div>
                    </div>
                  </div>
                  <div onClick={() => this.openClose()}>
                    <Navigation openClose={this.state.isOpen} layoutType={layoutType}
                      homePage />
                  </div>
                </div>
              </Navbar>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={cx(headerDesignClass)}>
        <div className={s.root}>
          <Toaster />
          <LoadingBar />
          <div className={cx(s.container, 'bgBlack')}>
            <Navbar className={cx(s.rentAllHeader, 'rentAllHeader', borderClass,
              { [s.fixedHeader]: location === '/s' }, { ['homeHeader']: location === '/' || location === '/home' }, (layoutType == 5 ? fixedBgClass : ''), (layoutType == 2 ? 'darkBgHeder' : ''))}
              expanded={showMenu} onToggle={this.handleMenu}>
              <Navbar.Header className={cx((!showMenu ? 'normalPosition' : 'fixedPosition'), (layoutType == 2 ? 'layout2Logo' : 'logoPadding'))}>
                <Navbar.Brand>
                  <Logo link={"/"} className={cx(s.brand, s.brandImg)} scrollLogo={scrollLogo} />
                  {/* <button onClick={this.handleClick.bind(this)}> Click Me</button>  */}
                </Navbar.Brand>
                <div onClick={() => this.openMenu()}>
                  <div className={'hidden-lg hamburgerButton'}>
                    <DropDownMenu />
                  </div>
                </div>
              </Navbar.Header>
              {
                !searchHide && <Navbar.Form pullLeft className={('hidden-xs', s.breakPoint)}>
                  <HeaderLocationSearch />
                </Navbar.Form>
              }
              <div className={cx({ [s.menuOpen]: this.state.isOpen == 1 }, s.mobileMenu, 'homeMobileMenu', 'mobileMenuDark')}>
                <div className={cx({ [s.menuClose]: this.state.isOpen == 0 }, s.rightMenuClose, 'hidden-lg')}>
                  <div className={cx(s.closeButtonPosition, 'closeButtonPositionDark')}>
                    <div className={cx(s.closeColor, 'textWhite', 'closeColorRTL', 'svgImg')} onClick={() => this.openClose()} >
                      <img src={closeIcon} />
                    </div>
                  </div>
                </div>
                <div onClick={() => this.openClose()}>
                  <Navigation openClose={this.state.isOpen} homeHeaderOnly={homeHeaderOnly}
                    homePage
                  />
                </div>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

HomeHeader = reduxForm({
  form: 'HomeHeaderForm', // a unique name for this form
})(HomeHeader);

const mapState = (state) => ({
  siteSettings: state.siteSettings.data,
  showMenu: state.toggle.showMenu,
  layoutType: state.siteSettings.data.homePageType
});

const mapDispatch = {
  toggleOpen,
  toggleClose
};


export default compose(
  injectIntl,
  withStyles(s),
  connect(mapState, mapDispatch),
)(HomeHeader);
