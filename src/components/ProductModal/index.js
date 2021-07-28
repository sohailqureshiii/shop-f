import React, { useState } from "react";
import { Button, Modal } from "../../components/MaterialUI";
import { BiRupee } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Redirect } from "react-router-dom";
import Signin from "../../containers/Signin";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  followStoreAction,
  unfollowStoreAction,
} from "../../actions/user.action";
import { useHistory } from "react-router-dom";
import { shareApi } from "../../urlConfig";
import "./style.css";
import { WhatsappShareButton } from "react-share";

const ProductModal = (props) => {
  const { show, handleclose, productDetails } = props;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  let history = useHistory();

  if (!productDetails) {
    return null;
  }

  const diffToast = () => {
    toast.success("Item Added Successfull !", {
      position: "top-center",
    });
  };

  const followStore = (storeId) => {
    const store = {
      followId: storeId,
    };
    dispatch(followStoreAction(store));
    handleclose(false);
  };

  const UnFollowStore = (storeId) => {
    const store = {
      unfollowId: storeId,
    };
    dispatch(unfollowStoreAction(store));
    handleclose(false);
  };

  const renderButton = (storeId) => {
    if (!auth.authenticate) {
      return (
        <Button
          title="Follow Store"
          backgroundColor
          radius="5px"
          border='1px solid #c7c7c7'
          border-radius="3px"
          color= 'rgb(63, 63, 71)'
          padding="2px 5px"
          width="23%"
          height="32px"
          onClick={() => {
            history.push({
              pathname: "/Signin",
              state: { storeId: storeId, Follow: true },
            });
          }}
          fontSize="15px"
          marginTop="10px"
        ></Button>
      );
    }
    if (auth.authenticate && !user.following.includes(storeId)) {
      return (
        <Button
          title="Follow Store"
          backgroundColor
          radius="5px"
          border='1px solid #c7c7c7'
          border-radius="3px"
          color= 'rgb(63, 63, 71)'
          padding="2px 5px"
          width="23%"
          height="32px"
          onClick={() => {
            followStore(storeId);
          }}
          fontSize="15px"
          marginTop="10px"
        ></Button>
      );
    }

    if (auth.authenticate && user.following.includes(storeId)) {
      return (
        <Button
          title="Following"
          backgroundColor
          radius="5px"
          border='1px solid'
          border-radius="3px"
          color="#000"
          padding="2px 5px"
          width="23%"
          height="32px"
          onClick={() => {
            UnFollowStore(storeId);
          }}
          fontSize="15px"
          marginTop="10px"
        ></Button>
      );
    }
  };

  return (
    <>
      <Modal
        visible={show}
        onClose={handleclose}
        size="lg"
        key={productDetails._id}
      >
        <div className="productDescriptionContainer">
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img src={"https://images-eu.ssl-images-amazon.com/images/I/41fBz4s1nzS._AC_SX184_.jpg"} />
            </div>
          </div>
          {/* home > category > subCategory > productName */}
          <div className=" detailsWrapper">
            <div className="prodDesc clearfix">
              <div className="productDetails" style={{ maxWidth: "525px" }}>
                <div>
                  <div
                    className="Storename"
                    style={{ maxWidth: "521px", top: "-1px" }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                      <p style={{ minWidth: "400px" }}>
                        {productDetails.storeId.storeName}{" "}
                      </p>
                      {renderButton(productDetails.storeId._id)}
                    </div>

                    <p
                      style={{
                        width: "130px",
                        fontSize: "12px",
                        color: "#878787",
                        fontWeight: "600",
                        marginRight: "20px",
                      }}
                    >
                      Viman Nagr
                    </p>
                  </div>
                </div>
                <h1 className="productTitle" style={{ maxWidth: "509px" }}>
                  {productDetails.productName}
                </h1>
                <div className="flexRow priceContainer price">
                  Price :
                  <span className="price">
                    <BiRupee />
                    {productDetails.productPrice}
                  </span>
                  {/* <span>i</span> */}
                </div>
                <div>
                  <p style={{ display: "flex", maxWidth: "500px" }}>
                    <span
                      style={{
                        width: "100px",
                        fontSize: "12px",
                        color: "#878787",
                        fontWeight: "600",
                        marginRight: "20px",
                      }}
                    >
                      Description
                    </span>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#212121",
                      }}
                    >
                      {productDetails.productDescription}
                    </p>
                  </p>
                  <div className="share-btn-container">
                    <div
                      id="addButtons"
                      style={{
                        float: "left",
                        width: "100%",
                        marginLeft: "85px",
                        display: "flex",
                        gap: "20px",
                        marginTop: "10px",
                      }}
                    >
                      <Button
                        title="Add to cart"
                        backgroundColor
                        radius="8px"
                        border="1px solid #d4d4d4"
                        border-radius="3px"
                        color="#000"
                        padding="5px 10px"
                        width="200px"
                        height="50px"
                        onClick={() => {
                          const storeId = productDetails.storeId._id;
                          const { _id, productName, productPrice } =
                            productDetails;
                          const img = productDetails.productPictures[0].img;
                          dispatch(
                            addToCart({
                              _id,
                              productName,
                              productPrice,
                              storeId,
                              img,
                            })
                          );
                          handleclose(false);
                        }}
                      ></Button>

                      <WhatsappShareButton
                        title={productDetails.productName}
                        separator=" "
                        url={`${shareApi}/product/${productDetails._id}`}
                      >
                        <Button
                          title="Share"
                          backgroundColor
                          radius="8px"
                          border="1px solid #d4d4d4"
                          border-radius="3px"
                          color="#000"
                          padding="5px 10px"
                          width="200px"
                          height="50px"
                        ></Button>
                      </WhatsappShareButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />
      </Modal>
    </>
  );
};

export default ProductModal;

// <div
//                       id="addButtons"
//                       style={{
//                         float: "left",
//                         width: "100%",
//                         marginLeft: "85px",
//                         display: "flex",
//                         gap: "20px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <div className="addToBagBtn  fixedCartBtnWrapper">
//                         <div className="addButtons col-xs-12 pull-left">
//                           {auth.authenticate &&
//                           auth.user.storeId ===
//                             productDetails.storeId._id ? null : (
//                             <button
//                               id="testWishButton"
//                               className="addtocart pull-left "
//                               onClick={() => {
//                                 const storeId = productDetails.storeId._id;
//                                 const { _id, productName, productPrice } =
//                                   productDetails;
//                                 const img =
//                                   productDetails.productPictures[0].img;
//                                 dispatch(
//                                   addToCart({
//                                     _id,
//                                     productName,
//                                     productPrice,
//                                     storeId,
//                                     img,
//                                   })
//                                 );
//                                 handleclose(false);
//                               }}
//                             >
//                               <span>ADD TO Cart</span>
//                             </button>
//                           )}

//                           <button
//                             id="addToCart"
//                             className="wishlists pull-left "
//                           >
//                             <span>
//                               {/* <WhatsappShareButton
//                                 title={productDetails.productName}
//                                 separator=" "
//                                 url={`${shareApi}/product/${productDetails._id}`}
//                               >
//                                 SHARE
//                               </WhatsappShareButton> */}
//                             </span>
//                           </button>
//                         </div>
//                       </div>
