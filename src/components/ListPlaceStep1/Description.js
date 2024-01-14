// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Redux Form
import { Field, reduxForm, formValueSelector } from 'redux-form';
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
  FormControl,
  ControlLabel
} from 'react-bootstrap';

// components
import FooterButton from './FooterButton';
import SidePanel from './SidePanel';

import s from './ListPlaceStep1.css';
import bt from '../../components/commonStyle.css';

// Helpers
import validateStep2 from './validateStep2';
import updateStep2 from './updateStep2';
// Locale
import messages from '../../locale/messages';

class Description extends Component {

  static propTypes = {
    previousPage: PropTypes.any,
    nextPage: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      chars_left: 50
    };
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { valid } = this.props;
    if (valid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  componentDidMount() {
    const { title } = this.props;
    let max_chars = title ? 50 - title.length : 50;
    this.setState({
      chars_left: max_chars
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { valid } = nextProps;
    const { title } = nextProps;
    let max_chars = title ? 50 - title.length : 50;
    this.setState({
      chars_left: max_chars
    });
    if (valid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleChange(event) {
    var input = event.target.value;
    let max_chars = 50;
    this.setState({
      chars_left: max_chars - input.length
    });
  }

  renderFormControlTextArea = ({ input, label, meta: { touched, error }, children, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <FormControl
          {...input}
          className={className}
          placeholder={label}
          componentClass={"textarea"}
          maxLength={250}
        />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </div>
    )
  }

  renderFormControl = ({ input, label, type, meta: { touched, error }, className }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <FormControl {...input} placeholder={label} type={type} className={className} maxLength={50} />
        {touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
      </div>
    )
  }

  render() {
    const { error, handleSubmit, submitting, dispatch, nextPage, previousPage, formPage, step } = this.props;
    const { formatMessage } = this.props.intl;
    const { isDisabled, chars_left } = this.state;

    return (
        <div className={s.grid}>
          <SidePanel
            title={formatMessage(messages.stepTwoCommonHeading)}
            landingContent={formatMessage(messages.placeTitlePanel)}
          />
            <form onSubmit={handleSubmit}>
              <div className={s.landingMainContent}>
                <FormGroup className={s.space5}>
                  <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
                    <FormattedMessage {...messages.placeTitle} />
                  </ControlLabel>
                  <Field name="title"
                    type="text"
                    component={this.renderFormControl}
                    label={formatMessage(messages.titleLabel)}
                    className={cx(s.formControlInput, s.jumboInput)}
                    onChange={this.handleChange}
                  />
                  <p className={s.maximumCharcter}>
                    {chars_left} <FormattedMessage {...messages.maximumCharcterLeft} />
                  </p>
                </FormGroup>
                <FormGroup className={s.space5}>
                  <ControlLabel className={cx(s.landingLabel, 'textWhite')}>
                    <FormattedMessage {...messages.description} />
                  </ControlLabel>
                  <Field name="description"
                    component={this.renderFormControlTextArea}
                    className={s.textareaInput}
                    label={formatMessage(messages.descriptionLabel)}
                  />
                </FormGroup>
              </div>
              <FooterButton
                disabled={isDisabled}
                previousPage={previousPage}
                previousPagePath={"photos"}
                type={"submit"}
                formPage={formPage}
                step={step}
              />

            </form>
          </div>
   
    );
  }
}

Description = reduxForm({
  form: 'ListPlaceStep2', // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: validateStep2,
  onSubmit: updateStep2
})(Description);

const selector = formValueSelector('ListPlaceStep2');

const mapState = (state) => ({
  listingFields: state.listingFields.data,
  title: selector(state, 'title')
});

const mapDispatch = {};

export default injectIntl(withStyles(s, bt)(connect(mapState, mapDispatch)(Description)));