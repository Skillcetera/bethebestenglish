import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axiosClient from "../../axios/config";
import { useHistory } from "react-router-dom";
function RegisterPage() {
    const url = `/account/register`;
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();
    const onSubmit = async (data) => {
        const { userName, password, confirmPassword, email } = data;
        await axiosClient
            .post(url, {
                userName,
                password,
                confirmPassword,
                email,
            })
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                console.log(error.response);
            });
        reset();
    };
    return (
        <div className="w-full max-w-xl mx-auto login-page">
            <div className="flex flex-col align-middle">
                <div className="mt-8 mb-2 text-2xl font-semibold text-center">
                    Đăng kí
                </div>
                <form
                    className="pt-6 pb-8 mb-4 rounded bg-loginColor"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="mb-4">
                        <label
                            className="block mb-2 text-sm font-bold text-white"
                            for="email"
                        >
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="abcxyz@gmail.com"
                            required
                            {...register("email")}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block mb-2 text-sm font-bold text-white"
                            for="username"
                        >
                            Tên tài khoản
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            required
                            {...register("userName")}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block mb-2 text-sm font-bold text-white"
                            for="password"
                        >
                            Mật khẩu
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="*********"
                            required
                            {...register("password")}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block mb-2 text-sm font-bold text-white"
                            for="password"
                        >
                            Xác nhận mật khẩu
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="*********"
                            required
                            {...register("confirmPassword")}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <button
                            className="w-full px-5 py-2 font-bold bg-white rounded text-loginColor focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Đăng kí
                        </button>
                        <Link
                            to="/account/login"
                            className="inline-block w-full mt-4 text-sm font-bold text-right text-white align-baseline hover:underline"
                        >
                            Đã có tài khoản? Đăng nhập
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
