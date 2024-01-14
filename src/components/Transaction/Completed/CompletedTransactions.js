import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../Transaction.css';

// Components
import NoTransaction from '../NoTransaction';
import CompletedTransactionItem from './CompletedTransactionItem';
import CompletedTransactionPayout from './CompletedTransactionPayout';

// Locale
import messages from '../../../locale/messages';

class CompletedTransactions extends Component {
	static propTypes = {
		formatMessage: PropTypes.any,
		data: PropTypes.arrayOf(PropTypes.shape({
			checkIn: PropTypes.string.isRequired,
			checkOut: PropTypes.string.isRequired,
			confirmationCode: PropTypes.number.isRequired,
			listData: PropTypes.shape({
				title: PropTypes.string.isRequired
			}),
			guestData: PropTypes.shape({
				firstName: PropTypes.string.isRequired
			}),
			hostTransaction: PropTypes.shape({
				payoutId: PropTypes.number,
				payEmail: PropTypes.string,
				amount: PropTypes.number,
				currency: PropTypes.string,
				createdAt: PropTypes.string
			})
		}))
	};

	static defaultProps = {
		data: []
	};

	render() {
		const { data, totalCount } = this.props;
		const { formatMessage } = this.props.intl;
		let completeData = [];
		let dateMinWidth = 'dateMinWidth';
		if (data.length > 0) {
			data.map((item) => {
				if (item.hostTransaction != undefined && item.hostTransaction != null) {
					completeData.push(item.hostTransaction);
				}
				completeData.push(item);
			});
		}
		return (
			<div className={cx('payoutTable', 'NewResponsiveTable', 'mobileTable')}>
				{data.length > 0 && <table className={cx('table', s.noBorder, s.noMarginBottom)}>
					<thead>
						<tr className={s.rowBorder}>
							<th cscope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.transferDate} /></th>
							<th cscope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.transferType} /></th>
							<th cscope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.details} /></th>
							<th cscope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.transferAmount} /></th>
							<th cscope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.paidOut} /></th>
						</tr>
					</thead>
					<tbody>
						{
							data.length > 0 && completeData.map((item, index) => {
								if (item.checkIn != undefined) {
									return <CompletedTransactionItem
										key={index}
										data={item}
										dateMinWidth={dateMinWidth}
									/>
								} else {
									return <CompletedTransactionPayout
										key={index}
										data={item}
										dateMinWidth={dateMinWidth}
									/>
								}
							})
						}
					</tbody>
				</table>}
				{
					(data.length === 0 || totalCount == 0) && <div className={s.spaceMargin}><NoTransaction type={'noTransactions'} noText={formatMessage(messages.noTransactionComplete)} /></div>
				}
			</div>
		);
	}
}

export default injectIntl(withStyles(s)(CompletedTransactions));
