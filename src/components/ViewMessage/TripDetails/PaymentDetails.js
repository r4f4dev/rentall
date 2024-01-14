import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import moment from 'moment';
// Redux
import { connect } from 'react-redux';
import {
	Row,
	Col,
	Tooltip,
	OverlayTrigger
} from 'react-bootstrap';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../ViewMessage.css';
import * as FontAwesome from 'react-icons/lib/fa';

// Component
import CurrencyConverter from '../../CurrencyConverter';

// Helper
import { convert } from '../../../helpers/currencyConvertion';

// Locale
import messages from '../../../locale/messages';

class PaymentDetails extends Component {
	static propTypes = {
		formatMessage: PropTypes.any,
		userType: PropTypes.string.isRequired,
		basePrice: PropTypes.number.isRequired,
		cleaningPrice: PropTypes.number.isRequired,
		monthlyDiscount: PropTypes.number,
		weeklyDiscount: PropTypes.number,
		currency: PropTypes.string.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		serviceFees: PropTypes.shape({
			guest: PropTypes.shape({
				type: PropTypes.string.isRequired,
				value: PropTypes.number.isRequired,
				currency: PropTypes.string.isRequired
			}).isRequired,
			host: PropTypes.shape({
				type: PropTypes.string.isRequired,
				value: PropTypes.number.isRequired,
				currency: PropTypes.string.isRequired
			}).isRequired
		}).isRequired,
		base: PropTypes.string.isRequired,
		rates: PropTypes.object.isRequired
	};

	static defaultProps = {
		startDate: null,
		endDate: null,
		basePrice: 0,
		cleaningPrice: 0,
		monthlyDiscount: 0,
		weeklyDiscount: 0
	};

	render() {
		const { startDate, endDate, monthlyDiscount, weeklyDiscount, userType } = this.props;
		const { serviceFees, base, rates } = this.props;
		const { reservationData } = this.props;
		const { formatMessage } = this.props.intl;

		function LinkWithTooltip({ id, children, href, tooltip }) {
			return (
				<OverlayTrigger
					overlay={<Tooltip className={s.tooltip} id={id}>{tooltip}</Tooltip>}
					placement="top"
					delayShow={300}
					delayHide={150}
				>
					{children}
				</OverlayTrigger>
			);
		}

		let guestServiceFee = 0, hostServiceFee = 0;
		let isSpecialPricingAssinged = (reservationData && reservationData.bookingSpecialPricing.length > 0) ? true : false;
		let isDayTotal = 0, isCleaningPrice = 0, taxRateFee = 0;
		let isDiscount, isDiscountType;
		let momentStartDate, momentEndDate, dayDifference, priceForDays = 0, totalWithoutServiceFee = 0;
		let discount = 0, discountType, total = 0, hostEarnings = 0, isAverage = 0;
		let currency = reservationData && reservationData.currency;

		if (startDate != null && endDate != null) {
			momentStartDate = moment(startDate);
			momentEndDate = moment(endDate);
			dayDifference = momentEndDate.diff(momentStartDate, 'days');

			if (dayDifference > 0) {
				if (isSpecialPricingAssinged) {
					reservationData && reservationData.bookingSpecialPricing && reservationData.bookingSpecialPricing.map((item, index) => {
						priceForDays = priceForDays + Number(item.isSpecialPrice);
					});
				} else {
					priceForDays = Number(reservationData.basePrice) * Number(dayDifference);
				}
			}
		}

		isAverage = Number(priceForDays) / Number(dayDifference);
		isDayTotal = isAverage.toFixed(2) * dayDifference;
		priceForDays = isDayTotal;

		isDiscount = reservationData && reservationData.discount;
		isDiscountType = reservationData && reservationData.discountType;
		isCleaningPrice = reservationData && reservationData.cleaningPrice;
		taxRateFee = reservationData && reservationData.taxRate && reservationData.taxRate > 0 ? reservationData.taxRate : 0;
		guestServiceFee = reservationData && reservationData.guestServiceFee;
		hostServiceFee = reservationData && reservationData.hostServiceFee;

		if (dayDifference >= 7) {
			if (monthlyDiscount > 0 && dayDifference >= 28) {
				discount = isDiscount;
				discountType = isDiscountType;
			} else {
				if (weeklyDiscount > 0) {
					discount = isDiscount;
					discountType = isDiscountType;
				}
			}
		}

		totalWithoutServiceFee = (priceForDays + isCleaningPrice) - discount;

		if (userType === 'host') {
			total = (priceForDays + isCleaningPrice) - discount;
		} else {
			total = (priceForDays + guestServiceFee + isCleaningPrice) - discount;
		}

		hostEarnings = total - hostServiceFee;

		return (
			<div>
				<hr className={s.horizondalLine} />
				<h4 className={cx(s.tripDetailHeading, s.spaceBottom15)}>
					<span><FormattedMessage {...messages.payment} /></span>
				</h4>
				{
					<div className={cx(s.paymentDetailText, s.paymentFlex)}>
						<div className={cx(s.textLeft, 'textAlignRightRtl')}>
							<div className={s.displayFlex}>
								{
									isSpecialPricingAssinged && <LinkWithTooltip
										tooltip="Average rate per night for your trip."
										id="tooltip-1"
									>
										<span className={cx(s.iconSection, s.toolTipColor, 'darkModeTextWhite')}>
											<FontAwesome.FaQuestion className={s.instantIcon} />
										</span>
									</LinkWithTooltip>
								}
								<div className='directionLtr'>
									<span className='darkModeTextWhite'>
										<CurrencyConverter
											amount={isAverage}
											from={currency}
										/>
									</span>
									<span className='darkModeTextWhite'>
										{' x'} {dayDifference} {dayDifference > 1 ? formatMessage(messages.nights) : formatMessage(messages.night)}
									</span>
								</div>
							</div>
						</div>
						<div className={cx(s.textRight, 'textAlignLeftRtl')}>
							<span className={cx(s.txtBreak, 'darkModeTextWhite')}>
								<CurrencyConverter
									amount={priceForDays}
									from={currency}
								/>
							</span>
						</div>

					</div>
				}
				{
					isCleaningPrice > 0 && <div className={cx(s.paymentDetailText, s.paymentFlex)}>
						<div className={cx(s.textLeft, 'textAlignRightRtl')}>
							<span className='darkModeTextWhite'><FormattedMessage {...messages.cleaningFee} /></span>
						</div>
						<div className={cx(s.textRight, 'textAlignLeftRtl')}>
							<span className={cx(s.txtBreak, 'darkModeTextWhite')}>
								<CurrencyConverter
									amount={isCleaningPrice}
									from={currency}
								/>
							</span>
						</div>
					</div>
				}
				{/* 
				{
					taxRateFee > 0 && <Row className={s.paymentDetailText}>
						<Col xs={7} sm={7} className={s.textLeft}>
							<span><FormattedMessage {...messages.taxRate} /></span>
						</Col>
						<Col xs={5} sm={5} className={s.textRight}>
							<span>
								<CurrencyConverter
									amount={taxRateFee}
									from={currency}
								/>
							</span>
						</Col>
					</Row>
				} */}

				{
					discount > 0 && <div className={cx(s.paymentDetailText, s.paymentFlex)}>
						<div className={cx(s.textLeft, 'textAlignRightRtl')}>
							<span className='darkModeTextWhite'>{discountType}</span>
						</div>
						<div className={cx(s.textRight, s.discountText, 'textAlignLeftRtl')}>
							<span className={cx(s.txtBreak, 'darkModeTextWhite')}>
								- <CurrencyConverter
									amount={discount}
									from={currency}
								/>
							</span>
						</div>
					</div>
				}

				{
					userType === 'guest' && guestServiceFee > 0 && <div className={cx(s.paymentDetailText, s.paymentFlex)}>
						<div className={cx(s.textLeft, 'textAlignRightRtl')}>
							<span className='darkModeTextWhite'><FormattedMessage {...messages.serviceFee} /></span>
						</div>
						<div className={cx(s.textRight, 'textAlignLeftRtl')}>
							<span className={cx(s.txtBreak, 'darkModeTextWhite')}>
								<CurrencyConverter
									amount={guestServiceFee}
									from={currency}
								/>
							</span>
						</div>
					</div>
				}

				{
					userType === 'guest' && <hr className={s.horizondalLine} />
				}

				<Row className={cx({ [s.textBold]: userType === 'guest' }, { [s.paymentDetailText]: userType === 'host' })}>
					<Col xs={6} sm={6} className={cx(s.textLeft, 'textAlignRightRtl')}>
						<span className={cx({ [s.paymentTotal]: userType === 'guest' })}><FormattedMessage {...messages.subTotal} /></span>
					</Col>
					<Col xs={6} sm={6} className={cx(s.textRight, 'textAlignLeftRtl')}>
						<span className={cx({ [s.paymentTotal]: userType === 'guest' }, s.txtBreak)}>
							<CurrencyConverter
								amount={total}
								from={currency}
							/>
						</span>
					</Col>
				</Row>

				{
					userType === 'host' && hostServiceFee > 0 && <div className={cx(s.paymentDetailText, s.paymentFlex)}>
						<div className={cx(s.textLeft, 'textAlignRightRtl')}>
							<span className='darkModeTextWhite'><FormattedMessage {...messages.serviceFee} /></span>
						</div>
						<div className={cx(s.textRight, 'textAlignLeftRtl')}>
							<span className='darkModeTextWhite'>
								-
								<CurrencyConverter
									amount={hostServiceFee}
									from={currency}
								/>
							</span>
						</div>
					</div>
				}

				{
					userType === 'host' && <hr className={s.horizondalLine} />
				}


				{
					userType === 'host' && <div className={cx(s.textBold, s.paymentFlex)}>
						<div className={cx(s.textLeft, 'textAlignRightRtl')}>
							<span className={s.paymentTotal}><FormattedMessage {...messages.youEarn} /></span>
						</div>
						<div className={cx(s.textRight, 'textAlignLeftRtl')}>
							<span className={cx(s.paymentTotal, s.txtBreak)}>
								<CurrencyConverter
									amount={hostEarnings}
									from={currency}
								/>
							</span>
						</div>
					</div>
				}
			</div>
		);
	}
}

const mapState = (state) => ({
	serviceFees: state.book.serviceFees,
	base: state.currency.base,
	rates: state.currency.rates
});

const mapDispatch = {
};

export default injectIntl(withStyles(s)(connect(mapState, mapDispatch)(PaymentDetails)));