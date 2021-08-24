import courseReducer from "./courseReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    courses: courseReducer,
});
export default rootReducer;
