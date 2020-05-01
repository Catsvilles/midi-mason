import * as actionTypes from '../actions/actionTypes';

export const setCustomerAccessToken = (accessToken) => {
    return {
        type:actionTypes.SET_CUSTOMER_ACCESS_TOKEN,
        customerAccessToken: accessToken
    };
};

export const customerLogout = () => {
    return {
        type:actionTypes.CUSTOMER_LOGOUT,
    };
};
