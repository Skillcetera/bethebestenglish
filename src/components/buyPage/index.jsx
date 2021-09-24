import React from "react";
import { useForm } from "react-hook-form";
import axiosClient from "../../axios/config";
import { toast } from "react-toastify";
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
        axios.post(url).then(() => {
            reset();
        });
        axiosClient
            .post("/api/learner", {
                email,
                name,
                nameOfCourse,
                note,
                phoneNumber,
                date: newDay.toString(),
            })
            .then(() => {
                toast.success("Đăng kí thành công!");
            })
            .catch((error) => {
                const text = error.response.data.detail.message;
                toast.warning(text);
            });
    };

    return (
        <div className="w-full max-w-xl mx-auto login-page">
            <div className="flex flex-col align-middle">
                <div className="mt-8 mb-2 text-2xl text-center">
                    Đăng kí khóa học
                </div>
                <form
                    className="pt-6 pb-8 mb-4 rounded bg-courseColor"
                    autoComplete
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="mb-4">
                        <label
                            className="block mb-2 text-sm font-bold text-white"
                            for="nameOfCourse"
                        >
                            Tên Khóa học
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="nameOfCourse"
                            type="text"
                            required
                            disabled
                            {...register("nameOfCourse")}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block mb-2 text-sm font-bold text-white"
                            for="name"
                        >
                            Tên học viên
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Tên của bạn"
                            required
                            {...register("name")}
                        />
                    </div>
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
                            placeholder="Email@gmail.com"
                            required
                            {...register("email")}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block mb-2 text-sm font-bold text-white"
                            for="phoneNumber"
                        >
                            Số điện thoại
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="phoneNumber"
                            type="tel"
                            placeholder="Số điện thoại của bạn/gia đình bạn"
                            required
                            {...register("phoneNumber")}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block mb-2 text-sm font-bold text-white"
                            for="note"
                        >
                            Ghi chú
                        </label>
                        <textarea
                            cols="40"
                            rows="5"
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="note"
                            type="tel"
                            placeholder="Nhưng thứ mà tôi cần lưu ý"
                            {...register("note")}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <button
                            className="w-full px-5 py-2 font-bold bg-white rounded text-courseColor focus:outline-none focus:shadow-outline"
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
