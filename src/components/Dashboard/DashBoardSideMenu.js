import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { FormattedMessage, injectIntl } from 'react-intl';
import s from './Dashboard.css';
import cx from 'classnames';
import bt from '../../components/commonStyle.css';

//Components
import Link from '../Link/Link';
import VerifiedInfo from '../VerifiedInfo/VerifiedInfo';
import Avatar from '../Avatar/Avatar';
import DropZone from './DropZone';
import Loader from '../Loader/Loader';
import history from '../../core/history';

// actions
import { doRemoveProfilePicture } from '../../actions/manageUserProfilePicture';

// Locale
import messages from '../../locale/messages';

//Images
import viewProfile from '../../../public/SiteIcons/userViewProfile.svg';
import starReview from '../../../public/SiteIcons/starReview.svg';
import profileArrow from '../../../public/SiteIcons/viewProfileArrow.svg';
class DashBoardSideMenu extends React.Component {

    static propTypes = {
        account: PropTypes.shape({
            userId: PropTypes.string.isRequired
        }).isRequired,
        profilePhotoLoading: PropTypes.bool,
        formatMessage: PropTypes.any,
        doRemoveProfilePicture: PropTypes.any.isRequired,
        profilePictureData: PropTypes.shape({
            loading: PropTypes.bool,
            userAccount: PropTypes.shape({
                picture: PropTypes.string.isRequired
            })
        })
    };

    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }
    }

    componentDidMount() {
        if (history.location) {
            this.setState({
                location: history.location.pathname
            });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (history.location) {
            this.setState({
                location: history.location.pathname
            });
        }
    }

    static defaultProps = {
        account: {
            userId: null,
        },
        profilePictureData: {
            loading: true
        },
        profilePhotoLoading: false
    };

    render() {
        const { account: { userId }, userData, data } = this.props;
        const { profilePictureData: { loading, userAccount }, doRemoveProfilePicture, isProfilePage, isUser } = this.props;
        const { profilePhotoLoading } = this.props;
        const { formatMessage } = this.props.intl;
        const { location } = this.state;
        let isVerified, showOwnProfile = true, isReviewEnable;
        if (userData) isVerified = userData.profileId;
        if (isProfilePage && !isUser) showOwnProfile = false;
        isReviewEnable = location === "/dashboard" ? true : false
        return (
            <div>
                <div className={s.dashBoardSideMenu}>
                    <Loader
                        show={profilePhotoLoading}
                        type={"page"}
                    >
                        <div className={cx(s.slideShow, bt.space3)}>
                            <Avatar
                                height={120}
                                width={120}
                                className={s.imgResponsive}
                                source={data && data.picture}
                                isUser={showOwnProfile}
                            />
                            {
                                !loading && userAccount.picture && <a href="javascript:void(0);" onClick={() => doRemoveProfilePicture(userAccount.picture)}>
                                    <FontAwesome.FaTrash className={s.trashIcon} />
                                </a>
                            }
                        </div>
                    </Loader>
                    {showOwnProfile && <div className={cx(bt.spaceTop3, s.fullWidth, s.profileLink, s.noPadding, bt.textAlignCenter)}>
                        <DropZone data={userAccount}
                            defaultMessage={formatMessage(messages.editProfilePhoto)}
                        />
                    </div>}
                    <hr className={s.hr} />
                    <VerifiedInfo userId={data ? data.userId : userId} showOwnProfile={showOwnProfile} />
                </div>
                {showOwnProfile && <>
                    {
                        !isReviewEnable && <Link to={'/user/reviews/about-you'} className={cx(s.reviewHeading, bt.spaceTop4, s.noTextDecoration, s.displayFlexIcons, 'textWhite')}>
                            <span>
                                <img src={starReview} className={cx(s.profileIcon, 'dashboardReviewStarRTL')} />
                                <FormattedMessage {...messages.reviews} />
                            </span>
                            <span className={'svgImg'}>
                                <img src={profileArrow} className={'dashboardReviewRTL'} />
                            </span>
                        </Link>
                    }
                    {!isProfilePage && <span className={cx({ [s.menuActive]: location === "/users/show/" + isVerified })}>
                        <Link to={"/users/show/" + isVerified} className={cx(s.reviewHeading, bt.spaceTop4, s.noTextDecoration, s.displayFlexIcons, 'textWhite', s.activBtn)}>
                            <span>
                                <img src={viewProfile} className={cx(s.profileIcon, 'dashboardReviewStarRTL')} />
                                <FormattedMessage {...messages.viewProfile} />
                            </span>
                            <span className={'svgImg'}>
                                <img src={profileArrow} className={'dashboardReviewRTL'} />
                            </span>
                        </Link>
                    </span>}</>
                }
            </div>
        );
    }
}

const mapState = (state) => ({
    userData: state.account.data,
    account: state.account.data,
    profilePhotoLoading: state.account.profilePhotoLoading

});

const mapDispatch = {
    doRemoveProfilePicture
};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(DashBoardSideMenu)));