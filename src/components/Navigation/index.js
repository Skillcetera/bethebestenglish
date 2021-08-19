import React from "react";
import { NavLink } from "react-router-dom";
import { changeThemeBySection } from "../../util/supportFunction";
import "./style.css";
function Navigation() {
  let onHandleClick = (e) => {
    const clickElement = e.target;
    changeThemeBySection(clickElement);
  };
  return (
    <div className="navigation-wrapper">
      <div className="nav-options-left">
        <NavLink
          to="/"
          exact
          onClick={onHandleClick}
          className="item"
          textColor="#ffff"
          themeColor="#317973"
          activeClassName="active"
        >
          Home
        </NavLink>
        <NavLink
          to="/courses"
          onClick={onHandleClick}
          className="item"
          textColor="#ffff"
          themeColor="#E16E79"
          activeClassName="active"
        >
          Courses
        </NavLink>
        <NavLink
          to="/community"
          onClick={onHandleClick}
          className="item"
          textColor="#ffff"
          themeColor="#D4A555"
          activeClassName="active"
        >
          Community
        </NavLink>
      </div>
      <div onClick={onHandleClick} className="nav-options-right">
        <NavLink
          to="/login"
          className="item login"
          activeClassName="active"
          textColor="#ffff"
          themeColor="#46AFD0"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
