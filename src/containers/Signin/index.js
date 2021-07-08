import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { googleLoginAction, loginAction } from "../../actions/auth.action";
import GoogleLogin from "react-google-login";
import { Modal } from "../../components/MaterialUI";
import Signup from "../SignUp";

const Signin = (props) => {
  const { show, handleclose } = props;
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [showSigupModal, setShowSigupModal] = useState(false);
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.errorTF && loginId.length > 10 && password.length > 6) {
      setErr("Invalid credentials");
    }
  });

  if (auth.authenticate) {
    return props.Modal ? null : <Redirect to={`/storeForm`} />;
  }

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

    dispatch(loginAction({ loginId, password }));
  };

  const responseSuccessGoogle = (response) => {
    dispatch(googleLoginAction({ idToken: response.tokenId }));
  };

  const responseErrorGoogle = (error) => {
    setErr("Google login failed. Try again");
  };

  const viewChanges = () =>{
    handleclose(false)
    setShowSigupModal(true)
  }

  const renderLoginForm = () => {
    return (
      <div className="CardLayout-Toaster-Container">
        <section className="CardLayout">
          <header className="CardLayout__header">
            <h1 className="spectrum-Heading1">Sign In</h1>
            <p className="EmailPage__instructions">
              New User ?
              {props.Modal ?  
               <button
                  onClick={viewChanges}
                >
                  Creat an Account
                </button>
            
               : (
                <Link
                  className="spectrum-Link EmailPage__create-account-link"
                  to="/Signup"
                >
                  Creat an Account
                </Link>
              )}
            </p>
          </header>
          <section className="CardLayout__content">
            <form>
              <section className="EmailPage__email-field form-group">
                <div>
                  <label className="spectrum-FieldLabel">
                    Email Address / Mobile Number
                  </label>
                  <input
                    className="spectrum-Textfield spectrum-Textfield--quiet"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label className="spectrum-FieldLabel">Password</label>
                  <input
                    type="password"
                    className="spectrum-Textfield spectrum-Textfield--quiet"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </section>
              <section className="EmailPage__submit mod-submit">
                <div className="ta-left"></div>

                <button
                  className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right"
                  onClick={login}
                >
                  <span className="spectrum-Button-label">Submit</span>
                </button>
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
    );
  };

  return (
    <>
      {props.Modal ? (
        <Modal visible={show} onClose={() => handleclose(false)}>
          {renderLoginForm()}
        </Modal>
      ) : (
        renderLoginForm()
      )}

      {/* <Signup
        Modal
        show={showSigupModal}
        handleclose={() => setShowSigupModal(false)}
      /> */}
    </>
  );
};

export default Signin;
