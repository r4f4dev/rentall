import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { change, formValueSelector } from 'redux-form';
import { FormattedMessage } from 'react-intl';

// Redux
import { connect } from 'react-redux';

// Style
import { DropdownButton, MenuItem } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PhotosList.css';
import cx from 'classnames';

// Redux Action
import { removeListPhotos } from '../../actions/manageListPhotos';

// Locale
import messages from '../../locale/messages';

//Images
import TickIcon from '../../../public/SiteIcons/correct.svg';
class PhotosList extends Component {

  static propTypes = {
    removeListPhotos: PropTypes.any.isRequired,
    listId: PropTypes.number.isRequired,
    listPhotos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      listId: PropTypes.number.isRequired
    }))
  };

  static defaultProps = {
    listPhotos: []
  };

  constructor(props) {
    super(props);
    this.changeCoverPhoto = this.changeCoverPhoto.bind(this);
  }

  changeCoverPhoto(id) {
    const { change } = this.props;
    change("ListPlaceStep2", 'coverPhoto', id);
  }

  render() {
    const { removeListPhotos, listPhotos, coverPhoto } = this.props;
    return (
      <div className={s.displayGrid}>
        {
          listPhotos && listPhotos.map((item, key) => {
            return (
              <div key={key} className={s.positionRelative}>
                <div className={s.photoListBgImage} style={{ backgroundImage: `url(/images/upload/x_medium_${item.name})` }} />
                <div className='photoListDropDown'>
                  <DropdownButton
                    bsSize="small"
                    title=''
                    id="dropdown-size-small"
                  >
                    {(coverPhoto ? (coverPhoto != item.id) : (listPhotos[0].id != item.id)) && <MenuItem eventKey="1" onClick={() => this.changeCoverPhoto(item.id)}>
                      <FormattedMessage {...messages.SetAsCoverPhoto} />
                    </MenuItem>}
                    <MenuItem eventKey="2" onClick={() => removeListPhotos(item.listId, item.name, true)}>
                      <FormattedMessage {...messages.delete} />
                    </MenuItem>
                  </DropdownButton>
                </div>
                {(coverPhoto ? (coverPhoto == item.id) : (listPhotos[0].id == item.id)) && <div className={cx(s.coverPhotoSection, 'bgBlackTwo', 'textWhite', 'svgImg')}>
                  <img src={TickIcon} className={cx(s.tickIcon, 'photoTickIcon')} />
                  <FormattedMessage {...messages.setCover} />
                </div>}
              </div>
            );
          })
        }
      </div>
    );
  }
}

const selector = formValueSelector('ListPlaceStep2'); // <-- same as form name

const mapState = (state) => ({
  listPhotos: state.location.listPhotos,
  coverPhoto: selector(state, 'coverPhoto'),
});

const mapDispatch = {
  removeListPhotos,
  change
};

export default withStyles(s)(connect(mapState, mapDispatch)(PhotosList));