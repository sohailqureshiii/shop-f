import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../actions/auth.action";
import { Button, MaterialInput, Modal } from "../../components/MaterialUI";
import { googleLoginAction, loginAction } from "../../actions/auth.action";
import { GoogleLogin }  from "react-google-login";
import Signin from "../Signin";

const Signup = (props) => {
  const { show, handleclose } = props;
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [showLoginModal,setShowLoginModal] = useState(false);
  

  useEffect(() => {
    if (auth.errorTF && loginId.length > 10 && password.length > 6 ) {
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

    dispatch(signUpAction({ name, loginId, password }));
  };

  const responseSuccessGoogle = (response) => {
    dispatch(googleLoginAction({ idToken: response.tokenId }));
  };

  const responseErrorGoogle = (error) => {
    setErr("Google login failed. Try again");
  };
  
  
  // if (auth.authenticate) {
  //   return props.Modal ? null : <Redirect to={`/storeForm`} />;
  // }

  const viewChanges = () =>{
    handleclose(false)
    setShowLoginModal(true)
  }

  const renderSignUpForm = () =>{
    return(
      <div className="CardLayout-Toaster-Container">
      <section className="CardLayout">
        <header className="CardLayout__header">
          <h1 className="spectrum-Heading1">Sign Up</h1>
          <p className="EmailPage__instructions">
            Already Account ?
            {
              props.Modal ? 
              <button
                  onClick={viewChanges}
                    // setShowLoginModal(true)
                    // handleclose(false)
                  
                >
                 Login
                </button>
               : 
              
              <Link
              className="spectrum-Link EmailPage__create-account-link"
              to="/Signin"
            >
              Login
            </Link>
            }
           
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
    )
  }

  return (
    <>
     {
       props.Modal ?   
       <Modal visible={show} onClose={() => handleclose(false)}>
          {renderSignUpForm()}
        </Modal>
       :
       renderSignUpForm()
     }
     <Signin 
      Modal
      show={showLoginModal}
      handleclose={()=>setShowLoginModal(false)}
    />
    </>
  );
};

export default Signup;
