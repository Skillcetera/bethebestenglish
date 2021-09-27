import * as types from "../const/learnerActionConstants";
const initialState = {
    learnerList: [],
};

const learnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LEARNER:
            return {
                ...state,
                learnerList: action.payload,
            };
        case types.DELETE_LEARNER:
            const decoyList = [...state.learnerList];
            decoyList.forEach((learner, index) => {
                if (learner._id === action.payload) {
                    decoyList.splice(index, 1);
                }
            });
            return {
                ...state,
                learnerList: decoyList,
            };
        default:
            return {
                ...state,
            };
    }
};
export default learnerReducer;
