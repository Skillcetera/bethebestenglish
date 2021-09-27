import React from "react";
import { useDispatch } from "react-redux";
import axiosClient from "../../axios/config";
import * as authActionCreator from "../../actions/authActions";
import * as learnerActionCreator from "../../actions/learnerAction";
function Auth({ children }) {
    const isLogin = children;
    const dispatch = useDispatch();
    const getData = async () => {
        //get user data
        const response = await axiosClient.get(`/account/me`);
        dispatch(authActionCreator.setUser(response.data.data[0]));
        //get learner data
        const res = await axiosClient.get("/api/learner");
        dispatch(learnerActionCreator.getLearner(res.data.data[0]));
        console.log(res.data);
    };
    if (isLogin) {
        getData();
    }
    return <div></div>;
}

export default Auth;
