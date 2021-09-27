import * as types from "../const/dataActionConstants";
export const addCouse = (course) => {
    return {
        type: types.ADD_COURSE,
        payload: course,
    };
};
export const removeCourse = (name) => {
    return {
        type: types.REMOVE_COURSE,
        payload: name,
    };
};
export const updateCourse = (course) => {
    return {
        type: types.UPDATE_COURSE,
        payload: course,
    };
};
export const getCourse = (course) => {
    return {
        type: types.GET_COURSE,
        payload: course,
    };
};
