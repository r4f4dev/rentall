import {
    SEND_VERIFICATION_SMS_START,
    SEND_VERIFICATION_SMS_SUCCESS,
    SEND_VERIFICATION_SMS_ERROR
} from '../../constants';
import { toastr } from 'react-redux-toastr';

import { gql } from 'react-apollo';

// GraphQL query
import getPhoneData from '../../components/PhoneVerificationModal/getUserData.graphql';

// Redux Action
import { openSmsVerificationModal } from '../SmsVerification/modalActions';

// Process SMS
import { processSms } from '../../core/sms/processSms';

import { decode } from '../../helpers/queryEncryption';
import { setLoaderStart, setLoaderComplete } from '../loader/loader';

export function sendVerificationSms(countryCode, phoneNumber, countryName) {

    return async (dispatch, getState, { client }) => {
        dispatch({
            type: SEND_VERIFICATION_SMS_START,
        });

        dispatch(setLoaderStart('smsLoading'));

        try {

            const mutation = gql`
                mutation AddPhoneNumber($countryCode: String!, $phoneNumber: String!, $countryName: String) {
                    AddPhoneNumber(countryCode: $countryCode, phoneNumber: $phoneNumber, countryName: $countryName) {
                        status
                        countryCode
                        phoneNumber
                        userProfileNumber
                    }
                }
            `;

            const { data } = await client.mutate({
                mutation,
                variables: {
                    countryCode,
                    phoneNumber,
                    countryName
                },
                refetchQueries: [{
                    query: getPhoneData
                }]
            });

            if (data && data.AddPhoneNumber && data.AddPhoneNumber.status == '200') {

                const { status, errorMessage } = await processSms('verification',
                    data.AddPhoneNumber.countryCode,
                    decode(data.AddPhoneNumber.phoneNumber),
                    data.AddPhoneNumber.userProfileNumber);

                if (status == 200) {
                    dispatch(openSmsVerificationModal('verifyPhoneNumber'));
                    dispatch({
                        type: SEND_VERIFICATION_SMS_SUCCESS,
                    });
                } else {
                    dispatch({
                        type: SEND_VERIFICATION_SMS_ERROR,
                    });
                }

                dispatch(setLoaderComplete('smsLoading'));

                if (errorMessage) {
                    toastr.error("Error!", errorMessage ? errorMessage : 'Sorry, something went wrong. Please try again');
                    return {
                        status: '400',
                        errorMessage
                    }
                }
            } else {
                dispatch({
                    type: SEND_VERIFICATION_SMS_ERROR,
                });

                dispatch(setLoaderComplete('smsLoading'));

                return {
                    status: '400',
                    errorMessage: 'Something error occurred.'
                };
            }
        } catch (error) {
            dispatch({
                type: SEND_VERIFICATION_SMS_ERROR,
            });
            dispatch(setLoaderComplete('smsLoading'));
            return {
                status: '400'
            };
        }

        return {
            status: '200'
        };
    };

}