import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';

// Style
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ManageListing.css';

// Component
import SideMenu from '../../components/ManageListing/SideMenu';
import PanelWrapper from '../../components/ManageListing/PanelWrapper';
import Loader from '../../components/Loader';
// Graphql
import ManageListingsQuery from './manageListing.graphql';

class ManageListing extends React.Component {
  static propTypes = {
    ManageListingsData: PropTypes.shape({
      loading: PropTypes.bool,
      ManageListings: PropTypes.array
    })
  };

  static defaultProps = {
    ManageListingsData: {
      loading: true,
      ManageListings: []
    }
  }

  render() {
    const { ManageListingsData, ManageListingsData: { ManageListings } } = this.props;

    return (
      <Grid fluid className={'dashBoardContainer'}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={'dashBoardListingGrid'}>
              <SideMenu />
              <div>
                {
                  !ManageListings && <Loader type={"text"} />
                }
                {
                  ManageListings && <PanelWrapper data={ManageListingsData} />
                }
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default compose(
  withStyles(s),
  graphql(ManageListingsQuery, {
    name: 'ManageListingsData',
    options: {
      ssr: false,
      fetchPolicy: 'network-only'
    }
  }),
)(ManageListing);