import React, { Component } from 'react';
import { Table, Tr, Td, Thead, Th } from 'reactable';
import { connect } from 'react-redux';
import { FormControl } from 'react-bootstrap';
import { graphql, compose } from 'react-apollo';
import Confirm from 'react-confirm-bootstrap';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { FormattedMessage, injectIntl } from 'react-intl';

// Style
import s from './AdminReviewsManagement.css';

// Components
import bt from '../../../../components/commonStyle.css';
import Link from '../../../../components/Link';
import CustomPagination from '../../../CustomPagination';

import { deleteWhyHostReview } from '../../../../actions/siteadmin/WhyHostReview/deleteWhyHostReview';
import { debounce } from '../../../../helpers/debounce';
import messages from '../../../../locale/messages';
import reviewsManagement from './reviewsManagement.graphql';

class AdminReviewsManagement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currentPage: 1,
      searchList: '',
    }
    this.paginationData = this.paginationData.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.handleSearchChange = debounce(this.handleSearchChange.bind(this));
  }

  paginationData(currentPage) {
    const { reviewsManagement: { refetch }, setStateVariable } = this.props;
    let variables = { currentPage };
    setStateVariable({ currentPage });
    refetch(variables);
  }

  handleSearchChange(searchList) {
    const { reviewsManagement: { refetch }, setStateVariable } = this.props;
    let variables = {
      currentPage: 1,
      searchList,
    };
    setStateVariable(variables);
    refetch(variables);
  }

  async deleteReview({ reviewId }) {
    const { deleteWhyHostReview, setStateVariable } = this.props;
    const { reviewsManagement: { refetch } } = this.props;
    let variables = { currentPage: 1 };
    await deleteWhyHostReview({ reviewId });
    await setStateVariable({ currentPage: 1 });
    await refetch(variables);
  }


  render() {
    const { currentPage } = this.props;
    const { reviewsManagement: { getWhyHostAllReviews } } = this.props;
    const { formatMessage } = this.props.intl;

    return (
      <div className={cx(s.pagecontentWrapper, 'pagecontentAR')}>
        <div>
          <h1 className={s.headerTitle}> <FormattedMessage {...messages.whyBecomeHostBlock2} /></h1>
          <div className={cx(s.exportSection, s.exportSectionGridSub, 'bgBlack')}>
            <div>
              <FormControl
                type="text"
                placeholder={formatMessage(messages.search)}
                onChange={(e) => this.handleSearchChange(e.target && e.target.value)}
                className={cx('searchInputControl', 'searchInputControlWidth', 'searchInputControlAR')}
              />
            </div>
            <div className={cx(s.textRight, 'textLeftAr')}>
              <Link to={"/siteadmin/whyHost/review/add"} className={cx(bt.btnPrimary, bt.btnLarge)}>
                <FormattedMessage {...messages.addNewLabel} />
              </Link>
            </div>
          </div>
          <div className={cx('table-responsive', 'NewAdminResponsiveTable', 'NewResponsiveTableAdmin')}>
            <Table
              className="table"
              noDataText={formatMessage(messages.noRecordFound)}
              sortable={true}
            >
              <Thead>
                <Th scope="col">{formatMessage(messages.idLabel)}</Th>
                <Th scope="col">{formatMessage(messages.userNameLabel)}</Th>
                <Th scope="col">{formatMessage(messages.reviewContentLabel)}</Th>
                <Th scope="col">{formatMessage(messages.editLabel)}</Th>
                <Th scope="col">{formatMessage(messages.delete)}</Th>
              </Thead>
              {
                getWhyHostAllReviews && getWhyHostAllReviews.results.length > 0 && getWhyHostAllReviews.results.map((review, key) => {
                  return (
                    <Tr key={key}>
                      <Td data-label={formatMessage(messages.idLabel)} column={formatMessage(messages.idLabel)} data={review.id} />
                      <Td data-label={formatMessage(messages.userNameLabel)} column={formatMessage(messages.userNameLabel)}>
                        {review.userName}
                      </Td>
                      <Td data-label={formatMessage(messages.reviewContentLabel)} column={formatMessage(messages.reviewContentLabel)} data={review.reviewContent} />
                      <Td data-label={formatMessage(messages.editLabel)} column={formatMessage(messages.editLabel)}>
                        <Link to={"/siteadmin/whyHost/review/edit/" + review.id}>
                          <FormattedMessage {...messages.editLabel} />
                        </Link>
                      </Td>
                      <Td data-label={formatMessage(messages.delete)} column={formatMessage(messages.delete)}>
                        <div>
                          <Confirm
                            onConfirm={() => this.deleteReview({ reviewId: review.id })}
                            body={formatMessage(messages.areYouSureDeleteWishList)}
                            confirmText={formatMessage(messages.confirmDelete)}
                            cancelText={formatMessage(messages.cancel)}
                            title={formatMessage(messages.deleteReviewLabel)}
                          >
                            <a href="javascript:void(0)">
                              <FormattedMessage {...messages.delete} />
                            </a>
                          </Confirm>
                        </div>
                      </Td>
                    </Tr>
                  )
                })
              }
            </Table>
          </div>
          {
            getWhyHostAllReviews && getWhyHostAllReviews.results && getWhyHostAllReviews.results.length > 0
            && <div>
              <CustomPagination
                total={getWhyHostAllReviews.count}
                currentPage={currentPage}
                defaultCurrent={1}
                defaultPageSize={10}
                change={this.paginationData}
                paginationLabel={formatMessage(messages.reviews)}
              />
            </div>
          }
        </div>
      </div>
    );
  }

}

const mapState = (state) => ({
});

const mapDispatch = {
  deleteWhyHostReview,
};

export default compose(injectIntl,
  withStyles(s, bt),
  connect(mapState, mapDispatch),
  graphql(reviewsManagement, {
    name: 'reviewsManagement',
    options: (props) => ({
      variables: {
        currentPage: props.currentPage,
        searchList: props.searchList,
      },
      fetchPolicy: 'network-only',
    })
  })
)(AdminReviewsManagement);