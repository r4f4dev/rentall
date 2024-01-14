import moment from 'moment';
import { toastr } from 'react-redux-toastr';
import fetch from '../../core/fetch';
import { setRuntimeVariable } from '../../actions/runtime';
import { loadAccount } from '../../actions/account';
import PopulateData from '../../helpers/populateData';

async function submit(values, dispatch) {

  let today, birthDate, age, monthDifference;
  let dateOfMonth = Number(values.month) + 1;
  let dobDate = values.year + '/' + dateOfMonth + '/' + values.day;

  if (!values.day) {
    //throw new SubmissionError({ _error: messages.birthDayRequired });
    toastr.error("Update Profile Failed", "Birth day field is missing");
    return false;
  }

  if (!values.year) {
    //throw new SubmissionError({ _error: messages.birthDayRequired });
    toastr.error("Update Profile Failed", "Birth year field is missing");
    return false;
  }

  let monthValidation = parseInt(values.month);
  if (isNaN(monthValidation)) {
    toastr.error("Update Profile Failed", "Birth month field is missing");
    return false;
  }

  // if (values.year) {
  //   let now = new Date();
  //   let currentYear = now.getFullYear();
  //   let difference = currentYear - values.year;
  //   if (difference < 18) {
  //     //throw new SubmissionError({ _error: messages.mustBe18OrOld });
  //     toastr.error("Update Profile Failed", "Sorry, you must be 18 years old");
  //     return false;
  //   }
  // }


  today = new Date();
  birthDate = new Date(dobDate);
  age = today.getFullYear() - birthDate.getFullYear();
  monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) age--;
  if (age < 18) {
    toastr.error("Update Profile Failed", "Sorry, you must be 18 years old");
    return false;
  }

  if (values.year && values.month && values.day) {
    if (!PopulateData.isValidDate(values.year, values.month, values.day)) {
      //throw new SubmissionError({ _error: messages.WrongDayChosen });
      toastr.error("Update Profile Failed", "Invalid date of birth, please fill the valid data");
      return false;
    }
  }

  const query = `
  query (
    $firstName:String,
    $lastName:String,
  	$gender: String,
    $dateOfBirth: String,
    $email: String!,
  	$phoneNumber: String,
  	$preferredLanguage: String,
  	$preferredCurrency: String,
  	$location: String,
    $info: String,
    $loggedinEmail: String,
    $countryCode: String,
    $countryName: String,
  ) {
      userEditProfile (
        firstName:$firstName,
        lastName:$lastName,
        gender: $gender,
        dateOfBirth: $dateOfBirth,
        email: $email,
        phoneNumber: $phoneNumber,
        preferredLanguage: $preferredLanguage,
        preferredCurrency: $preferredCurrency,
        location: $location,
        info: $info,
        loggedinEmail: $loggedinEmail,
        countryCode: $countryCode,
        countryName: $countryName,
      ) {
        status
      }
    }
    `;

  const { year, month, day } = values;
  let dateOfBirth = (Number(month) + 1) + "-" + year + "-" + day;

  let firstNameValue = values.firstName ? values.firstName.trim() : values.firstName;
  let lastNameValue = values.lastName ? values.lastName.trim() : values.lastName;
  let location = values.location ? values.location.trim() : values.location;
  let infoValue = values.info ? values.info.trim() : values.info;
  let loggedinEmailValue = values.loggedinEmail ? values.loggedinEmail.trim() : values.loggedinEmail;
  let countryName = values.phoneCountryCode ? values.phoneCountryCode : null;
  let phoneNumber = values.phoneNumber ? values.phoneNumber.trim() : values.phoneNumber;
  let countryCode = values.phoneDialCode ? values.phoneDialCode : values.dialCode;

  const params = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    gender: values.gender,
    dateOfBirth: dateOfBirth,
    email: values.email,
    preferredLanguage: values.preferredLanguage,
    preferredCurrency: values.preferredCurrency,
    location: location,
    info: infoValue,
    phoneNumber: values.phoneNumber,
    loggedinEmail: loggedinEmailValue,
    // countryCode: values.countryCode,
    // countryName: countryName
  };
  const resp = await fetch('/graphql', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query,
      variables: params
    }),
    credentials: 'include',
  });

  const { data } = await resp.json();

  if (data.userEditProfile.status == "success") {
    await dispatch(loadAccount());
    toastr.success("Success!", "Your profile has been updated successfully");
  } else if (data.userEditProfile.status == "email") {
    toastr.error("Error!", "Email already exist, please try another email address!");
  } else if (data.userEditProfile.status == "notLoggedIn") {
    dispatch(setRuntimeVariable({
      name: 'isAuthenticated',
      value: false,
    }));
    toastr.error("Error!", "You are not logged in, please login and try again!");
  } else {
    toastr.error("Error!", "Sorry, something went wrong! Reload this page and try again!");
  }

}

export default submit;
