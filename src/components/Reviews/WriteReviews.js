import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Panel, Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Reviews.css';
import bt from '../../components/commonStyle.css';

// Components
import Link from '../Link';
import Loader from '../Loader';
import Avatar from '../Avatar';

// Locale
import messages from '../../locale/messages';

//images
import writeIcon from '../../../public/SiteIcons/writeIcon.svg';
import reviewIcon from '../../../public/SiteIcons/viewIcon.svg';
import noListImage from '../../../public/SiteImages/noReviewImage.svg';

class WriteReviews extends React.Component {

	static propTypes = {
		pendingData: PropTypes.shape({
			loading: PropTypes.bool,
			pendingReviews: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.number,
				listId: PropTypes.number,
				hostId: PropTypes.string,
				guestId: PropTypes.string,
				hostData: PropTypes.shape({
					firstName: PropTypes.string,
					lastName: PropTypes.string,
					picture: PropTypes.string,
					profileId: PropTypes.number,
				}),
				guestData: PropTypes.shape({
					firstName: PropTypes.string,
					lastName: PropTypes.string,
					picture: PropTypes.string,
					profileId: PropTypes.number,
				}),
			}))
		}),
		userId: PropTypes.string,
		formatMessage: PropTypes.any,
	};

	render() {
		const { data: { loading, pendingReviews }, userId } = this.props;
		const { formatMessage } = this.props.intl;
		return (
			<>
				{
					loading && <Loader type={"text"} />
				}
				{
					!loading && (!pendingReviews || (pendingReviews &&
						pendingReviews.length === 0)) &&
					<div className={cx(s.textCenter, s.marginTop)}>
						<img src={noListImage} ClassName={s.mobWidth} />
						<div className={s.noListHeading}>
							<FormattedMessage {...messages.noReviewHeading} />
						</div>
						<div className={cx(s.noListSubHeading, 'textWhite')}>
							<FormattedMessage {...messages.noReviewSubHeding} />
						</div>
					</div>
				}
				{
					!loading && pendingReviews && pendingReviews.length > 0 &&
					<div className={cx(s.panelNolist, s.spaceTop6, 'bgBlack')}>

						<div>
							{
								pendingReviews.map((item, index) => {
									let isHost = false;
									if (userId === item.hostId) {
										isHost = true;
									}
									let userLink = "/users/show/";
									if (item.guestData && item.hostData && item.listData) {
										let hostDetails = isHost ? item.guestData.profileId : item.hostData.profileId;
										return (
											<ul className={cx(s.mediaDisplay, 'listLayoutArbic')}>
												<li>
													<div className={cx(s.listAvatarGrid, s.writePanel)}>
														<div className={cx(s.mediaContainer, s.textCenter, s.pullLeft, 'reviewsId')} >
															<Avatar
																source={isHost ? item.guestData.picture : item.hostData.picture}
																height={48}
																width={48}
																title={isHost ? item.guestData.firstName : item.hostData.firstName}
																className={s.profileAvatar}
																withLink
																linkClassName={cx(s.profileAvatarLink, s.noBackground)}
																profileId={isHost ? item.guestData.profileId : item.hostData.profileId}
															/>

														</div>
														<div className={cx(s.listDeatilsGrid, s.textAlignCenter, 'reviewDeatilsGridRTL', 'bgBlackTwo', 'dashRightBg')}>
															<p className={s.writeReviewText}><FormattedMessage {...messages.submitReviewFor} /> <Link to={"/rooms/" + item.listId}>
																{item.listData && item.listData.title}
															</Link> </p>
															<span className={'writeReviewTextRTL'}><img src={writeIcon} className={cx(s.writeIconCss, 'writeIconRTL')} /><Link to={"/review/write/" + item.id}><FormattedMessage {...messages.writeReview} /></Link></span>
															<span className={cx(s.viewIconLeft, '', 'writeReviewTextRTL')}><img src={reviewIcon} className={cx(s.reviewIcon, 'reviewIconRTL')} /><Link to={"/users/trips/itinerary/" + item.id}>
																<FormattedMessage {...messages.viewLitneray} />
															</Link></span>
														</div>
													</div>
												</li>
											</ul>
										);
									}
								})
							}
						</div>
					</div>
				}

			</>
		);
	}
}

const mapState = (state) => ({
	userId: state.account && state.account.data && state.account.data.userId,
});

const mapDispatch = {};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(WriteReviews)));