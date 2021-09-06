import React from "react";
import { useForm } from "react-hook-form";
const defaultValue = {
    nameOfCourse: "",
    name: "",
    email: "",
    phoneNumber: "",
    note: "",
};
function BuyPage(props) {
    const axios = require("axios").default;
    const codeToken = "1957042605:AAHVcLdMb1hBoiL6LJkUzqQWWazN_h6OT5M";
    const { match } = props;
    const courseName = match.params.courseName.toUpperCase();
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            ...defaultValue,
            nameOfCourse: courseName,
        },
    });
    const onSubmit = (data) => {
        const { email, name, nameOfCourse, note, phoneNumber } = data;
        const newDay = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Ho_Chi_Minh",
        });

        const dataToSend = `Day: ${newDay} ----- name : ${name} ----- course :  ${nameOfCourse} ----- email : ${email} ----- phone : ${phoneNumber} ----- note : ${note}`;

        const url = `https://api.telegram.org/bot${codeToken}/sendMessage?chat_id=${-471576061}&text=${dataToSend}`;
        console.log(url);
        axios.get(url).then(() => {
            reset();
        });
    };

    return (
        <div className="w-full max-w-xl mx-auto login-page">
            <div className="flex flex-col align-middle">
                <div className="mt-8 mb-2 text-2xl text-center">
                    Đăng kí khóa học
                </div>
                <form
                    class="bg-courseColor  rounded  pt-6 pb-8 mb-4"
                    autoComplete
                    onSubmit={handleSubmit(onSubmit)}
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
                            required
                            disabled
                            {...register("nameOfCourse")}
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
                            {...register("name")}
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
                            {...register("email")}
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
                            {...register("phoneNumber")}
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
                            {...register("note")}
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

export default BuyPage;
