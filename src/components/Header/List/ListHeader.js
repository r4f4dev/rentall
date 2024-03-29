import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import {
  Navbar
} from 'react-bootstrap';
import s from './ListHeader.css';
import Link from '../../Link';
// Components
import ListNavigation from './ListNavigation';
import SaveButton from './SaveButton';
import Logo from '../../Logo';
import Toaster from '../../Toaster';

//Image
import backArrow from '../../../../public/SiteIcons/ListingBackArrow.svg';

class ListHeader extends React.Component {

  static propTypes = {
    step: PropTypes.number.isRequired,
    formPage: PropTypes.string.isRequired,
  };

  render() {
    const { step, formPage } = this.props;

    return (
      <div className={s.root}>
        <Toaster />
        <div className={s.container}>
          <Navbar fluid className={cx(s.rentAllHeader, 'ListHeader', 'listHeaderAR', 'bgBlack')} fixedTop={true} expanded={false}>
            <Navbar.Header>
              {/* <Navbar.Brand className={cx('hidden-xs', s.breakPoint, 'listHeaderLogo')} >
                <Logo link={"/"} className={cx(s.brand, s.brandImg)} />
              </Navbar.Brand> */}
              {/* <Navbar.Toggle className={cx(s.brandBorder, s.navBarToggle, s.navBarToggleList, 'brandBorderRtl')} children={
                <span className={'listHeaderLogo'}>
                  <Logo link={"/"} className={cx(s.brand, s.listBrand, 'hidden-xs')} />
                </span>
              } /> */}
            </Navbar.Header>
            <Navbar.Collapse>
              <ListNavigation step={step} formPage={formPage} />
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ListHeader);
