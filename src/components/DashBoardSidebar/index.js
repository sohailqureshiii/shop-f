import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Navigationbar from "../Navbar";
import Homeicon from "../../img/home.png";
import products from "../../img/icons8-product-24.png"
import orders from "../../img/icons8-shopping-bag-50 (1).png"
import customers from "../../img/cutomers.png"
import Profilepiclogo from "../../img/icons8-male-user-50.png";

const DashBoard = (props) => {
  return (
    <>
      {props.sidebar ? (
        <div>
          <div className="sidebar">
            <div className="sidebar-menu">
              <ul>
                <li>
                  <NavLink exact activeClassName="active" to="/storeDashboard">
                  <img src={Homeicon} className="dashicon-icon" />
                    <span class="las la-igloo"></span> <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/storeCoustomer">
                  <img src={customers} className="dashicon-icon" />
                    <span class="las la-users"></span> <span>Customers</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/storeProduct">
                  <img src={products} className="dashicon-icon" />
                    <span>Product</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/storeOrder">
                  <img src={orders} className="dashicon-icon" />
                    <span class="las la-shopping-bag"></span> <span>Order</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/storeProfile">
                  <img src={Profilepiclogo} className="dashicon-icon" />
                    <span class="las la-shopping-bag"></span> <span>Account</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div style={{paddingLeft:'200px'}}>
          {props.children}
          </div>
        </div>
      ) : (
        props.children
      )}
    </>
  );
};

export default DashBoard;
