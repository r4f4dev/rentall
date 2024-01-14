import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SideMenu.css';
import bt from '../../../components/commonStyle.css';
import {
  Button,
  Col,
  FormGroup
} from 'react-bootstrap';
import cx from 'classnames';

// Locale
import messages from '../../../locale/messages';

// Component 
import Link from '../../Link';
import history from '../../../core/history';

//Image
import pulseIcon from '../../../../public/SiteIcons/plusListing.svg';

class SideMenu extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
  }

  handleClick() {
    history.push('/become-a-host');
  }

  componentDidMount() {
    if (history.location) {
      this.setState({
        location: history.location.pathname
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (history.location) {
      this.setState({
        location: history.location.pathname
      });
    }
  }


  render() {
    const { location } = this.state;
    return (
      <div>
        <ul className={cx('sideMenuBorder', 'listLayoutArbic')}>
          <li className={cx('sideMenuBorderPadding', { ['menuActive']: location === "/rooms" })}>
            <Link to={'/rooms'} className={cx('sideNavitem', 'sideNav')}>
              <FormattedMessage {...messages.yourListings} />
            </Link>
          </li>
          <li className={cx('sideMenuBorderPadding', { ['menuActive']: location === "/reservation/current" })}>
            <Link to={'/reservation/current'} className={cx('sideNavitem', 'sideNav')}>
              <FormattedMessage {...messages.upcomingReservations} />
            </Link>
          </li>
          <li className={cx('sideMenuBorderPadding', { ['menuActive']: location === "/reservation/previous" })}>
            <Link to={'/reservation/previous'} className={cx('sideNavitem', 'sideNav')}>
              <FormattedMessage {...messages.previousReservations} />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(s, bt)(SideMenu);