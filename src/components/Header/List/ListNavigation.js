import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import {
  Nav,
  NavItem
} from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListNavigation.css';
import cx from 'classnames';


// Locale
import messages from '../../../locale/messages';
import TabBarStep from '../../ListPlaceStep1/TabBarStep';
class ListNavigation extends React.Component {

  static propTypes = {
    formatMessage: PropTypes.any,
  };

  render() {
    const { formPage, step } = this.props;
    return (
      <div className={cx('listHeaderAR', s.headerPosition)}>
        <div>
            <TabBarStep step={step} formPage={formPage} />
        </div>
      </div>
    );
  }
}

export default injectIntl(withStyles(s)(ListNavigation));
