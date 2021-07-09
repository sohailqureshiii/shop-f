import React from "react";
import Navigationbar from "../../components/Navbar";
import CartItem from "../CartPage/CartItem";
import "./cartstyle.css";

const newCart = () => {
  return (
    <>
      <Navigationbar />

      <div  className='qwsaqwsa'>
        <div className="bfbdvtv">
          <div className='lkmnjkbdffdh'>
              <div className='czvxravbs'>
                  <h1>1</h1>
              </div>
              <div className='pldscbe'>
                  <form className='laksjdhfg'>
                  <form>
                  <div className="product-information-section card">
                    <h4 className="section-text-5 mb24">Delivery address</h4>
                    <section className="EmailPage__email-field form-group">
                    <div style={{display:'flex'}}>
                    <div style={{paddingRight:'5px'}}>
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
                    <div style={{display:'flex'}}>
                    <div style={{paddingRight:'5px'}}>
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
                    <div
                      className="d-flex"
                      style={{
                        justifyContent: "flex-end",
                        paddingBottom: "15px",
                      }}
                    >
                      <div className="button-group ml16 btn-primary section-text-5 btn-product-new">
                        <div className="btn-text">Save and Continue</div>
                      </div>
                    </div>
                  </div>
                </form>
                  </form>
              </div>
          </div>
          <div className='onrlsjhrbnd'>
           <CartItem/>
           </div>
        </div>
        <div className='dhcvkj'>
        <div className='csddefccd'>
            <h1 className='mnvcoiuykj'>
                2
            </h1>
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
};
export default newCart;
