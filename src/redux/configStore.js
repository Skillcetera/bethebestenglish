const { createStore } = require("redux");
const { default: rootReducer } = require("../reducers/rootReducer");

const configStore = () => {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
export default configStore;
