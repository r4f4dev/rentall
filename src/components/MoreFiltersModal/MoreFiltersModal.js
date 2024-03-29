// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './MoreFiltersModal.css';
import {
    Modal
} from 'react-bootstrap';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from '../../locale/messages';

// Redux
import { connect } from 'react-redux';
import { closeMoreFiltersModal } from '../../actions/modalActions';
import MoreFilters from '../SearchListing/Filters/MoreFilters';

class MoreFiltersModal extends Component {
    static propTypes = {
        closeLoginModal: PropTypes.func,
        filtersModal: PropTypes.bool,
        closeMoreFiltersModal: PropTypes.func,
        formatMessage: PropTypes.func,
    };

    render() {
        const { closeMoreFiltersModal, handleTabToggle, isExpand, searchSettings, smallDevice, filtersModal, tabletDevice } = this.props;

        return (
            <div>
                <Modal
                    show={filtersModal}
                    animation={false}
                    onHide={closeMoreFiltersModal}
                    dialogClassName={cx(s.logInModalContainer, 'moreFilterModal', 'moreFilter')}
                >
                    <Modal.Header closeButton className={s.panelHeader}>
                        <Modal.Title>
                            <span><FormattedMessage {...messages.moreFilters} /></span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body bsClass={s.logInModalBody}>
                        <div>
                            <MoreFilters
                                handleTabToggle={handleTabToggle}
                                isExpand={isExpand}
                                searchSettings={searchSettings}
                                smallDevice={smallDevice}
                                tabletDevice={tabletDevice}
                            />
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


const mapState = state => ({
    filtersModal: state.modalStatus.isMoreFiltersModal,
    userData: state.account.data,

});

const mapDispatch = {
    closeMoreFiltersModal,
};

export default withStyles(s)(connect(mapState, mapDispatch)(MoreFiltersModal));