import messages from '../../../../locale/messages';

const validate = values => {

  const errors = {}

  if (!values.cancellationInfo) {
    errors.cancellationInfo = messages.required;
  } else if (values.cancellationInfo && values.cancellationInfo.trim() == "") {
    errors.cancellationInfo = messages.required;
  }

  return errors
}

export default validate