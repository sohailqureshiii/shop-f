import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoard from "../../../components/DashBoardSidebar";
import "./style.css";
import Navbar from "../../../components/Navbar";
// import { editProductAction } from "../../../actions/product.action";

const StoreEditProduct = () => {
  const dispatch = useDispatch();

  const [productCategory, setProductCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const editProduct = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("productName", productName);
    form.append("productQuantity", productQuantity);
    form.append("productPrice", productPrice);
    form.append("productDescription", productDescription);

    // dispatch(editProductAction(form));
  };

  return (
    <>
      <Navbar />
      <DashBoard sidebar>
        <span style={{ paddingTop: "60px" }}>Add Product</span>
        <div
          className="app-layout-content"
          style={{ paddingTop: "20px", paddingBottom: "0px" }}
        >
          <div className="p3222">
            <div className="d-flex">
              <div className="fill-available product-form-wrap">
                <form>
                  <div className="product-information-section card">
                    <h4 className="section-text-5 mb24">Product Information</h4>
                    <section className="EmailPage__email-field form-group">
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          Product Name *
                        </label>
                        <input
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter Product Name"
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          productPrice *
                        </label>
                        <input
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter productPrice"
                          value={productPrice}
                          onChange={(e) => setProductPrice(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          Discounted productPrice *
                        </label>
                        <input
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter Discounted productPrice"
                          // value={productName}
                          // onChange={(e) => setProductName(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          productQuantity *
                        </label>
                        <input
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter productQuantity"
                          value={productQuantity}
                          onChange={(e) => setProductQuantity(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          productDescription *
                        </label>
                        <input
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter productDescription"
                          value={productDescription}
                          onChange={(e) =>
                            setProductDescription(e.target.value)
                          }
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
                        <button className="btn-text" onClick={editProduct}>
                          Edit Product
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DashBoard>
    </>
  );
};

export default StoreEditProduct;
