import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useParams } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const store = useSelector((state) => state.userStore.userStore);
  const auth = useSelector((state) => state.auth.authenticate);
  return (
    <Route
      {...rest}
      component={(props) => {
        if (store.hasOwnProperty("_id") && Object.keys(store).length !== 0) 
        // if(auth.user && auth.user.store && auth.user.store === "Yes")
        {
          return <Component {...props} />
        } else {
          return <Redirect to={`/Signin`} />
        }
      }}
    />
  );
};

export const SharePrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth.authenticate);

  return (
    <Route
      {...rest}
      component={(props) => {
        const storeId = props.match.params.storeId;
        if (auth) {
          return <Component {...props} />;
        } else {
          if (storeId) {
            return (
              <Redirect
                to={{
                  pathname: `/Signin`,
                  state: { storeId: storeId, share: true },
                }}
              />
            );
          }else{
            return(
              <Redirect
                to={{
                  pathname: `/Signin`,
                  state: { storeForm : true },
                }}
                />
            )
           
          }
        }
      }}
    />
  );
};
