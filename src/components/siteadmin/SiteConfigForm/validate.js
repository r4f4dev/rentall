import messages from '../../../locale/messages';

const validate = values => {

  const errors = {}

  if (!values.pushNotificationKey) {
    errors.pushNotificationKey = messages.required;
  } else if (values.pushNotificationKey.toString().trim() == "") {
    errors.pushNotificationKey = messages.required;
  }

  if (!values.deepLinkBundleId) {
    errors.deepLinkBundleId = messages.required;
  } else if (values.deepLinkBundleId.toString().trim() == "") {
    errors.deepLinkBundleId = messages.required;
  }

  if (!values.smtpHost) {
    errors.smtpHost = messages.required;
  } else if (values.smtpHost.toString().trim() == "") {
    errors.smtpHost = messages.required;
  }

  if (!values.smtpPort) {
    errors.smtpPort = messages.required;
  } else if (values.smtpPort.toString().trim() == "") {
    errors.smtpPort = messages.required;
  }

  if (!values.smptEmail) {
    errors.smptEmail = messages.required && messages.required;
  } else if (values.smptEmail.toString().trim() == "") {
    errors.smptEmail = messages.required;
  }

  if (!values.smtpSender) {
    errors.smtpSender = messages.required;
  } else if (values.smtpSender.toString().trim() == "") {
    errors.smtpSender = messages.required;
  }

  if (!values.smtpSenderEmail) {
    errors.smtpSenderEmail = messages.required && messages.required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(values.smtpSenderEmail)) {
    errors.smtpSenderEmail = messages.emailInvalid && messages.emailInvalid;
  }

  if (!values.twillioAccountSid) {
    errors.twillioAccountSid = messages.required;
  } else if (values.twillioAccountSid.toString().trim() == "") {
    errors.twillioAccountSid = messages.required;
  }

  if (!values.twillioAuthToken) {
    errors.twillioAuthToken = messages.required;
  } else if (values.twillioAuthToken.toString().trim() == "") {
    errors.twillioAuthToken = messages.required;
  }


  if (!values.twillioPhone) {
    errors.twillioPhone = messages.required && messages.required;
  } else if (values.twillioPhone && values.twillioPhone.toString().trim() == "") {
    errors.twillioPhone = messages.required && messages.required;
  } else if (values.twillioPhone.length > 30) {
    errors.twillioPhone = messages.phoneNumberLengthInvalid;
  }

  if (!values.paypalEmail) {
    errors.paypalEmail = messages.required && messages.required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(values.paypalEmail)) {
    errors.paypalEmail = messages.emailInvalid && messages.emailInvalid;
  }

  if (!values.paypalClientId) {
    errors.paypalClientId = messages.required;
  } else if (values.paypalClientId.toString().trim() == "") {
    errors.paypalClientId = messages.required;
  }

  if (!values.paypalSecret) {
    errors.paypalSecret = messages.required;
  } else if (values.paypalSecret.toString().trim() == "") {
    errors.paypalSecret = messages.required;
  }

  if (!values.paypalHost) {
    errors.paypalHost = messages.required;
  } else if (values.paypalHost.toString().trim() == "") {
    errors.paypalHost = messages.required;
  }

  if (!values.paypalHostMode) {
    errors.paypalHostMode = messages.required;
  }

  if (!values.stripePublishableKey) {
    errors.stripePublishableKey = messages.required;
  } else if (values.stripePublishableKey && values.stripePublishableKey.toString().trim() == "") {
    errors.stripePublishableKey = messages.required;
  }

  if (!values.maxUploadSize) {
    errors.maxUploadSize = messages.required;
  } else if (values.maxUploadSize.toString().trim() == "") {
    errors.maxUploadSize = messages.required;
  }

  return errors
}

export default validate;
