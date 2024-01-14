// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Redux Form
import { reduxForm } from 'redux-form';
// Redux
import { connect } from 'react-redux';
// Translation
import { injectIntl, FormattedMessage } from 'react-intl';
// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import {
  Button,
  FormGroup,
  Col
} from 'react-bootstrap';

// Internal Component
import PhotosUpload from '../PhotosUpload';
import FooterButton from './FooterButton';
import SidePanel from './SidePanel';

import s from './ListPlaceStep1.css';
import bt from '../../components/commonStyle.css';

// Locale
import messages from '../../locale/messages';
// Validate
import updateStep2 from './updateStep2';
// Helpers
import validateStep2 from './validateStep2';


class Photos extends Component {

  static propTypes = {
    previousPage: PropTypes.any,
    nextPage: PropTypes.any,
    listId: PropTypes.number.isRequired,
    photosCount: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      isAvailable: false
    };
  }

  UNSAFE_componentWillMount() {
    const { photosCount } = this.props;

    if (photosCount > 0) {
      this.setState({ isAvailable: true });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { photosCount } = nextProps;

    if (photosCount > 0) {
      this.setState({ isAvailable: true });
    } else {
      this.setState({ isAvailable: false });
    }
  }

  render() {
    const { error, handleSubmit, submitting, dispatch, nextPage, previousPage, listId, formPage, step } = this.props;
    const { isAvailable } = this.state;
    const { formatMessage } = this.props.intl;
    return (
        <div className={s.grid}>
          <SidePanel
            title={formatMessage(messages.stepTwoCommonHeading)}
            landingContent={formatMessage(messages.photos)}
          />
            <form>
              <div className={s.landingMainContent}>
                <FormGroup className={s.formGroup}>
                  <PhotosUpload listId={listId} placeholder={formatMessage(messages.photosPlaceholder)} />
                </FormGroup>
              </div>
              <FooterButton
                nextPage={nextPage}
                previousPage={previousPage}
                previousPagePath={"home"}
                nextPagePath={"description"}
                skipLabel={true}
                isAvailable={isAvailable}
                formPage={formPage}
                step={step}
              />
            </form>
        </div>
    );
  }
}

Photos = reduxForm({
  form: 'ListPlaceStep2', // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  onSubmit: updateStep2,
  validate: validateStep2,
})(Photos);

const mapState = (state) => ({
  photosCount: state.location.photosCount
});
const mapDispatch = {};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(Photos)));