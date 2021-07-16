import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductModal from "../ProductModal";
import Whislisticon from "../../img/like.png";

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
              <div className="Cover-cover-2mr ProjectCoverNeue-cover-3Ni e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-coverWithFlags-1Aq ProjectCoverNeue-statsVisible-19j ProjectCoverNeue-loaded-26R">
                <div className="Cover-wrapper-300 ProjectCoverNeue-wrapper-27j e2e-ProjectCoverNeue-wrapper">
                  <div className="Cover-content-2R2">
                    <img
                      onClick={() => handleShow()}
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
                <div className="ProjectCoverNeue-visibleStatsAndOwners-2Av">
                  <span className="ProjectCoverNeue-ownersContainer-3Go">
                    <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                      <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                        <div
                          className="Owners-owner-2lB e2e-Owner-user-link"
                          style={{ display: "flex" }}
                        >
                          {product.productName}
                        </div>
                      </span>
                    </div>
                  </span>
                </div>
                <span className="ProjectCoverNeue-ownersContainer-3Go">
                  <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                    <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                      <Link
                        to={`/${product.storeId._id}/store`}
                        className="osdksodmdu"
                      >
                        {product.storeId.storeName}
                      </Link>
                    </span>
                  </div>
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

export default Product;
