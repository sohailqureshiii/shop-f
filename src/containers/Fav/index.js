import React from "react";
import "./style.css";
import Profilepiclogo from "../../img/icons8-male-user-50.png";
import NavBar from "../../components/Navbar";
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



  return (
    <>
      <NavBar />
      <div className="store-list-main-container">
        <div className="filter-for-store">
          <div className="filter-bar-filter-explore-header">
            <h1 className="filter-bar-filter-explore-h2-tag">Filters</h1>
          </div>
          <div style={{ marginTop: "10px" }}>
            <div className="new-compo-conatiner-div">
              {" "}
              <div className="filter-bar-filter-new">
                <h1 className="filter-bar-filter-header-h1-tag">
                  Search For Products
                </h1>
              </div>
              <div className="compo-for-filter">
                <div
                  tabIndex="0"
                  className="bsjnansnaksn SearchTypeahead-isTypeaheadEnabled-3i3"
                >
                  <div className="SearchTypeahead-searchInputWrap-3Hg">
                    <div className="SearchTypeahead-searchIcon-1ld">
                      <svg viewBox="0 0 12 12" class="SearchTypeahead-icon-20K">
                        <path d="M11.407,10.421,8.818,7.832a4.276,4.276,0,1,0-.985.985l2.589,2.589a.7.7,0,0,0,.985-.985ZM2.355,5.352a3,3,0,1,1,3,3,3,3,0,0,1-3-3Z"></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      name="search"
                      autocomplete="off"
                      placeholder="Search…"
                      aria-label="Search "
                      className="SearchTypeahead-searchInput-1qk e2e-SearchInput-input"
                      style={{ outline: "none" }}
                      // ref={inputSearch}
                      // value={props.term}
                      // onChange={getSearchTerm}
                      // ref={inputSearch}
                      // value={props.term}
                    />
                  </div>
                  <button
                    tabIndex="-1"
                    className="Btn-button-BGn Btn-ghost-2Wn Btn-small-2_o SearchTypeahead-mobileCloseButton-OkE"
                  >
                    <div className="Btn-labelWrapper-1jSE">
                      <div className="Btn-label-1Zf e2e-Btn-label">Cancel</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="new-compo-conatiner-div">
              {/* <div className="filter-bar-filter-new">
                <h1 className="filter-bar-filter-header-h1-tag">Show Only</h1>
              </div> */}
              <h1 className="show-only-tag">Show Only</h1>
              <div
                style={{
                  marginTop: "5px",
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "1.5",
                }}
              >
                <input type="radio" style={{ cursor: "pointer" }}></input>
                <h1 className="cbildcbdc">On Sale</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "1.5",
                }}
              >
                <input type="radio" style={{ cursor: "pointer" }}></input>
                <h1 className="cbildcbdc">On Disscount</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "1.5",
                }}
              >
                <input type="radio" style={{ cursor: "pointer" }}></input>
                <h1 className="cbildcbdc">Verified</h1>
              </div>
            </div>
            <div className="new-compo-conatiner-div">
              {/* <div className="filter-bar-filter-new">
                <h1 className="filter-bar-filter-header-h1-tag">Show Only</h1>
              </div> */}
              <h1 className="show-only-tag">Price range</h1>
              <div
                style={{
                  marginTop: "5px",
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "1.5",
                }}
              >
                <input type="radio" style={{ cursor: "pointer" }}></input>
                <h1 className="cbildcbdc">up to ₹ 1000</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "1.5",
                }}
              >
                <input type="radio" style={{ cursor: "pointer" }}></input>
                <h1 className="cbildcbdc">up to ₹ 5000</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "1.5",
                }}
              >
                <input type="radio" style={{ cursor: "pointer" }}></input>
                <h1 className="cbildcbdc">up to ₹ 10000</h1>
              </div>
            </div>
            <div className="new-compo-conatiner-div">
              <div className="filter-bar-filter-new">
                <h1 className="filter-bar-filter-header-h1-tag">Store List</h1>
              </div>
              <div className="compo-for-filter-for-store-list">
                <div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>

                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                    <div
                      style={{
                        width: "100%",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={Profilepiclogo}
                        style={{
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                      ></img>
                      <h1 style={{ marginLeft: "5px" }}>Store Name</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="new-store-page-container-one">
          <div className="new-store-page-container-two">
            <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
              {auth && followingStoreProductLists.length > 0
                ? followingStoreProductLists.map((product, index) => (
                    <div
                      style={{
                        border: "1px solid #d4d4d4",
                        borderRadius: "6px",
                      }}
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
                                    src={
                                      "https://images-eu.ssl-images-amazon.com/images/I/41fBz4s1nzS._AC_SX184_.jpg"
                                    }
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
                                      // onClick={() => handleShow(product)}
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
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Favorite;

