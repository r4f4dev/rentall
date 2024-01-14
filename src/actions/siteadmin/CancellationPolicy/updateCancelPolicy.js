import { gql } from 'react-apollo';
// Toaster
import { toastr } from 'react-redux-toastr';

import {
	UPDATE_CANCEL_START,
	UPDATE_CANCEL_SUCCESS,
	UPDATE_CANCEL_ERROR
} from '../../../constants';
// Redirection
import history from '../../../core/history';
import getCancelPolicies from '../../../routes/siteadmin/cancellationPolicies/getCancelPolicies.graphql';
import updateCancelPolicyMutation from './updateCancelPolicy.graphql';

export default function updateCancelPolicy(values) {

	return async (dispatch, getState, { client }) => {

		try {

			dispatch({ type: UPDATE_CANCEL_START });

			const { data } = await client.mutate({
				mutation: updateCancelPolicyMutation,
				variables: values,
				refetchQueries: [{ query: getCancelPolicies }]
			});

			if (data.updateCancelPolicy.status === 200) {
				toastr.success("Success!", "Policy has been updated successfully!");
				dispatch({ type: UPDATE_CANCEL_SUCCESS });
			} else {
				toastr.success("Error!", data.updateCancelPolicy && data.updateCancelPolicy.errorMessage);
				dispatch({ type: UPDATE_CANCEL_ERROR });
			}

			history.push('/siteadmin/cancellation-policies/management');

		} catch (error) {
			toastr.error("Failed!", "Failed to change  status" + error);
			dispatch({ type: UPDATE_CANCEL_ERROR });
			return false;
		}
		return true;
	};
}