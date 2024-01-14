import fetch from '../../../../core/fetch';
import {toastr} from 'react-redux-toastr';

async function submit(values, dispatch) {
  const query = `
  mutation (
    $hostBannerTitle1: String,
    $hostBannerImage1: String,
) {
  updateWhyHostPage (
    hostBannerTitle1: $hostBannerTitle1,
    hostBannerImage1: $hostBannerImage1,
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

  if (data.updateWhyHostPage.status === 200) {
    toastr.success("Success!", "Why become host block 1 settings are updated!");
  } else {
    toastr.error("Error!", "Why become host block 1 settings update failed!");
  }

}

export default submit;
