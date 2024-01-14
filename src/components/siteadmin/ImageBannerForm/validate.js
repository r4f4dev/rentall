import messages from '../../../locale/messages';

const validate = values => {

  const errors = {}

  if (!values.title) {
    errors.title = messages.required;
  } else if (values.title && values.title.toString().trim() == '') {
    errors.title = messages.required;
  }

  if (!values.description) {
    errors.description = messages.required;
  } else if (values.description && values.description.toString().trim() == '') {
    errors.description = messages.required;
  }

  if (!values.buttonLabel) {
    errors.buttonLabel = messages.required;
  } else if (values.buttonLabel && values.buttonLabel.toString().trim() == '') {
    errors.buttonLabel = messages.required;
  }

  return errors
}

export default validate