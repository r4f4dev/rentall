import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../Transaction.css';

// Components
import NoTransaction from '../NoTransaction';
import FutureTransactionItem from './FutureTransactionItem';

// Locale
import messages from '../../../locale/messages';

class FutureTransactions extends Component {
  static propTypes = {
    formatMessage: PropTypes.any,
    data: PropTypes.arrayOf(PropTypes.shape({
      checkIn: PropTypes.string.isRequired,
      checkOut: PropTypes.string.isRequired,
      confirmationCode: PropTypes.number.isRequired,
      payoutId: PropTypes.number,
      listData: PropTypes.shape({
        title: PropTypes.string.isRequired
      }),
      guestData: PropTypes.shape({
        firstName: PropTypes.string.isRequired
      })
    }))
  };

  static defaultProps = {
    data: []
  };

  render() {
    const { data, totalCount } = this.props;
    const { formatMessage } = this.props.intl;

    return (
      <div className={cx('payoutTable', 'NewResponsiveTable', 'mobileTable')}>
        {
          (data && data.length === 0 || totalCount === 0) ? <div className={s.spaceMargin}><NoTransaction type={'noTransactions'} totalCount={totalCount} noText={formatMessage(messages.noTransactionFuture)} /></div> : <table className={cx('table', s.noBorder, s.noMarginBottom)}>
            <thead>
              <tr className={s.rowBorder}>
                <th scope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.transferDate} /></th>
                <th scope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.transferType} /></th>
                <th scope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.details} /></th>
                <th scope="col" className={cx(s.noBorder, s.minWidthMobile, 'textAlignRightRtl')}><FormattedMessage {...messages.payTo} /> </th>
                <th scope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.transferAmount} /></th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => {
                  return <FutureTransactionItem
                    key={index}
                    data={item}
                  />
                })
              }
            </tbody>
          </table>
        }
      </div>
    );
  }
}

export default injectIntl(withStyles(s)(FutureTransactions));
