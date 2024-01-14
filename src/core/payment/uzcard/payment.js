import axios from "axios";
import { payment } from "../../../config";
import { updateReservation } from "./helpers/updateReservation";
import { createThread } from "./helpers/createThread";
import { blockDates } from "./helpers/blockDates";
import { createTransaction } from "./helpers/createTransaction";
import { createUzcardTransaction } from "./helpers/createUzcardTransaction";
import { emailBroadcast } from "./helpers/email";

const BASE_URL = payment.uzcard.base_url;
const USERNAME = payment.uzcard.username;
const PASSWORD = payment.uzcard.password;

const uzcardPayment = (app) => {
  app.post("/uzcard-paymentWithoutRegistration", async function(req, res) {
    let response;

    let status = 200,
      errorMessage;

    try {
      response = await axios.post(
        BASE_URL + "Payment/paymentWithoutRegistration",
        req.body,
        {
          auth: {
            username: USERNAME,
            password: PASSWORD,
          },
        }
      );

      // response = {
      //   data: {
      //     result: {
      //       transactionId: 6933020,
      //       session: 17891398,
      //       otpSentPhone: "99893*****54",
      //     },
      //   },
      // };
    } catch (error) {
      console.log("error", error);
      errorMessage = error.message;
      if (
        ((((error || {}).response || {}).data || {}).error || {}).errorMessage
      )
        errorMessage = error.response.data.error.errorMessage;

      console.log("UZCARD paymentWithoutRegistration ERROR: " + errorMessage);

      status = 400;
    }

    let resultData = ((response || {}).data || {}).result;
    return res.send({ status, errorMessage, resultData, redirect: null });
  });

  app.post("/uzcard-confirmPayment", async function(req, res) {
    let response;

    const reservationDetails = req.body.reservationDetails;

    let status = 200,
      errorMessage;

    try {
      response = await axios.post(
        BASE_URL + "Payment/confirmPayment",
        {
          session: req.body.session,
          otp: req.body.otp,
        },
        {
          auth: {
            username: USERNAME,
            password: PASSWORD,
          },
        }
      );
      // response = {
      //   data: {
      //     result: {
      //       transactionId: 111222333,
      //     },
      //   },
      // };

      // console.log("response", response);
    } catch (error) {
      console.log("error", error);
      status = 400;
      errorMessage = error.message;
      if (
        ((((error || {}).response || {}).data || {}).error || {}).errorMessage
      )
        errorMessage = error.response.data.error.errorMessage;

      console.log("UZCARD confirmPayment ERROR: " + errorMessage);
    }

    let resultData = ((response || {}).data || {}).result;

    console.log("resultData", resultData);
    console.log("status", status);

    if (status === 200 && resultData.transactionId) {
      await updateReservation(
        reservationDetails.reservationId,
        resultData.transactionId
      );
      await createThread(reservationDetails.reservationId);
      await blockDates(reservationDetails.reservationId);
      await createTransaction(
        reservationDetails.reservationId,
        reservationDetails.guestEmail,
        // customerId,
        null,
        resultData.transactionId,
        Math.round(reservationDetails.amount),
        reservationDetails.currency,
        "booking",
        3
      );
      await createUzcardTransaction(
        reservationDetails.reservationId,
        resultData.transactionId,
        resultData.merchantId,
        resultData.terminalId,
        resultData.utrno,
        resultData.cardNumber,
        resultData.totalAmount,
        resultData.commission,
        resultData.statusComment,
        resultData.status,
      );
      await emailBroadcast(reservationDetails.reservationId);
    }
    let redirect = "/users/trips/itinerary/" + reservationDetails.reservationId;

    return res.send({ status, errorMessage, resultData, redirect });
  });
};

export default uzcardPayment;
