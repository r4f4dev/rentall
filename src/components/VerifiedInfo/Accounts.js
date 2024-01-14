import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

// Component
import AccountItem from './AccountItem';
import NoItem from './NoItem';
import Link from '../Link';

// Style
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './VerifiedInfo.css';

// Locale
import messages from '../../locale/messages';

//Image
import emailIcon from '../../../public/SiteIcons/emailVerifi.svg';
import documentIcon from '../../../public/SiteIcons/docusVerifiMenu.svg';
import faceBookIcon from '../../../public/SiteIcons/faceBookVerifiMenu.svg';
import googleIcon from '../../../public/SiteIcons/googleVerifiMenu.png';
import moreVerifyIcon from '../../../public/SiteIcons/15.svg';

class Accounts extends Component {

    static propTypes = {
        items: PropTypes.shape({
            isEmailConfirmed: PropTypes.bool.isRequired,
            isFacebookConnected: PropTypes.bool.isRequired,
            isGoogleConnected: PropTypes.bool.isRequired,
            isIdVerification: PropTypes.bool.isRequired,
        }),
        isLoggedInUser: PropTypes.bool.isRequired,
        formatMessage: PropTypes.any,
    };

    static defaultProps = {
        items: {
            isEmailConfirmed: false,
            isFacebookConnected: false,
            isGoogleConnected: false,
            isIdVerification: false
        }
    }

    render() {
        const { items, isLoggedInUser, showOwnProfile } = this.props;
        const { formatMessage } = this.props.intl;

        if (items !== null) {
            let count = 0;
            count = items.isEmailConfirmed ? count + 1 : count;
            count = items.isFacebookConnected ? count + 1 : count;
            count = items.isGoogleConnected ? count + 1 : count;
            count = items.isIdVerification ? count + 1 : count;
            return (
                <>
                    {
                        items.isEmailConfirmed && <div className={cx(s.displayGrid, 'textWhite')}><span className={s.textCenter}><img src={emailIcon} /></span><AccountItem itemName={formatMessage(messages.emailConfirmed)} /></div>
                    }
                    {
                        items.isFacebookConnected && <div className={cx(s.displayGrid, 'textWhite')}><span className={s.textCenter}><img src={faceBookIcon} /></span><AccountItem itemName={formatMessage(messages.fbConnected)} /></div>
                    }
                    {
                        items.isGoogleConnected && <div className={cx(s.displayGrid, 'textWhite')}><span className={s.textCenter}><img src={googleIcon} /></span><AccountItem itemName={formatMessage(messages.googleConnected)} /></div>
                    }
                    {
                        items.isIdVerification && <div className={cx(s.displayGrid, s.noPaddingBottom, 'textWhite')}><span className={s.textCenter}><img src={documentIcon} /></span><AccountItem itemName={formatMessage(messages.documentConfirmed)} /></div>
                    }
                    {
                        !items.isEmailConfirmed && !items.isFacebookConnected && !items.isGoogleConnected && !items.isIdVerification && <NoItem isLoggedInUser={isLoggedInUser} />
                    }
                    {
                        isLoggedInUser && showOwnProfile && count > 0 && count < 4 && <>
                            <Link to={"/user/verification"} className={cx(s.moreVerifi, s.spaceTop3)}>
                                <FormattedMessage {...messages.moreVerifications} />
                                <img src={moreVerifyIcon} className={cx(s.moreVerifiArrow, 'rightArrowItineraryRTL')} />
                            </Link>
                        </>
                    }
                </>
            );

        } else {
            return <NoItem items={items} isLoggedInUser={isLoggedInUser} />
        }
    }
}

export default injectIntl(withStyles(s)(Accounts));