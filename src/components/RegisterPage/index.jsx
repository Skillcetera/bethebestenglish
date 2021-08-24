import React from "react";
import { Link } from "react-router-dom";
function RegisterPage() {
    return (
        <div className="w-full max-w-xl mx-auto login-page">
            <div className="flex flex-col align-middle">
                <div className="mt-8 mb-2 text-2xl font-semibold text-center">
                    Đăng kí
                </div>
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
                    <div class="mb-2">
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
                    <div class="mb-6">
                        <label
                            class="block text-white text-sm font-bold mb-2"
                            for="password"
                        >
                            Xác nhận mật khẩu
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
                            Đăng kí
                        </button>
                        <Link
                            to="/account/login"
                            class="inline-block align-baseline font-bold text-sm text-white mt-4 w-full text-right hover:underline"
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
