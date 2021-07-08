import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
// import { AiFillThunderbolt } from "react-icons/ai";
import { MaterialButton } from "../../components/MaterialUI";

import "./style.css";
import { generatePublicUrl } from "../../urlConfig";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import NavBar from "../../components/Navbar";


/**
 * @author
 * @function ProductDetailsPage
 */

const ProductDetailsPage = (props) => {
 

  // if (Object.keys(product.productDetails).length === 0) {
  //   return null;
  // }

  return (
    <>
    <NavBar/>
      <div className="productDescriptionContainer">
        <div className="flexRow">
          <div className="verticalImageStack">
           
              <div className="thumbnail">
                <img
                 
                 
         
                />
              </div>

          </div>
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img
              />
            </div>

            {/* action buttons */}
            <div className="flexRow">
              <MaterialButton
                title="ADD TO CART"
                bgColor="#ff9f00"
                textColor="#ffffff"
                style={{
                  marginRight: "5px",
                }}
                icon={<IoMdCart />}
              />
         
            </div>
          </div>
        </div>
        <div>
          {/* home > category > subCategory > productName */}
          <div className="breed">
            <ul>
              <li>
                <a href="#">Home</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">Mobiles</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">Samsung</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
          {/* product description */}
          <div className="productDetails">
            <p className="productTitle"></p>
            <div>
              <span className="ratingCount">
                4.3 <IoIosStar />
              </span>
              <span className="ratingNumbersReviews">
                72,234 Ratings & 8,140 Reviews
              </span>
            </div>
            <div className="extraOffer">
              Extra <BiRupee />
              4500 off{" "}
            </div>
            <div className="flexRow priceContainer">
              <span className="price">
                <BiRupee />
                
              </span>
              <span className="discount" style={{ margin: "0 10px" }}>
                22% off
              </span>
              {/* <span>i</span> */}
            </div>
            <div>
              <p
                style={{
                  color: "#212121",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Available Offers
              </p>
              <p style={{ display: "flex" }}>
                <span
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    color: "#878787",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}
                >
                  Description
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#212121",
                  }}
                >
                  
                </span>
              </p>
              <div className="share-btn-container">
               <WhatsappShareButton
               title=''
               separator=" "
               >
                 <WhatsappIcon logoFillColor="green" round={true}>
                 </WhatsappIcon>
               </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  );
};

export default ProductDetailsPage;
