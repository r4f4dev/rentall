import fetch from '../fetch';

export async function processSms(type, countryCode, phoneNumber, userProfileNumber, fullPhone=null) {

    let URL;
    let variables = {
        dialCode: countryCode,
        phoneNumber,
        fullPhone,
        userProfileNumber,
    };

    if (type === 'verification') {
        URL = '/send-verification-code';
    }

    const resp = await fetch(URL, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(variables),
        credentials: 'include'
    });

    const { status, errorMessage } = await resp.json();

    return {
        status,
        errorMessage
    }
}