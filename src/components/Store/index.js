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
  const product = useSelector((state) => state.products.products);

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
          onClick={() => {
            history.push({
              pathname: "/Signin",
              state: { storeId: storeId, Follow: true },
            });
          }}
          backgroundColor
          radius="5px"
          border
          border-radius="3px"
          color="#000"
          padding="2px 5px"
          width="50%"
          height="32px"
          fontSize="15px"
          marginTop="10px"
          marginRight="10px"
          zIndex="10"
        />
      );
    }
    if (auth.authenticate && !user.following.includes(storeId)) {
      return (
        <Button
          title="Follow Store"
          onClick={() => {
            followStore(storeId);
          }}
          backgroundColor
          radius="5px"
          border="1px solid #d9d9d9"
          border-radius="3px"
          color="#000"
          padding="2px 5px"
          width="50%"
          height="32px"
          fontSize="15px"
          marginTop="10px"
          zIndex="10"
          marginRight="10px"
        />
      );
    }

    if (auth.authenticate && user.following.includes(storeId)) {
      return (
        <Button
          title="Following"
          onClick={() => {
            UnFollowStore(storeId);
          }}
          backgroundColor
          radius="5px"
          border-radius="3px"
          color="#000"
          padding="2px 5px"
          width="50%"
          height="32px"
          fontSize="15px"
          marginTop="10px"
          zIndex="10"
          border="1px solid"
          marginRight="10px"
        />
      );
    }
  };

  const renderStoreProduct = (storeId) => {
    const productList = product.filter((product) => {
      if (product.storeId._id === store._id) return product;
    });

    if (productList.length > 0) {
      return productList.slice(0, 5).map((product, index) => (
        <div className="product-new-container-of-store">
          <img
            src={
              product.productPictures[0].img
            }
            alt={product.productName}
            className="new-products-of-shops-img-of-pro"
          />
        </div>
      ));
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="new-store-profile-card-one">
        <Link
          to=""
          className="rf-avatar e2e-avatar js-avatar "
          style={{ padding: "20px 0px 30px 10px" }}
        >
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg"
            alt={store.storeName}
            className="rf-avatar__image js-avatar__image"
          />
        </Link>
        <div className="details-continer-store">
          <div>
            <div className="store-profile-card-three">
              <Link className="new-store-profile-storeName">
                <p> {store.storeName}</p>
              </Link>
            </div>
            <div className="new-store-profile-Location">
              <Link to="">{store.storeLocation.name}</Link>
            </div>
            <div className="new-store-profile-Category">
              {/* <span>{store.storeCategory.name}</span> */}
            </div>
          </div>
          <div className="new-store-profile-card-followes-number">
            <h4 style={{ paddingRight: "5px" }}>{store.followers.length}</h4>
            Followers
          </div>
          <div className="new-store-profile-card-follow-followes">
            {renderButton(store._id)}
            <Link className="visit-store-btn" to={`/${store._id}/store}`}>
              <Button
                title="Visit Store"
                backgroundColor
                radius="5px"
                border-radius="3px"
                color="#000"
                padding="2px 5px"
                width="100%"
                height="32px"
                fontSize="12px"
                marginTop="10px"
                zIndex="10"
                border="1px solid"
              />
            </Link>
          </div>
        </div>
        <div className="product-container-store">
          {renderStoreProduct(store._id)}
        </div>
      </div>
    </>
  );
};

export default Store;
