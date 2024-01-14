// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux Form
import { Field, reduxForm } from 'redux-form';

// Translation
import { injectIntl, FormattedMessage } from 'react-intl';

// Locale
import messages from '../../locale/messages';

// Helpers
import validateStep3 from './validateStep3';

// Redux
import { connect } from 'react-redux';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Col
} from 'react-bootstrap';
import s from './ListPlaceStep1.css';
import bt from '../../components/commonStyle.css';

// Component
import SyncCalendar from './SyncCalendar';
import FooterButton from './FooterButton';
import SidePanel from './SidePanel';
import updateStep3 from './updateStep3';

class MaxDaysNotice extends Component {

  static propTypes = {
    formatMessage: PropTypes.any,
    initialValues: PropTypes.object,
    previousPage: PropTypes.any,
    nextPage: PropTypes.any,
    listId: PropTypes.number.isRequired,
    listingSteps: PropTypes.shape({
      step3: PropTypes.string.isRequired,
      listing: PropTypes.shape({
        isPublished: PropTypes.bool.isRequired
      })
    }),
  };

  static defaultProps = {
    listingSteps: {
      step3: "inactive",
      listing: {
        isPublished: false
      }
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      maxDaysNotice: [],
    }
  }

  UNSAFE_componentWillMount() {
    const { listingFields } = this.props;

    if (listingFields != undefined) {
      this.setState({
        maxDaysNotice: listingFields.maxDaysNotice,
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { listingFields } = nextProps;

    if (listingFields != undefined) {
      this.setState({
        maxDaysNotice: listingFields.maxDaysNotice,
      });
    }
  }

  renderFormControlSelect = ({ input, label, meta: { touched, error }, children, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        {touched && error && <span>{formatMessage(error)}</span>}
        <FormControl componentClass="select" {...input} className={className} >
          {children}
        </FormControl>
      </div>
    )
  }

  render() {
    const { handleSubmit, submitting, pristine, valid, previousPage, nextPage, existingList, listId, formPage, step } = this.props;
    const { maxDaysNotice, isDisabled } = this.state;
    const { listingSteps } = this.props;
    const { formatMessage } = this.props.intl;
    let path = "index";
    if (existingList) {
      path = "home";
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className={s.landingMainContent}>


            {
              listingSteps && listingSteps.step3 === "completed"
              && listingSteps.listing && listingSteps.listing.isPublished && <div className={s.spaceTop4}>
                <h3 className={cx(s.landingContentTitle)}><FormattedMessage {...messages.syncCalendars} /></h3>
                <SyncCalendar listId={listId} />
              </div>
            }
          </div>
          <div className={cx(s.nextPosition, 'bgBlack')}>
            <div className={s.nextBackButton}>

              <hr className={s.horizontalLineThrough} />


              <FormGroup className={s.formGroup}>
                <Col xs={12} sm={12} md={12} lg={12} className={s.noPadding}>
                  <Button className={cx(s.button, bt.btnPrimaryBorder, bt.btnLarge, s.pullLeft, 'floatRight')} onClick={() => previousPage("advance-notice")}>
                    <FormattedMessage {...messages.back} />
                  </Button>
                  <Button className={cx(s.button, bt.btnPrimary, bt.btnLarge, s.pullRight, 'floatLeft')} onClick={() => nextPage("min-max-nights")}>
                    <FormattedMessage {...messages.next} />
                  </Button>
                </Col>
              </FormGroup>
            </div>
          </div>
          <FooterButton
            isDisabled={isDisabled}
            nextPage={nextPage}
            previousPage={previousPage}
            nextPagePath={"min-max-nights"}
            previousPagePath={path}
            formPage={formPage}
            step={step}
          />
        </form>
      </div>
    );
  }
}

MaxDaysNotice = reduxForm({
  form: 'ListPlaceStep3', // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: validateStep3,
  onSubmit: updateStep3
})(MaxDaysNotice);

const mapState = (state) => ({
  listingFields: state.listingFields.data,
  listingSteps: state.location.listingSteps,
  existingList: state.location.isExistingList
});

const mapDispatch = {};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(MaxDaysNotice)));