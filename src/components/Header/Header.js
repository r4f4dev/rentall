// General
import React from 'react';
import PropTypes from 'prop-types';

import { flowRight as compose } from 'lodash';

// Redux
import { connect } from 'react-redux';

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
import Navigation from '../Navigation';
import Logo from '../Logo';

// External Components
import Toaster from '../Toaster';
import LoadingBar from 'react-redux-loading-bar';
import HeaderLocationSearch from './HeaderLocationSearch';

// Redux action
import { toggleOpen, toggleClose } from '../../actions/Menu/toggleControl';

import history from '../../core/history';
import { closeLoginModal } from '../../actions/modalActions';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

//Image
import closeIcon from '../../../public/SiteIcons/loginClose.svg';

class Header extends React.Component {
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
    ],
    whyHostSearchHide: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      searchHide: true,
      load: false,
      isOpen: 0
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleDisableSearchPages = this.handleDisableSearchPages.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.openClose = this.openClose.bind(this);
  }

  componentDidMount() {
    this.setState({
      load: true
    });
    this.handleDisableSearchPages();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.handleDisableSearchPages();
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
    if (this.state.isOpen == 0) {
      document.body.classList.add('menu-open');
    }

  }

  async openClose() {

    this.setState({
      isOpen: 0,
    })
    if (this.state.isOpen == 1) {
      document.body.classList.remove('menu-open');
    }
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    const { borderLess, showMenu, whyHostSearchHide, fixedHeader, whyHostHeader, viewListingHeader, page } = this.props;
    const { searchHide, load } = this.state;
    let borderClass;
    let location;
    if (borderLess) {
      borderClass = s.rentAllHeaderBorderLess;
    }

    if (history.location) location = history.location.pathname;

    return (
      <div className={s.root}>
        <Toaster />
        <LoadingBar />
        <div className={cx(s.container, 'bgBlack', 'dashboardBottomLayout')}>
          <Navbar
            className={cx(s.rentAllHeader, 'rentAllHeader', borderClass, 'darkModeInnerMenu', { ['homeHeader']: location === '/' || location === '/home' }, fixedHeader, whyHostHeader, viewListingHeader)}
            expanded={showMenu}
            onToggle={this.handleMenu}
          >
            <Navbar.Header className={cx('logoPadding', 'innerMenuLogo', !showMenu ? 'normalPosition' : 'fixedPosition')}>
              <Navbar.Brand>
                <Logo link={"/"} className={cx(s.brand, s.brandImg)} />
              </Navbar.Brand>
              <div onClick={() => this.openMenu()}>
                <div className={cx('hidden-lg', 'hamburgerButton', 'hamburgerInnerButton')}>
                  <DropDownMenu />
                </div>
              </div>
            </Navbar.Header>
            {
              !searchHide && <Navbar.Form pullLeft className={cx('hidden-xs', s.breakPoint, 'searchHeaderAR')}>
                {!whyHostSearchHide && <HeaderLocationSearch page={page} />}
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
                <Navigation whyHostSearchHide={whyHostSearchHide} page={page} />
              </div>
            </div>
          </Navbar>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  siteSettings: state.siteSettings.data,
  showMenu: state.toggle.showMenu
});

const mapDispatch = {
  toggleOpen,
  toggleClose
};

export default compose(
  injectIntl,
  withStyles(s),
  connect(mapState, mapDispatch),
)(Header);