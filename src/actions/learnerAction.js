import * as types from "../const/learnerActionConstants";
export const getLearner = (data) => {
    return {
        type: types.GET_LEARNER,
        payload: data,
    };
};

export const deleteLearner = (_id) => {
    return {
        type: types.DELETE_LEARNER,
        payload: _id,
    };
};
