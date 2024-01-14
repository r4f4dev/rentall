import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import moment from 'moment';

// Redux Form
import { Field, reduxForm, formValueSelector } from 'redux-form';
// Redux
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './ModalForm.css';
import bt from '../../../../components/commonStyle.css';


import AvailabilityCalendar from '../../../../components/ViewListing/AvailabilityCalendar';
import Loader from '../../../../components/Loader';
import IncrementBtnCircle from '../../../../components/IncrementBtnCircle';

// Translation
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from '../../../../locale/messages';
import { convert } from '../../../../helpers/currencyConvertion';

// Graphql
import BlockedDatesQuery from '../../../../routes/viewListing/BlockedDates.graphql';
import ListingDataQuery from '../../../../routes/viewListing/getListingData.graphql';

//image
import gusetIcon from '../../../../../public/SiteIcons/paymenyGusetIcon.svg';
import { applyPaymentModal } from '../../../../actions/modalActions';

class EditPayment extends Component {

	constructor(props) {
		super(props);
		this.handleSubmitButton = this.handleSubmitButton.bind(this);
	}

	renderIncrementButton = (field) => (
		<IncrementBtnCircle
			{...field}
		/>
	);

	async handleSubmitButton() {
		const { applyPaymentModal, checkIn, checkOut, guests } = this.props;
		const { serviceFees, base, rates, currency, tariff, listData, listData: { listingData: { weeklyDiscount, monthlyDiscount, basePrice, cleaningPrice } } } = this.props;
		const { formatMessage } = this.props.intl;

		let guestServiceFee = 0, hostServiceFee = 0, priceForDays = 0, hostServiceFeeType = '', hostServiceFeeValue = 0;
		let discount = 0, discountType, totalWithoutFees = 0;
		let momentStartDate, momentEndDate, dayDifference, isAverage = 0;
		let bookingSpecialPricing = [], isSpecialPriceAssigned = false;
		let isDayTotal = 0, totalWithoutServiceFee = 0, currentDay, total = 0;

		if (checkIn != null && checkOut != null) {
			momentStartDate = moment(checkIn);
			momentEndDate = moment(checkOut);
			dayDifference = momentEndDate.diff(momentStartDate, 'days');

			//New 
			if (dayDifference > 0) {

				let stayedNights = [];
				// Find stayed nights
				for (let i = 0; i < dayDifference; i++) {
					let currentDate = moment(checkIn).add(i, 'day');
					stayedNights.push(currentDate);
				}

				if (stayedNights && stayedNights.length > 0) {
					stayedNights.map((item, key) => {
						let isSpecialPricing;
						if (item) {
							let pricingRow, currentPrice;
							currentDay = (moment(item).format('dddd').toLowerCase());
							isSpecialPricing = listData && listData.listBlockedPrice.find(o => moment(item).format('MM/DD/YYYY') == moment(o.blockedDates).format('MM/DD/YYYY'));

							if (isSpecialPricing && isSpecialPricing.isSpecialPrice) {
								isSpecialPriceAssigned = true;
								currentPrice = Number(isSpecialPricing.isSpecialPrice);
							} else {
								currentPrice = Number(basePrice);
							}
							// Price object
							pricingRow = {
								blockedDates: item,
								isSpecialPrice: currentPrice,
							};
							bookingSpecialPricing.push(pricingRow);
						}
					});
				}
			}

			if (isSpecialPriceAssigned) {
				bookingSpecialPricing.map((item, index) => {
					priceForDays = priceForDays + Number(item.isSpecialPrice);
				});
			} else {
				bookingSpecialPricing.map((item, index) => {
					priceForDays = priceForDays + Number(item.isSpecialPrice);
				});
			}
		}

		isAverage = Number(priceForDays) / Number(dayDifference);
		isDayTotal = isAverage.toFixed(2) * dayDifference;
		priceForDays = isDayTotal;

		if (dayDifference >= 7) {
			if (monthlyDiscount > 0 && dayDifference >= 28) {
				discount = (Number(priceForDays) * Number(monthlyDiscount)) / 100;
				discountType = monthlyDiscount + formatMessage(messages.monthlyPriceDiscount);
			} else {
				if (weeklyDiscount > 0) {
					discount = (Number(priceForDays) * Number(weeklyDiscount)) / 100;
					discountType = weeklyDiscount + formatMessage(messages.weeklyPriceDiscount);
				}
			}
		}

		totalWithoutServiceFee = (isDayTotal + cleaningPrice) - discount;

		// if (serviceFees) {
		// 	if (serviceFees.guest.type === 'percentage') {
		// 		guestServiceFee = totalWithoutServiceFee * (Number(serviceFees.guest.value) / 100);
		// 	} else {
		// 		guestServiceFee = convert(base, rates, serviceFees.guest.value, serviceFees.guest.currency, currency);
		// 	}
		// 	if (serviceFees.host.type === 'percentage') {
		// 		hostServiceFeeType = serviceFees.host.type;
		// 		hostServiceFeeValue = serviceFees.host.value;
		// 		hostServiceFee = totalWithoutServiceFee * (Number(serviceFees.host.value) / 100);
		// 	} else {
		// 		hostServiceFeeType = serviceFees.host.type;
		// 		hostServiceFeeValue = serviceFees.host.value;
		// 		hostServiceFee = convert(base, rates, serviceFees.host.value, serviceFees.host.currency, currency);
		// 	}
		// }
		if (tariff) {
			if (tariff.guest_is_percent==1) {
			  guestServiceFee = totalWithoutServiceFee * (Number(tariff.guest_commision) / 100);
			} else {
			  guestServiceFee = convert(base, rates, tariff.guest_commision, serviceFees.guest.currency, currency);
			}
	  
			if (tariff.host_is_percent==1) {
			  hostServiceFeeType = tariff.host_is_percent == 1 ? 'percentage' : 'fixed';
			  hostServiceFeeValue = tariff.host_commision;
			  hostServiceFee = totalWithoutServiceFee * (Number(tariff.host_commision) / 100);
			} else {
			  hostServiceFeeType = tariff.host_is_percent == 1 ? 'percentage' : 'fixed';
			  hostServiceFeeValue = tariff.host_commision;
			  hostServiceFee = convert(base, rates, tariff.host_commision, serviceFees.host.currency, currency);
			}
	  
		  }

		totalWithoutFees = (priceForDays + cleaningPrice) - discount;
		// total = (priceForDays + guestServiceFee + cleaningPrice) - discount;
		
		subtotal = (priceForDays + guestServiceFee + cleaningPrice) - discount;
		total = (priceForDays + guestServiceFee + cleaningPrice) - discount;
		
		if(tariff.is_only_commission==1){
		  total = guestServiceFee
		}
	

		let curentFormValues = {
			discount,
			discountType,
			guestServiceFee,
			hostServiceFee,
			total: totalWithoutFees,
			isSpecialPriceAssigned,
			bookingSpecialPricing: JSON.stringify(bookingSpecialPricing),
			isSpecialPriceAverage: isAverage.toFixed(2),
			dayDifference,
			hostServiceFeeType,
			hostServiceFeeValue,
			priceForDays,
			totalValue: total
		};

		await applyPaymentModal({ checkIn, checkOut, guests, curentFormValues });
	}

	render() {
		const { listId, checkIn, checkOut, maximumStay, guests, minimumStay, availability } = this.props;
		const { getListingData: { loading, UserListing } } = this.props;
		const { ListingBlockedDates } = this.props;
		const { formatMessage } = this.props.intl;
		let paymentCalendarHeight = 'paymentCalendarHeight';
		let disabled = false;
		if (maximumStay || minimumStay || !availability) disabled = true;

		if (loading && !UserListing) {
			return <Loader type="text" />
		} else {
			return (
				<div>
					<div className={s.flex}>
						<div>
							<div className={s.title}><FormattedMessage {...messages.guests} /></div>
							<div className={cx(s.guestModalFlex, 'svgImg')}><img src={gusetIcon} className={cx(s.iconCss, 'iconCssRTL')} /><span>{guests} {' '} {guests > 1 ? <FormattedMessage {...messages.guests} /> : <FormattedMessage {...messages.guest} />}</span></div>
						</div>
						<div>
							<Field
								name="guests"
								type="text"
								component={this.renderIncrementButton}
								maxValue={UserListing.personCapacity}
								minValue={1}
								incrementBy={1}
							/>
						</div>
					</div>

					<AvailabilityCalendar
						listId={listId}
						loading={loading || ListingBlockedDates.loading}
						blockedDates={
							ListingBlockedDates.UserListing != null ?
								ListingBlockedDates.UserListing.blockedDates : undefined
						}
						listingData={UserListing.listingData || undefined}
						country={UserListing.country}
						queryStartDate={checkIn}
						queryEndDate={checkOut}
						formName={'PaymentFormModal'}
						paymentCalendar={true}
						paymentCalendarHeight={paymentCalendarHeight}
					/>
					<div className={cx(s.textAignRight, 'textAlignLeftRtlEdit')}>
						<Button
							className={cx(s.applyPaymenyBtn)}
							disabled={maximumStay}
							onClick={this.handleSubmitButton}>
							<FormattedMessage {...messages.applyFilters} />
						</Button>
					</div>

					{
						maximumStay &&
						<div className={s.errorMessage}>
							<FormattedMessage {...messages.maximumStay} /> {UserListing.listingData.maxNight} {UserListing.listingData.maxNight > 1 ? formatMessage(messages.nights) : formatMessage(messages.night)}
						</div>
					}
					{
						minimumStay &&
						<div className={s.errorMessage}>
							<FormattedMessage {...messages.minimumNightStay} /> {UserListing.listingData.minNight} {UserListing.listingData.minNight > 1 ? formatMessage(messages.nights) : formatMessage(messages.night)}
						</div>
					}
					{
						!availability && !maximumStay && !minimumStay &&
						<div className={s.errorMessage}>
							<FormattedMessage {...messages.hostErrorMessage2} />
						</div>
					}
				</div>
			);
		}

	}
}

EditPayment = reduxForm({
	form: 'PaymentFormModal', // a unique name for this form
	destroyOnUnmount: true
})(EditPayment);

const selector = formValueSelector('PaymentFormModal');
const selectorPayment = formValueSelector('PaymentForm');

const mapState = (state) => ({
	availability: state.viewListing.availability,
	maximumStay: state.viewListing.maximumStay,
	minimumStay: state.viewListing.minimumStay,
	checkIn: selector(state, 'checkIn'),
	checkOut: selector(state, 'checkOut'),
	guests: selector(state, 'guests'),
	serviceFees: state.book.serviceFees,
	base: state.currency.base,
	rates: state.currency.rates,
	listData: state.book.data,
	currency: selectorPayment(state, 'currency'),
});

const mapDispatch = {
	applyPaymentModal
};

export default compose(
	injectIntl,
	withStyles(s, bt),
	connect(mapState, mapDispatch),
	graphql(ListingDataQuery,
		{
			name: 'getListingData',
			options: (props) => ({
				variables: {
					listId: props.listId,
					preview: true,
				},
				fetchPolicy: 'network-only',
				ssr: true
			})
		}
	),
	graphql(BlockedDatesQuery,
		{
			name: 'ListingBlockedDates',
			options: (props) => ({
				variables: {
					listId: props.listId,
					preview: true,
				},
				fetchPolicy: 'network-only',
				ssr: false
			})
		}
	))(EditPayment);