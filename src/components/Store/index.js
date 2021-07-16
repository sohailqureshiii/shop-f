import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  followStoreAction,
  unfollowStoreAction,
} from "../../actions/user.action";
import { Button } from "../MaterialUI";

const Store = (props) => {
  const { store, index } = props;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  let history = useHistory();

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
          title="Follow Store"
          backgroundColor
          radius="5px"
          border
          border-radius="3px"
          color="#000"
          padding="2px 5px"
          width="%"
          height="32px"
          onClick={() => {
            history.push({
              pathname: "/Signin",
              state: { storeId: storeId, Follow: true },
            });
          }}
          fontSize="15px"
          marginTop="10px"
          zIndex='10'
        />
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
          width="30%"
          height="32px"
          onClick={() => {
            followStore(storeId);
          }}
          fontSize="14px"
          marginTop="10px"
          zIndex='10'
        />
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
          zIndex='10'
        />
      );
    }
  };

  return (
    <>
      <div className="border-for-store" key={store._id && index}>
        <div className="Galleries-gridCover-j9D">
          <div className="ProjectCoverNeue-root-166 ProjectCoverNeue-statsVisible-19j ProjectCover-cover-3zh">
            <Link to={`/${store._id}/store`}>
              <div
                style={{ zIndex: "1" }}
                className="Cover-cover-2mr ProjectCoverNeue-cover-3Ni e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-coverWithFlags-1Aq ProjectCoverNeue-statsVisible-19j ProjectCoverNeue-loaded-26R"
              >
                <div className="Cover-wrapper-300 ProjectCoverNeue-wrapper-27j e2e-ProjectCoverNeue-wrapper">
                  <div className="Cover-content-2R2">
                    <div className="DominantColor-dominantColor-2PM"></div>
                    <img
                      sizes="404px"
                      style={{ padding: "10px" }}
                      src={
                        "https://rtlimages.apple.com/cmc/dieter/store/16_9/R325.png?resize=1440:806&output-format=jpg&output-quality=85&interpolation=progressive-bicubic"
                      }
                      alt="Children's Day - ''SEE ME&quot;"
                      loading="lazy"
                      class="ProjectCoverNeue-image-1MZ js-cover-image"
                    ></img>
                    <div className="ProjectCoverNeue-controlsAndPrivacyContainer-20r"></div>
                  </div>
                </div>
              </div>
            </Link>
            {/* /////// */}

            <div style={{ padding: "10px" }}>
              <div className="Cover-overlay-28e Cover-showOnHover-Ks- Cover-transitionDone-22y"></div>
              <div className="ProjectCoverNeue-visibleStatsAndOwners-2Av">
                <Link   to ={`/${store._id}/store`} className="ProjectCoverNeue-ownersContainer-3Go">
                  <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                    <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                      <span
                        className="Owners-owner-2lB e2e-Owner-user-link"
                        style={{ color: "black" }}
                      >
                        {store.storeName}
                      </span>
                    </span>
                  </div>
                </Link>

                {renderButton(store._id)}
              </div>
              <span className="ProjectCoverNeue-ownersContainer-3Go">
                <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                  <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                    <a className="Owners-owner-2lB e2e-Owner-user-link">
                      {/* By -{product.createdBy.shopName} */}
                    </a>
                  </span>
                </div>
              </span>
            </div>
            {/* ///////// */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
