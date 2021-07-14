import React, { useState } from "react";
import { Button, Modal } from "../../components/MaterialUI";
import { BiRupee } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from "../../containers/Signin";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  followStoreAction,
  unfollowStoreAction,
} from "../../actions/user.action";
import "./style.css";

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
        <Button
          title="Follow Store"
          backgroundColor
          radius="5px"
          border
          border-radius="3px"
          color="#000"
          padding="2px 5px"
          width="23%"
          height="32px"
          onClick={() => {
            setShowLoginModal(true);
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
          border
          border-radius="3px"
          color="#000"
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
          border
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
      <Modal visible={show} onClose={handleclose} size="lg">
        <div className="productDescriptionContainer">
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img src="https://m.media-amazon.com/images/I/41vqgX0c5EL.jpg" />
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
                      64MP+8MP+2MP triple rear camera with 1080p video at 30/60
                      fps, 4k 30 fps | 16MP front camera with 1080p video at
                      30/60 fps. 6.43-inch, 90Hz fluid AMOLED display with 2400
                      x 1080 pixels resolution | 410ppi Memory, Storage & SIM:
                      8GB RAM | 128GB internal memory on UFS 2.1 storage system.
                      Dual SIM (nano + nano) Alexa Hands-Free capable: Download
                      the Alexa app to use Alexa hands-free. Play music, make
                      calls, hear news, open apps, navigate and more, all using
                      just your voice, while on-the-go.
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
                        onClick={addToCart}
                      ></Button>
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
