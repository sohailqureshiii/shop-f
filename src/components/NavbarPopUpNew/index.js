import React from "react";
import myorders from "../../img/myorder-icon.svg";
import Storeicon from "../../img/shop.png";
import Logouticon from "../../img/logout.png";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, DropdownMenu } from "../../components/MaterialUI";
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
                cursor: "pointer",
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
              My Profile
            </h1>
          </div>
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
              cursor: "pointer",
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
      <div style={{ alignItems: "center" }}>
        <div>
          <Button
            title="Sign up"
            backgroundColor
            border
            color
            border-radius="3px"
            padding="5px"
            width="53%"
            height="100%"
            radius="3px"
            fontSize="16px"
            onClick={() =>
              history.push({
                pathname: "/Signup",
              })
            }
          ></Button>
        </div>
        <div>
          <Button
            title="Sign In"
            backgroundColor
            border
            color
            border-radius="3px"
            padding="5px"
            width="53%"
            height="100%"
            radius="3px"
            fontSize="16px"
            onClick={() =>
              history.push({
                pathname: "/Signin",
              })
            }
          ></Button>
        </div>
      </div>
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
