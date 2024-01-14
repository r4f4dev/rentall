import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { formValueSelector } from 'redux-form';
import {
  Row,
  Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Uploader.css';
import bt from '../../../../components/commonStyle.css';

// Component
import DropZone from './DropZone';
import Loader from '../../../Loader';

// Translation
import { FormattedMessage } from 'react-intl';
import messages from '../../../../locale/messages';

// Asset
import defaultPic from '../../../../../public/adminIcons/defaultAdmin.svg';
import DeleteIcon from '../../../../../public/adminIcons/dlt.png';


class Uploader extends React.Component {

  static propTypes = {
    values: PropTypes.any,
    locationUploaderLoading: PropTypes.bool,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    locationUploaderLoading: false,
  };

  render() {
    const { locationUploaderLoading, values, image } = this.props;
    let loading = true;
    if (values) {
      loading = false;
    }
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className={s.textAlignCenter}>
          <Loader
            show={locationUploaderLoading}
            type={"page"}
          >
            <div className={bt.picContainerMain}>
              <div className={cx(bt.picContainer, 'bgBlack')}>
                {
                  loading && <div><FormattedMessage {...messages.loadingLabel} /></div>
                }
                {
                  !loading && image != null && <div
                    style={{ backgroundImage: `url(/images/popularLocation/${image})` }}
                    className={s.bannerImageBg}
                  />
                }
                {
                  !loading && image === null && <div
                    style={{ backgroundImage: `url(${defaultPic})` }}
                    className={bt.profileImageBg}
                  />
                }
              </div>
            </div>
          </Loader>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} className={cx(s.space2, s.spaceTop2)}>
          <div className={cx(s.fullWidth, s.button, bt.btnPrimary, s.noPadding, 'photoUploadBtn')}>
            <DropZone data={values} />
          </div>
        </Col>
      </Row>
    );
  }
}

const selector = formValueSelector('EditPopularLocation'); // <-- same as form name

const mapState = (state) => ({
  locationUploaderLoading: state.popularLocation.locationUploaderLoading,
  image: selector(state, 'image'),
});

const mapDispatch = {
};

export default compose(
  withStyles(s, bt),
  connect(mapState, mapDispatch),
)(Uploader);