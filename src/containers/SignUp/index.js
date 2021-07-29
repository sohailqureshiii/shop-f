import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../actions/auth.action";
import { Button, MaterialInput, Modal } from "../../components/MaterialUI";
import { googleLoginAction, loginAction } from "../../actions/auth.action";
import { GoogleLogin } from "react-google-login";


const Signup = (props) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [showError, setShowError] = useState(false);

 

  useEffect(() => {
    if (auth.errorTF && loginId.length > 10 && password.length > 6) {
      setErr("User already registered");
    }
  });

  const userSignup = (e) => {
    e.preventDefault();

    if (loginId === "" || password === "" || name === "") {
      return setErr("Please fill in the required fields");
    }

    if (loginId.length < 10) {
      return setErr("Email or PhoneNo must be at least 6 character long");
    }
    if (password.length < 6) {
      return setErr("Password must be at least 6 character long");
    }
    setShowError(true);
    dispatch(signUpAction({ name, loginId, password }));
  };

  const responseSuccessGoogle = (response) => {
    dispatch(googleLoginAction({ idToken: response.tokenId }));
  };

  const responseErrorGoogle = (error) => {
    setErr("Google login failed. Try again");
  };

  if (auth.authenticate) {
    if (props.location && props.location.state && props.location.state.Follow) {
      const storeId = props.location.state.storeId;
      return (
        <Redirect
          to={{ pathname: `/${storeId}/store`, state: { Follow: true } }}
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

    if (props.location && props.location.state && props.location.state.checkout) {
      return <Redirect to="/checkout" />;
    }

    if (props.location && props.location.state && props.location.state.storeForm) {
      return <Redirect to="/plansection" />;
    }
  
  


    if (props.location && props.location.state === undefined) {
      return <Redirect to="/" />;
    }
  }

  const renderButtonSignIn = () => {
    if (props.location && props.location.state && props.location.state.Follow) {
      const storeId = props.location.state.storeId;
      return (
        <Link
          className="spectrum-Link EmailPage__create-account-link"
          to={{
            pathname: `/Signin`,
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
            pathname: `/Signin`,
            state: { storeId: storeId, share:true },
          }}
        >
          Creat an Account
        </Link>
      );
    }

    if (props.location && props.location.state && props.location.state.checkout) {
      return (
        <Link
          className="spectrum-Link EmailPage__create-account-link"
          to={{
            pathname: `/Signin`,
            state: {checkout: true },
          }}
        >
          Creat an Account
        </Link>
      );
    }

    if (props.location && props.location.state && props.location.state.storeForm) {
      return (
        <Link
          className="spectrum-Link EmailPage__create-account-link"
          to={{
            pathname: `/Signin`,
            state: {storeForm: true },
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
        to="/Signin"
      >
        Creat an Account
      </Link>
      )
    }
  };
  return (
    <>
 <div className="CardLayout-Toaster-Container">
      <section className="CardLayout">
        <header className="CardLayout__header">
          <h1 className="spectrum-Heading1">Sign Up</h1>
          <p className="EmailPage__instructions">
            Already Account ?
            {renderButtonSignIn()}
          </p>
        </header>
        <section className="CardLayout__content">
          <form>
            <section className="EmailPage__email-field form-group">
              <MaterialInput
                  label="Email Address / Mobile Number"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                />
              <MaterialInput
                  label="User Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              <MaterialInput
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
            </section>
            <section className="EmailPage__submit mod-submit">
              
              <Button
                        title="Signup"
                        backgroundColor
                        radius="5px"
                        border="1px solid #828282"
                        border-radius="3px"
                        color="#000"
                        padding="5px 10px"
                        width="100%"
                        height="50px"
                        onClick={userSignup}
                        
                        marginBottom='10px'
                        fontSize='20px'
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

export default Signup;


{/* <section className="CardLayout">
<header className="CardLayout__header">
  <h1 className="spectrum-Heading1">Sign Up</h1>
  <p className="EmailPage__instructions">
    Already Account ?
    {renderButtonSignIn()}
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
        <label className="spectrum-FieldLabel">User Name</label>
        <input
          className="spectrum-Textfield spectrum-Textfield--quiet"
          className="spectrum-Textfield spectrum-Textfield--quiet"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
      <div className="ta-right">
        <button
          className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right"
          onClick={userSignup}
        >
          <span className="spectrum-Button-label">Submit</span>
        </button>
      </div>
    </section>
  </form>
</section>
<GoogleLogin */}


// <div className="CardLayout-Toaster-Container">
 
// <section className="CardLayout"> 
//  <header className="CardLayout__header">
//    <h1 className="spectrum-Heading1">Sign Up</h1>
//    <p className="EmailPage__instructions">
//      Already Account ?
//      {
//        props.Modal ? 
//        <button
//            onClick={viewChanges}
//              // setShowLoginModal(true)
//              // handleclose(false)
           
//          >
//           Login
//          </button>
//         : 
       
//        <Link
//        className="spectrum-Link EmailPage__create-account-link"
//        to="/Signin"
//      >
//        Login
//      </Link>
//      }
    
//    </p>
//  </header>
//  </section>
//  <section className="CardLayout__content">
//    <form>
//      <section className="EmailPage__email-field form-group">
//        <MaterialInput
//            label="Email Address / Mobile Number"
//            value={loginId}
//            onChange={(e) => setLoginId(e.target.value)}
//          />
//        <MaterialInput
//            label="User Name"
//            value={name}
//            onChange={(e) => setName(e.target.value)}
//          />
//        <MaterialInput
//            label="Password"
//            value={password}
//            onChange={(e) => setPassword(e.target.value)}
//          />
//      </section>
//      <section className="EmailPage__submit mod-submit">
       
//        <Button
//                  title="Signup"
//                  backgroundColor
//                  radius="5px"
//                  border="1px solid #828282"
//                  border-radius="3px"
//                  color="#000"
//                  padding="5px 10px"
//                  width="100%"
//                  height="50px"
//                  onClick={userSignup}
                 
//                  marginBottom='10px'
//                  fontSize='20px'
//                ></Button>
       
//      </section>
//    </form>

//  </section>
//  <section>
//  <GoogleLogin
//      clientId="578690882773-rkanjv60fh7ip7gus67q1s0kshnfu14b.apps.googleusercontent.com"
//      buttonText="Login with Google"
//      onSuccess={responseSuccessGoogle}
//      onFailure={responseErrorGoogle}
//      cookiePolicy={"single_host_origin"}
//    />
//  </section>
 
//  {err}
// </div>