import * as types from "../const/authActionsConstants";
export const resetState = () => {
    return {
        type: types.RESET_STATE,
    };
};

export const getUser = () => {
    return {
        type: types.GET_USER,
    };
};
export const setLogin = (isLogin) => {
    return {
        type: types.SET_LOGIN,
        payload: isLogin,
    };
};
export const setUser = (data) => {
    return {
        type: types.SET_USER,
        payload: data,
    };
};
