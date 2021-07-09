import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const store = useSelector((state) => state.userStore.userStore);
  const auth = useSelector((state)=>state.auth.authenticate)
  return (
    <Route
      {...rest}
      component={(props) => {
        if (store && auth) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/Signin`} />;
        }
      }}
    />
  );
};
