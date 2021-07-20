import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoard from "../../../components/DashBoardSidebar";
import "./style.css";
import Navbar from "../../../components/Navbar";
import { editProductAction } from "../../../actions/product.action";

const StoreEditProduct = (props) => {
  const dispatch = useDispatch();

  const productDetails = props.location.state.productDetails;
  const categoriesList = useSelector((state) => state.category.categories);
  const storeCategory = useSelector(
    (state) => state.userStore.userStore.storeCategory
  );

  const [productCategory, setProductCategory] = useState(
    productDetails ? productDetails.productCategory._id : ""
  );
  const [productName, setProductName] = useState(
    productDetails ? productDetails.productName : ""
  );
  const [productQuantity, setProductQuantity] = useState(
    productDetails ? productDetails.productQuantity : ""
  );
  const [productPrice, setProductPrice] = useState(
    productDetails ? productDetails.productPrice : ""
  );
  const [productDescription, setProductDescription] = useState(
    productDetails ? productDetails.productDescription : ""
  );
  const [productId, setProductId] = useState(
    productDetails ? productDetails._id : ""
  );

  if (props.location && props.location.state && !props.location.state.edit) {
    return null;
  }
  const editProduct = (e) => {
    e.preventDefault();

    if (
      productName === "" ||
      productQuantity === "" ||
      productPrice === "" ||
      productDescription === "" ||
      productCategory === ""
    ) {
      return alert("Fill All the details");
    }

    // const form = new FormData();
    // form.append("_id", productId);
    // form.append("productName", productName);
    // form.append("productQuantity", productQuantity);
    // form.append("productPrice", productPrice);
    // form.append("productDescription", productDescription);
    // form.append("productCategory", productCategory);

    const form = {
      _id: productId,
      productName,
      productQuantity,
      productPrice,
      productDescription,
      productCategory,
    };

    dispatch(editProductAction(form));
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
                          product Category *
                        </label>
                        <select
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter Product Category"
                          value={productCategory}
                          onChange={(e) => setProductCategory(e.target.value)}
                        >
                          <option
                            className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua"
                            value=""
                          >
                            Product Category
                          </option>

                          {categoriesList
                            .filter(
                              (category) =>
                                category.parentId === storeCategory._id
                            )
                            .map((filterCategory) => (
                              <option
                                key={filterCategory._id}
                                value={filterCategory._id}
                              >
                                {filterCategory.name}
                              </option>
                            ))}
                        </select>
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
