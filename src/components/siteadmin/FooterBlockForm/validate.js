import messages from '../../../locale/messages';

const validate = values => {

  const errors = {}

  if (!values.title1) {
    errors.title1 = messages.required;
  } else if (values.title1 && values.title1.toString().trim() == "") {
    errors.title1 = messages.blankSpace;
  }

  if (!values.content1) {
    errors.content1 = messages.required;
  } else if (values.content1 && values.content1.toString().trim() == "") {
    errors.content1 = messages.blankSpace;
  }

  if (!values.title2) {
    errors.title2 = messages.required;
  } else if (values.title2 && values.title2.toString().trim() == "") {
    errors.title2 = messages.blankSpace;
  }

  if (!values.content2) {
    errors.content2 = messages.required;
  } else if (values.content2 && values.content2.toString().trim() == "") {
    errors.content2 = messages.blankSpace;
  }

  if (!values.title3) {
    errors.title3 = messages.required;
  } else if (values.title3 && values.title3.toString().trim() == "") {
    errors.title3 = messages.blankSpace;
  }

  if (!values.content3) {
    errors.content3 = messages.required;
  } else if (values.content3 && values.content3.toString().trim() == "") {
    errors.content3 = messages.blankSpace;
  }

  return errors
}

export default validate;