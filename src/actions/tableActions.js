import * as types from "../const/tableActionConstants";
export const openCourseTable = () => {
    return {
        type: types.OPEN_COURSES_TABLE,
    };
};

export const openLearnerTable = () => {
    return {
        type: types.OPEN_LEARNER_TABLE,
    };
};
