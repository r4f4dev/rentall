import moment from "moment";
import axios from "axios";
import { UserProfile, User, Codes } from "../../../data/models";

import { updateVerificationCode } from "./helpers/dbFunctions";

const _login = "tebo",
  _password = "4c4);aG4fZV!",
  _api = "http://91.204.239.44/broker-api/",
  _token = Buffer.from(`${_login}:${_password}`).toString("base64");

const request = axios.create({
  headers: {
    post: {
      Authorization: `Basic ${_token}`,
    },
  },
});

const PlayMobileSms = (app) => {
  app.post("/send-verification-code", async function(req, res) {
    let responseStatus = 200,
      errorMessage;
    let phoneNumber = req.body.phoneNumber;
    let dialCode = req.body.dialCode;
    let userProfileNumber = req.body.userProfileNumber;
    let verificationCode = Math.floor(1000 + Math.random() * 9000);
    let message = `Ваш код от KvArenda - ${verificationCode}. Никому его не сообщайте`;
    // let userId = req.user.id;
    let today = moment();
    let convertedNumber = dialCode + phoneNumber;
    if (!!req.body.fullPhone) {
      convertedNumber = req.body.fullPhone;
    }

    try {
      // let findUpdatedTime = await UserProfile.findOne({
      //   attributes: ["codeUpdatedAt"],
      //   where: {
      //     phoneNumber,
      //   },
      //   raw: true,
      // });
      // let findUpdatedTime = await User.findOne({
      //   attributes: ["codeUpdatedAt"],
      //   where: {
      //     phone: phoneNumber,
      //   },
      //   raw: true,
      // });

      // if (findUpdatedTime && findUpdatedTime.codeUpdatedAt != null) {
      //   let codeUpdatedAt = moment(findUpdatedTime.codeUpdatedAt);
      //   let timeDiff = today.diff(codeUpdatedAt, "minutes");
      //   if (timeDiff < 2 && userProfileNumber == convertedNumber) {
      //     responseStatus = 400;
      //     errorMessage =
      //       "Please try again after 2 minutes to receive a new OTP.";
      //   }
      // }
      let findUpdatedTime = await Codes.findOne({
        where: { phone: phoneNumber },
        order: [ [ 'createdAt', 'DESC' ]],
        })
      if (findUpdatedTime && findUpdatedTime.createdAt != null) {
        let codeUpdatedAt = moment(findUpdatedTime.createdAt);
        let timeDiff = today.diff(codeUpdatedAt, "minutes");
        if (timeDiff < 2 && userProfileNumber == convertedNumber) {
          responseStatus = 400;
          errorMessage =
            "Please try again after 2 minutes to receive a new OTP.";
        }
      }

      if (responseStatus === 200) {
        await updateVerificationCode(verificationCode, convertedNumber);

        const url = _api + "send";
        let body = {
          messages: [
            {
              recipient: convertedNumber,
              "message-id":
                "kvar" + Math.floor(100000000 + Math.random() * 999999999),
              sms: {
                originator: "3700",
                content: {
                  text: message,
                },
              },
            },
          ],
        };
        const responseData = await request.post(url, body);
      }
    } catch (error) {
      responseStatus = 400;
      errorMessage = error.message;
    }

    res.send({ status: responseStatus, errorMessage });
  });
};

export default PlayMobileSms;
