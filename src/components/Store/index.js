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
          zIndex="10"
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
          zIndex="10"
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
          zIndex="10"
        />
      );
    }
  };

  return (
    <>
      <div className="new-store-profile-card-one">
        <Link to="" className="rf-avatar e2e-avatar js-avatar " style={{padding: '20px 0px 30px 10px'}}>
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg"
            srcset="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg,  2x"
            alt="Avatar profile image"
            className="rf-avatar__image js-avatar__image"
          />
        </Link>
        <div className="details-continer-store">
          <div>
            <div className="store-profile-card-three">
              <Link className="new-store-profile-storeName">
                Sohail Qureshi
              </Link>
            </div>
            <div className="new-store-profile-Location">
              <Link to="">Bangalore, India</Link>
            </div>
            <div className="new-store-profile-Category">
              <span>Electronics</span>
            </div>
          </div>
          <div className="new-store-profile-card-followes-number">
            <h4 style={{ paddingRight: "5px" }}>1,000</h4>
            Followers
          </div>
          <div className="new-store-profile-card-follow-followes">
            <Button
              title="Following"
              backgroundColor
              radius="5px"
              border
              border-radius="3px"
              color="#000"
              padding="2px 5px"
              width="100%"
              height="32px"
              // onClick={() => {
              //   UnFollowStore(storeId);
              // }}
              fontSize="15px"
              marginTop="10px"
              zIndex="10"
            />
          </div>
        </div>
        <div className="product-container-store">
          <div className="product-new-container-of-store">
            <img
              src="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg"
              srcset="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg,  2x"
              alt="Avatar profile image"
              className="new-products-of-shops"
            />
          </div>
          <div className="product-new-container-of-store">
            <img
              src="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg"
              srcset="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg,  2x"
              alt="Avatar profile image"
              className="new-products-of-shops"
            />
          </div>
          <div className="product-new-container-of-store">
            <img
              src="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg"
              srcset="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg,  2x"
              alt="Avatar profile image"
              className="new-products-of-shops"
            />
          </div>
          <div className="product-new-container-of-store">
            <img
              src="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg"
              srcset="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg,  2x"
              alt="Avatar profile image"
              className="new-products-of-shops"
            />
          </div>
          <div className="product-new-container-of-store">
            <img
              src="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg"
              srcset="https://mir-s3-cdn-cf.behance.net/user/115/116178.53ab83f268ef3.jpg,  2x"
              alt="Avatar profile image"
              className="new-products-of-shops"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
