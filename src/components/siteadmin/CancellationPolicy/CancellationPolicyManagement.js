import React from 'react';
import { Table, Tr, Td, Thead, Th } from 'reactable';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import {
  Button
} from 'react-bootstrap';

import Link from '../../Link/Link';
import ModalForm from './ModalForm';

// Style
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CancellationPolicyManagement.css';
import bt from '../../../components/commonStyle.css';

// Translation
import messages from '../../../locale/messages';
import { openCancelModal } from '../../../actions/siteadmin/modalActions';

class CancellationPolicyManagement extends React.Component {

  render() {
    const { data, openCancelModal } = this.props;
    const { formatMessage } = this.props.intl;
    return (
      <div className={cx(s.pagecontentWrapper, 'pagecontentAR')}>
        <ModalForm />
        <div>
          <h1 className={s.headerTitle}><FormattedMessage {...messages.cancellationPolicyManagement} /></h1>
          <Button onClick={openCancelModal} className={cx(bt.btnPrimary, bt.btnlarge, s.space3)}>
            <FormattedMessage {...messages.updateCancellationInfo} />
          </Button>
          <div className={cx('table-responsive', 'tableBorderRadiusAdmin', 'NewAdminResponsiveTable', 'NewResponsiveTableAdmin')}>
            <Table className="table"
              noDataText={formatMessage(messages.noRecordFound)}
            >
              <Thead>
                <Th scope="col">{formatMessage(messages.idLabel)}</Th>
                <Th scope="col">{formatMessage(messages.policyName)}</Th>
                <Th scope="col">{formatMessage(messages.policyContent)}</Th>
                <Th scope="col">{formatMessage(messages.editLabel)}</Th>
              </Thead>
              {
                data && data.results && data.results.length > 0 && data.results.map(function (value, key) {
                  return (
                    <Tr key={key}>
                      <Td data-label={formatMessage(messages.idLabel)} column={formatMessage(messages.idLabel)} data={value.id} />
                      <Td data-label={formatMessage(messages.policyName)} column={formatMessage(messages.policyName)} data={value.policyName} />
                      <Td data-label={formatMessage(messages.policyContent)} column={formatMessage(messages.policyContent)} data={value.policyContent} />
                      <Td data-label={formatMessage(messages.editLabel)} column={formatMessage(messages.editLabel)}>
                        <Link to={"/siteadmin/cancellation-policies/edit/" + value.id}>
                          <FormattedMessage {...messages.editLabel} />
                        </Link>
                      </Td>
                    </Tr>
                  )
                })
              }
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
});

const mapDispatch = {
  openCancelModal
};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(CancellationPolicyManagement)));