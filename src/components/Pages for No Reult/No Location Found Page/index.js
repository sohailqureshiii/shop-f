// import React from "react";
// import Navbar from "../../../components/Navbar";
// import { NavLink } from "react-router-dom";
// import Homeicon from "../../../img/home.png";
// import products from "../../../img/icons8-product-24.png";
// import orders from "../../../img/icons8-shopping-bag-50 (1).png";
// import customers from "../../../img/cutomers.png";
// import Profilepiclogo from "../../../img/icons8-male-user-50.png";
// import { Button } from "../../MaterialUI";
// import { Link } from "@material-ui/core";

// const NewProfile = (props) => {
//   return (
//     <>
//       <Navbar />
//       <div>
//         <div className="sidebar">
//           <div className="sidebar-menu">
//             <div className='sidebar-division'>
//             <span className='sidebar-division-span' >
//                 Manage
//               </span>
//               <ul className='sidebar-division-ulist'>
//                 <li>
//                   <NavLink exact activeClassName="active" to="/storeDashboard">
//                     <img src={Homeicon} className="dashicon-icon" />
//                     <span class="las la-igloo"></span> <span>Profile</span>
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink exact activeClassName="active" to="/storeCoustomer">
//                     <img src={customers} className="dashicon-icon" />
//                     <span class="las la-users"></span> <span>Orders</span>
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink exact activeClassName="active" to="/storeProduct">
//                     <img src={products} className="dashicon-icon" />
//                     <span>Log Out</span>
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//             <div className='sidebar-division'>
//             <span className='sidebar-division-span' >
//                 Store
//               </span>
//               <ul className='sidebar-division-ulist' >
//                 <li>
//                   <NavLink exact activeClassName="active" to="/storeDashboard">
//                     <img src={Homeicon} className="dashicon-icon" />
//                     <span class="las la-igloo"></span> <span>Dashboard</span>
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink exact activeClassName="active" to="/storeCoustomer">
//                     <img src={customers} className="dashicon-icon" />
//                     <span class="las la-users"></span> <span>Customers</span>
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink exact activeClassName="active" to="/storeProduct">
//                     <img src={products} className="dashicon-icon" />
//                     <span>Product</span>
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink exact activeClassName="active" to="/storeOrder">
//                     <img src={orders} className="dashicon-icon" />
//                     <span class="las la-shopping-bag"></span> <span>Order</span>
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink exact activeClassName="active" to="/storeProfile">
//                     <img src={Profilepiclogo} className="dashicon-icon" />
//                     <span class="las la-shopping-bag"></span>{" "}
//                     <span>Account</span>
//                   </NavLink>
//                 </li>
//               </ul>
//               {/* <div style={{padding:'30px'}}>
//                 <Link
//                   className="PrimaryNav-loggedOutOption-3xV"
//                   to="/storeForm"
//                   style={{ zIndex: 90 }}
//                 >
//                   <div className="PrimaryNav-a11yButtonWrap-23Z">
//                     <button className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl">
//                       <div className="Btn-labelWrapper-1jS">
//                         <div className="Btn-label-1Zf e2e-Btn-label">
//                           Create Store
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 </Link>
//               </div> */}
//             </div>
//           </div>
//         </div>
//         <div style={{ paddingLeft: "342px", backgroundColor: "#f1f5f9" }}>
//           {props.children}
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewProfile;
