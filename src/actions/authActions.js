import * as types from "../const/authActions";
export const resetState = () => {
    return {
        type: types.RESET_STATE,
    };
};

export const getData = () => {
    return {
        type: types.GET_DATA,
    };
};
export const setLogin = (isLogin) => {
    return {
        type: types.SET_LOGIN,
        payload: isLogin,
    };
};
