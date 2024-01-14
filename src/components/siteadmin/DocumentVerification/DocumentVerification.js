import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Table, Tr, Td, Thead, Th } from 'reactable';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { graphql, compose } from 'react-apollo';
import { FormControl, FormGroup } from 'react-bootstrap';

// Style
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DocumentVerification.css';
import bt from '../../../components/commonStyle.css';
//Document List
import FileList from './FileList';
import CustomPagination from '../../CustomPagination';

import DocumentManagement from './DocumentManagementQuery.graphql';
import showAllDocumentQuery from './showAllDocumentQueryFile.graphql';

// Translation
import messages from '../../../locale/messages';

// Send Email
import { sendEmail } from '../../../core/email/sendEmail';
import { debounce } from '../../../helpers/debounce';

class DocumentVerification extends React.Component {

  static propTypes = {
    data: PropTypes.array,
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.paginationData = this.paginationData.bind(this);
    this.handleSearchChange = debounce(this.handleSearchChange.bind(this));
  }

  paginationData(currentPage) {
    const { showAllDocument: { refetch }, setStateVariable } = this.props;
    let variables = { currentPage };
    setStateVariable({ currentPage });
    refetch(variables);
  }

  handleSearchChange(searchList) {
    const { showAllDocument: { refetch }, setStateVariable } = this.props;
    let variables = {
      currentPage: 1,
      searchList,
    };
    setStateVariable(variables);
    refetch(variables);
  }

  async handleUpdate(id, status, item) {
    const { mutate, currentPage } = this.props;
    const { showAllDocument: { refetch }, setStateVariable } = this.props;
    let variables = { currentPage };
    const { data } = await mutate({
      variables: {
        userId: id,
        isIdVerification: status
      },
    });
    if (data.DocumentManagement.status === 'success') {
      let msg = 'Documents has been ';
      msg += (status) ? 'Approved!' : 'Rejected!';
      let content = {
        name: item.profile.firstName,
        verificationStatus: (status) ? 'approved' : 'rejected'
      }
      sendEmail(item.email, 'documentVerification', content);
      toastr.success("Success!", msg);
    } else {
      toastr.success("Error!", "Something went wrong!");
    }
    setStateVariable({ currentPage });
    refetch(variables);
  }


  render() {
    const { showAllDocument: { showAllDocument }, currentPage } = this.props;
    const { formatMessage } = this.props.intl;

    return (
      <div className={cx(s.pagecontentWrapper, 'pagecontentAR')}>
        <div>
          <h1 className={s.headerTitle}><FormattedMessage {...messages.documentVerificationManagement} /></h1>
          <div className={cx(s.exportSection, s.exportSectionGridSub, 'bgBlack')}>
            <FormGroup className={s.noMargin}>
              <FormControl
                type="text"
                placeholder={formatMessage(messages.search)}
                onChange={(e) => this.handleSearchChange(e.target && e.target.value)}
                className={cx('searchInputControl', 'searchInputControlWidth', 'searchInputControlAR')}
              />
            </FormGroup>
          </div>
          <div className={cx('table-responsive', 'NewAdminResponsiveTable', 'NewResponsiveTableAdmin')}>
            <Table className="table"
              noDataText={formatMessage(messages.noRecordFound)}
            >
              <Thead>
                <Th scope="col">{formatMessage(messages.profileID)}</Th>
                <Th scope="col">{formatMessage(messages.hostNameLabel)}</Th>
                <Th scope="col">{formatMessage(messages.hostEMailLabel)}</Th>
                <Th scope="col">{formatMessage(messages.RequestedFiles)}</Th>
                <Th scope="col">{formatMessage(messages.actionLabel)}</Th>
              </Thead>
              {
                showAllDocument && showAllDocument.results && showAllDocument.results.length > 0 && showAllDocument.results.map((value, key) => {
                  return (
                    <Tr key={key}>
                      <Td data-label={formatMessage(messages.profileID)} column={formatMessage(messages.profileID)} data={value.profile.profileId} />
                      <Td data-label={formatMessage(messages.hostNameLabel)} column={formatMessage(messages.hostNameLabel)} data={value.profile.firstName} />
                      <Td data-label={formatMessage(messages.hostEMailLabel)} column={formatMessage(messages.hostEMailLabel)} data={value.email} />
                      <Td data-label={formatMessage(messages.RequestedFiles)} column={formatMessage(messages.RequestedFiles)}>
                        <FileList key={'f' + key} data={value.document} />
                      </Td>
                      <Td data-label={formatMessage(messages.actionLabel)} column={formatMessage(messages.actionLabel)}>
                        <div>
                          <select className={cx(bt.commonControlSelect, s.userVerticalAlign, s.btnMarginBottom, s.selectMargin)}
                            value={value.verification.isIdVerification} onChange={(e) => this.handleUpdate(value.id, !value.verification.isIdVerification, value)}>
                            <option value={true}>{formatMessage(messages.documentApprove)}</option>
                            <option value={false}>{formatMessage(messages.documentReject)}</option>
                          </select>
                        </div>
                      </Td>
                    </Tr>
                  )
                })
              }
            </Table>
          </div>
          {
            showAllDocument && showAllDocument.results && showAllDocument.results.length > 0
            && <div>
              <CustomPagination
                total={showAllDocument.count}
                currentPage={currentPage}
                defaultCurrent={1}
                defaultPageSize={10}
                change={this.paginationData}
                paginationLabel={formatMessage(messages.usersLabel)}
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
};

export default compose(injectIntl,
  withStyles(s, bt),
  connect(mapState, mapDispatch),
  graphql(DocumentManagement, { options: { fetchPolicy: 'network-only' } }),
  graphql(showAllDocumentQuery, {
    name: 'showAllDocument',
    options: (props) => ({
      variables: {
        currentPage: props.currentPage,
        searchList: props.searchList,
      },
      fetchPolicy: 'network-only',
    })
  })
)(DocumentVerification);