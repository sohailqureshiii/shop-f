import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Signin from "../../Signin";
import { useDispatch, useSelector } from "react-redux";
import { followStoreAction, unfollowStoreAction } from "../../../actions/user.action";

/**
 * @author
 * @function CartItem
 **/
const CartItem = (props) => {
  const [qty, setQty] = useState(props.cartItem.qty);
  // const [qty, setQty] = useState(props.cartItem.productQu);
  console.log("props",props);
  // const { _id, name, price, img,storeId } = props.cartItem;
  const { _id, productName, productPrice, img,storeId } = props.cartItem;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);


  const onQuantityIncrement = () => {
    setQty(qty + 1);
    props.onQuantityInc(_id, qty + 1);
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    props.onQuantityDec(_id, qty - 1);
  };

  const followStore = (storeId) => {
    const store = {
      followId: storeId,
    };
    dispatch(followStoreAction(store));
  
  };

  const UnFollowStore = (storeId) => {
    const store = {
      unfollowId: storeId,
    };
    dispatch(unfollowStoreAction(store));
  };

  const renderButton = (storeId) => {
    if (!auth.authenticate) {
      return (
        <button
          style={{ marginLeft: "250px" }}
          className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl"
          onClick={() => {
            
          }}
        >
          Follow Store
        </button>
      );
    }
    if (auth.authenticate && !user.following.includes(storeId)) {
      return (
        <button
          style={{ marginLeft: "250px" }}
          className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl"
          onClick={() => {
            followStore(storeId);
          }}
        >
          Follow Store
        </button>
      );
    }

    // if (auth.authenticate && user.following.includes(storeId)) {
    //   return (
    //     <button
    //       style={{ marginLeft: "250px" }}
    //       className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl"
    //       onClick={() => {
    //         UnFollowStore(storeId);
    //       }}
    //     >
    //       Following
    //     </button>
    //   );
    // }
  };

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
                      {productName}
                    </span>
                  </span>
                  <div className="productPriceDetails clearfix">
                    <span className="cartProductPrice">
                      <b>₹ </b>: {productPrice}
                    </span>
                  </div>
                  <div className="cart-prod-info-msg">You saved $700!</div>
                  {/*  */}
                  <div className="cartModOptionWrap">
                    <div className="cartModOptionInner">
                      <div className="cartModOptions">
                        <div className="quantityControl">
                          <button onClick={onQuantityDecrement}>-</button>
                          <input value={qty} readOnly />
                          <button onClick={onQuantityIncrement}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cartProductImg">
                  <a aria-current="false">
                    <img
                      style={{ padding: "10px" }}
                      src={
                        "https://images-eu.ssl-images-amazon.com/images/I/31RMVSKxpeL._SX300_SY300_QL70_FMwebp_.jpg"
                      }
                      title="Marvel Joggers (AVL)"
                      alt="Marvel Joggers (AVL)"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="cartBottomAction">
              <div className="cartProductActions">
                <Link
                  id="testRemoveCart"
                  className="rmv-action"
                  onClick={() => props.onRemoveCartItem(_id)}
                >
                  {" "}
                  Remove{" "}
                </Link>
                <div id="testSavefrLater" className="add-w-action">
                  {" "}
                  {renderButton(storeId)}
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
