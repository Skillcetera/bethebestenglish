import React from "react";
import * as database from "../../const/database";
const axios = require("axios").default;
function Auth({ children }) {
    const isLogin = children;
    const url = `http://${database.dataBaseUrl}/account/me`;
    const getData = async () => {
        const data = await axios.get(url);
        console.log(data);
    };
    if (isLogin) {
        getData();
    }
    return <div></div>;
}

export default Auth;
