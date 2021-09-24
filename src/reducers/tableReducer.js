import * as types from "../const/tableActionConstants";
const initialState = {
    coursesTable: false,
    learnerTable: true,
};

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_COURSES_TABLE:
            return {
                ...state,
                coursesTable: true,
                learnerTable: false,
            };
        case types.OPEN_LEARNER_TABLE:
            return {
                ...state,
                coursesTable: false,
                learnerTable: true,
            };
        default:
            return {
                ...state,
            };
    }
};
export default tableReducer;
