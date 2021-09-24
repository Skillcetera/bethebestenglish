import * as types from "../const/authActionsConstants";
const initialState = {
    userName: null,
    email: null,
    _id: null,
    isLogin: false,
    avatar: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESET_STATE:
            return {
                ...initialState,
            };
        case types.GET_USER:
            return {
                ...state,
            };
        case types.SET_LOGIN:
            return {
                ...state,
                isLogin: action.payload,
            };
        case types.SET_USER:
            const { _id, email, isAdmin, userName, avatar } = action.payload;
            return {
                ...state,
                userName,
                email,
                isAdmin,
                _id,
                avatar,
            };
        default:
            return {
                ...state,
            };
    }
};
export default authReducer;
