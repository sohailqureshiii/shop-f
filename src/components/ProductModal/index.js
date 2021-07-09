import React, { useState } from "react";
import { Modal } from "../../components/MaterialUI";
import { BiRupee } from "react-icons/bi";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Signin from "../../containers/Signin";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  followStoreAction,
  unfollowStoreAction,
} from "../../actions/user.action";

const ProductModal = (props) => {
  const { show, handleclose, productDetails } = props;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const [showLoginModal, setShowLoginModal] = useState(false);

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
        <button
          style={{ marginLeft: "250px" }}
          className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl"
          onClick={() => {
            setShowLoginModal(true);
            handleclose(false);
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

    if (auth.authenticate && user.following.includes(storeId)) {
      return (
        <button
          style={{ marginLeft: "250px" }}
          className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl"
          onClick={() => {
            UnFollowStore(storeId);
          }}
        >
          Following
        </button>
      );
    }
  };

  return (
    <>
      <Modal visible={show} onClose={handleclose} size="lg">
        <div className="productDescriptionContainer">
          <div className="flexRow">
            <div className="productDescContainer">
              <div className="productDescImgContainer">
                <img
                  src="https://m.media-amazon.com/images/I/41vqgX0c5EL.jpg"
                  alt="new"
                />
              </div>

              {/* action buttons */}
            </div>
          </div>
          {/* home > category > subCategory > productName */}
          <div className=" detailsWrapper">
            <div className="prodDesc clearfix">
              <div className="productDetails" style={{ width: "600px" }}>
                <div>
                  <div
                    className="Storename"
                    style={{ maxWidth: "521px", top: "-1px" }}
                  >
                    <p style={{ display: "flex" }}>
                      {productDetails.storeId.storeName}
                      {renderButton(productDetails.storeId._id)}
                    </p>
                    <p
                      style={{
                        width: "130px",
                        fontSize: "12px",
                        color: "#878787",
                        fontWeight: "600",
                        marginRight: "20px",
                      }}
                    >
                      {productDetails.storeLocation.name}
                    </p>
                  </div>
                </div>
                <h1 className="productTitle" style={{ maxWidth: "509px" }}>
                  {productDetails.productName}
                </h1>
                <div className="flexRow priceContainer price">
                  Price :
                  <span
                  // classNa me="price"
                  >
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
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#212121",
                      }}
                    >
                      {productDetails.productDescription}
                    </span>
                  </p>
                  <div className="share-btn-container">
                    <div
                      id="addButtons"
                      style={{
                        float: "left",
                        width: "100%",
                        marginLeft: "0px",
                      }}
                    >
                      <div className="addToBagBtn  fixedCartBtnWrapper">
                        <div className="addButtons col-xs-12 pull-left">
                          <button
                            id="testWishButton"
                            className="addtocart pull-left "
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
                          >
                            <span>ADD TO Cart</span>
                          </button>
                          <button
                            id="addToCart"
                            className="wishlists pull-left "
                          >
                            <span>SHARE</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Modal>
      <Signin
        Modal
        show={showLoginModal}
        handleclose={() => setShowLoginModal(false)}
      />
    </>
  );
};

export default ProductModal;
