import React from "react";

function buyPage(props) {
    const { match } = props;
    const courseName = match.params.courseName.toUpperCase();

    return (
        <div className="w-full max-w-xl mx-auto login-page">
            <div className="flex flex-col align-middle">
                <div className="mt-8 mb-2 text-2xl text-center">
                    Đăng kí khóa học
                </div>
                <form
                    class="bg-courseColor  rounded  pt-6 pb-8 mb-4"
                    autoComplete
                >
                    <div class="mb-4">
                        <label
                            class="block text-white text-sm font-bold mb-2"
                            for="nameOfCourse"
                        >
                            Tên Khóa học
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nameOfCourse"
                            type="text"
                            placeholder="Username"
                            required
                            value={courseName}
                            disabled
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            class="block text-white text-sm font-bold mb-2"
                            for="name"
                        >
                            Tên học viên
                        </label>
                        <input
                            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Tên của bạn"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            class="block text-white text-sm font-bold mb-2"
                            for="nameOfCourse"
                        >
                            Email
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email@gmail.com"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            class="block text-white text-sm font-bold mb-2"
                            for="phoneNumber"
                        >
                            Số điện thoại
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phoneNumber"
                            type="tel"
                            placeholder="Số điện thoại của bạn/gia đình bạn"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            class="block text-white text-sm font-bold mb-2"
                            for="phoneNumber"
                        >
                            Ghi chú
                        </label>
                        <textarea
                            cols="40"
                            rows="5"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phoneNumber"
                            type="tel"
                            placeholder="Nhưng thứ mà tôi cần lưu ý"
                        />
                    </div>
                    <div class="flex items-center flex-col  justify-between">
                        <button
                            class="bg-white text-courseColor font-bold py-2 px-5 w-full rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Đăng kí
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default buyPage;
