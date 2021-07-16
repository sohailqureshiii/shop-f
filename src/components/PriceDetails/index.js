import React from "react";
import { Link } from 'react-router-dom';

/**
 * @author
 * @function PriceDetails
 **/

const PriceDetails = (props) => {
  return (
    <div className="summaryBox col-sm-5 rightSection noPdRight" style={{width:'100%'}}>
      <div className="summeryBorderBox prc-summary">
        <div className="sectionTopHeading">
          <h5>Price Summary</h5>
        </div>
        <div className="paymentBox">
          <div className="paymentBoxInner">
            <p>No of Items</p>
            <p>{props.totalItem} Items</p>
          </div>
          <div className="paymentBoxInner">
            <p>Delivery Fee</p>
            <p style={{ color: "rgb(29, 136, 2)" }}>FREE</p>
          </div>
          <div
            className="paymentBoxInner"
            style={{ fontFamily: "montserrat, sans-serif" }}
          >
            <p>Total</p>
            <p>₹ {props.totalPrice}</p>
          </div>
          </div>
       
      </div>
    </div>
  );
};

export default PriceDetails;
