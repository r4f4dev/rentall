import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import s from './Transaction.css';
import { convert } from '../../helpers/currencyConvertion';
import cx from 'classnames';
// Locale
import messages from '../../locale/messages';

// Component
import CurrencyConverter from '../CurrencyConverter';

//Images
import paidOutImage from '../../../public/SiteIcons/paidOutIcon.svg';

class TotalAmount extends Component {
	static propTypes = {
		className: PropTypes.string.isRequired,
		mode: PropTypes.string.isRequired
	};

	static defaultProps = {
		data: []
	};

	render() {
		const { className, mode, data, base, rates, toCurrency } = this.props;
		const { formatMessage } = this.props.intl;
		let label, currency, amount = 0, convertedTotal = 0, convertedHostService = 0;
		if (mode === 'completed') {
			label = formatMessage(messages.paidOut);
			if (data != null && data.length > 0) {
				data.map((item) => {
					let hostTransactionAmount = item && item.hostTransaction && item.hostTransaction.amount ? item.hostTransaction.amount : 0;
					let hostTransactionCurrency = item && item.hostTransaction && item.hostTransaction.currency ? item.hostTransaction.currency : base;
					convertedTotal = convert(base, rates, hostTransactionAmount, hostTransactionCurrency, toCurrency);
					amount = amount + convertedTotal;
					currency = hostTransactionCurrency;
				})
			}
		} else {
			label = formatMessage(messages.pendingPayouts);
			if (data != null && data.length > 0) {
				data.map((item) => {
					convertedTotal = convert(base, rates, item.total, item.currency, toCurrency);
					convertedHostService = convert(base, rates, item.hostServiceFee, item.currency, toCurrency);
					amount = amount + (convertedTotal - convertedHostService);
					currency = item.currency;
				})
			}
		}
		return (
			<h3 className={s.totalAmountText}>
				<span className={'svgImg'}><img src={paidOutImage} className={cx(s.paidImg, 'paidImgRTL')} /></span>
				<span>{label}: </span>
				<span>
					<CurrencyConverter
						amount={amount}
						from={toCurrency}
					/>
				</span>
			</h3>
		);
	}
}


const mapState = (state) => ({
	base: state.currency.base,
	rates: state.currency.rates,
	toCurrency: state.currency.to,
});

const mapDispatch = {
};

export default injectIntl(withStyles(s)(connect(mapState, mapDispatch)(TotalAmount)));
