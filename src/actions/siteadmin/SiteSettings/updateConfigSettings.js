// Toaster
import { toastr } from 'react-redux-toastr';

import {
	SITE_SETTINGS_UPLOAD_START,
	SITE_SETTINGS_UPLOAD_ERROR,
	SITE_SETTINGS_UPLOAD_SUCCESS
} from '../../../constants/index';

import { setLoaderStart, setLoaderComplete } from '../../loader/loader';
import updateConfigSettingsMutation from './updateConfigSettings.graphql';

export default function updateConfigSettings(values) {
	return async (dispatch, getState, { client }) => {
		try {
			dispatch({ type: SITE_SETTINGS_UPLOAD_START });

			dispatch(setLoaderStart('configSettings'));

			const { data } = await client.mutate({
				mutation: updateConfigSettingsMutation,
				variables: values
			})

			dispatch(setLoaderComplete('configSettings'));

			if (data && data.updateConfigSettings && data.updateConfigSettings.status == 200) {
				dispatch({ type: SITE_SETTINGS_UPLOAD_SUCCESS });
				toastr.success("Success!", "Configurations updated successfully!");
			}
			else {
				let errorMessage = data && data.updateConfigSettings && data.updateConfigSettings.errorMessage;
				dispatch({ type: SITE_SETTINGS_UPLOAD_ERROR });
				toastr.error("Error!", errorMessage);
			}
			
		}
		catch (err) {
			dispatch({ type: SITE_SETTINGS_UPLOAD_ERROR });
			toastr.error("Error!", "Oops! Something went wrong, " + err);
		}
	}
}
