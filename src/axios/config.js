import axios from "axios";
import * as database from ".././const/database";
const axiosClient = axios.create({
    baseURL: database.dataBaseUrl,
    withCredentials: true,
});

export default axiosClient;
