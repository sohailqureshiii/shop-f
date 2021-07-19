import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/UI/Card";
import { BiRupee } from "react-icons/bi";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footerr/Footer";
import './style.css'
import { useSelector } from "react-redux";

const OrderDeatilsP = (props) => {

  const userOrders = useSelector((state)=>state.user.orders)
  
    return (
        <>
         <NavBar />
         <div className='vcjsduedn' style={{paddingTop:'100px'}}>
         <div style={{display:'flex'}}>
         <div className='lanchkdrj'>
           <div className='ponscbswjn'>
           <div>
             <h4 className='kdhbsdb'>Order Details</h4>
             <div className='lkxxhjkskn'>All</div>
             <div className='lkxxhjkskn'>Pending</div>
             <div className='lkxxhjkskn'>Order History</div>
             <div className='lkxxhjkskn'>Cancel Order</div>
             <div className='lknidkdghb'>New Oders</div>
           </div>
           <div>
           </div>
           </div>
         </div>
            <div className="a-column a-span12 aok-float-right apb-browse-col-pad-left apb-browse-two-col-center-margin-right  mnhghssjsk">
        <div style={{ maxWidth: "1160px", margin: "5px auto"}}>
      
          
            <Card style={{ display: "block", margin: "5px 0" }}>

            {
              userOrders && userOrders.length > 0 ?
              userOrders.map((order,index)=>(
                <Link
                // to={`/order_details/${order._id}`}
                className="orderItemContainer"
                key={order._id}
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
                    {order.totalAmount}
                  </div>
                  <div>Total Items:{order.items.length}</div>
                </div>
              </Link>
              ))
              : "No Orders"
            }
             
             
            </Card>
      </div>
      
        </div>
         </div>
         </div>
         <Footer/>
        </>
    )
}
export default OrderDeatilsP;