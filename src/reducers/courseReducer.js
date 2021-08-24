import { coursesData } from "../const/CoursesData";
import * as types from "../const/dataActionConstants";
const initialState = {
    courseList: coursesData ? coursesData : [],
};

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_COURSE:
            return {
                ...state,
            };
        case types.REMOVE_COURSE:
            return {
                ...state,
            };
        case types.UPDATE_COURSE:
            return {
                ...state,
            };
        case types.SET_CURRENT_ROOM:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
};
export default courseReducer;
