
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Translation
import { injectIntl, FormattedMessage } from 'react-intl';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomeType.css';
import {
  Button,
  Collapse
} from 'react-bootstrap';
import cx from 'classnames';

// Redux Form
import { Field, reduxForm, formValueSelector, change, submit as submitForm } from 'redux-form';

// Redux
import { connect } from 'react-redux';

// Locale
import messages from '../../../../locale/messages';

// Submit
import submit from '../../SearchForm/submit';

import CustomCheckbox from '../../../CustomCheckbox';
//Images
import DefaultIcon from '../../../../../public/SiteIcons/defaultIcon.png';
import { url } from '../../../../config';
import downArrow from '../../../../../public/SiteIcons/filterAllDownIcon.svg';
import upArrow from '../../../../../public/SiteIcons/filterAllUparrow.svg';
class HomeType extends Component {

  static propTypes = {
    className: PropTypes.any,
    handleTabToggle: PropTypes.any,
    isExpand: PropTypes.bool
  };

  static defaultProps = {
    isExpand: false,
    fieldsSettingsData: {
      roomType: []
    },
    homeType: []
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setBtnWrapperRef = this.setBtnWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.renderCollapse = this.renderCollapse.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  async handleSubmitButton() {
    const { className, handleTabToggle, isExpand, handleSubmit } = this.props;
    const { change, submitForm } = this.props;
    await change('currentPage', 1);
    await handleSubmit();
    handleTabToggle('homeType', !isExpand)
  }

  handleReset() {
    const { className, handleTabToggle, isExpand } = this.props;
    const { change, submitForm } = this.props;
    change('roomType', []);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  setBtnWrapperRef(node) {
    this.btnWrapperRef = node;
  }

  handleClickOutside(event) {
    const { className, handleTabToggle, isExpand, handleSubmit } = this.props;
    const { change, submitForm } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      change('currentPage', 1);
      handleSubmit();
      // submitForm('SearchForm');
      if (this.btnWrapperRef && !this.btnWrapperRef.contains(event.target)) {
        handleTabToggle('homeType', !isExpand)
      }
    }
  }

  renderCollapse(input, restArray, isOpen) {
    const { formatMessage } = this.props.intl;
    if (restArray && restArray.length > 0) {
      return (
        <div>
          <Collapse className={s.collapseContainer} in={isOpen}>
            <div>
              {
                restArray.map((option, index) => {
                  let splitLineContent = option.itemDescription && option.itemDescription.split('\n');
                  let newSplitLineContent = splitLineContent && splitLineContent.filter(function (el) { return el; });
                  return (
                    <div>
                      <div className={cx(s.displayTableCell, s.padding4, s.checkboxSection, s.NHtype)}>
                        <CustomCheckbox
                          key={index}
                          className={'icheckbox_square-green'}
                          name={`${input.name}[${index}]`}
                          value={option.id}
                          checked={input.value.indexOf(option.id) !== -1}
                          onChange={event => {
                            const newValue = [...input.value];
                            if (event === true) {
                              newValue.push(option.id);
                            } else {
                              newValue.splice(newValue.indexOf(option.id), 1);
                            }
                            input.onChange(newValue);
                          }}
                        />
                      </div>
                      <div className={cx(s.displayTableCell, s.captionTitle, s.padding4, s.NhName, 'NhNameRtl')}>
                        <div className={s.homeTypeFlex}>
                          <span className={cx(s.checkBoxImage, 'svgImg')}>
                            {
                              option.image ?
                                <img src={url + '/images/amenities/' + option.image} className={cx(s.imgSection, 'imgSectionRtl')} /> :
                                <img src={DefaultIcon} className={cx(s.imgSection, 'imgSectionRtl')} />
                            }
                          </span>

                          <div>
                            {option.itemName}
                            {
                              newSplitLineContent && newSplitLineContent.length > 0 && newSplitLineContent.map((itemValue, indexes) => {
                                return (
                                  <p className={cx(s.dot, 'dotDark')} dangerouslySetInnerHTML={{ __html: itemValue }} />
                                )
                              })
                            }
                            {/* {option.itemDescription} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </Collapse>
          <Button bsStyle="link" type="button" className={cx(s.btn, s.btnLink, s.btnLinkSecondary, s.toggleLink, s.captionTitle, s.filterToggleLink, s.dropdownOverflow, 'bgBlack', 'bgBlackHover')}
            onClick={() => this.handleToggle()}>
            {isOpen ? formatMessage(messages.closeAll) : formatMessage(messages.showMore)}
            {
              isOpen && <img src={upArrow} className={cx(s.iconLeft, 'homeTypeIconLeftRTL')} />
            }
            {
              !isOpen && <img src={downArrow} className={cx(s.iconLeft, 'homeTypeIconLeftRTL')} />
            }
          </Button>
        </div>
      );
    } else {
      return <span />
    }

  }

  checkboxHorizontalGroup = ({ label, name, options, input, isOpen }) => {

    let count = 4, firstArray = [], restArray = [];
    let itemList = options && options.length > 0 ? options.filter(o => o.isEnable == "1") : [];
    if (itemList && itemList.length > 0) {
      firstArray = itemList.slice(0, count);
      restArray = itemList.slice(count, itemList.length);
    }

    return (
      <div className={cx(s.displayTable)}>
        <>
          {
            firstArray.map((option, index) => {

              let splitLineContent = option.itemDescription && option.itemDescription.split('\n');
              let newSplitLineContent = splitLineContent && splitLineContent.filter(function (el) { return el; });
              return (
                <div>
                  <div className={cx(s.displayTableCell, s.padding4, s.checkboxSection, s.NHtype)}>
                    <CustomCheckbox
                      key={index}
                      className={'icheckbox_square-green'}
                      name={`${input.name}[${index}]`}
                      value={option.id}
                      checked={input.value.indexOf(option.id) !== -1}
                      onChange={event => {
                        const newValue = [...input.value];
                        if (event === true) {
                          newValue.push(option.id);
                        } else {
                          newValue.splice(newValue.indexOf(option.id), 1);
                        }
                        input.onChange(newValue);
                      }}
                    />
                  </div>
                  <div className={cx(s.displayTableCell, s.captionTitle, s.padding4, s.NhName, 'NhNameRtl')}>
                    <div className={s.homeTypeFlex}>
                      <span className={cx(s.checkBoxImage, 'svgImg')}>
                        {
                          option.image ?
                            <img src={url + '/images/amenities/' + option.image} className={cx(s.imgSection, 'imgSectionRtl')} /> :
                            <img src={DefaultIcon} className={cx(s.imgSection, 'imgSectionRtl')} />
                        }
                      </span>

                      <div className={s.desTop}>
                        {option.itemName}
                        {
                          newSplitLineContent && newSplitLineContent.length > 0 && newSplitLineContent.map((itemValue, indexes) => {
                            return (
                              <p className={cx(s.dot, 'dotDark')} dangerouslySetInnerHTML={{ __html: itemValue }} />
                            )
                          })
                        }
                        {/* {option.itemDescription} */}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </>
        {this.renderCollapse(input, restArray, isOpen)}
      </div>
    )
  };

  render() {
    const { className, handleTabToggle, isExpand } = this.props;
    const { fieldsSettingsData: { roomType }, homeType } = this.props;
    const { formatMessage } = this.props.intl;
    const { isOpen } = this.state;

    let buttonLabel = formatMessage(messages.homeType);
    let singleHomeType;

    if (homeType && homeType.length > 0) {
      if (homeType.length > 1) {
        buttonLabel = buttonLabel + '	· ' + homeType.length;
      } else if (homeType.length == 1) {
        singleHomeType = roomType.filter((item) => { return item.id == homeType[0] });
        if (singleHomeType && singleHomeType.length > 0) {
          buttonLabel = singleHomeType[0].itemName;
        } else {
          buttonLabel = buttonLabel + '	· ' + homeType.length;
        }
      }
    }

    return (
      <div className={className}>
        <div ref={this.setBtnWrapperRef}>
          <Button
            className={cx({ [s.btnSecondary]: (isExpand === true || homeType.length > 0) }, s.btn, s.responsiveFontsize, s.searchBtn, 'searchBtnDark')}
            onClick={() => handleTabToggle('homeType', !isExpand)}>
            {buttonLabel}
          </Button>
        </div>
        {
          isExpand && <div className={cx(s.searchFilterPopover, 'searchFilterPopoverRtl', 'bgBlack')} ref={this.setWrapperRef}>
            <div className={s.searchFilterPopoverContent}>
              <Field
                name="roomType"
                component={this.checkboxHorizontalGroup}
                isOpen={isOpen}
                options={roomType} />
              <div className={cx('text-right', 'textAlignLeftRtl')}>
                <Button
                  bsStyle="link"
                  className={cx(s.btnLink, s.applyBtn)}
                  onClick={this.handleSubmitButton}>
                  <FormattedMessage {...messages.apply} />
                </Button>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

HomeType = reduxForm({
  form: 'SearchForm', // a unique name for this form
  onSubmit: submit,
  destroyOnUnmount: false,
})(HomeType);

// Decorate with connect to read form values
const selector = formValueSelector('SearchForm'); // <-- same as form name

const mapState = (state) => ({
  fieldsSettingsData: state.listingFields.data,
  homeType: selector(state, 'roomType')
});

const mapDispatch = {
  change,
  submitForm
};

export default injectIntl(withStyles(s)(connect(mapState, mapDispatch)(HomeType)));