import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Style
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './VerifiedInfo.css';

// Component
import Link from '../Link';

// Locale
import messages from '../../locale/messages';

//Image
import moreVerifyIcon from '../../../public/SiteIcons/15.svg';
class NoItem extends Component {

    static propTypes = {
        isLoggedInUser: PropTypes.bool.isRequired,
        formatMessage: PropTypes.any,
    };

    render() {
        const { isLoggedInUser } = this.props;
        return (
            <>
                <p className={s.space2}>
                    <FormattedMessage {...messages.noVerifications} />
                </p>
                {
                    isLoggedInUser && <p className={s.noMargin}>
                        <Link to={"/user/verification"} className={cx(s.moreVerifi)}>
                            <FormattedMessage {...messages.addVerifications} />
                            <img src={moreVerifyIcon} className={cx(s.moreVerifiArrow, 'rightArrowItineraryRTL')} />
                        </Link>
                    </p>
                }
            </>
        );
    }
}

export default withStyles(s)(NoItem);