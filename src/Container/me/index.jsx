import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../axios/config";
import CourseControlTable from "../../components/CourseControlTable";
import "./style.css";
import * as authActionCreator from "../../actions/authActions";
import * as tableActionCreator from "../../actions/tableActions";
import { useHistory } from "react-router";
import LearnerControlTable from "../../components/LearnerControlTable";
import { toast } from "react-toastify";
function Me() {
    const userData = useSelector((state) => state.auth);
    const { userName, avatar } = userData;
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.auth.isLogin);
    const history = useHistory();
    const courselist = useSelector((state) => state.courses.courseList);
    const learnerList = useSelector((state) => state.learner.learnerList);
    const isLearnerTableOpen = useSelector((state) => state.table.learnerTable);
    const isCoursesTableOpen = useSelector((state) => state.table.coursesTable);
    const onHanleLogOut = async () => {
        const response = await axiosClient.get("/account/me/logout");
        if (response.status === 200) {
            dispatch(authActionCreator.resetState());
            toast.success("Đăng xuất thành công!");
        }
    };
    const openLearnerTable = () => {
        dispatch(tableActionCreator.openLearnerTable());
    };
    const openCourseTable = () => {
        dispatch(tableActionCreator.openCourseTable());
    };
    useEffect(() => {
        if (!isLogin) {
            history.push("/");
        }
    }, [isLogin, history]);
    return (
        <div className="w-full max-w-full mx-auto mt-4 me-page">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row">
                    <img
                        className="w-20 rounded-3xl"
                        src={avatar === "" ? "" : avatar}
                        alt={userName}
                    />
                    <div className="flex flex-col justify-end ml-4">
                        <p className="mb-3 text-sm font-semibold">
                            Hello, {userName}
                        </p>
                        <button
                            type="submit"
                            className="py-1 text-sm font-bold bg-white rounded text-loginColor focus:outline-none focus:shadow-outline"
                        >
                            Đổi avatar
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full mt-6">
                <div className="flex ">
                    <div className="flex">
                        <button
                            type="submit"
                            className={
                                isLearnerTableOpen
                                    ? "self-end h-auto px-4 py-2 text-sm font-bold bg-successColor rounded text-white focus:outline-none focus:shadow-outline"
                                    : "self-end h-auto px-4 py-2 text-sm font-bold bg-white rounded text-loginColor focus:outline-none focus:shadow-outline"
                            }
                            onClick={openLearnerTable}
                        >
                            Học viên
                        </button>
                    </div>
                    <div className="flex ml-5">
                        <button
                            type="submit"
                            className={
                                isCoursesTableOpen
                                    ? "self-end h-auto px-4 py-2 text-sm font-bold bg-successColor rounded text-white focus:outline-none focus:shadow-outline"
                                    : "self-end h-auto px-4 py-2 text-sm font-bold bg-white rounded text-loginColor focus:outline-none focus:shadow-outline"
                            }
                            onClick={openCourseTable}
                        >
                            Khóa học
                        </button>
                    </div>
                </div>
                <div className="flex">
                    <button
                        type="submit"
                        className="self-end h-auto px-4 py-2 text-sm font-bold bg-white rounded text-loginColor focus:outline-none focus:shadow-outline"
                        onClick={onHanleLogOut}
                    >
                        Đăng xuất
                    </button>
                </div>
            </div>
            {isLearnerTableOpen ? (
                <LearnerControlTable data={learnerList} />
            ) : (
                ""
            )}
            {isCoursesTableOpen ? <CourseControlTable data={courselist} /> : ""}
        </div>
    );
}

export default Me;
