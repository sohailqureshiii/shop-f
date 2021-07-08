import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function CartItem
 **/
const CartItem = (props) => {




  return (
    <div className="leftSection" style={{ width: "100%" }}>
      <div>
        <div className="cartProductBorder clearfix">
          <div className="cartProduct">
            <div className="cartProductInner">
              <div className="prod-row">
                <div className="cartProdText">
                  <span>
                    <span className="cartProductName" aria-current="false">
                     Mac Book
                    </span>
                  </span>
                  <div className="productPriceDetails clearfix">
                    <span className="cartProductPrice">
                      <b>$ </b>: 1,00,000
                    </span>
                  </div>
                  <div className="cart-prod-info-msg">You saved $700!</div>
                  {/*  */}
                  <div className="cartModOptionWrap">
                    <div className="cartModOptionInner">
                      <div className="cartModOptions">
                        <div className="quantityControl">
                          <button >-</button>
                          <input  readOnly />
                          <button>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cartProductImg">
                  <a aria-current="false">
                    <img style={{padding: '10px'}}
                      src={'https://images-eu.ssl-images-amazon.com/images/I/31RMVSKxpeL._SX300_SY300_QL70_FMwebp_.jpg'}
                      title="Marvel Joggers (AVL)"
                      alt="Marvel Joggers (AVL)"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="cartBottomAction">
              <div className="cartProductActions">
                <Link id="testRemoveCart" className="rmv-action" >
                  {" "}
                  Remove{" "}
                </Link>
                <div id="testSavefrLater" className="add-w-action">
                  {" "}
                  Move to Wishlist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
