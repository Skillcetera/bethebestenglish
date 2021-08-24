import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import FacebookIcon from "@material-ui/icons/Facebook";
function LoginPage() {
    return (
        <div className="w-full max-w-xl mx-auto login-page">
            <div className="flex flex-col align-middle">
                <div className="mt-8 mb-2 text-2xl text-center">Đăng nhập</div>
                <form class="bg-loginColor  rounded  pt-6 pb-8 mb-4">
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
                        />
                    </div>
                    <div class="flex items-center flex-col  justify-between">
                        <button
                            class="bg-white text-loginColor font-bold py-2 px-5 w-full rounded focus:outline-none focus:shadow-outline"
                            type="submit"
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
                <div className="mt-0 mt-1 text-center">hoặc</div>
                <FacebookIcon className="mx-auto mt-4 text-4xl" />
            </div>
        </div>
    );
}

export default LoginPage;
