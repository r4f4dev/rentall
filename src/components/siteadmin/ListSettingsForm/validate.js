import messages from '../../../locale/messages';

const validate = values => {

  const errors = {}

  if (!values.itemName) {
    errors.itemName = messages.Required;
  } else if (values.itemName && values.itemName.trim() == "") {
    errors.itemName = messages.blankSpace;
  } else if (values.itemName && values.itemName.length > 255) {
    errors.itemName = messages.exceedLimit;
  }

  if (!values.otherItemName) {
    errors.otherItemName = messages.Required;
  } else if (values.otherItemName && values.otherItemName.trim() == "") {
    errors.otherItemName = messages.blankSpace;
  } else if (values.itemName && values.itemName.length > 255) {
    errors.itemName = messages.exceedLimit;
  }

  if (!values.startValue) {
    errors.startValue = messages.Required;
  } else if (values.startValue && (Number(values.startValue) <= 0 || Number(values.startValue) != parseInt(values.startValue, 10))) {
    errors.startValue = messages.startValueIsInvalid;
  }

  if (!values.endValue) {
    errors.endValue = messages.Required;
  } else if (values.endValue && (Number(values.endValue) <= 0 || Number(values.endValue) != parseInt(values.endValue, 10))) {
    errors.endValue = messages.endValueIsInvalid;
  }

  if (Number(values.endValue) < Number(values.startValue)) {
    errors.endValue = messages.endValueGreater;
  }

  if (values.itemDescription && values.itemDescription.trim() == "") {
    errors.itemDescription = messages.blankSpace;
  } else if (values.itemDescription && values.itemDescription.length > 255) {
    errors.itemDescription = messages.exceedLimit;
  }

  return errors
}

export default validate