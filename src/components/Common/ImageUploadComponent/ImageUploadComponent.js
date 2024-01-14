import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toastr } from 'react-redux-toastr';

import { setLoaderStart, setLoaderComplete } from '../../../actions/loader/loader';
import { getSpecificConfig } from '../../../helpers/getConfigValue';

export class ImageUploadComponent extends Component {

	static defaultProps = {
		djsConfig: {
			dictDefaultMessage: '',
			addRemoveLinks: false,
			uploadMultiple: false,
			acceptedFiles: 'image/jpeg,image/png, image/svg+xml, image/jpg',
			dictMaxFilesExceeded: 'Remove the existing image and try upload again',
			previewsContainer: false,
			hiddenInputContainer: '.dzInputContainerLogo',
			timeout: 300000,
			maxFiles: 1
		}
	};

	constructor(props) {
		super(props);
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

	error = async (file) => {
		const { setLoaderComplete, loaderName } = this.props;

		let fileFormates = [
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
			'text/calendar'
		];

		if (loaderName) setLoaderComplete(loaderName);
		const siteData = await getSpecificConfig({ name: ['maxUploadSize'] });

		if (file && file.size > (1024 * 1024 * siteData.maxUploadSize)) {
			toastr.error('Maximum upload size Exceeded! ', 'Try with smallest size image');
			return;
		}

		if (file && (file.accepted === false || fileFormates.indexOf(file.type) >= 0)) {
			toastr.error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');
			return;
		}
	};

	complete = (file) => {
		const { setLoaderComplete, loaderName } = this.props;
		this.dropzone.files = [];
		if (loaderName) setLoaderComplete(loaderName);
	}


	addedfile = (file) => {
		const { setLoaderStart, loaderName } = this.props;
		if (loaderName) setLoaderStart(loaderName);
	}

	render() {
		const { defaultMessage, className, subTextClass, subText, djsConfig, componentConfig, success } = this.props;
		const eventHandlers = {
			init: dz => this.dropzone = dz,
			success,
			error: this.error,
			complete: this.complete,
			addedfile: this.addedfile
		};
		return (
			<div className={cx('listPhotoContainer')}>
				<div className={cx('dzInputContainerLogo', 'dzInputContainerLogoOpacity', 'positionRelative')}>
					<div className={cx(className, 'photoUploadBtn')}>
						<DropzoneComponent
							config={componentConfig}
							eventHandlers={eventHandlers}
							djsConfig={{
								...djsConfig,
							}}
						>{defaultMessage}</DropzoneComponent>
					</div>
				</div>
			</div>
		)
	}
}

const mapState = state => ({
});

const mapDispatch = {
	setLoaderStart,
	setLoaderComplete
};

export default (connect(mapState, mapDispatch)(ImageUploadComponent));

