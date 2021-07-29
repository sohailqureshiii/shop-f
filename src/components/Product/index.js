import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ProductModal from "../ProductModal";
import "./style.css";
import { Button } from "../MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  followStoreAction,
  unfollowStoreAction,
} from "../../actions/user.action";

const Product = (props) => {
  const { product } = props;
  const [show, setShow] = useState(false);
  const [productDetails, setProductDetails] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShow = () => {
    setShow(true);
    setProductDetails(product);
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
        <Button
          title="Follow"
          backgroundColor
          radius="3px"
          border
          border-radius="3px"
          color="#000"
          padding="2px 5px"
          width="23%"
          height="22px"
          fontSize="12px"
          onClick={() => {
            history.push({
              pathname: "/Signin",
              state: { storeId: storeId, Follow: true },
            });
          }}
        ></Button>
      );
    }

    if (auth.authenticate && !user.following.includes(storeId)) {
      return (
        <Button
          title="Follow"
          backgroundColor
          radius="3px"
          border
          border-radius="3px"
          color="#000"
          padding="2px 5px"
          width="23%"
          height="22px"
          onClick={() => {
            followStore(storeId);
          }}
          fontSize="12px"
        ></Button>
      );
    }

    if (auth.authenticate && user.following.includes(storeId)) {
      return (
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
          onClick={() => {
            UnFollowStore(storeId);
          }}
          fontSize="12px"
        ></Button>
      );
    }
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
                  style={{ fontSize: "15px", color: "rgb(63, 63, 71)" }}
                >
                  {product.storeId.storeName}
                </Link>
                {renderButton(product.storeId._id)}
              </div>
              <div className="Cover-cover-2mr ProjectCoverNeue-cover-3Ni e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-coverWithFlags-1Aq ProjectCoverNeue-statsVisible-19j ProjectCoverNeue-loaded-26R">
                <div className="Cover-wrapper-300 ProjectCoverNeue-wrapper-27j e2e-ProjectCoverNeue-wrapper">
                  <div className="Cover-content-2R2">
                    <img
                      sizes="404px"
                      src={
                        // "https://images-eu.ssl-images-amazon.com/images/I/41fBz4s1nzS._AC_SX184_.jpg"
                        product.productPictures[0].img
                      }
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
                    <span className="new-h-product-name"
                     onClick={() => handleShow()}
                    >
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
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span className="price-new-price">
                        {/* <BiRupee /> */}
                        {"₹ " + product.productPrice}
                      </span>
                      {/* <span>i</span> */}
                    </div>
                    <h1
                      className="new-add-btn"
                      onClick={() => {
                        const storeId = product.storeId._id;
                        const { _id, productName, productPrice } = product;
                        const img = product.productPictures[0].img;
                        dispatch(
                          addToCart({
                            _id,
                            productName,
                            productPrice,
                            storeId,
                            img,
                          })
                        );
                      }}
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
