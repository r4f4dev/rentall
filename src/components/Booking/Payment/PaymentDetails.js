import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import {
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Payment.css';

// Component
import CurrencyConverter from '../../CurrencyConverter';

// Locale
import messages from '../../../locale/messages';
import Faq from '../../../../public/SiteIcons/question.svg'

class PaymentDetails extends Component {
  static propTypes = {
    basePrice: PropTypes.number.isRequired,
    cleaningPrice: PropTypes.number,
    currency: PropTypes.string.isRequired,
    dayDifference: PropTypes.number.isRequired,
    discount: PropTypes.number,
    discountType: PropTypes.string,
    priceForDays: PropTypes.number.isRequired,
    serviceFees: PropTypes.number.isRequired,
    subtotal: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    formatMessage: PropTypes.any,
    bookingSpecialPricing: PropTypes.array,
    isSpecialPriceAssigned: PropTypes.bool,
    tariff: PropTypes.object,
  };

  static defaultProps = {
    bookingSpecialPricing: [],
    isSpecialPriceAssigned: false,
  };


  render() {
    const { cleaningPrice, currency, dayDifference, tariff } = this.props;
    const { priceForDays, serviceFees, discount, discountType, total, subtotal} = this.props;
    const { formatMessage } = this.props.intl;
    const { isSpecialPriceAssigned, isAverage } = this.props;

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

    return (
      <div>
        <h3 className={cx(s.pricingTitle, 'rtlBookText')}><FormattedMessage {...messages.priceDetails} /></h3>
        <div className={cx(s.grid, 'textWhite')}>
          <div>
            <div className={s.specialPriceIcon}>
              {
                isSpecialPriceAssigned &&
                <span className={s.iconSection}>
                  <img src={Faq} className={cx(s.faqImage, 'faqRtl')} />
                </span>

              }
              <div className={cx(s.tltip, s.relativeSection)}>
                <FormattedMessage {...messages.averagePricePerNight} />
              </div>
            </div>
            <span className={cx(s.specialPriceText, 'directionLtrTextRight')}>

              <CurrencyConverter
                amount={isAverage}
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
        {cleaningPrice > 0 && <div className={cx(s.grid, 'textWhite')}>
          <div><FormattedMessage {...messages.cleaningFee} /></div>
          <div>
            <CurrencyConverter
              amount={cleaningPrice}
              from={currency}
            />
          </div>
        </div>
        }
        {serviceFees > 0 && <div className={cx(s.grid, 'textWhite')}>
          <div><FormattedMessage {...messages.serviceFee} /></div>
          <div>
            <CurrencyConverter
              amount={serviceFees}
              from={currency}
            />
          </div>
        </div>
        }
        {discount > 0 && <div className={cx(s.grid, 'textWhite', s.discountText)}>
          <div>{discountType}</div>
          <div>
            -  <CurrencyConverter
              amount={discount}
              from={currency}
            />
          </div>
        </div>
        }
      
        <div className={cx(s.grid, s.totalValue, 'textWhite')}>
          <div><FormattedMessage {...messages.subTotal} /></div>
          <div> <CurrencyConverter
            amount={subtotal}
            from={currency}
          /></div>
        </div>

        <div className={cx(s.grid, s.totalValue, 'textWhite')}>
          <div><FormattedMessage {...messages.total} /></div>
          <div> <CurrencyConverter
            amount={total}
            from={currency}
          /></div>
        </div>
      </div>
    );
  }
}



const selector = formValueSelector('PaymentForm'); // <-- same as form name

const mapState = (state) => ({
  dayDifference: selector(state, 'dayDifference'),
  priceForDays: selector(state, 'priceForDays'),
  discount: selector(state, 'discount'),
  discountType: selector(state, 'discountType'),
  serviceFees: selector(state, 'guestServiceFee'),
  total: selector(state, 'totalValue'),
  subtotal: selector(state, 'subtotal'),
  isSpecialPriceAssigned: selector(state, 'isSpecialPriceAssigned'),
  isAverage: selector(state, 'isSpecialPriceAverage')
});

const mapDispatch = {
};


export default injectIntl(withStyles(s)(connect(mapState, mapDispatch)(PaymentDetails)));
