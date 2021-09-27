import React, { useEffect } from "react";
import "./style.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axiosClient from "../../axios/config";
import { useDispatch, useSelector } from "react-redux";
import * as authActionCreator from "../../actions/authActions";
import { toast } from "react-toastify";
function LoginPage() {
    const { register, handleSubmit, reset } = useForm();
    const url = `/account/login`;
    const history = useHistory();
    const isLogin = useSelector((state) => state.auth.isLogin);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isLogin) {
            history.push("/");
        }
    }, [isLogin, history]);
    const onSubmit = async (data) => {
        await axiosClient
            .post(url, data)
            .then(() => {
                history.push("/");
                toast.success("Đăng nhập thành công!");
                dispatch(authActionCreator.setLogin(true));
                reset();
            })
            .catch((error) => {
                const text = error.response.data.detail.message;
                toast.warning(text);
            });
    };

    return (
        <div className="w-full max-w-xl mx-auto login-page">
            <div className="flex flex-col align-middle">
                <div className="mt-8 mb-2 text-2xl text-center">Đăng nhập</div>
                <form
                    className="pt-6 pb-8 mb-4 rounded bg-loginColor"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="mb-4">
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
                    <div className="mb-6">
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
                    <div className="flex flex-col items-center justify-between">
                        <button
                            type="submit"
                            className="w-full px-5 py-2 font-bold bg-white rounded text-loginColor focus:outline-none focus:shadow-outline"
                        >
                            Đăng nhập
                        </button>
                        {/* <Link
                            to="/account/register"
                            className="inline-block w-full mt-4 text-sm font-bold text-right text-white align-baseline hover:underline"
                        >
                            Tạo tại khoản ngay
                        </Link> */}
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
