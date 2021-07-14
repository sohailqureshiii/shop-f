import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItems, removeCartItem } from "../../actions/user.action";
import Footer from "../../components/Footerr/Footer";
import { Button } from "../../components/MaterialUI";
import NavBar from "../../components/Navbar";
import CartItem from "../CartPage/CartItem";
import "./cartstyle.css";


const NewCart = (props) => {

  const cart = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

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

  if (props.onlyCartItems) {
    return (
      <>
        {Object.keys(cartItems).map((key, index) => (
          <CartItem
            key={index}
            cartItem={cartItems[key]}
            onQuantityInc={onQuantityIncrement}
            onQuantityDec={onQuantityDecrement}
            onRemoveCartItem={onRemoveCartItem}
          />
        ))}
      </>
    );
  }
  if (Object.keys(cartItems).length === 0) {
    return (
      <>
        <NavBar/>
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



  return (
    <>
      <NavBar />

      <div className="qwsaqwsa">
        <div className="bfbdvtv">
          <div className="lkmnjkbdffdh">
            <div className="czvxravbs">
              <h1>1</h1>
            </div>
            <div className="pldscbe">
              <form className="laksjdhfg">
                <form>
                  <div className="product-information-section card">
                    <h4 className="section-text-5 mb24">Delivery address</h4>
                    <section className="EmailPage__email-field form-group">
                      <div style={{ display: "flex" }}>
                        <div style={{ paddingRight: "5px" }}>
                          <label
                            className="spectrum-FieldLabel"
                            style={{ fontSize: "14px" }}
                          >
                            Name *
                          </label>
                          <input
                            className="spectrum-Textfield spectrum-Textfield--quiet"
                            placeholder="Enter Name"
                          ></input>
                        </div>
                        <div>
                          <label
                            className="spectrum-FieldLabel"
                            style={{ fontSize: "14px" }}
                          >
                            Mobile Number*
                          </label>
                          <input
                            className="spectrum-Textfield spectrum-Textfield--quiet"
                            placeholder="Enter Mobile Number"
                          ></input>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ paddingRight: "5px" }}>
                          <label
                            className="spectrum-FieldLabel"
                            style={{ fontSize: "14px" }}
                          >
                            Pincode *
                          </label>
                          <input
                            className="spectrum-Textfield spectrum-Textfield--quiet"
                            placeholder="Enter Pincode"
                          ></input>
                        </div>
                        <div>
                          <label
                            className="spectrum-FieldLabel"
                            style={{ fontSize: "14px" }}
                          >
                            City *
                          </label>
                          <input
                            className="spectrum-Textfield spectrum-Textfield--quiet"
                            placeholder="Enter City"
                          ></input>
                        </div>
                      </div>
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          Address *
                        </label>
                        <input
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter Address"
                        ></input>
                      </div>
                    </section>
                    {/* <div
                      className="d-flex"
                      style={{
                        justifyContent: "flex-end",
                        paddingBottom: "15px",
                      }}
                    >
                      <div className="button-group ml16 btn-primary section-text-5 btn-product-new">
                        <div className="btn-text">Save and Continue</div>
                      </div>
                    </div> */}
                    <Button
                      title="Continue"
                      backgroundColor
                      radius="5px"
                      border
                      border-radius="3px"
                      color="#000"
                      padding="2px 5px"
                      width="33%"
                      height="52px"
                      marginLeft="530px"
                      fontSize="20px"
                      marginBottom="10px"
                    ></Button>
                  </div>
                </form>
              </form>
            </div>
          </div>
          <div className="onrlsjhrbnd">

          {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
              onRemoveCartItem={onRemoveCartItem}
            />
          ))}

          </div>
        </div>
        <div className="dhcvkj">
          <div className="csddefccd">
            <h1 className="mnvcoiuykj">2</h1>
          </div>
          <div className="checkout-step-wrap inactive">
            <section className="card-1 payment-card">
              <h2 className="section-text-7">Payment</h2>
              <p className="cljbdhekj">Select your payment method.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCart
