import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

// Redux
import { connect } from 'react-redux';

import {
  Button,
  Label,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../Payout.css';
import bt from '../../../components/commonStyle.css';

// Redirection
import history from '../../../core/history';

// Locale
import messages from '../../../locale/messages';

// Redux actions
import { removePayout } from '../../../actions/Payout/removePayoutAction';
import { setDefaultPayout } from '../../../actions/Payout/setDefaultPayout';
import { verifyPayout } from '../../../actions/Payout/verifyPayout';

//Images
import tootipIcon from '../../../../public/SiteIcons/editInfoTipIcon.svg';
import delteIcon from '../../../../public/SiteIcons/deleteIcon.svg';
import addIcon from '../../../../public/SiteIcons/addListIcon.svg';

class PayoutList extends Component {

  static defaultProps = {
    payoutRemoveLoader: false,
    payoutDefaultLoader: false,
    payoutVerifyLoader: false,
    data: []
  };

  handleClick() {
    history.push('/user/addpayout');
  }

  render() {
    const { data, removePayout, setDefaultPayout, currentAccountId, verifyPayout, userId } = this.props;
    const { formatMessage } = this.props.intl;
    const { payoutRemoveLoader, payoutDefaultLoader, payoutVerifyLoader } = this.props;


    return (
      <div className={cx('commonListingBg', 'payoutStepBg', 'bgBlack', 'noMarginBottom')}>
        <h3 className={s.titleText}>{formatMessage(messages.payoutMethod)}</h3>
        <p className={cx(s.textMuted, 'textWhite')}>
          <FormattedMessage {...messages.payoutTitleBlock1} />
        </p>
        <div className={cx('payoutTable', 'NewResponsiveTable', 'mobileTable')}>
          <table className={cx('table', s.noBorder)}>
            <thead>
              <tr className={cx(s.rowBorder, s.textTruncate)}>
                <th scope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.payoutTitle} /></th>
                <th scope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.payoutTitle4} /></th>
                <th scope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.status} /></th>
                <th scope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.options} /></th>
                <th scope="col" className={cx(s.noBorder, 'textAlignRightRtl')}><FormattedMessage {...messages.remove} /></th>
              </tr>
            </thead>
            <tbody>
              {
                data.length > 0 && data.map((item, index) => {
                  return (
                    <tr className={cx(s.rowBorder, s.sectionTitleLight)} key={index}>
                      <td data-label={formatMessage(messages.payoutTitle)} className={'textAlignRightRtl'}>
                        <div className={s.methodsFlex}>
                          {item.paymentMethod.name}
                          {item.default && <Label bsStyle="success"><FormattedMessage {...messages.default} /></Label>}
                        </div>
                      </td>
                      <td data-label={formatMessage(messages.payoutTitle4)} className={'textAlignRightRtl'}>
                        {
                          item.methodId == 1 && <span>
                            {item.payEmail}
                          </span>
                        }
                        {
                          item.methodId == 2 && <span className={'rtlPayoutEmail'}>
                            ******{item.last4Digits}
                          </span>
                        }
                        <span className={'rtlPayoutEmail'}>({item.currency})</span>
                      </td>
                      <td data-label={formatMessage(messages.status)} className={'textAlignRightRtl'}>
                        {
                          item.isVerified === true && <FormattedMessage {...messages.ready} />
                        }
                        {
                          item.isVerified !== true && <FormattedMessage {...messages.notReady} />
                        }
                      </td>
                      <td data-label={formatMessage(messages.options)} className={cx(s.textTruncate, 'textAlignRightRtl')}>
                        {
                          !item.default && item.isVerified === true && <a
                            href="javascript:void(0)"
                            className={cx({ [s.transparentText]: payoutDefaultLoader }, s.linkText, 'textWhite')}
                            onClick={() => {
                              if (!payoutDefaultLoader) {
                                setDefaultPayout(item.id)
                              }
                            }}
                          >
                            <FormattedMessage {...messages.setDefault} />
                          </a>
                        }
                        {
                          !item.default && item.isVerified !== true && <a
                            href="javascript:void(0)"
                            onClick={() => {
                              if (!payoutVerifyLoader) {
                                verifyPayout(item.payEmail, userId);
                              }
                            }}
                            className={cx(s.linkText, 'textWhite', 'svgImg')}
                          >
                            <FormattedMessage {...messages.payoutVerify} />
                            <OverlayTrigger
                              overlay={<Tooltip id={'tooltip' + index}><FormattedMessage {...messages.payoutVerifyStripeInfo} /></Tooltip>}
                              placement="top"
                            >
                              <img src={tootipIcon} className={cx(s.toolTipIcon, 'payoutToolRTL')} />
                            </OverlayTrigger>
                          </a>
                        }
                      </td>
                      <td data-label={formatMessage(messages.remove)}>
                        {
                          !item.default && <a
                            className={cx(s.textSpace, 'payOutSpace', { [s.transparentText]: payoutRemoveLoader })}
                            href="javascript:void(0)"
                            onClick={() => {
                              if (!payoutRemoveLoader) {
                                removePayout(item.id);
                              }
                            }}
                          >
                            <img src={delteIcon} />
                          </a>
                        }
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
        <div className={bt.textAlignRight}>
          <span className={cx(s.textMuted, s.marginLeft, 'textWhite', 'transactionTextRTL')}>&nbsp;<FormattedMessage {...messages.directDeposit} /></span>
          <Button className={cx(bt.btnLarge, bt.btnPrimary, s.addBtn)} onClick={this.handleClick}>
            <img src={addIcon} className={cx(s.plusIcon, 'addPlusIcon')} />
            <FormattedMessage {...messages.addListing} />
          </Button>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  payoutRemoveLoader: state.loader.payoutRemove,
  payoutDefaultLoader: state.loader.payoutDefault,
  payoutVerifyLoader: state.loader.payoutVerify,
  userId: state.account.data.userId
});

const mapDispatch = {
  removePayout,
  setDefaultPayout,
  verifyPayout
};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(PayoutList)));