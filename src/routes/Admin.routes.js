// eslint-disable-next-line
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const AdminRoutes = ({ component: Component, ...rest }) => {
  // eslint-disable-next-line
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  console.log(Component);
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (isLoggedIn && user.user.roles[0].name === "admin") {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location },
                }}
              />
            );
          }
        }}
      />
    </>
  );
};
