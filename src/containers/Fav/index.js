import React, { useState } from "react";
import "./style.css";
import Profilepic from "../../img/profilepic.jpg";
import NavBar from "../../components/Navbar";
import { Link } from "react-router-dom";
import ProductModal from "../../components/ProductModal";
import Store from "../../components/Store";
import Footer from "../../components/Footerr/Footer";
import { useSelector } from "react-redux";

/**
 * @author
 * @function Favorite
 **/

const Favorite = (props) => {
  const followingStoreLists = useSelector(
    (state) => state.user.followingStores
  );
  const followingStoreProductLists = useSelector(
    (state) => state.user.followingProducts
  );

  const auth = useSelector((state) => state.auth.authenticate);
  const [show, setShow] = useState(false);
  const [productDetails, setProductDetails] = useState("");

  const handleShow = (product) => {
    setProductDetails(product);
    setShow(true);
  };

  const renderStores = () => {
    return (
      <div style={{ padding: "30px", paddingTop: "30px" }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
          <Store />
          <Store />
          <Store />
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      {/* ProfileHEader  starts*/}
      {/* <div className="follow-store-profile" style={{ paddingTop: "55px" }}>
        <div className="inside-div-of-pro">
          <div className="lkjh-bdbdh">
            <div className="olkbgh-pldhdy">
              {auth && followingStoreLists.length > 0
                ? followingStoreLists.map((store, index) => (
                    <Link
                      className="jokmhg"
                      key={index}
                      to={`/${store._id}/store`}
                    >
                      <section className="cfvdstyb">
                      {
                        store.storeProfilePicture && store.storeProfilePicture.img ?
                        <img
                          alt={store.storeName}
                          className="lhdatvoy"
                          src={store.storeProfilePicture.img}
                        />
                        :
                        <img
                          alt="Profile Pic"
                          className="lhdatvoy"
                          src={Profilepic}
                        />
                      }
                        
                      </section>
                      <div>
                        <h1 className="shopnameinfav">{store.storeName}</h1>
                      </div>
                    </Link>
                  ))
                : "Follow Suggestions"}
            </div>
          </div>
        </div>
      </div> */}
      <div style={{ paddingTop: "70px" }}>
        <div className="store-following-container-one">
          <div className="store-following-container-two">
          {auth && followingStoreLists.length > 0
                ? followingStoreLists.map((store, index) => (
            <div className="following-container-css">
              <div className="following-img-css">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg"
                  srcset="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg,  2x"
                  alt="Avatar profile image"
                  className="following-store-profile"
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <h4>Sohail Shop</h4>
              </div>
            </div>
            ))
                : "Follow Suggestions"}
          </div>
        </div>
      </div>
      {/* ProfileHEader  ends*/}

      {/* ////// Following Products Starts ////// */}

      <div style={{ padding: "30px" }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
          {auth && followingStoreProductLists.length > 0
            ? followingStoreProductLists.map((product, index) => (
                <div
                  style={{ border: "1px solid #d4d4d4", borderRadius: "6px" }}
                >
                  <div>
                    <div className="Galleries-gridCover-j9D">
                      <div className="ProjectCoverNeue-root-166 ProjectCoverNeue-statsVisible-19j ProjectCover-cover-3zh">
                        <div className="Cover-cover-2mr ProjectCoverNeue-cover-3Ni e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-coverWithFlags-1Aq ProjectCoverNeue-statsVisible-19j ProjectCoverNeue-loaded-26R">
                          <div className="Cover-wrapper-300 ProjectCoverNeue-wrapper-27j e2e-ProjectCoverNeue-wrapper">
                            <div className="Cover-content-2R2">
                              <div className="DominantColor-dominantColor-2PM"></div>
                              {}
                              <img
                                sizes="404px"
                                style={{ padding: "10px" }}
                                src={"https://images-eu.ssl-images-amazon.com/images/I/41fBz4s1nzS._AC_SX184_.jpg"}
                                alt="''"
                                loading="lazy"
                                class="ProjectCoverNeue-image-1MZ js-cover-image"
                              ></img>
                              <div className="ProjectCoverNeue-controlsAndPrivacyContainer-20r"></div>
                            </div>
                          </div>
                        </div>
                        {/* /////// */}
                        <div style={{ padding: "10px" }}>
                          <div className="Cover-overlay-28e Cover-showOnHover-Ks- Cover-transitionDone-22y">
                            <div className="ProjectCoverNeue-details-yQ_">
                              <div className="ProjectCoverNeue-info-4Ul">
                                <a className="Title-title-3nk e2e-Title-owner js-project-cover-title-link">
                                  dd
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="ProjectCoverNeue-visibleStatsAndOwners-2Av">
                            <span className="ProjectCoverNeue-ownersContainer-3Go">
                              <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                                <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                                  <a className="Owners-owner-2lB e2e-Owner-user-link">
                                    {product.productName}
                                  </a>
                                </span>
                              </div>
                            </span>
                            <div className="Stats-stats-1iI">
                              <div className="Product__priceFlex">
                                <button
                                  className="abcjnalnajcsn"
                                  style={{ marginTop: "0px" }}
                                  onClick={() => handleShow(product)}
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                          <span className="ProjectCoverNeue-ownersContainer-3Go">
                            <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                              <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                                <a className="Owners-owner-2lB e2e-Owner-user-link">
                                  By -{product.storeId.storeName}
                                </a>
                              </span>
                            </div>
                          </span>
                        </div>
                        {/* ///////// */}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "Follow Suggestions"}
        </div>
      </div>
      {/* ////// Following Products ends ////// */}

      <ProductModal
        show={show}
        handleclose={() => setShow(false)}
        productDetails={productDetails}
      />
      <Footer />
    </>
  );
};

export default Favorite;
