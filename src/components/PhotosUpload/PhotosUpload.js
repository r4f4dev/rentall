import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DropzoneComponent from 'react-dropzone-component';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { toastr } from 'react-redux-toastr';

// Translation
import { FormattedMessage } from 'react-intl';
import messages from '../../locale/messages';

// Redux Action
import { createListPhotos, removeListPhotos } from '../../actions/manageListPhotos';

// Style
import s from '!isomorphic-style-loader!css-loader!./filepicker.css';

// Component
import PhotosList from '../PhotosList';

//Images
import PictureImage from '../../../public/SiteIcons/photoUpload.svg';
import { getSpecificConfig } from '../../helpers/getConfigValue';

class PhotosUpload extends Component {

  static propTypes = {
    createListPhotos: PropTypes.any.isRequired,
    removeListPhotos: PropTypes.any.isRequired,
    listId: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
    this.complete = this.complete.bind(this);
    this.dropzone = null;
    this.addedfile = this.addedfile.bind(this);
    this.error = this.error.bind(this);
    this.state = {
      djsConfig: {},
      maxSize: 10
    }
  }

  async componentDidMount() {
    const { placeholder } = this.props;
    const isBrowser = typeof window !== 'undefined';
    const isDocument = typeof document !== undefined;
    const siteData = await getSpecificConfig({ name: ['maxUploadSize'] });
    this.setState({
      maxSize: siteData && siteData.maxUploadSize
    });
    if (isBrowser && isDocument) {
      document.querySelector(".dz-hidden-input").style.visibility = 'visible';
      document.querySelector(".dz-hidden-input").style.opacity = '0';
      document.querySelector(".dz-hidden-input").style.height = '100%';
      document.querySelector(".dz-hidden-input").style.width = '100%';
      document.querySelector(".dz-hidden-input").style.cursor = 'pointer';
    }

    if (placeholder) {
      this.setState({
        djsConfig: {
          dictDefaultMessage: placeholder,
          addRemoveLinks: false,
          maxFilesize: 10,
          maxFiles: 20,
          acceptedFiles: 'image/jpeg,image/png',
          hiddenInputContainer: '.dzInputContainer',
          // dictFileTooBig: '',
        }
      });
    }
  }

  UNSAFE_componentWillMount() {
    const { placeholder } = this.props;

    if (placeholder) {
      this.setState({
        djsConfig: {
          dictDefaultMessage: placeholder,
          addRemoveLinks: false,
          maxFilesize: 10,
          maxFiles: 20,
          acceptedFiles: 'image/jpeg,image/png',
          hiddenInputContainer: '.dzInputContainer',
          // dictFileTooBig: '',
        }
      });
    }
  }


  success(file, fromServer) {
    /*const { listId, createListPhotos } = this.props;
    const { files } = fromServer;
    let fileName = files[0].filename;
    let fileType = files[0].mimetype;
    // Calling Redux action to create a record for uploaded file
    if(listId != undefined) {
      createListPhotos(listId, fileName, fileType);
    }*/
  }

  async error(file) {
    const { stopProfilePhotoLoader } = this.props;
    let fileFormates = [
      'image/svg+xml',
      'application/sql',
      'application/pdf',
      'application/vnd.oasis.opendocument.presentation',
      'text/csv',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/epub+zip',
      'application/zip',
      'text/plain',
      'application/rtf',
      'application/vnd.oasis.opendocument.text',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.oasis.opendocument.spreadsheet',
      'text/tab-separated-values',
      'text/calendar',
      'application/json'
    ];

    if (file && (file.accepted === false || fileFormates.indexOf(file.type) >= 0)) {
      toastr.error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');
      return;
    }
  };

  async addedfile(file) {
    const { djsConfig } = this.state;
    const siteData = await getSpecificConfig({ name: ['maxUploadSize'] });
    if (file.size > (1024 * 1024 * parseInt(siteData.maxUploadSize))) {
      toastr.error('Maximum upload size Exceeded! ', 'Try with smallest size image');
      this.dropzone.removeFile(file);
    }
  }

  complete(file) {
    const { listId, createListPhotos } = this.props;
    if (file && file.xhr) {
      const { files } = JSON.parse(file.xhr.response);
      let fileName = files[0].filename;
      let fileType = files[0].mimetype;
      if (listId != undefined) {
        createListPhotos(listId, fileName, fileType);
      }
      this.dropzone.removeFile(file);
    }
  }

  render() {
    const { placeholder, listId } = this.props;
    const { djsConfig } = this.state;
    const componentConfig = {
      iconFiletypes: ['.jpg', '.png'],
      //showFiletypeIcon: true,
      postUrl: '/photos'
    };
    const eventHandlers = {
      init: dz => this.dropzone = dz,
      success: this.success,
      complete: this.complete,
      addedfile: this.addedfile,
      error: this.error,
    };

    return (
      <div className={cx('listPhotoContainer')}>
        <div className={cx('dzInputContainer', 'svgImg')}>
          <DropzoneComponent
            config={componentConfig}
            eventHandlers={eventHandlers}
            djsConfig={djsConfig}
          />
          <img src={PictureImage} className={'photoUploadImg'} alt='PictureImage' />
        </div>
        <div className={'uploadSizeCss'}>
          <FormattedMessage {...messages.uploadSizedLabel} /> {this.state.maxSize}MB
        </div>
        <PhotosList listId={listId} />
      </div>
    );
  }

}

const mapState = (state) => ({
});

const mapDispatch = {
  createListPhotos,
  removeListPhotos,
};

export default withStyles(s)(connect(mapState, mapDispatch)(PhotosUpload));
