import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropzoneComponent from 'react-dropzone-component';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '!isomorphic-style-loader!css-loader!./filepicker.css';
import { change } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import { connect } from 'react-redux';
import { setLoaderStart, setLoaderComplete } from '../../../../../actions/loader/loader';

//Message
import { injectIntl } from 'react-intl';
import messages from '../../../../../locale/messages';
import { getSpecificConfig } from '../../../../../helpers/getConfigValue';

class Dropzone extends Component {

    static propTypes = {
        setLoaderStart: PropTypes.any.isRequired,
    };

    static defaultProps = {
        image: null
    };

    constructor(props) {
        super(props);
        this.success = this.success.bind(this);
        this.addedfile = this.addedfile.bind(this);
        this.error = this.error.bind(this);
        this.dropzone = null;
    }

    async success(file, fromServer) {
        const { change, setLoaderComplete, fieldName } = this.props;
        let fileName = fromServer.file.filename;

        await change('WhyHostForm', fieldName, fileName);
        await setLoaderComplete(fieldName)
    }

    async error(file) {
        const { setLoaderComplete, fieldName } = this.props;
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
            await setLoaderComplete(fieldName)
            return;
        }
    };

    async addedfile(file) {
        const { setLoaderStart, maxUploadSize, fieldName } = this.props;
        const siteData = await getSpecificConfig({ name: ['maxUploadSize'] });
        if (file.size > (1024 * 1024 * parseInt(siteData.maxUploadSize))) {
            toastr.error('Maximum upload size Exceeded! ', 'Try again with a smaller sized image');
            this.dropzone.removeFile(file);
            return;
        }
        setLoaderStart(fieldName);
    }


    render() {
        const { formatMessage } = this.props.intl;
        const djsConfig = {
            dictDefaultMessage: "",
            addRemoveLinks: false,
            uploadMultiple: false,
            maxFilesize: 10,
            acceptedFiles: 'image/jpeg,image/png',
            dictMaxFilesExceeded: 'Remove the existing image and try upload again',
            previewsContainer: false,
        };
        const componentConfig = {
            iconFiletypes: ['.jpg', '.png'],
            postUrl: '/uploadHomeBanner'
        };
        const eventHandlers = {
            init: dz => this.dropzone = dz,
            success: this.success,
            addedfile: this.addedfile,
            error: this.error,
        };


        return (
            <div>
                <DropzoneComponent
                    config={componentConfig}
                    eventHandlers={eventHandlers}
                    djsConfig={djsConfig}
                >
                    {formatMessage(messages.clickHeretoUploadImage)}
                </DropzoneComponent>
            </div>
        );
    }
}

const mapState = (state) => ({
});

const mapDispatch = {
    setLoaderStart,
    setLoaderComplete,
    change
};

export default injectIntl(withStyles(s)(connect(mapState, mapDispatch)(Dropzone)));