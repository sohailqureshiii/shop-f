import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductModal from "../ProductModal";
import { BiRupee } from "react-icons/bi";
import "./style.css";
import { Button } from "../MaterialUI";

const Product = (props) => {
  const { product } = props;
  const [show, setShow] = useState(false);
  const [productDetails, setProductDetails] = useState("");

  const handleShow = () => {
    setShow(true);
    setProductDetails(product);
  };

  return (
    <>
      <div
        style={{ border: " 1px solid #d4d4d4", borderRadius: "5px" }}
        key={product._id}
      >
        <div>
          <div className="Galleries-gridCover-j9D">
            <div className="ProjectCoverNeue-root-166 ProjectCoverNeue-statsVisible-19j ProjectCover-cover-3zh">
              <div
                style={{
                  display: "flex",
                  padding: "10px 10px",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  to={`/${product.storeId._id}/store`}
                  style={{ fontSize: "15px",color:'rgb(63, 63, 71)'}}
                >
                  {product.storeId.storeName}
                </Link>
                <Button
                  title="Following"
                  backgroundColor
                  radius="3px"
                  border
                  border-radius="3px"
                  color="#000"
                  padding="2px 5px"
                  width="23%"
                  height="22px"
                  // onClick={() => {
                  //   UnFollowStore(storeId);
                  // }}
                  fontSize="12px"
                ></Button>
              </div>
              <div className="Cover-cover-2mr ProjectCoverNeue-cover-3Ni e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-coverWithFlags-1Aq ProjectCoverNeue-statsVisible-19j ProjectCoverNeue-loaded-26R">
                <div className="Cover-wrapper-300 ProjectCoverNeue-wrapper-27j e2e-ProjectCoverNeue-wrapper">
                  <div className="Cover-content-2R2">
                    <img
                      sizes="404px"
                      src={product.productPictures[0].img}
                      alt="new"
                      loading="lazy"
                      class="ProjectCoverNeue-image-1MZ js-cover-image"
                    />{" "}
                    <div className="ProjectCoverNeue-controlsAndPrivacyContainer-20r"></div>
                  </div>
                </div>
              </div>
              {/* /////// */}
              <div style={{ padding: "10px" }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      left: "0",
                    }}
                  >
                    <span className="new-h-product-name">
                      {product.productName}
                    </span>
                    <div
                      className="new-view-detials-btn"
                      style={{ display: "flex" }}
                      onClick={() => handleShow()}
                    >
                      View Details
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      left: "0",
                    }}
                  >
                    <div style={{ display: "flex",alignItems:'center' }}>
                      <span className="price-new-price">
                        {/* <BiRupee /> */}$
                        {product.productPrice}
                      </span>
                      {/* <span>i</span> */}
                    </div>
                    <h1
                      className="new-add-btn"
                    >
                      Add +
                    </h1>
                  </div>
                </div>
              </div>
              {/* ///////// */}
            </div>
          </div>
        </div>
      </div>
      <ProductModal
        show={show}
        handleclose={() => setShow(false)}
        productDetails={productDetails}
      />
    </>
  );
};

export default Product;
