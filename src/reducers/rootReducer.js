import authReducer from "./authReducer";
import courseReducer from "./courseReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    courses: courseReducer,
    auth: authReducer,
});
export default rootReducer;
