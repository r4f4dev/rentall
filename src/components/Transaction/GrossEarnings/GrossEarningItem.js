import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FormattedMessage, injectIntl } from 'react-intl';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../Transaction.css';
import cx from 'classnames';

// Component
import CurrencyConverter from '../../CurrencyConverter';
import Link from '../../Link';

// Locale
import messages from '../../../locale/messages';
class GrossEarningItem extends Component {
	static propTypes = {
		className: PropTypes.string.isRequired,
		formatMessage: PropTypes.any,
		data: PropTypes.shape({
			id: PropTypes.number.isRequired,
			total: PropTypes.number.isRequired,
			guestServiceFee: PropTypes.number.isRequired,
			hostServiceFee: PropTypes.number.isRequired,
			currency: PropTypes.string.isRequired,
			checkIn: PropTypes.string.isRequired,
			checkOut: PropTypes.string.isRequired,
			confirmationCode: PropTypes.number.isRequired,
			listData: PropTypes.shape({
				title: PropTypes.string.isRequired
			}).isRequired,
			guestData: PropTypes.shape({
				firstName: PropTypes.string.isRequired
			}).isRequired,
			hostTransaction: PropTypes.shape({
				createdAt: PropTypes.string.isRequired
			}).isRequired,
		})
	};

	render() {
		const { className, data } = this.props;
		let date = data.hostTransaction != null ? moment(data.hostTransaction.createdAt).format('MM-DD-YYYY') : 'Pending';
		let checkInDate = data.checkIn != null ? moment(data.checkIn).format('MMM DD, YYYY') : '';
		let checkOutDate = data.checkOut != null ? moment(data.checkOut).format('MMM DD, YYYY') : '';
		let totalAmount = Number(data.total) - Number(data.hostServiceFee);
		// let totalAmount = Number(data.total);

		let payoutAmount = data && data.cancellationDetails && data.cancellationDetails;

		let isAmount = 0;

		if (payoutAmount) {
			isAmount = data && data.cancellationDetails && data.cancellationDetails.payoutToHost ? data.cancellationDetails.payoutToHost : totalAmount;
		} else {
			isAmount = data && data.cancellationDetails && data.cancellationDetails.payoutToHost ? data.cancellationDetails.payoutToHost : totalAmount;
		}
		const { formatMessage } = this.props.intl;

		return (
			<tr>
				<td data-label={formatMessage(messages.transferDate)} className={cx(className, 'textAlignRightRtl')}>{date}</td>
				<td data-label={formatMessage(messages.transferType)} className={cx(className, 'textAlignRightRtl')}><FormattedMessage {...messages.reservation} /></td>
				<td data-label={formatMessage(messages.details)} className={cx(className, 'textAlignRightRtl')}>
					<ul className={cx(s.listLayout, 'listLayoutRTL')}>
						<li>{checkInDate} - {checkOutDate}</li>
						<li>{data.listData && <Link to={"/users/trips/receipt/" + data.id} className={s.linkText}>{data.confirmationCode}</Link>}</li>
						<li>{!data.listData && <span>{data.confirmationCode}</span>}</li>
					</ul>
				</td>
				<td data-label={formatMessage(messages.grossEarnings)} className={cx(className, 'textAlignRightRtl')}>
					<CurrencyConverter
						//amount={totalAmount}
						amount={isAmount > 0 ? isAmount : 0}
						from={data.currency}
					/>
				</td>
				{/* <td className={className} /> */}
			</tr>
		);
	}
}

export default injectIntl(withStyles(s)(GrossEarningItem));
