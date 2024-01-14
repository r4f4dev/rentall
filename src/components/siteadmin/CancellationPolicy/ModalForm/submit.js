// Fetch Request
import fetch from '../../../../core/fetch';

// Toaster
import { toastr } from 'react-redux-toastr';
import { setSiteSettings } from '../../../../actions/siteSettings';
import { closeCancelModal } from '../../../../actions/siteadmin/modalActions';


async function submit(values, dispatch) {

    const query = `
  query (
    $cancellationInfo: String
  ) {
    updateSiteSettings (
        cancellationInfo: $cancellationInfo
    ) {
        status
    }
  }
  `;

    const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: query,
            variables: values
        }),
        credentials: 'include',
    });

    const { data } = await resp.json();

    if (data && data.updateSiteSettings && data.updateSiteSettings.status === 200) {
        toastr.success("Success!", "Cancellation Info changes are updated!");
        dispatch(setSiteSettings());
        dispatch(closeCancelModal());
    } else {
        toastr.error("Failed", "Cancellation Info changes failed");
        dispatch(closeCancelModal());
    }

}

export default submit;
