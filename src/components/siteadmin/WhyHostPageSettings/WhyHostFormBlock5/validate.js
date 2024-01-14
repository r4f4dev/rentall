import messages from '../../../../locale/messages';

const validate = values => {

  const errors = {}

  if (!values.whyhostBannerHeading) {
    errors.whyhostBannerHeading = messages.required;
  } else if (values.whyhostBannerHeading.trim() == "") {
    errors.whyhostBannerHeading = messages.required;
  }


  return errors
}

export default validate;