
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Translation
import { injectIntl, FormattedMessage } from 'react-intl';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Price.css';
import {
  Button
} from 'react-bootstrap';
import cx from 'classnames';

// Redux Form
import { Field, reduxForm, formValueSelector, change, submit as submitForm } from 'redux-form';

// Redux
import { connect } from 'react-redux';

// Locale
import messages from '../../../../locale/messages';

// Submit
import submit from '../../SearchForm/submit';

import PriceRange from '../../PriceRange';
import CurrencyConverter from '../../../CurrencyConverter';

class Price extends Component {

  static propTypes = {
    className: PropTypes.any,
    handleTabToggle: PropTypes.any,
    isExpand: PropTypes.bool,
    searchSettings: PropTypes.shape({
      minPrice: PropTypes.number.isRequired,
      maxPrice: PropTypes.number.isRequired,
      priceRangeCurrency: PropTypes.string.isRequired
    }).isRequired,
  };

  static defaultProps = {
    isExpand: false,
    searchSettings: {
      priceRangeCurrency: "USD",
    }
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setBtnWrapperRef = this.setBtnWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  async handleSubmit() {
    const { className, handleTabToggle, isExpand, handleSubmit } = this.props;
    const { change, submitForm } = this.props;
    await change('currentPage', 1);
    // submitForm('SearchForm');
    handleSubmit();
    handleTabToggle('price', !isExpand)
  }

  handleReset() {
    const { className, handleTabToggle, isExpand } = this.props;
    const { change, submitForm } = this.props;
    change('priceRange', null);
    change('priceRangeLabel', undefined);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  setBtnWrapperRef(node) {
    this.btnWrapperRef = node;
  }

  handleClickOutside(event) {
    const { className, handleTabToggle, isExpand, handleSubmit } = this.props;
    const { change, submitForm } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      change('currentPage', 1);
      // submitForm('SearchForm');
      handleSubmit();
      if (this.btnWrapperRef && !this.btnWrapperRef.contains(event.target)) {
        handleTabToggle('price', !isExpand)
      }
    }
  }

  renderPriceRange = ({ input, label, meta: { touched, error }, className, min, max, rangeCurrency, minPrice, maxPrice }) => {
    const { formatMessage } = this.props.intl;
    const { handleSubmit, change } = this.props;
    return (
      <div className={cx(s.priceRangeContainer, s.space4)}>
        <PriceRange
          {...input}
          min={min}
          max={max}
          minPrice={minPrice}
          maxPrice={maxPrice}
          from={rangeCurrency}
        />
      </div>
    )
  }

  render() {
    const { className, handleTabToggle, isExpand, searchSettings } = this.props;
    const { priceRangeLabel, priceRange } = this.props;
    const { formatMessage } = this.props.intl;

    let minPrice = searchSettings.minPrice;
    let maxPrice = searchSettings.maxPrice;
    let rangeCurrency = searchSettings.priceRangeCurrency;
    let minPriceRange = priceRangeLabel != undefined ? priceRangeLabel[0] : minPrice;
    let maxPriceRange = priceRangeLabel != undefined ? priceRangeLabel[1] : maxPrice;

    return (
      <div className={className}>
        <div ref={this.setBtnWrapperRef}>
          <Button
            className={cx({ [s.btnSecondary]: (isExpand === true || (priceRange && priceRange.length > 1)) }, s.btn, s.responsiveFontsize, s.searchBtn, 'searchBtnDark')}
            onClick={() => handleTabToggle('price', !isExpand)}>
            <FormattedMessage {...messages.price} />
            {
              priceRange && priceRange.length > 1 && <span>
                <CurrencyConverter amount={minPriceRange} from={rangeCurrency} />

                {' - '}
                <CurrencyConverter amount={maxPriceRange} from={rangeCurrency} />
              </span>
            }
          </Button>
        </div>
        {
          isExpand && <div className={cx(s.searchFilterPopover, 'searchFilterPopoverRtl', 'bgBlack')} ref={this.setWrapperRef}>
            <div className={s.searchFilterPopoverContent}>
              <div className={s.titleCss}> <FormattedMessage {...messages.priceRange} /> </div>
              <p className={cx(s.captionTitle, s.space4, 'priceBoxRTL')}>
                <span className={cx(s.boxCss, 'rtlBoxCss')}>
                  <span className={cx(s.minMaxCss, 'textWhite', 'rtlminMaxCss')}><FormattedMessage {...messages.minPrice} /></span>
                  <CurrencyConverter amount={minPriceRange} from={rangeCurrency} className={cx(s.showPrice, 'showPriceRTL')} />
                </span>
                <span className={s.lineCss}>{' - '}</span>
                <span className={cx(s.boxCss, 'rtlBoxCss')}>
                  <span className={cx(s.minMaxCss, 'textWhite', 'rtlminMaxCss')}><FormattedMessage {...messages.maxPrice} /></span>
                  <CurrencyConverter amount={maxPriceRange} from={rangeCurrency} className={cx(s.showPrice, 'showPriceRTL')} />
                </span>
              </p>
              <Field
                name="priceRange"
                component={this.renderPriceRange}
                min={minPrice}
                max={maxPrice}
                minPrice={minPriceRange}
                maxPrice={maxPriceRange}
                rangeCurrency={rangeCurrency}
              />
              <div className={cx(s.searchFilterPopoverFooter, s.displayTable)}>
                <div className={cx('text-left', s.displayTableCell)}>
                  {
                    /*priceRange && <Button
                      bsStyle="link"
                      className={cx(s.btnLink)}
                      onClick={this.handleReset}>
                      <FormattedMessage {...messages.clear} />
                    </Button>*/
                  }
                </div>
                <div className={cx('text-right', s.displayTableCell, 'textAlignLeftRtl')}>
                  <Button
                    bsStyle="link"
                    className={cx(s.btnLink, s.applyBtn)}
                    onClick={this.handleSubmit}>
                    <FormattedMessage {...messages.apply} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

Price = reduxForm({
  form: 'SearchForm', // a unique name for this form
  onSubmit: submit,
  destroyOnUnmount: false,
})(Price);

// Decorate with connect to read form values
const selector = formValueSelector('SearchForm'); // <-- same as form name

const mapState = (state) => ({
  fieldsSettingsData: state.listingFields.data,
  priceRangeLabel: selector(state, 'priceRangeLabel'),
  priceRange: selector(state, 'priceRange'),
});

const mapDispatch = {
  change,
  submitForm
};

export default injectIntl(withStyles(s)(connect(mapState, mapDispatch)(Price)));