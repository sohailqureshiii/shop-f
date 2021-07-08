import React from "react";
import DashBoard from "../../../components/DashBoardSidebar";
import Navbar from '../../../components/Navbar'
import SeachCompo from "../../../components/SearchComponent";
import OrderTableCompo from "../../../components/Tablecomponent/Order table component";
import './style.css'

const StoreOrder = () => {
  return (
    <>
    <Navbar/>
      <DashBoard sidebar>
      <div className='lkjhasdrfr'>
      <h1 className="order-name-name-order">Orders
          <SeachCompo/>
          </h1>
        <OrderTableCompo/>
      </div>
        </DashBoard> 
    </>
  );
};

export default StoreOrder;
