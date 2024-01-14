import { gql } from 'react-apollo';
import { toastr } from 'react-redux-toastr';

import {
  SEND_FORGOT_PASSWORD_START,
  SEND_FORGOT_PASSWORD_SUCCESS,
  SEND_FORGOT_PASSWORD_ERROR,
} from '../../constants';

import { closeForgotPasswordModal } from '../modalActions';

export function sendForgotLink(email) {

  return async (dispatch, getState, { client }) => {

    dispatch({
      type: SEND_FORGOT_PASSWORD_START,
    });

    dispatch(closeForgotPasswordModal());

    try {

      let mutation = gql`
        mutation sendForgotPassword($email: String!) {
          sendForgotPassword (email: $email) {
            status
            errorMessage
          }
        }
      `;

      // Send Message
      const { data } = await client.mutate({
        mutation,
        variables: {
          email
        }
      });

      if (data && data.sendForgotPassword) {
        if (data.sendForgotPassword.status == '400') {
          toastr.error("Send reset link failed", data.sendForgotPassword.errorMessage);
          return false;
        }
        toastr.success("Reset link sent to your email", "A link to reset your password has been sent to email");
        dispatch({
          type: SEND_FORGOT_PASSWORD_SUCCESS,
        });
      }

    } catch (error) {
      dispatch({
        type: SEND_FORGOT_PASSWORD_ERROR,
        payload: {
          error
        }
      });
      return false;
    }

    return true;
  };
}