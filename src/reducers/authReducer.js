import * as types from "../const/authActions";
const initialState = {
    name: null,
    email: null,
    _id: null,
    isLogin: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESET_STATE:
            return {
                ...initialState,
            };
        case types.GET_DATA:
            console.log(action);
            return {
                ...state,
            };
        case types.SET_LOGIN:
            return {
                ...state,
                isLogin: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};
export default authReducer;
