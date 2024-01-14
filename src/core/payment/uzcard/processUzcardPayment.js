import axios from "axios";

export async function processUzcardPayment(type, data = {}) {
  let URL, body;

  if (type === "paymentWithoutRegistration") {
    URL = "/uzcard-paymentWithoutRegistration";

    body = {
      amount: data.amount,
      cardNumber: data.cardNumber,
      expireDate: data.expireDate,
    };
  } else if (type === "confirmPayment") {
    URL = "/uzcard-confirmPayment";

    body = {
      session: data.session,
      otp: data.otp,
      reservationDetails: data.reservationDetails,
    };
  }

  const response = await axios.post(URL, body);

  const { status, errorMessage, resultData, redirect } = response.data;
  if (status === 200 && redirect) {
    window.location = redirect;
  }
  return {
    status,
    errorMessage,
    resultData,
  };
}
