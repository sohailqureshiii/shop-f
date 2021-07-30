import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../actions/user.action";
import { Button } from "../MaterialUI";
import ProductModal from "../ProductModal";

const StoreProduct = (props) => {
  const { product } = props;
  const [show, setShow] = useState(false);
  const [productDetails, setProductDetails] = useState("");
  const dispatch = useDispatch();
  const storeId = useSelector((state) => state.auth.user.storeId);

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
                className="Cover-cover-2mr ProjectCoverNeue-cover-3Ni e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-coverWithFlags-1Aq ProjectCoverNeue-statsVisible-19j ProjectCoverNeue-loaded-26R"
                onClick={() => handleShow()}
              >
                <div className="Cover-wrapper-300 ProjectCoverNeue-wrapper-27j e2e-ProjectCoverNeue-wrapper">
                  <div className="Cover-content-2R2">
                    <div className="DominantColor-dominantColor-2PM"></div>
                    {product.productPictures ? (
                      <img
                        sizes="404px"
                        style={{ padding: "10px" }}
                        src={product.productPictures[0].img}
                        alt="new"
                        loading="lazy"
                        class="ProjectCoverNeue-image-1MZ js-cover-image"
                      ></img>
                    ) : (
                      <img
                        sizes="404px"
                        style={{ padding: "10px" }}
                        src="https://m.media-amazon.com/images/I/41vqgX0c5EL.jpg"
                        alt="new"
                        loading="lazy"
                        class="ProjectCoverNeue-image-1MZ js-cover-image"
                      ></img>
                    )}

                    <div className="ProjectCoverNeue-controlsAndPrivacyContainer-20r"></div>
                  </div>
                </div>
              </div>
              {/* /////// */}
              <div style={{ padding: "10px" }}>
                <div
                  className="ProjectCoverNeue-visibleStatsAndOwners-2Av"
                  onClick={() => handleShow()}
                >
                  <span className="ProjectCoverNeue-ownersContainer-3Go">
                    <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                      <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                        <span className="new-h-product-name">
                          {product.productName}
                        </span>
                      </span>
                    </div>
                  </span>
                  <Button
                    title="View Details"
                    backgroundColor="#027ad6;"
                    radius="5px"
                    border="1px solid #d4d4d4"
                    color="#000"
                    padding="5px"
                    width="85px"
                    height="25px"
                    fontSize="11px"
                    onClick={() => handleShow()}
                  ></Button>
                </div>
                <span
                  className="ProjectCoverNeue-ownersContainer-3Go"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "8px",
                  }}
                >
                  <div
                    style={{
                      paddingLeft: "7px",
                      display: "flex",
                      padding: "5px",
                      fontSize: "15px",
                      alignItems: "center",
                    }}
                    onClick={() => handleShow()}
                  >
                    Price
                    <span className="price-new-price">
                      <BiRupee />
                      {product.productPrice}
                    </span>
                  </div>
                  {storeId && product.storeId._id !== storeId ? (
                    <Button
                      title="Add to cart"
                      backgroundColor
                      radius="5px"
                      border
                      color
                      padding="5px"
                      width="85px"
                      height="25px"
                      fontSize="11px"
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
                    ></Button>
                  ) : null}
                </span>
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

export default StoreProduct;
