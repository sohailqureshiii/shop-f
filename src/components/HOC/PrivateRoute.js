import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useParams } from "react-router-dom";

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


export const SharePrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state)=>state.auth.authenticate)
 

  
  return (
    <Route
      {...rest}
      component={(props) => {
        const storeId = props.match.params.storeId;        
        if (auth) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{
           pathname: `/Signin`,
           state: { storeId: storeId , share:true}
            
            }} />;
        }

          
      }}
    />
  );
};
