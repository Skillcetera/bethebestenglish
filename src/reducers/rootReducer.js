import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import learnerReducer from "./learnerReducer";
import tableReducer from "./tableReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    courses: courseReducer,
    auth: authReducer,
    table: tableReducer,
    learner: learnerReducer,
});
export default rootReducer;
