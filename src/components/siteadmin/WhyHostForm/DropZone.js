import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { change } from 'redux-form';
import DropzoneComponent from 'react-dropzone-component';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import s from '!isomorphic-style-loader!css-loader!./filepicker.css';
import { getSpecificConfig } from '../../../helpers/getConfigValue';


export class Dropzone extends Component {

	constructor(props) {
		super(props)
		this.addedfile = this.addedfile.bind(this);
		this.success = this.success.bind(this);
		this.error = this.error.bind(this);
		this.dropzone = null;
	}

	componentDidUpdate() {
		const isBrowser = typeof window !== 'undefined';
		const isDocument = typeof document !== undefined;
		if (isBrowser && isDocument) {
			document.querySelector(".dz-hidden-input").style.visibility = 'visible';
			document.querySelector(".dz-hidden-input").style.opacity = '0';
			document.querySelector(".dz-hidden-input").style.height = '100%';
			document.querySelector(".dz-hidden-input").style.width = '100%';
			document.querySelector(".dz-hidden-input").style.cursor = 'pointer';
		}
	}

	async success(file, fromServer) {
		const { fieldName, change } = this.props;
		const fileName = fromServer.file.filename;
		await change('WhyHostForm', fieldName, fileName)
	}

	async error(file) {
		let fileTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/jpg']
		if (!fileTypes.includes(file.type)) {
			toastr.error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');
		}
	};

	async addedfile(file, fromServer) {
		const { maxUploadSize } = this.props;
		const siteData = await getSpecificConfig({ name: ['maxUploadSize'] });
		if (file.size > (1024 * 1024 * parseInt(siteData.maxUploadSize))) {
			toastr.error('Maximum upload size Exceeded! ', 'Try again with a smaller sized image');
			this.dropzone.removeFile(file);
			return;
		}
	}

	render() {
		const { defaultMessage, className, subTextClass, subText, inputContainer, inputContainerClass, url, maxUploadSize, maxUploadText } = this.props;
		const djsConfig = {
			dictDefaultMessage: '',
			addRemoveLinks: false,
			uploadMultiple: false,
			acceptedFiles: 'image/jpeg,image/png, image/svg+xml, image/jpg',
			dictMaxFilesExceeded: 'Remove the existing image and try upload again',
			previewsContainer: false,
			hiddenInputContainer: inputContainer,
			timeout: 300000
			// maxFiles: 1
		};

		var componentConfig = {
			iconFiletypes: ['.jpg', '.png', '.svg'],
			multiple: false,
			showFiletypeIcon: false,
			postUrl: url
		};

		const eventHandlers = {
			init: dz => this.dropzone = dz,
			success: this.success,
			addedfile: this.addedfile,
			error: this.error,
		};


		return (
			<div className={cx('listPhotoContainer')}>
				<div className={cx(inputContainerClass)}>
					<div className={className}>
						<DropzoneComponent
							config={componentConfig}
							eventHandlers={eventHandlers}
							djsConfig={djsConfig}
						>
							{defaultMessage}
						</DropzoneComponent>
					</div>
				</div>
			</div>

		)
	}
}

const mapState = state => ({
});

const mapDispatch = {
	change
};

export default withStyles(s)(connect(mapState, mapDispatch)(Dropzone));
