import messages from '../../../locale/messages';

const validate = values => {

  const errors = {}

  if (!values.title) {
    errors.title = messages.required;
  } else if (values.title && values.title.toString().trim() == '') {
    errors.title = messages.required;
  }

  if (!values.content) {
    errors.content = messages.required;
  } else if (values.content && values.content.toString().trim() == '') {
    errors.content = messages.required;
  }

  return errors
}

export default validate;