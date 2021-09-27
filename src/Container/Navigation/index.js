import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { changeThemeBySection } from "../../util/supportFunction";
import "./style.css";
import { useSelector } from "react-redux";
function Navigation() {
    const history = useHistory();
    const isLogin = useSelector((state) => state.auth.isLogin);

    const onHandleClick = (e) => {
        const clickElement = e.target;
        changeThemeBySection(clickElement);
        if (e.target.innerText === "LOGIN") {
            history.push("/account/login");
        }
    };
    return (
        <div className="navigation-wrapper">
            <div className="nav-options-left">
                <NavLink
                    to="/"
                    exact
                    onClick={onHandleClick}
                    className="font-semibold tracking-wide item"
                    textColor="#ffff"
                    themeColor="#317973"
                    activeClassName="active"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/courses"
                    onClick={onHandleClick}
                    className="font-semibold tracking-wide item"
                    textColor="#ffff"
                    themeColor="#E16E79"
                    activeClassName="active"
                    exact={false}
                >
                    Courses
                </NavLink>
                <NavLink
                    to="/community"
                    onClick={onHandleClick}
                    className="font-semibold tracking-wide item"
                    textColor="#ffff"
                    themeColor="#D4A555"
                    activeClassName="active"
                >
                    Community
                </NavLink>
            </div>
            <div onClick={onHandleClick} className="nav-options-right">
                {isLogin ? (
                    <NavLink
                        to="/me"
                        className="font-semibold tracking-wide item login"
                        activeClassName="active"
                        textColor="#ffff"
                        themeColor="#46AFD0"
                    >
                        Me
                    </NavLink>
                ) : (
                    <NavLink
                        to="/account"
                        className="font-semibold tracking-wide item login"
                        activeClassName="active"
                        textColor="#ffff"
                        themeColor="#46AFD0"
                    >
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
}

export default Navigation;
