import React from "react";
import myorders from "../../img/myorder-icon.svg";
import Storeicon from "../../img/shop.png";
import Logouticon from "../../img/logout.png";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {DropdownMenu} from "../../components/MaterialUI";
import { signoutAction } from "../../actions/auth.action";
import Profilepiclogo from "../../img/icons8-male-user-50.png";
import "./style.css";

export const NavModal = ({ showModal, Modal }) => {
  const store = useSelector((state) => state.userStore.userStore);
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const logout = () => {
    dispatch(signoutAction());
  };

  const renderLoggedInMenu = () => {
    if (store && auth.user.store === "Yes") {
      return (
        <>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Profilepiclogo}
                style={{
                  height: 22,
                  width: 22,
                  marginBottom: "3px",
                  marginLeft: "4px",
                }}
                alt="Shopisthan Logo"
              />
              <h1
                style={{
                  fontSize: 15,
                  textAlign: "center",
                 
                  marginLeft: "4px",
                }}
              >
                {" "}
                {/* {auth.user ? auth.user.name : "Hello User"} */}
                My Profile
              </h1>
            </div>
            <Link
              to="/storeDashboard"
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img
                src={Storeicon}
                className="logo-png-navabar"
                alt="Shopisthan Logo"
              />
              <h1 className="logo-header-navabar">My Store</h1>
            </Link>
            <div
              onClick={() => logout()}
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                cursor:'pointer'
              }}
            >
              <img
                src={Logouticon}
                className="logo-png-navabar"
                alt="Shopisthan Logo"
              />
              <h1 className="logo-header-navabar">Logout</h1>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={Profilepiclogo}
              style={{
                height: 22,
                width: 22,
                marginBottom: "3px",
                marginLeft: "4px",
              }}
              alt="Shopisthan Logo"
            />
            <h1
              style={{
                fontSize: 15,
                textAlign: "center",
                marginLeft: "4px",
              }}
            >
              {" "}
              {/* {auth.user ? auth.user.name : "Hello User"} */}
              My Profile
            </h1>
          </div>
          <Link
            to="/Orderpage"
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={myorders}
              className="logo-png-navabar"
              alt="Shopisthan Logo"
            />

            <h1 className="logo-header-navabar">My Orders</h1>
          </Link>
          <Link
            to="/storeForm"
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={Storeicon}
              className="logo-png-navabar"
              alt="Shopisthan Logo"
            />
            <h1 className="logo-header-navabar">Create Store</h1>
          </Link>
          <div
            onClick={() => logout()}
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              cursor:'pointer'
            }}
          >
            <img
              src={Logouticon}
              className="logo-png-navabar"
              alt="Shopisthan Logo"
            />
            <h1 className="logo-header-navabar">Logout</h1>
          </div>
        </>
      );
    }
  };
  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <li className="PrimaryNav-loggedOutOption-3xV">
                {/* <Link
            > */}
                <div className="PrimaryNav-a11yButtonWrap-23Z">
                  {/* <Link to='/Signin'>  */}
                  <button
                    className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl"
                    onClick={() =>
                      history.push({
                        pathname: "/Signup",
                      })
                    }
                  >
                    <div className="Btn-labelWrapper-1jS">
                      <div className="Btn-label-1Zf e2e-Btn-label">Sign up</div>
                    </div>
                  </button>
                  {/* </Link> */}
                  <span className="PrimaryNav-a11yButtonHelper-3Vx"></span>
                </div>
                {/* </Link> */}
              </li>

              <li className="PrimaryNav-loggedOutOption-3xV">
                {/* <Link
            > */}
                <div className="PrimaryNav-a11yButtonWrap-23Z">
                  {/* <Link to='/Signin'>  */}
                  <button
                    className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl"
                    onClick={() =>
                      history.push({
                        pathname: "/Signin",
                      })
                    }
                  >
                    <div className="Btn-labelWrapper-1jS">
                      <div className="Btn-label-1Zf e2e-Btn-label"> Log In</div>
                    </div>
                  </button>
                  {/* </Link> */}
                  <span className="PrimaryNav-a11yButtonHelper-3Vx"></span>
                </div>
                {/* </Link> */}
              </li>
            </div>
          </>
        }
      />
    );
  };

  return (
    <div style={{ zIndex: "90" }}>
      {showModal ? (
        <div className="uaicbwa">
          <div
            style={{ textAlign: "end", cursor: "pointer", fontWeight: "600" }}
            onClick={() => Modal("close")}
          >
            X
          </div>
          <div className="cbascba">
            <div className="PrimaryNav-signup-Yf6">
              <ul className="PrimaryNav-loggedOutOptions-1SQ">
                {auth.authenticate
                  ? renderLoggedInMenu()
                  : renderNonLoggedInMenu()}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
