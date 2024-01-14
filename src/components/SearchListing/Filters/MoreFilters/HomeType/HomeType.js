
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Translation
import { injectIntl, FormattedMessage } from 'react-intl';
import {
  Button,
  Collapse
} from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomeType.css';
import cx from 'classnames';
// Redux Form
import { Field, reduxForm, formValueSelector, change, submit as submitForm } from 'redux-form';
// Redux
import { connect } from 'react-redux';
import CustomCheckbox from '../../../../CustomCheckbox';
// Locale
import messages from '../../../../../locale/messages';
// Submit
import submit from '../../../SearchForm/submit';
//Images
import DefaultIcon from '../../../../../../public/SiteIcons/defaultIcon.png';
import downArrow from '../../../../../../public/SiteIcons/filterAllDownIcon.svg';
import upArrow from '../../../../../../public/SiteIcons/filterAllUparrow.svg';

import { url } from '../../../../../config';
class HomeType extends Component {

  static propTypes = {
    className: PropTypes.any,
    handleTabToggle: PropTypes.any,
  };

  static defaultProps = {
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
    this.renderCollapse = this.renderCollapse.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { isActive } = this.props;
    this.setState({
      isOpen: isActive
    });
  }

  handleToggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    const { isActive } = this.props;
    this.setState({
      isOpen: isActive
    });
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
                      <div className={cx(s.displayTableCell, s.padding4, s.NHtype, 'homeTypeSpaceRight', 'homeTypeSpaceRightRTL', s.boxSectionPadding)}>
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
    const { formatMessage } = this.props.intl;
    let count = 4, firstArray = [], restArray = [];
    let itemList = options && options.length > 0 ? options.filter(o => o.isEnable == "1") : [];
    if (itemList && itemList.length > 0) {
      firstArray = itemList.slice(0, count);
      restArray = itemList.slice(count, itemList.length);
    }

    return (
      <div className={cx(s.displayTable)}>
        {
          firstArray.map((option, index) => {
            if (option.isEnable !== "1") {
              return <span key={index} />
            }

            return (
              <div className={s.paddingBottom} key={option.id}>
                <div className={cx(s.displayTableCell, s.checkBoxSection, 'homeTypeIconRtl', 'homeTypeSpaceRightRTL')}>
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
                <div className={cx(s.displayTableCell, s.captionTitle, s.NhName, 'NhNameRtl', s.vtrTop)}>
                  <div className={s.homeTypeFlex}>
                    <span className={cx(s.checkBoxImage, 'svgImg')}>
                      {
                        option.image ?
                          <img src={url + '/images/amenities/' + option.image} className={cx(s.imgSection, 'imgSectionRtl')} /> :
                          <img src={DefaultIcon} className={cx(s.imgSection, 'imgSectionRtl')} />
                      }
                    </span>
                    <div className={cx(s.displayTableCell, s.captionTitle)}>
                      {option.itemName}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        {this.renderCollapse(input, restArray, isOpen)}

      </div>
    )
  };

  render() {
    const { className } = this.props;
    const { fieldsSettingsData: { roomType } } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={className}>
        <p className={cx(s.moreFilterTitle, s.textBold)}>
          <FormattedMessage {...messages.homeType} />
        </p>
        <div className={cx(s.displayTable, s.space4)}>
          <Field
            name="roomType"
            component={this.checkboxHorizontalGroup}
            isOpen={isOpen}
            options={roomType} />
        </div>
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