import * as actionTypes from '../actions/actionTypes'

const initialState = {
        userId: "",
        userAccessToken: "",
        isLoggedIn: false
};

const reducer = (state= initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_USER_ACCESS_TOKEN:
            return {
                ...state,
                userAccessToken: action.userAccessToken,
                isLoggedIn: true
            };
        case actionTypes.SET_USER_ID:
            return {
                ...state,
                userId: action.userId,
                isLoggedIn: true
            };
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                userAccessToken: "",
                isLoggedIn: false
            };
        default:
            return {...state};
    }
};

export default reducer;