import React from "react";
import ReactDOM from "react-dom";
import App from "./Container/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import configStore from "./redux/configStore";
import { Provider } from "react-redux";
const store = configStore();
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
