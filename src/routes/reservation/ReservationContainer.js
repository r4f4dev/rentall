import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ReservationContainer.css';
import bt from '../../components/commonStyle.css';
// Component
import ManageReservation from '../../components/ManageReservation/ManageReservation';
import { onChangeListing } from '../../actions/Listing/onChangeListing';

class ReservationContainer extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      listId: null,
      startDate: null,
      endDate: null,
      orderBy: null,
      searchKey: '',
      userType: 'host',
      dateFilter: 'current'
    };
    this.setStateVariable = this.setStateVariable.bind(this);
  }

  componentDidMount() {
    const { onChangeListing } = this.props;
    onChangeListing({
      listId: null,
      startDate: null,
      endDate: null,
      orderBy: null,
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { type } = nextProps;
    this.setState({
      dateFilter: type
    })
  }

  setStateVariable(variables) {
    const { onChangeListing } = this.props;
    this.setState(variables);
    // onChangeListing(variables)
  }

  render() {
    const { searchKey, currentPage, listId, startDate, endDate, orderBy, dateFilter, userType } = this.state;
    return <ManageReservation
      searchKey={searchKey}
      currentPage={currentPage}
      listId={listId}
      startDate={startDate}
      endDate={endDate}
      orderBy={orderBy}
      dateFilter={dateFilter}
      userType={userType}
      setStateVariable={this.setStateVariable}
    />;
  }
}

const mapState = (state) => ({
});

const mapDispatch = {
  onChangeListing
};

export default compose(
  injectIntl,
  connect(mapState, mapDispatch),
  withStyles(s, bt),
)(ReservationContainer);
