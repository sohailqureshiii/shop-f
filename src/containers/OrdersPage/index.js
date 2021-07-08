import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/UI/Card";
import { BiRupee } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import "./style.css";
import { Breed } from "../../components/MaterialUI";
import { generatePublicUrl } from "../../urlConfig";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footerr/Footer";

/**
 * @author
 * @function OrderPage
 **/

const OrderPage = (props) => {


  return (
    <>
    <NavBar/>
      <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
        <Breed
          breed={[
            { name: "Home", href: "/" },
            { name: "My Account", href: "/account" },
            { name: "My Orders", href: "/account/orders" },
          ]}
          breedIcon={<IoIosArrowForward />}
        />
     

            <Card style={{ display: "block", margin: "5px 0" }}>
              <Link
                // to={`/order_details/${order._id}`}
                className="orderItemContainer"
              >
                <div className="orderImgContainer">
                  <img
                    className="orderImg"
                    // src={generatePublicUrl(item.productId.productPictures[0].img)}
                  />
                </div>
                <div className="orderRow">
                  <div className="orderName"></div>
                  <div className="orderPrice">
                    <BiRupee />
                    1,00,000
                  </div>
                  <div>Pending</div>
                </div>
              </Link>
            </Card>
        
      </div>
      <Footer/>
      </>
     
  );
};

export default OrderPage;