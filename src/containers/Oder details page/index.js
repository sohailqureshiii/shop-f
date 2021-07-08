import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/UI/Card";
import { BiRupee } from "react-icons/bi";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footerr/Footer";
import './style.css'

const OrderDeatilsP = (props) => {
  
    return (
        <>
         <NavBar />
         <div className="a-container"  style={{paddingTop:'100px'}}>
         <div style={{border:'1px solid rgb(212, 212, 212',maxWidth:'250px',maxHeight:'100%'}}>
         <div className='a-section a-spacing-none apb-browse-refinements' style={{padding:'5px'}}>
                    <div style={{padding:'10px', border:'1px solid #d4d4d4',borderRadius:'5px', paddingTop:'5px', marginTop:'15px',backgroundColor: '#f9f9f9'}}>Orders</div>
                    <div style={{padding:'10px', border:'1px solid #d4d4d4',borderRadius:'5px', paddingTop:'5px', marginTop:'15px',backgroundColor: '#f9f9f9'}}>Orders History</div>
                    <div style={{padding:'10px', border:'1px solid #d4d4d4',borderRadius:'5px', paddingTop:'5px', marginTop:'15px',backgroundColor: '#f9f9f9'}}>Orders Pending</div>
                </div>
          </div>
         <div className='a-row apb-browse-two-col-center-pad'>
        <div className="a-column a-span12 aok-float-right apb-browse-col-pad-left apb-browse-two-col-center-margin-right">
        <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
      
          
            <Card style={{ display: "block", margin: "5px 0" }}>
              <Link
                // to={`/order_details/${order._id}`}
                className="orderItemContainer"
              >
                <div className="orderImgContainer">
                  <img
                    className="orderImg"
                    src={'https://images-na.ssl-images-amazon.com/images/I/51ZqIfidWfL._SX522_.jpg'}
                  />
                </div>
                <div className="orderRow">
                  <div className="orderName">Microsoft Surface Pro X 1876 13" (33.02 cms) Laptop </div>
                  <div className="orderPrice">
                    <BiRupee />
                    1,04,999.00
                  </div>
                  <div>Pending</div>
                </div>
              </Link>
            </Card>
      </div>
      
        </div>
        {/* <div className='a-column a-span12 apb-browse-left-nav apb-browse-col-pad-right a-span-last'>
            <div className="a-row">
                <div className='a-section a-spacing-none apb-browse-refinements' style={{padding:'5px'}}>
                    <div style={{padding:'10px', border:'1px solid #d4d4d4',borderRadius:'5px', paddingTop:'5px', marginTop:'15px',backgroundColor: '#f9f9f9'}}>Orders</div>
                    <div style={{padding:'10px', border:'1px solid #d4d4d4',borderRadius:'5px', paddingTop:'5px', marginTop:'15px',backgroundColor: '#f9f9f9'}}>Orders History</div>
                    <div style={{padding:'10px', border:'1px solid #d4d4d4',borderRadius:'5px', paddingTop:'5px', marginTop:'15px',backgroundColor: '#f9f9f9'}}>Orders Pending</div>
                </div>
            </div>
        </div> */}
        </div>
       
         </div>
         <Footer/>
        </>
    )
}
export default OrderDeatilsP;