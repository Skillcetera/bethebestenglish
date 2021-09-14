import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useForm } from "react-hook-form";
import * as database from "../../const/database";
import { useHistory } from "react-router-dom";
const axios = require("axios").default;

function LoginPage() {
    const { register, handleSubmit, reset } = useForm();
    const url = `http://${database.dataBaseUrl}/account/login`;
    const history = useHistory();
    const onSubmit = async (data) => {
        let res;

        res = await axios
            .post(url, data, {
                withCredentials: true,
            })
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                console.log(error);
            });

        reset();
    };

    return (
        <div className="w-full max-w-xl mx-auto login-page">
            <div className="flex flex-col align-middle">
                <div className="mt-8 mb-2 text-2xl text-center">Đăng nhập</div>
                <form
                    class="bg-loginColor  rounded  pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div class="mb-4">
                        <label
                            class="block text-white text-sm font-bold mb-2"
                            for="username"
                        >
                            Tên tài khoản
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            required
                            {...register(
                                "userName"
                                // {
                                //     min: 6,
                                //     max: 50,
                                // }
                            )}
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            class="block text-white text-sm font-bold mb-2"
                            for="password"
                        >
                            Mật khẩu
                        </label>
                        <input
                            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="*********"
                            required
                            {...register(
                                "password"
                                //  {
                                //     min: 6,
                                //     max: 50,
                                // }
                            )}
                        />
                    </div>
                    <div class="flex items-center flex-col  justify-between">
                        <button
                            type="submit"
                            class="bg-white text-loginColor font-bold py-2 px-5 w-full rounded focus:outline-none focus:shadow-outline"
                        >
                            Đăng nhập
                        </button>
                        <Link
                            to="/account/register"
                            class="inline-block align-baseline font-bold text-sm text-white mt-4 w-full text-right hover:underline"
                        >
                            Tạo tại khoản ngay
                        </Link>
                    </div>
                </form>
                <div className="my-0 section-line"></div>
                <div className="mt-1 text-center">hoặc</div>
                <FacebookIcon className="mx-auto mt-4 text-4xl" />
            </div>
        </div>
    );
}

export default LoginPage;
