import React from "react";
import { Modal } from "../../components/MaterialUI";
import { BiRupee } from "react-icons/bi";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import { shareApi } from "../../urlConfig";
import { useHistory } from "react-router-dom";

const StoreProdDeatils = (props) => {
  const { show, handleclose, productDetails } = props;
  const history = useHistory()

  if (!productDetails) {
    return null;
  }


  return (
    <>
      <Modal visible={show} onClose={handleclose} size="lg">
        <div className="productDescriptionContainer">
          <div className="flexRow">
            <div className="productDescContainer">
              <div className="productDescImgContainer">
                {productDetails.productPictures  ?
                (
                  <img src={productDetails.productPictures[0].img} alt="new" />
                ) : (
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0-c7PZi3hJulH_fnbH3UfG_4iX6ULwsuKQ&usqp=CAU"
                    alt="new"
                  />
                )}
              </div>
            </div>
          </div>
          {/* home > category > subCategory > productName */}
          <div className=" detailsWrapper">
            <div className="prodDesc clearfix">
              <div className="productDetails" style={{ width: "600px" }}>
                <p className="productTitle" style={{ maxWidth: "500px" }}>
                  {productDetails.productName}
                </p>
                <div className="flexRow priceContainer">
                  <span className="price">
                    <BiRupee />
                    {productDetails.productPrice}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      display: "flex",
                      maxWidth: "500px",
                      minHeight: "122px",
                    }}
                  >
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
                    <WhatsappShareButton
                      title={productDetails.productName}
                      separator=" "
                      url={`${shareApi}/product/${productDetails._id}`}
                    >
                      <WhatsappIcon
                        logoFillColor="green"
                        round={true}
                        // title={productDetails.name}
                        separator=" "
                        // url={currentUrl}
                      ></WhatsappIcon>
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
              <div
                id="addButtons"
                style={{ float: "left", width: "100%", marginLeft: "12px" }}
              >
                <div className="addToBagBtn  fixedCartBtnWrapper">
                  <div className="addButtons col-xs-12 pull-left">
                    <button
                      id="testWishButton"
                      className="addtocart pull-left "
                    >
                      <span
                        onClick={() => {
                          history.push({
                            pathname: "/editProduct",
                            state: { productDetails: productDetails, edit: true },
                          });
                        }}
                      >
                        Edit
                      </span>
                    </button>
                    <button id="addToCart" className="wishlists pull-left ">
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default StoreProdDeatils;
