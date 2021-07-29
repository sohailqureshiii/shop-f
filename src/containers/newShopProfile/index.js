import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footerr/Footer";
import { useSelector, useDispatch } from "react-redux";
import {
  followStoreAction,
  unfollowStoreAction,
} from "../../actions/user.action";
import StoreProduct from "../../components/StoreProduct";
import { Button } from "../../components/MaterialUI";

const StoreProfile = (props) => {
  const storeId = props.match.params.storeId;
  const store = useSelector((state) => state.stores.stores);
  const product = useSelector((state) => state.products.products);
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

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
          title=" Follow Store"
          backgroundColor
          radius="5px"
          border
          border-radius="3px"
          color="#000"
          padding="5px 10px"
          width="100%"
          height="50px"
          onClick={() => {
            history.push({
              pathname: "/Signin",
              state: { storeId: storeId, Follow: true },
            });
          }}
          font="18px"
        ></Button>
      );
    }
    if (auth.authenticate && !user.following.includes(storeId)) {
      return (
        <Button
          title=" Follow Store"
          backgroundColor
          radius="5px"
          border
          border-radius="3px"
          color="#000"
          padding="5px 10px"
          width="100%"
          height="50px"
          onClick={() => {
            followStore(storeId);
          }}
          font="18px"
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
          padding="5px 10px"
          width="100%"
          height="50px"
          onClick={() => {
            UnFollowStore(storeId);
          }}
          font="18px"
        ></Button>
      );
    }
  };

  const renderProduct = () => {
    return (
      <div>
        <div className="lkmnjoirkee Galleries-grid-1Bv Galleries-header-14v">
          {product
            .filter((product) => {
              if (product.storeId._id === storeId) return product;
              else if (product.storeId._id !== storeId) return null;
              else return null;
            })
            .map((product) => (
              <StoreProduct product={product} />
            ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      {store
        .filter((store) => {
          if (store._id === storeId) {
            return store;
          } else {
            return null;
          }
        })
        .map((store, index) => (
          <div id="top-panel" className="slide-panel js-top-panel">
            <div
              tabIndex="0"
              id="site-content"
              className="js-site-content site-content e2e-site-conten"
            >
              <div data-ssr-fetched="true" className="esdfrgh">
                <main className="Profile-root-3Ir Profile-bannerEmpty-3ep e2e-Profile-page-container">
                  <div className="ProfileBanner-root-UPy ProfileBanner-hasBanner-1fU Profile-banner-2HT">
                    {store.storeBackgroundPicture &&
                    store.storeBackgroundPicture.img ? (
                      <img
                        // src={store.storeBackgroundPicture.img}
                        alt="$translate('profile_banner_image_alt', 'User's profile banner')"
                        className="ProfileBanner-bannerImage-1_4 ProfileBanner-bannerImageLoaded-2N5"
                      />
                    ) : (
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/4ed4b944616f6f1b93f621ee1e0c69e8/dbcbb282-b7cb-423f-95b8-a92208da4972_rwc_0x14x3200x349x3200.png?h=8299a70b560a9d72b29b129326e049cc"
                        alt="$translate('profile_banner_image_alt', 'User's profile banner')"
                        className="ProfileBanner-bannerImage-1_4 ProfileBanner-bannerImageLoaded-2N5"
                      />
                    )}

                    <div className="ProfileBanner-uploadArea-2g2">
                      <div
                        className="ProfileBanner-uploader-ojO"
                        style={{ display: "none" }}
                      >
                        <div className="ProfileBanner-replaceBanner-3WU">
                          <h4 className="ProfileBanner-promptHeading-2KG">
                            Replace Banner Image
                          </h4>
                          <p className="ProfileBanner-assetSuggestion-3NS">
                            Optimal dimensions 3200 x 410px
                          </p>
                          <div className="ProfileBanner-actionButtons-12p">
                            <button
                              type="button"
                              target="_self"
                              className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 ProfileBanner-actionButton-2cU"
                            >
                              <div className="Btn-labelWrapper-1jS">
                                <div className="Btn-label-1Zf e2e-Btn-label">
                                  Replace Image
                                </div>
                              </div>
                            </button>
                            <button
                              type="button"
                              target="_self"
                              className="Btn-button-BGn Btn-transparent-1nm Btn-normal-hI4 ProfileBanner-actionButton-2cU"
                            >
                              <div className="Btn-labelWrapper-1jS">
                                <div className="Btn-label-1Zf e2e-Btn-label">
                                  Remove
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="ProfileBanner-cropper-FH0">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="Profile-wrap-3mj">
                    <div className="ProfileCard-root-3R2 Profile-profileCard-Ljj">
                      <div className="ProfileCard-header-2wU">
                        <div className="Avatar-container-3hA ProfileCard-avatar-oai">
                          <div
                            className="Tooltip-wrapper-1-L Tooltip-responsive-62L Avatar-tooltipOverride-9FU"
                            style={{ cursor: "auto" }}
                          >
                            <span>
                              <div
                                tabIndex="0"
                                style={{ height: "122px", width: "122px" }}
                              >
                                <div>
                                  <div
                                    className="Avatar-avatar-1-h"
                                    style={{ height: "110px", width: "110px" }}
                                  >
                                    {store.storeProfilePicture &&
                                    store.storeProfilePicture.img ? (
                                      <img
                                        // src={store.storeProfilePicture.img}
                                        alt="User's avatar"
                                        sizes="115px"
                                        className="AvatarImage-avatarImage-3uu Avatar-root--Wh"
                                      ></img>
                                    ) : (
                                      <img
                                        src="https://mir-s3-cdn-cf.behance.net/user/115/37f6c150416365.605f800371d72.png"
                                        alt="User's avatar"
                                        sizes="115px"
                                        className="AvatarImage-avatarImage-3uu Avatar-root--Wh"
                                      ></img>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                        <h1 className="ProfileCard-userFullName-3jr">
                          {store.storeName}
                        </h1>
                        <div className="ProfileCard-userDetails-3KG">
                          <p className="ProfileCard-line-3KX e2e-Profile-company">
                            {store.storeCategory.name}
                          </p>
                          <p className="ProfileCard-line-3KX e2e-Profile-company"></p>
                          {/* !----- */}
                          <p className="ProfileCard-line-3KX ProfileCard-anchor-3cx ProfileCard-lineText-3DC">
                            <a className="ProfileCard-anchor-3cx">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-4808 -20688 14.286 20"
                                class="ProfileCard-locationIcon-3Po"
                              >
                                <g>
                                  <path d="M-4800.857-20688a7.143 7.143 0 0 0-7.143 7.143c0 5.714 7.143 12.857 7.143 12.857s7.143-7.143 7.143-12.857a7.142 7.142 0 0 0-7.143-7.143zm0 10a2.857 2.857 0 1 1 2.857-2.859 2.858 2.858 0 0 1-2.857 2.859z"></path>
                                </g>
                              </svg>
                              <span className="e2e-Profile-location">
                                {store.storeLocation.name}
                              </span>
                            </a>
                          </p>
                        </div>
                        <div className="ProfileCard-userInteractions-1W1 ProfileCard-buttons-ZNH ProfileCard-userFollowActions-3eh ProfileCard-mediumLargeBtn-fW8 ProfileCard-noDesktopNotification-2ya">
                          {/* !----- */}
                          <div className="FollowButton-root-VgV ProfileCard-interactionButton-1gk ProfileCard-followButton-1N4 ProfileCard-follow-39e">
                            {renderButton(store._id)}
                          </div>
                        </div>
                        {/* !------ */}
                        {/* !------ */}
                      </div>
                      {/* !---- */}
                      <div className="UserInfo-root-2QU e2e-UserInfo-user-info ProfileCard-userInfoSidebar-fsw">
                        {/* !----- */}
                        <div className="UserInfo-infoBlockRow-1xR">
                          <div className="UserInfo-column-TMV">
                            <table className="UserInfo-userStats-cMw">
                              <tbody>
                                <tr className="UserInfo-statRow-Erw">
                                  <p className="UserInfo-bioHeader-fYW">
                                    Products
                                  </p>
                                  <td className="hddnddkdk">
                                    <a>
                                      {" "}
                                      {
                                        product.filter(
                                          (products) =>
                                            products.storeId._id === storeId
                                        ).length
                                      }
                                    </a>
                                  </td>
                                </tr>
                                <tr className="UserInfo-statRow-Erw">
                                  <p className="UserInfo-bioHeader-fYW">
                                    followers
                                  </p>
                                  <td className="hddnddkdk">
                                    <a>{store.followers.length}</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div
                              className="UserInfo-infoBlockRow-1xR"
                              style={{ paddingTop: "10px", padding: "3px" }}
                            >
                              <div className="UserInfo-column-TMV">
                                <p className="UserInfo-bioHeader-fYW">
                                  About Us
                                </p>
                                <div className="UserInfo-bio-YNh">
                                  <div>
                                    <div className="ReadMore-inline-3yb">
                                      {store.storeDescription}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span style={{ fontWeight: "bold" }}>
                              Report Store
                            </span>
                          </div>
                          <span style={{ fontSize: "14px" }}>Since 1990</span>
                        </div>
                      </div>
                    </div>
                    <div className="Profile-profileContents-3cP">
                      <div>
                        <div className="Profile-tabControl-wVx .Profile-tab-3cJ.Profile-active-cBh.Profile-hireMeCTA-2c2 ">
                          <span
                            style={{
                              borderRadius: "5px",
                              backgroundColor: "#cecece",
                              fontsize: "px",
                              lineHeight: 2,
                              marginRight: "1000px",
                              color: "black",
                              height: "100%",
                              fontsize: "18px",
                              padding: "10px",
                            }}
                          >
                            Products
                          </span>
                        </div>
                      </div>
                      <div className="Profile-tabs-DeN Profile-transitionBackwards-1fh">
                        {renderProduct()}
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        ))}

      <Footer></Footer>
    </>
  );
};

export default StoreProfile;
