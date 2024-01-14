import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';


import { Panel } from 'react-bootstrap';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Trust.css';
import bt from '../../components/commonStyle.css';
import history from '../../core/history';

// Component
import Item from './Item';
import Link from '../Link';

// Redux
import { connect } from 'react-redux';
import { disconnectVerification, resendEmailVerification } from '../../actions/manageUserVerification';

// Locale
import messages from '../../locale/messages';

//Imaages
import editIcon from '../../../public/SiteIcons/verifiEditIcon.svg';

class MenuComponent extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      isEmailConfirmed: PropTypes.bool,
      isFacebookConnected: PropTypes.bool,
      isGoogleConnected: PropTypes.bool,
      isIdVerification: PropTypes.bool,
    }),
    disconnectVerification: PropTypes.any.isRequired,
    account: PropTypes.shape({
      userId: PropTypes.string.isRequired,
    }).isRequired,
    resendEmailLoading: PropTypes.bool,
    formatMessage: PropTypes.any,
  };

  static defaultProps = {
    data: {
      isEmailConfirmed: false,
      isFacebookConnected: false,
      isGoogleConnected: false,
      isIdVerification: false
    },
    resendEmailLoading: false,
  }

  constructor(props) {
    super(props);
    this.sendConfirmEmail = this.sendConfirmEmail.bind(this);
    this.facebookDisconnect = this.facebookDisconnect.bind(this);
    this.googleDisconnect = this.googleDisconnect.bind(this);
    this.documentVerification = this.documentVerification.bind(this);
  }

  sendConfirmEmail() {
    const { resendEmailVerification } = this.props;
    resendEmailVerification();
  }

  facebookDisconnect() {
    const { disconnectVerification, account } = this.props;
    disconnectVerification("facebook", account.userId);
  }

  googleDisconnect() {
    const { disconnectVerification, account } = this.props;
    disconnectVerification("google", account.userId);
  }

  documentVerification() {
    history.push('/document-verification');
  }

  render() {
    const { data: { isEmailConfirmed, isFacebookConnected, isGoogleConnected, isIdVerification }, resendEmailLoading } = this.props;
    const { formatMessage } = this.props.intl;
    let displayVerifiedPanel = isEmailConfirmed || isFacebookConnected || isGoogleConnected || isIdVerification || false;
    let displayUnVerifiedPanel = !isEmailConfirmed || !isFacebookConnected || !isGoogleConnected || !isIdVerification || false;

    return (
      <div>
        {
          displayVerifiedPanel && <div className={cx(s.panelHeader)}>
            <div className={s.flexEdit}>
              <h3 className={cx(bt.listingTitleText, s.noMargin)}>{formatMessage(messages.verifiedInfo)}</h3>
              <Link to={'/user/edit'} >{formatMessage(messages.editProfile)} <img src={editIcon} className={cx(s.editIconCss, 'editIconCssRTL')} /></Link>
            </div>
            <ul className={cx(s.listLayout, 'listLayoutArbic')}>
              {
                isEmailConfirmed && <Item
                  title={formatMessage(messages.email)}
                  content={formatMessage(messages.verifiedEmail)}
                  isAction={false}
                  isImage={true}
                  name='email'
                />
              }

              {
                isFacebookConnected && <Item
                  title={formatMessage(messages.facebook)}
                  content={formatMessage(messages.facebookInfo)}
                  isAction
                  isLink={false}
                  buttonLabel={formatMessage(messages.disconnect)}
                  handleClick={this.facebookDisconnect}
                  name='facebook'
                />
              }

              {
                isGoogleConnected && <Item
                  title={formatMessage(messages.google)}
                  content={formatMessage(messages.googleInfo)}
                  isAction
                  isLink={false}
                  buttonLabel={formatMessage(messages.disconnect)}
                  handleClick={this.googleDisconnect}
                  name='google'
                />
              }

              {
                isIdVerification && <Item
                  title={formatMessage(messages.document)}
                  content={formatMessage(messages.documentverificaitonDetails)}
                  isImage={true}
                  name='document'
                />
              }

              {
                !isEmailConfirmed && !isFacebookConnected && !isGoogleConnected && !isIdVerification &&
                <p><FormattedMessage {...messages.notVerifiedDetails} /></p>
              }
            </ul>
          </div>
        }


        {
          displayUnVerifiedPanel && <div className={cx(s.panelHeader)}>
            <div>
              <h3 className={cx(bt.listingTitleText, s.noMargin)}>{formatMessage(messages.notVerifiedInfo)}</h3>
            </div>
            <ul className={cx(s.listLayout, 'listLayoutArbic')}>
              {
                !isEmailConfirmed && <Item
                  title={formatMessage(messages.email)}
                  content={formatMessage(messages.pleaseVerify)}
                  isAction
                  isLink={false}
                  buttonLabel={formatMessage(messages.payoutVerify)}
                  handleClick={this.sendConfirmEmail}
                  show={resendEmailLoading}
                  name='email'
                />
              }

              {
                !isFacebookConnected && <Item
                  title={formatMessage(messages.facebook)}
                  content={formatMessage(messages.facebookInfo)}
                  isAction
                  isLink
                  buttonLabel={formatMessage(messages.connect)}
                  url={"/login/facebook"}
                  name='facebook'
                />
              }

              {
                !isGoogleConnected && <Item
                  title={formatMessage(messages.google)}
                  content={formatMessage(messages.googleInfo)}
                  isAction
                  isLink
                  buttonLabel={formatMessage(messages.connect)}
                  url={"/login/google"}
                  name='google'
                />
              }
              {
                !isIdVerification && <Item
                  title={formatMessage(messages.documentverificaiton)}
                  content={formatMessage(messages.documentVerificaitonInfo)}
                  isAction
                  buttonLabel={formatMessage(messages.payoutVerify)}
                  handleClick={this.documentVerification}
                  name='document'
                />
              }
            </ul>
          </div>
        }
      </div>
    );
  }
}

const mapState = (state) => ({
  resendEmailLoading: state.loader.resendEmailLoading,
  account: state.account.data,
});

const mapDispatch = {
  disconnectVerification,
  resendEmailVerification
};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(MenuComponent)));