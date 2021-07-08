import React from "react";
import  Navbar  from "../../../components/Navbar";
import DashBoard from "../../../components/DashBoardSidebar";
import SeachCompo from "../../../components/SearchComponent";
// import OrderTableCompo from "../../../components/Tablecomponent/Order table component";
import "./style.css";

const StoreDasboard = () => {
  return (
    <>
    <Navbar/>
    <DashBoard sidebar>
   
      <div className="lkjhasdrfr" style={{paddingTop:"80px"}}>
        <h1 className="order-name-name-order">
          Dashboard
          <SeachCompo />
        </h1>
        <div style={{ padding: "30px" }}>
          <div className="mklydfbsn">
            <div className="bvncmdkdj">
              <div className="njhgyflvdiw">
                <h1 className="mkoqszert">Products</h1>
              </div>
              <div className="nnsxnslxkax">
                <h1 className="mkoqszerdefeft">909</h1>
              </div>
            </div>
            <div className="bvncmdkdj">
              <div className="njhgyflvdiw">
                <h1 className="mkoqszert">Orders</h1>
              </div>
              <div className="nnsxnslxkax">
                <h1 className="mkoqszerdefeft">60</h1>
              </div>
            </div>
            <div className="bvncmdkdj">
              <div className="njhgyflvdiw">
                <h1 className="mkoqszert">Products</h1>
              </div>
              <div className="nnsxnslxkax">
                <h1 className="mkoqszerdefeft">960</h1>
              </div>
            </div>
            <div className="bvncmdkdj">
              <div className="njhgyflvdiw">
                <h1 className="mkoqszert">Products</h1>
              </div>
              <div className="nnsxnslxkax">
                <h1 className="mkoqszerdefeft">965</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashBoard>
    </>
  );
};

export default StoreDasboard;