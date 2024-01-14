import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Redux Form
import { Field, reduxForm, formValueSelector } from 'redux-form';
// Redux
import { connect } from 'react-redux';

import {
	Button,
	FormGroup,
	FormControl
} from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './ModalForm.css';
import bt from '../../../../components/commonStyle.css';

import validate from './validate';
import submit from './submit';

// Translation
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from '../../../../locale/messages';

// Components
import CurrencyConverter from '../../../CurrencyConverter';

class PaymentForm extends Component {
	static propTypes = {
		availableCurrencies: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			symbol: PropTypes.string.isRequired,
			isEnable: PropTypes.bool.isRequired,
			isPayment: PropTypes.bool.isRequired
		})),
		type: PropTypes.string,
		reservationId: PropTypes.number,
		email: PropTypes.string,
		payoutId: PropTypes.number,
		amount: PropTypes.number,
		amountCurrency: PropTypes.string,
		paymentMethodId: PropTypes.number
	};

	renderFormControlSelect = ({ input, label, meta: { touched, error }, children, className }) => {
		const { formatMessage } = this.props.intl;
		return (
			<FormGroup className={s.formGroup}>
				<label className={s.labelTextNew} >{label}</label>
				<FormControl componentClass="select" {...input} className={className} >
					{children}
				</FormControl>
				{touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
			</FormGroup>
		)
	}

	render() {
		const { error, handleSubmit, submitting } = this.props;
		const { availableCurrencies } = this.props;
		const { formatMessage } = this.props.intl;
		const { type, reservationId, email, payoutId, amount, amountCurrency, paymentMethodId, last4Digits } = this.props;
		let typeLabel;
		if (type === 'host') {
			typeLabel = 'Host Payout';
		} else {
			typeLabel = 'Refund to Guest';
		}

		return (
			<form onSubmit={handleSubmit(submit)}>
				{error && <strong>{formatMessage(error)}</strong>}
				<div className={s.modelFlex}>
					<label className={s.labelTextNew} ><FormattedMessage {...messages.transferType} /></label>
					<span>{typeLabel}</span>
				</div>
				<div className={s.modelFlex}>
					<label className={s.labelTextNew} ><FormattedMessage {...messages.transferAmount} /></label>
					<CurrencyConverter
						amount={amount}
						from={amountCurrency}
					/>
				</div>
				<div className={s.modelFlex}>
					<label className={s.labelTextNew} ><FormattedMessage {...messages.receiverLabel} /></label>
					<>
						{
							(type != 'host' || paymentMethodId == 1) && <span>
								{email}
							</span>
						}
						{
							type == 'host' && paymentMethodId == 2 && <span>
								****{last4Digits}
							</span>
						}
					</>
				</div>
				{
					paymentMethodId == 1 && <Field
						name="paymentCurrency"
						component={this.renderFormControlSelect}
						label={formatMessage(messages.currency)}
						className={cx(bt.commonControlSelect, 'commonAdminSelect')}
					>
						<option value="">{formatMessage(messages.chooseCurrency)}</option>
						{
							availableCurrencies != null && availableCurrencies.length > 0 && availableCurrencies.map((currency, index) => {
								if (currency.isEnable === true && currency.isPayment) {
									return <option key={index} value={currency.symbol}>{currency.symbol}</option>
								}
							})
						}
					</Field>
				}
				<Button
					className={cx(bt.btnPrimary, s.spaceTop3)}
					block
					type="submit"
					disabled={submitting || error}
				>
					<FormattedMessage {...messages.confirmLabel} />
				</Button>
			</form>
		);
	}
}

PaymentForm = reduxForm({
	form: 'ReservationPaymentForm', // a unique name for this form
	validate
})(PaymentForm);

const selector = formValueSelector('ReservationPaymentForm');

const mapState = (state) => ({
	availableCurrencies: state.currency.availableCurrencies,
	type: selector(state, 'type'),
	reservationId: selector(state, 'reservationId'),
	email: selector(state, 'receiverEmail'),
	payoutId: selector(state, 'payoutId'),
	amount: selector(state, 'amount'),
	amountCurrency: selector(state, 'currency'),
	paymentMethodId: selector(state, 'paymentMethodId'),
	last4Digits: selector(state, 'last4Digits'),
});

const mapDispatch = {
};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(PaymentForm)));