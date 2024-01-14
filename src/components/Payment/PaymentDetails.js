import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import moment from 'moment';

import {
	Row,
	Col
} from 'react-bootstrap';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Payment.css';

import CurrencyConverter from '../CurrencyConverter';

// Locale
import messages from '../../locale/messages';

import Faq from '../../../public/SiteIcons/question.svg'

class PaymentDetails extends Component {
	static propTypes = {
		checkIn: PropTypes.string.isRequired,
		checkOut: PropTypes.string.isRequired,
		total: PropTypes.number.isRequired,
		basePrice: PropTypes.number.isRequired,
		cleaningPrice: PropTypes.number.isRequired,
		discount: PropTypes.number,
		discountType: PropTypes.string,
		serviceFee: PropTypes.number.isRequired,
		currency: PropTypes.string.isRequired,
		formatMessage: PropTypes.any,
	};

	render() {
		const { formatMessage } = this.props.intl;
		const { checkIn, checkOut, basePrice, cleaningPrice, total } = this.props;
		const { discount, discountType, serviceFee, currency } = this.props;
		let momentStartDate, momentEndDate, dayDifference, priceForDays;

		if (checkIn != null && checkOut != null) {
			momentStartDate = moment(checkIn);
			momentEndDate = moment(checkOut);
			dayDifference = momentEndDate.diff(momentStartDate, 'days');
			priceForDays = Number(basePrice) * Number(dayDifference);
		}
		let subTotal = total + serviceFee;

		return (
			<div>
				<div>
					<h3 className={cx(s.pricingTitle, 'rtlBookText')}><FormattedMessage {...messages.priceDetails} /></h3>

					<div className={cx(s.grid, 'textWhite')}>
						{/* <thead>
							<tr>
								<th className={cx('hide')}><FormattedMessage {...messages.tabDescription} /></th>
								<th className={cx('hide')}><FormattedMessage {...messages.transferAmount} /></th>
							</tr>
						</thead> */}

						<div className={s.dFlex}>
							<div className={s.specialPriceIcon}>

								<span className={s.iconSection}>
									<img src={Faq} className={cx(s.faqImage, 'faqRtl')} />
								</span>

								<div className={cx(s.tltip, s.relativeSection)}>
									<FormattedMessage {...messages.averagePricePerNight} />
								</div>
							</div>
							<span className={cx(s.specialPriceText, 'directionLtrTextRight')}>
								<CurrencyConverter
									amount={basePrice}
									from={currency}
								/>
								{' x'} {dayDifference} {dayDifference > 1 ? formatMessage(messages.nights) : formatMessage(messages.night)}
							</span>
						</div>
						<div>
							<CurrencyConverter
								amount={priceForDays}
								from={currency}
							/>
						</div>

					</div>
					{
						cleaningPrice > 0 && <div className={cx(s.grid, 'textWhite')}>
							<div><FormattedMessage {...messages.cleaningFee} /></div>
							<div>
								<CurrencyConverter
									amount={cleaningPrice}
									from={currency}
								/>
							</div>
						</div>
					}
					<div className={cx(s.grid, 'textWhite')}>
						<div><FormattedMessage {...messages.serviceFee} /></div>
						<div>
							<CurrencyConverter
								amount={serviceFee}
								from={currency}
							/>
						</div>
					</div>
					{
						discount > 0 && <div className={cx(s.grid, 'textWhite')}>
							<div>{discountType}</div>
							<div>
								- <CurrencyConverter
									amount={discount}
									from={currency}
								/>

							</div>
						</div>
					}
					<div className={cx(s.grid, s.totalValue, 'textWhite')}>
						<div><FormattedMessage {...messages.total} /></div>
						<div> <CurrencyConverter
							amount={subTotal}
							from={currency}
							// superSymbol
						/></div>
					</div>

				</div>
			</div>
		);
	}
}

export default injectIntl(withStyles(s)(PaymentDetails));
