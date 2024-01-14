import moment from 'moment';
import { toastr } from 'react-redux-toastr';
// Redux Form
import { SubmissionError } from 'redux-form';

// Fetch request
import fetch from '../../core/fetch';

// Language
import messages from '../../locale/messages';
import PopulateData from '../../helpers/populateData';

// Redux
import { setRuntimeVariable } from '../../actions/runtime';
import { loadAccount } from '../../actions/account';
import { closeSignupModal } from '../../actions/modalActions';

async function submit(values, dispatch, phone) {
  let unmaskedPhoneNumber = phone.value.replace(/[+ -]/g, '');

  let today, birthDate, age, monthDifference;
  let dateOfMonth = Number(values.month) + 1;
  let dobDate = values.year + '/' + dateOfMonth + '/' + values.day;

  if (!values.month || !values.day || !values.year) {
    throw new SubmissionError({ _error: messages.birthDayRequired });
  }

  // if (values.year) {
  //   let now = new Date();
  //   let currentYear = now.getFullYear();
  //   let difference = currentYear - values.year;
  //   if (difference < 18) {
  //     throw new SubmissionError({ _error: messages.mustBe18OrOld });
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
      throw new SubmissionError({ _error: messages.WrongDayChosen });
    }
  }

  values.firstName = values.firstName.trim();
  values.lastName = values.lastName.trim();

  const query = `query (
    $firstName:String,
    $lastName:String,
    $phone: String!,
    $password: String!,
    $dateOfBirth: String
  ) {
      userRegister (
        firstName:$firstName,
        lastName:$lastName,
        phone: $phone,
        password: $password,
        dateOfBirth: $dateOfBirth
      ) {
        # emailToken
        status
      }
    }`;

  const { year, month, day } = values;
  let dateOfBirth = (Number(month) + 1) + "-" + year + "-" + day;

  const params = {
    firstName: values.firstName,
    lastName: values.lastName,
    phone: unmaskedPhoneNumber,
    password: values.password,
    dateOfBirth: dateOfBirth,
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
    credentials: 'include'
  });

  const { data } = await resp.json();

  if (data.userRegister.status == "success") {
    dispatch(closeSignupModal());
    let registerScreen = true;
    let refer = values.refer;
    dispatch(loadAccount(registerScreen, refer));
    dispatch(setRuntimeVariable({
      name: 'isAuthenticated',
      value: true,
    }));
  } else if (data.userRegister.status == "phone") {
    throw new SubmissionError({ _error: messages.emailAlreadyExists });
  } else if (data.userRegister.status == "loggedIn") {
    dispatch(loadAccount());
    dispatch(setRuntimeVariable({
      name: 'isAuthenticated',
      value: true,
    }));
    throw new SubmissionError({ _error: messages.loggedIn });
  } else if (data.userRegister.status == "adminLoggedIn") {
    throw new SubmissionError({ _error: messages.adminLoggedIn });
  } else {
    throw new SubmissionError({ _error: messages.somethingWentWrong });
  }

}

export default submit;
