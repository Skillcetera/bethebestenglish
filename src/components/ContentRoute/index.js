import React from "react";
import { Route } from "react-router-dom";

function ContentRoute(props) {
  let { route } = props;
  let { path, exact, component: MyComponent } = route;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return <MyComponent {...routeProps} />;
      }}
    ></Route>
  );
}

export default ContentRoute;
