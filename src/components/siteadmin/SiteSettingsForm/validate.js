import messages from '../../../locale/messages';

const validate = values => {

  const errors = {}

  if (!values.siteName) {
    errors.siteName = messages.required;
  } else if (values.siteName && values.siteName.toString().trim() == '') {
    errors.siteName = messages.required;
  }

  if (!values.siteTitle) {
    errors.siteTitle = messages.required;
  } else if (values.siteTitle && values.siteTitle.toString().trim() == '') {
    errors.siteTitle = messages.required;
  }

  if (values.logoHeight) {
    if (isNaN(values.logoHeight)) {
      errors.logoHeight = messages.logoHeight;
    } else if (values.logoHeight > 250) {
      errors.logoHeight = messages.invalid;
    } else if (values.logoHeight.toString().trim() == '') {
      errors.logoHeight = messages.required;
    }
  }

  if (values.logoWidth) {
    if (isNaN(values.logoWidth)) {
      errors.logoWidth = messages.logoWidth;
    } else if (values.logoWidth > 250) {
      errors.logoWidth = messages.invalid;
    } else if (values.logoWidth.toString().trim() == '') {
      errors.logoWidth = messages.required;
    }
  }

  if (values.homeLogoHeight) {
    if (isNaN(values.homeLogoHeight)) {
      errors.homeLogoHeight = messages.logoHeight;
    } else if (values.homeLogoHeight > 250) {
      errors.homeLogoHeight = messages.invalid;
    } else if (values.homeLogoHeight.toString().trim() == '') {
      errors.homeLogoHeight = messages.required;
    }
  }

  if (values.homeLogoWidth) {
    if (isNaN(values.homeLogoWidth)) {
      errors.homeLogoWidth = messages.logoWidth;
    } else if (values.homeLogoWidth > 250) {
      errors.homeLogoWidth = messages.invalid;
    } else if (values.homeLogoWidth.toString().trim() == '') {
      errors.homeLogoWidth = messages.required;
    }
  }

  if (values.metaDescription && values.metaDescription.length > 255) {
    errors.metaDescription = messages.metaDescription;
  } else if (values.metaDescription && values.metaDescription.toString().trim() == '') {
    errors.metaDescription = messages.required;
  }

  if (values.metaKeyword && values.metaKeyword.length > 255) {
    errors.metaKeyword = messages.metaKeyword;
  } else if (values.metaKeyword && values.metaKeyword.toString().trim() == '') {
    errors.metaKeyword = messages.required;
  }

  if ((!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(values.playStoreUrl))) {
    errors.playStoreUrl = messages.urlInvalid;
  }

  if ((!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(values.appStoreUrl))) {
    errors.appStoreUrl = messages.urlInvalid;
  }

  if (!values.email) {
    errors.email = messages.required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(values.email)) {
    errors.email = messages.emailInvalid;
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = messages.required;
  } else if (values.phoneNumber && values.phoneNumber.toString().trim() == "") {
    errors.phoneNumber = messages.required;
  } else if (values.phoneNumber.length > 30) {
    errors.phoneNumber = messages.phoneNumberLengthInvalid;
  }

  if (!values.address) {
    errors.address = messages.required;
  } else if (values.address && values.address.toString().trim() == '') {
    errors.address = messages.required;
  }

  if (!values.androidVersion) {
    errors.androidVersion = messages.required;
  } else if (values.androidVersion && values.androidVersion.toString().trim() === '') {
    errors.androidVersion = messages.required;
  } else if (values.androidVersion && !/^\d+(\.\d+){0,2}$/i.test(values.androidVersion)) {
    errors.androidVersion = messages.invalidVersionNumber;
  }

  if (!values.iosVersion) {
    errors.iosVersion = messages.required
  } else if (values.iosVersion.trim() == '') {
    errors.iosVersion = messages.required
  } else if (values.iosVersion && !/^\d+(\.\d+){0,2}$/i.test(values.iosVersion)) {
    errors.iosVersion = messages.invalidVersionNumber;
  }

  return errors
}

export default validate;
