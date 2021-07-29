import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import "./style.css";
import {
  Modal,
  DropdownMenu,
  Button,
  NavbarPop,
} from "../../components/MaterialUI";
import Profilepiclogo from "../../img/icons8-male-user-50.png";
import Carticon from "../../img/cart.png";
import Storeicon from "../../img/shop.png";
import Homeicon from "../../img/home.png";
import Wishlisticon from "../../img/heart.png";
import { useDispatch, useSelector } from "react-redux";
import Signin from "../../containers/Signin";
import Signup from "../../containers/SignUp";
import { signoutAction } from "../../actions/auth.action";
import { NavModal } from "../NavbarPopUpNew";

/**
 * @author
 * @function Navigationbar
 **/

const Navigationbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const auth = useSelector((state) => state.auth);
  const store = useSelector((state) => state.userStore.userStore);
  const history = useHistory();
  const cart = useSelector((state) => state.user);
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const [showModal, setShoModal] = useState(false);

  const openModal = () => {
    setShoModal(true)
  }

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signoutAction());
  };

  const abcd = (cl) =>{
    setShoModal(false)
  }

  const renderLoggedInMenu = () => {
    if (store && auth.user.store === "Yes") {
      return (
        <DropdownMenu
          menu={
            <Link>
              <div style={{ marginLeft: 10, display: "flex" }}>
                <h1
                  style={{
                    fontSize: 15,
                    textAlign: "center",
                    marginTop: "3px",
                    marginLeft: "4px",
                  }}
                >
                  {" "}
                  {auth.user ? auth.user.name : "Hello User"}
                </h1>
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
              </div>
            </Link>
          }
          menus={[
            { label: "Edit Profile", to: "/editprofile", icon: null },
            {
              label: "Orders",
              to: "/Orderpage",
              icon: null,
            },
            // { label: "Create Store", to: "/storeForm", icon: null,  },
            { label: "Logout", to: "", icon: null, onClick: logout },
            { label: "Store Dashboard", to: "/storeDashboard", icon: null },
          ]}
        />
      );
    } else {
      return (
        <DropdownMenu
          menu={
            <Link>
              <div style={{ marginLeft: 10, display: "flex" }}>
                <h1
                  style={{
                    fontSize: 15,
                    textAlign: "center",
                    marginTop: "3px",
                    marginLeft: "4px",
                  }}
                >
                  {" "}
                  {auth.user ? auth.user.name : "Hello User"}
                </h1>
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
              </div>
            </Link>
          }
          menus={[
            { label: "Edit Profile", to: "/editprofile", icon: null },
            {
              label: "Orders",
              to: "/Orderpage",
              icon: null,
            },
            { label: "Create Store", to: "/storeForm", icon: null },
            { label: "Logout", to: "", icon: null, onClick: logout },
          ]}
        />
      );
    }
  };
  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <>
            <div style={{ display: "flex" }}>
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
    <>
      <nav className="navbar">
        <h3 className="logo">
          <Link className="PrimaryNav-coreNavigationItem-236 PrimaryNav-home-2zH">
            <Link to="/" className="PrimaryNav-coreNavigationLink-2uv">
              <div className="PrimaryNav-logoWrap-564">
                <span style={{color:'black'}}>Shopisthan</span>
              </div>
            </Link>
          </Link>
        </h3>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <Link className="cart " to="/">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Homeicon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Home
                  </a>
                </div>
              </h3>
            </a>
          </Link>
          <Link className="cart" to="/ExploreStore">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Storeicon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Store
                  </a>
                </div>
              </h3>
            </a>
          </Link>
          <Link className="cart" to="/favorite">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Wishlisticon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Favorite
                  </a>
                </div>
              </h3>
            </a>
          </Link>
        </ul>
        {/* <div className="PrimaryNav-signup-Yf6">
          <ul className="PrimaryNav-loggedOutOptions-1SQ">
            {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          </ul>
        </div> */}
        <Link className="cart" to="/cartcheck">
          <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
            <h3 className="PrimaryNav-coreNavigationLabel-3rj">
              <div class="link-background">
                {cartItems && Object.keys(cartItems).length >= 1 ? (
                  <span
                    style={{
                      position: "absolute",
                      background: "black",
                      width: "17px",
                      height: "22px",
                      borderRadius: "50%",
                      fontSize: "14px",
                      border: "1px solid #fff",
                      textAlign: "center",
                      alignSelf: "center",
                      top: "-14px",
                      right: "-4px",
                      color: "white",
                    }}
                  >
                    {Object.keys(cartItems).length}
                  </span>
                ) : null}

                <img src={Carticon} className="homepagenavbar-icon-cart" />
              </div>
            </h3>
          </a>
        </Link>
        <Link className="new-sell-online-btn">
          <h1>Sell Online</h1>
        </Link>
        <button className="new-bar-new" onClick={openModal}>
          <li className="fas fa-bars"></li>
        </button>
          <NavModal showModal={showModal} Modal={abcd} style={{zindex:'90'}}/>
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="mobile-menu-icon"
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <li className="fas fa-bars"></li>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navigationbar;
