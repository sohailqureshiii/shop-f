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
          border
          color
          border-radius="3px"
          padding="4px"
          width="23%"
          height="22px"
          radius="3px"
          fontSize="8px"
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
          border
          color
          border-radius="3px"
          padding="4px"
          width="23%"
          height="22px"
          radius="3px"
          fontSize="8px"
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
          title="Unfollow"
          backgroundColor
          border
          color
          border-radius="3px"
          padding="4px"
          width="23%"
          height="22px"
          radius="3px"
          fontSize="8px"
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
                  padding: "0px 10px",
                  justifyContent: "space-between",
                  alignItems:'center'
                }}
              >
                <Link
                  to={`/${product.storeId._id}/store`}
                  className="store-name-on-product"
                >
                  <span className="new-h-product-name">
                    {product.storeId.storeName}
                  </span>
                </Link>
                {renderButton(product.storeId._id)}
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
                  className='new-aling-item-nvd'
                  >
                    <span
                      className="new-h-product-name"
                      onClick={() => handleShow()}
                    >
                      {product.productName}
                    </span>
                    <Button
                      title="View Details"
                      backgroundColor
                      border
                      color
                      border-radius="3px"
                      padding="4px"
                      width="25%"
                      height="22px"
                      radius="3px"
                      fontSize="12px"
                      onClick={() => handleShow()}
                    ></Button>
                  </div>
                </div>
                <div>
                  <div
                  className='new-aling-item-nvd'
                   
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span className="price-new-price">
                        {"₹ " + product.productPrice}
                      </span>
                    </div>
                    <Button
                      title="Add +"
                      backgroundColor
                      border
                      color
                      border-radius="3px"
                      padding="4px"
                      width="25%"
                      height="22px"
                      radius="3px"
                      fontSize="8px"
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
                      fontSize="12px"
                    ></Button>
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
