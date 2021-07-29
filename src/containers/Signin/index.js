import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  googleLoginAction,
  loginAction,
  facebookLoginAction,
} from "../../actions/auth.action";
import GoogleLogin from "react-google-login";
import { Button, MaterialInput, Modal } from "../../components/MaterialUI";
import Signup from "../SignUp";

const Signin = (props) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (
      auth.errorTF &&
      showError &&
      loginId.length > 10 &&
      password.length > 6
    ) {
      setErr("Invalid credentials");
    }
  });

  if (auth.authenticate) {
    if (props.location && props.location.state && props.location.state.Follow) {
      const storeId = props.location.state.storeId;
      return (
        <Redirect
          to={{
            pathname: `/${storeId}/store`,
            state: { storeId: storeId, Follow: true },
          }}
        />
      );
    }

    if (props.location && props.location.state && props.location.state.share) {
      const storeId = props.location.state.storeId;
      return (
        <Redirect
          to={{ pathname: `/${storeId}/store`, state: { Follow: true } }}
        />
      );
    }
    if (
      props.location &&
      props.location.state &&
      props.location.state.checkout
    ) {
      return <Redirect to="/cartcheck" />;
    }

    if (
      props.location &&
      props.location.state &&
      props.location.state.storeForm
    ) {
      return <Redirect to="/storeForm" />;
    }

    if (props.location && props.location.state === undefined) {
      return <Redirect to="/" />;
    }
  }
  // if (auth.authenticate) {
  //   return props.Modal ? null : <Redirect to={`/storeForm`} />;
  // }

  const login = (e) => {
    e.preventDefault();

    if (loginId === "" || password === "") {
      return setErr("Please fill in the required fields");
    }
    if (loginId.length < 10) {
      return setErr("Email or PhoneNo must be at least 6 character long");
    }
    if (password.length < 6) {
      return setErr("Password must be at least 6 character long");
    }

    setShowError(true);

    dispatch(loginAction({ loginId, password }));
  };

  const responseSuccessGoogle = (response) => {
    dispatch(googleLoginAction({ idToken: response.tokenId }));
  };

  const responseErrorGoogle = (error) => {
    setErr("Google login failed. Try again");
  };

  const responseFacebook = (response) => {
    dispatch(
      facebookLoginAction({
        accessToken: response.accessToken,
        userID: response.userID,
      })
    );
  };

  const renderButtonSignUp = () => {
    if (props.location && props.location.state && props.location.state.Follow) {
      const storeId = props.location.state.storeId;
      return (
        <Link
          className="spectrum-Link EmailPage__create-account-link"
          to={{
            pathname: `/Signup`,
            state: { storeId: storeId, Follow: true },
          }}
        >
          Creat an Account
        </Link>
      );
    }

    if (props.location && props.location.state && props.location.state.share) {
      const storeId = props.location.state.storeId;
      return (
        <Link
          className="spectrum-Link EmailPage__create-account-link"
          to={{
            pathname: `/Signup`,
            state: { storeId: storeId, share: true },
          }}
        >
          Creat an Account
        </Link>
      );
    }
    if (
      props.location &&
      props.location.state &&
      props.location.state.checkout
    ) {
      return (
        <Link
          className="spectrum-Link EmailPage__create-account-link"
          to={{
            pathname: `/Signup`,
            state: { checkout: true },
          }}
        >
          Creat an Account
        </Link>
      );
    }

    if (
      props.location &&
      props.location.state &&
      props.location.state.storeForm
    ) {
      return (
        <Link
          className="spectrum-Link EmailPage__create-account-link"
          to={{
            pathname: `/Signup`,
            state: { storeForm: true },
          }}
        >
          Creat an Account
        </Link>
      );
    }

    if (props.location && props.location.state === undefined) {
      return (
        <Link
          className="spectrum-Link EmailPage__create-account-link"
          to="/Signup"
        >
          Creat an Account
        </Link>
      );
    }
  };

  return (
    <>
      <div className="CardLayout-Toaster-Container">
        <section className="CardLayout">
          <header className="CardLayout__header">
            <h1 className="spectrum-Heading1">Sign In</h1>
            <p className="EmailPage__instructions">
              New User ?{renderButtonSignUp()}
            </p>
          </header>
          <section className="CardLayout__content">
            <form>
              <section className="EmailPage__email-field form-group">
                <MaterialInput
                  label=" Email Address / Mobile Number"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                />
                <MaterialInput
                  label=" Password "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </section>
              <section className="EmailPage__submit mod-submit">
                <div className="ta-left"></div>
                <Button
                  title="Login"
                  backgroundColor
                  radius="5px"
                  border="1px solid #d4d4d4"
                  border-radius="3px"
                  color="#000"
                  padding="5px 10px"
                  width="100%"
                  height="50px"
                  onClick={login}
                  justifyContent="center"
                  marginBottom="15px"
                  fontSize="20px"
                ></Button>
              </section>
            </form>
          </section>

          <GoogleLogin
            clientId="578690882773-rkanjv60fh7ip7gus67q1s0kshnfu14b.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </section>
        {err}
      </div>
    </>
  );
};

export default Signin;

// <div className="CardLayout-Toaster-Container">
// <section  className="CardLayout">
//   <header className="CardLayout__header">
//     <h1 className="spectrum-Heading1">Sign In</h1>
//     <p className="EmailPage__instructions">
//       New User ?{renderButtonSignUp()}

//     </p>
//   </header>
//   <section className="CardLayout__content">
//     <form>
//       <section className="EmailPage__email-field form-group">
//         <div>
//           <label className="spectrum-FieldLabel">
//             Email Address / Mobile Number
//           </label>
//           <input
//             className="spectrum-Textfield spectrum-Textfield--quiet"
//             value={loginId}
//             onChange={(e) => {
//               setLoginId(e.target.value);
//               setErr("");
//             }}
//           ></input>
//         </div>
//         <div>
//           <label className="spectrum-FieldLabel">Password</label>
//           <input
//             type="password"
//             className="spectrum-Textfield spectrum-Textfield--quiet"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           ></input>
//         </div>
//         <MaterialInput
//           label=" Email Address / Mobile Number"
//           value={loginId}
//           onChange={(e) => setLoginId(e.target.value)}
//         />
//         <MaterialInput
//           label=" Password "
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}

//         />
//       </section>
//       <section className="EmailPage__submit mod-submit">
//         <div className="ta-left"></div>
//         <Button
//                 title="Login"
//                 backgroundColor
//                 radius="5px"
//                 border="1px solid #d4d4d4"
//                 border-radius="3px"
//                 color="#000"
//                 padding="5px 10px"
//                 width="100%"
//                 height="50px"
//                 onClick={login}
//                 justifyContent='center'
//                 marginBottom='15px'
//                 fontSize='20px'
//               ></Button>
//       </section>
//     </form>
//   </section>
//   <GoogleLogin
//     clientId="578690882773-rkanjv60fh7ip7gus67q1s0kshnfu14b.apps.googleusercontent.com"
//     buttonText="Login with Google"
//     onSuccess={responseSuccessGoogle}
//     onFailure={responseErrorGoogle}
//     cookiePolicy={"single_host_origin"}
//   />
// </section>
// {err}
// </div>
