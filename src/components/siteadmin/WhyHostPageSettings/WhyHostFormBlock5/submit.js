import fetch from '../../../../core/fetch';
import {toastr} from 'react-redux-toastr';

async function submit(values, dispatch) {
  const query = `
  mutation (
    $whyhostBannerHeading: String,
    $whyhostBannerImage: String,
) {
  updateWhyHostPage (
    whyhostBannerHeading: $whyhostBannerHeading,
    whyhostBannerImage: $whyhostBannerImage,
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
    toastr.success("Success!", "Why host page banner changes are updated!");
  } else {
    toastr.error("Failed!", "Why host page banner changes failed!");
  }

}

export default submit;
