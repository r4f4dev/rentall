// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// GraphQL
import { graphql, compose } from 'react-apollo';

// Redux
import { connect } from 'react-redux';

// Translation
import { injectIntl, FormattedMessage } from 'react-intl';
import cx from 'classnames';

// Locale
import messages from '../../../locale/messages';

import { openAddWishListGroupModal } from '../../../actions/WishList/modalActions';
import { deleteWishListGroup } from '../../../actions/WishList/deleteWishListGroup';

// GraphQL
import getWishListGroupQuery from './getWishListGroup.graphql';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
    Grid,
    Button,
    Row,
    Col
} from 'react-bootstrap';
import s from './EditWishListGroup.css';
import bt from '../../../components/commonStyle.css';

import Confirm from 'react-confirm-bootstrap';

// Components
import Loader from '../../../components/Loader';
import Link from '../../Link';
import WishListGroupModal from '../WishListGroupModal';
import ListingItem from '../ListingItem';
import NotFound from '../../../routes/notFound/NotFound';

//Images
import goIcon from '../../../../public/SiteIcons/goWishIcon.svg';
import deleteIcon from '../../../../public/SiteIcons/deleteWishIcon.svg';
import editIcon from '../../../../public/SiteIcons/editingWishIcon.svg';


class EditWishListComponent extends React.Component {
    static propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            getWishListGroup: PropTypes.any
        }),
    };

    static defaultProps = {
        data: {
            loading: true
        },
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        history.push('/siteadmin/popularlocation/add')
    }

    render() {
        const { profileId, wishListId } = this.props;
        const { data: { loading, getWishListGroup } } = this.props;
        const { formatMessage } = this.props.intl;
        const { openAddWishListGroupModal, deleteWishListGroup, account } = this.props;

        let initialValues = {};

        if (getWishListGroup && getWishListGroup.id) {
            initialValues = {
                id: getWishListGroup.id,
                name: getWishListGroup.name,
                isPublic: getWishListGroup.isPublic,
                userId: getWishListGroup.userId
            };
        }

        if (getWishListGroup === null) {
            return <NotFound />
        }

        return (
            <div>
                <WishListGroupModal actionType={'edit'} />
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            {
                                loading && <div>
                                    <Loader type="text" />
                                </div>
                            }
                            {
                                !loading && getWishListGroup && <div className={cx(s.landingContent, s.noPadding)}>
                                    <div className={s.wishFlex}>
                                        <div>
                                            <Link to={"/wishlists"} className={cx(s.button, s.resposiveBtn, s.innerPadding, s.goToALLText)}>
                                                <img src={goIcon} className={cx(s.goToALLArrowIcon, s.iconCss, 'iconRotateRTL')} />{formatMessage(messages.goToAllLists)}
                                            </Link>
                                        </div>

                                        <div className={cx(s.noPadding, s.textRight, s.btnFlex, 'footerBtnFlexRTL')}>
                                            <div className={cx(s.displayInlineBlock, 'shareIconRtl')}>
                                                <Button className={cx(s.button, s.noMargin, s.resposiveBtn, s.pullRghtNone)}
                                                    onClick={() => openAddWishListGroupModal(initialValues, 'EditWishListGroupForm')}>
                                                    <img src={editIcon} className={cx(s.iconCss, 'iconCssRTL')} /> <span className={s.textDecoration}><FormattedMessage {...messages.editLabel} /></span>
                                                </Button>
                                            </div>
                                            <div className={cx(s.displayInlineBlock, 'shareIconRtl')}>
                                                <Confirm
                                                    onConfirm={() => deleteWishListGroup(getWishListGroup.id)}
                                                    // onConfirm={deleteWishListGroup(getWishListGroup.id)}
                                                    body={formatMessage(messages.areYouSureDeleteWishList)}
                                                    confirmText={formatMessage(messages.confirmDelete)}
                                                    cancelText={formatMessage(messages.cancel)}
                                                    title={formatMessage(messages.wishList)}
                                                >
                                                    <a href="javascript:void(0)"
                                                        className={cx(s.button, s.modalCaptionLink, s.noMargin, bt.btnLarge, s.resposiveBtn, s.responsiveDeleteBtn, s.deleteBtnMargin)}>
                                                        <img src={deleteIcon} className={cx(s.iconCss, 'iconCssRTL')} /> <span className={s.textDecoration}><FormattedMessage {...messages.delete} /></span>
                                                    </a>
                                                </Confirm>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className={cx(s.landingTitle, s.innerPadding)}>
                                        {getWishListGroup.name} 
                                    </h2>
                                    {
                                        !loading && getWishListGroup && <div>

                                            {
                                                getWishListGroup.wishLists && getWishListGroup.wishLists.length > 0 && getWishListGroup.wishListCount > 0 && <div>
                                                    {
                                                        getWishListGroup.wishLists.map((item, index) => {
                                                            if (item.listData != null) {
                                                                return (
                                                                    <div key={index} className={s.listingSection}>
                                                                        <ListingItem
                                                                            id={item.listData.id}
                                                                            basePrice={item.listData.listingData.basePrice}
                                                                            currency={item.listData.listingData.currency}
                                                                            title={item.listData.title}
                                                                            beds={item.listData.beds}
                                                                            userId={item.listData.userId}
                                                                            personCapacity={item.listData.personCapacity}
                                                                            roomType={item.listData.settingsData && item.listData.settingsData[0] && item.listData.settingsData[0].listsettings && item.listData.settingsData[0].listsettings.itemName}
                                                                            coverPhoto={item.listData.coverPhoto}
                                                                            listPhotos={item.listData.listPhotos}
                                                                            bookingType={item.listData.bookingType}
                                                                            reviewsCount={item.listData.reviewsCount}
                                                                            reviewsStarRating={item.listData.reviewsStarRating}
                                                                            account={account}
                                                                            wishListStatus={item.listData.wishListStatus}

                                                                        />
                                                                    </div>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </div>
                                            }
                                            {
                                                getWishListGroup && getWishListGroup.wishListCount == 0 && <div>
                                                    <h3 className={cx(s.innerPadding, s.errorCss)}>{formatMessage(messages.noWishlistsHomes)}</h3>
                                                    <Link to={'/s'} className={bt.btnPrimary}>{formatMessage(messages.StartExplore)}</Link>
                                                </div>

                                            }
                                        </div>
                                    }
                                </div>
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

const mapState = (state) => ({
    account: state.account.data
});

const mapDispatch = {
    openAddWishListGroupModal,
    deleteWishListGroup
};

export default compose(
    injectIntl,
    withStyles(s, bt),
    connect(mapState, mapDispatch),
    graphql(getWishListGroupQuery,
        {
            options: (props) => ({
                variables: {
                    profileId: props.profileId,
                    id: props.wishListId
                },
                fetchPolicy: 'network-only',
            })
        }
    )
)(EditWishListComponent);
