import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import Profilepiclogo from "../../img/icons8-male-user-50.png";
import Carticon from "../../img/cart.png";
import Storeicon from "../../img/shop.png";
import Homeicon from "../../img/home.png";
import Wishlisticon from "../../img/heart.png";
import { useDispatch, useSelector } from "react-redux";
import { signoutAction } from "../../actions/auth.action";
import { NavModal } from "../NavbarPopUpNew";
import { DropdownMenu } from "../../components/MaterialUI";
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
    setShoModal(true);
  };

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signoutAction());
  };

  const closeModal = (cl) => {
    setShoModal(false);
  };

  return (
    <>
      <nav className="navbar">
        <h3 className="logo">
          <Link className="PrimaryNav-coreNavigationItem-236 PrimaryNav-home-2zH">
            <Link to="/" className="PrimaryNav-coreNavigationLink-2uv">
              <div className="PrimaryNav-logoWrap-564">
                <span style={{ color: "black" }}>Shopisthan</span>
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
        <DropdownMenu
          menu={
            <Link className="cart" to="/cartcheck">
              <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs svkxxkxx">
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
          }
          menus={[{ label: "View Cart", to: "/cartcheck", icon: null },
          { label: "order History", to: "/editprofile", icon: null }
          ]}
        ></DropdownMenu>
        <Link className="new-sell-online-btn">
          <h1>Sell Online</h1>
        </Link>
        <button className="new-bar-new" onClick={openModal}>
          <li className="fas fa-bars"></li>
        </button>
        <NavModal
          showModal={showModal}
          Modal={closeModal}
          style={{ zindex: "90" }}
        />
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
