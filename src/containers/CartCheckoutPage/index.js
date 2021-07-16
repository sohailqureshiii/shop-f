import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, addToCart, deleteAddressAction, getAddress, getCartItems, removeCartItem } from "../../actions/user.action";
// import { getCartItems } from "../../actions/cart.action";
import { Anchor, Button, MaterialInput } from "../../components/MaterialUI";
import PriceDetails from "../../components/PriceDetails";
import Card from "../../components/UI/Card/index";
import CartPage from "../CartPage/index";
import AddressForm from "./AddressForm";

import "./style.css";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footerr/Footer";
import { useHistory } from "react-router-dom";
import CartItem from "../CartPage/CartItem";


/**
 * @author
 * @function CheckoutPage
 **/

//  const onDeleteAddress = (deladd) =>{
// //    const  dispatch = useDispatch()
// //    const addId = deladd
// //  dispatch(deleteAddressAction(addId))
// setaddid(deladd)
 
// }


const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div
        onClick={props.onClick}
        className={`checkoutHeader ${props.active && "active"}`}
      >
        <div>
          <span className="stepNumber">{props.stepNumber}</span>
          <span className="stepTitle">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
};

const Address = ({
  adr,
  selectAddress,
  enableAddressEditForm,
  confirmDeliveryAddress,
  onAddressSubmit,
  enableDeleteAddressFrom,
  onDeleteAddress,
  onCancelSubmit1,
  onCancelSubmit,
  onClose
}) => {
  return (
    <div className="flexRow addressContainer">
      <div>
        <input name="address" onClick={() => selectAddress(adr)} type="radio" />
      </div>
      <div className="flexRow sb addressinfo">
        {!adr.edit ? (
          <div style={{ width: "100%" }}>
            <div className="addressDetail">
              <div>
                <span className="addressName">{adr.name}</span>
                <span className="addressType">{adr.addressType}</span>
                <span className="addressMobileNumber">{adr.mobileNumber}</span>
              </div>
              {adr.selected && (
                <>
                <Anchor
                  name="EDIT"
                  onClick={() => enableAddressEditForm(adr)}
                  style={{
                    fontWeight: "500",
                    color: "#2874f0",
                  }}
                />
                  {/* <Anchor
                  name="Delete"
                  onClick={() => enableDeleteAddressFrom(adr)}
                  style={{
                    fontWeight: "500",
                    color: "#2874f0",
                  }}
                /> */}

                </>
                
              )}
            </div>
            <div className="fullAddress">
              {adr.address} <br /> {`${adr.state} - ${adr.pinCode}`}
            </div>
            {adr.selected && (
              <Button
                title="DELIVERY HERE"
                onClick={() => confirmDeliveryAddress(adr)}
                style={{
                  width: "200px",
                  margin: "10px 0",
                }}
              />
            )}
          </div>
        ) : (
          
          adr.delete ?
          deleteadd(adr) 
         
          :
          <AddressForm
            withoutLayout={true}
            onSubmitForm={onAddressSubmit}
            initialData={adr}
            // onCancel={() => {}}
            onDeleteAddress={onDeleteAddress}
            onCancel={onCancelSubmit}
            onClose={onClose}
          />
          
        )}
      </div>
    </div>
  );
};

const deleteadd = (adr) =>{
  console.log("adrasfafa",adr);
}


const CartCheckoutPage = (props) => {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState([]);
  const [deleteAddress, setDeleteAddress] = useState([]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [addid, setaddid] = useState(false);
  const cart = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory()
  const [cartItems, setCartItems] = useState(cart.cartItems);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);



  const onQuantityIncrement = (_id, qty) => {
    const {productName, productPrice,img} = cartItems[_id];
    dispatch(addToCart({ _id,productName, productPrice,img }, 1));

  };

  const onQuantityDecrement = (_id, qty) => {
    const {productName, productPrice,img} = cartItems[_id];

    dispatch(addToCart({ _id,productName, productPrice,img }, -1));
  };

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };

  const onAddressSubmit = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
    setPaymentOption(true);
  };

  const onDeleteAddress = (addID) =>{
    const add = {
      addId: addID
    };
    dispatch(deleteAddressAction(add))
  }
  const onClose = (addr) =>{
    setConfirmAddress(true);
    setSelectedAddress(addr);
    setPaymentOption(true);
    console.log("sdfd");
  }
  const  onCancelSubmit = (yes) =>{
    setNewAddress(false)
    // console.log("dfsvfrg");
  }

  const  onCancelSubmit1 = (yes) =>{
   console.log("sdgsg");
  }



  const selectAddress = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    setAddress(updatedAddress);
  };

  const confirmDeliveryAddress = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setPaymentOption(true);
    setOrderConfirmation(true);
    // setOrderSummary(true);
  };

  const enableAddressEditForm = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    setAddress(updatedAddress);
  };

  const enableDeleteAddressFrom = (addr) => {
    const updatedAddress = deleteAddress.map((adr) =>
      adr._id === addr._id ? { ...adr, delete: true } : { ...adr, delete: false }
    );
    setDeleteAddress(updatedAddress);
  };

  const userOrderConfirmation = () => {
    setOrderConfirmation(true);
    setOrderSummary(false);
    setPaymentOption(true);
  };

  const onConfirmOrder = () => {
    const totalAmount = Object.keys(cart.cartItems).reduce(
      (totalPrice, key) => {
        const { productPrice, qty } = cart.cartItems[key];
        return totalPrice + productPrice * qty;
      },
      0
    );

    const items = Object.keys(cart.cartItems).map((key) => ({
      productId: key,
      payablePrice: cart.cartItems[key].price,
      purchasedQty: cart.cartItems[key].qty,
      storeId: cart.cartItems[key].storeId,
    }));
    const payload = {
      addressId: selectedAddress._id,
      totalAmount,
      items,
      paymentStatus: "pending",
      paymentType: "cod",
    };

    dispatch(addOrder(payload));
    setConfirmOrder(true);
  };

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
    auth.authenticate && dispatch(getCartItems());
  }, [auth.authenticate]);

  useEffect(() => {
    const address = user.address.map((adr) => ({
      ...adr,
      selected: false,
      edit: false,
    }));
    setAddress(address);
    //user.address.length === 0 && setNewAddress(true);
  }, [user.address]);

  useEffect(() => {
    if (confirmOrder && user.placedOrderId) {
      props.history.push(`/order_details/${user.placedOrderId}`);
    }
  }, [user.placedOrderId]);

  if (confirmOrder) {
    return (
      <Card>
        <div>Thankyou</div>
      </Card>
    );
  }


  if (Object.keys(cartItems).length === 0) {
    return (
      <>
        <NavBar />
        <div
          className="container"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        >
          <div
            className="emptycartwish emptyPage"
            style={{ padding: "30px 0px 0px" }}
          >
            <img
              src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
              title="Empty Cart Page Doodle"
              alt="Empty Cart Page Doodle"
              width="150px"
            />
            <div className="clearfix">Nothing in the Cart</div>
            <div className="clearfix">
              <a
                class="success"
                hreflang="en-in"
                href="/"
                style={{
                  padding: "10px",
                  border: "2px solid",
                  borderRadius: "5px",
                  display: "inline-block",
                  marginTop: "15px",
                }}
              >
                Continue Shopping
              </a>
            </div>
          </div>
          <div
            className="emptylisting"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <hr
              style={{
                height: "1px",
                borderWidth: "1px 0px 0px",
                borderTopStyle: "solid",
                borderRightStyle: "initial",
                borderBottomStyle: "initial",
                borderLeftStyle: "initial",
                borderTopColor: "rgb(204, 204, 204)",
                borderRightColor: "initial",
                borderBottomColor: "initial",
                borderLeftColor: "initial",
                borderImage: "initial",
              }}
            ></hr>
            <div style={{ margin: "20px auto" }}></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const changeAddress = () =>{
    setPaymentOption(false);
    setConfirmAddress(false);


  }
  

  return (
    <>
      <NavBar />
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <div className="checkoutContainer">
          {/* check if user logged in or not */}

          {
            !auth.authenticate ?  
            <CheckoutStep
            stepNumber={"1"}
            title={"LOGIN"}
            active={!auth.authenticate}
            body={
              auth.authenticate ? (
                <div className="loggedInId">
                  <span style={{ fontWeight: 500 }}>{auth.user.name}</span>
                  <span style={{ margin: "0 5px" }}>{auth.user.email}</span>
                </div>
              ) : (
                // <div><MaterialInput label="Email" /></div>
                <button
                  onClick={() => {
                    history.push({
                      pathname: "/Signin",
                      state: {checkout: true },
                    });
                  }}
                >
                  Login
                </button>
              )
            }
          />
          : null
          }
         
          <CheckoutStep
            stepNumber={auth.authenticate ? "1" : "2"}
            title={"DELIVERY ADDRESS"}
            active={!confirmAddress && auth.authenticate}
            body={
              <>
         
                {confirmAddress ? (
                  <div className="stepCompleted">{`${selectedAddress.name} ${selectedAddress.address} - ${selectedAddress.pinCode}`}</div>
                ) : (
                  address.map((adr) => (
                    <Address
                      selectAddress={selectAddress}
                      enableAddressEditForm={enableAddressEditForm}
                      enableDeleteAddressFrom = {enableDeleteAddressFrom}
                      confirmDeliveryAddress={confirmDeliveryAddress}
                      onAddressSubmit={onAddressSubmit}
                      onDeleteAddress={onDeleteAddress}
                      adr={adr}
                      onClose = {onClose}
                      onCancel1={onCancelSubmit1}
                      onCancel={onCancelSubmit}
                      
                    />
                  ))
                )}
                {
                  confirmAddress ? <h2 onClick={changeAddress}>change</h2> : null
                }
              </>
            }
          />

          {/* AddressForm */}
          {confirmAddress ? null : newAddress ? (
            <AddressForm onSubmitForm={onAddressSubmit} onCancel={onCancelSubmit} onCancel1={onCancelSubmit1} />
          ) : auth.authenticate ? (
            <CheckoutStep
              stepNumber={"+"}
              title={"ADD NEW ADDRESS"}
              active={false}
              onClick={() => setNewAddress(true)}
            />
          ) : null}

        
          <CheckoutStep
            stepNumber={auth.authenticate ? "2" : "3"}
            title={"PAYMENT OPTIONS"}
            active={paymentOption}
            body={
              paymentOption && (
                <div>
                  <div
                    className="flexRow"
                    style={{
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <input type="radio" name="paymentOption" value="cod" />
                    <div>Cash on delivery</div>
                  </div>
                  <Button
                    title="CONFIRM ORDER"
                    onClick={onConfirmOrder}
                    style={{
                      width: "200px",
                      margin: "0 0 20px 20px",
                    }}
                  />
                </div>
              )
            }
          />
        </div>

        {/* Price Component */}
        <PriceDetails
          totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
            return qty + cart.cartItems[key].qty;
          }, 0)}
          totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { productPrice, qty } = cart.cartItems[key];
            return totalPrice + productPrice * qty;
          }, 0)}
        />
          
      </div>
      {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
              onRemoveCartItem={onRemoveCartItem}
            />
          ))}
      <Footer />
    </>
  );
};

export default CartCheckoutPage;
