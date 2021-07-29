import React, { useState } from "react";
import "./style.css";
import Profilepiclogo from "../../img/icons8-male-user-50.png";
import NavBar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Store from "../../components/Store";
import Footer from "../../components/Footerr/Footer";
import { useSelector } from "react-redux";
import Product from "../../components/Product";

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
                    <Product product={product} />
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

