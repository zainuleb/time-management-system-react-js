import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const ManagerRoutes = ({ component: Component, ...rest }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (isLoggedIn && user.user.roles[0].name === "manager") {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          }
        }}
      />
    </>
  );
};
