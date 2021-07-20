import axiosIntance from "../helpers/axios";
import { cartConstants, followContants, userContants } from "./constants";
import { userData } from "./user.action";
import store from "../store";
import { userInitialdataAction } from "./initialData.action";

export const followStoreAction = (from) => {
  return async (dispatch) => {
    const res = await axiosIntance.put(`/follow`, { ...from });

    if (res.status === 201) {
      const { following } = res.data;
      dispatch({
        type: followContants.ADD_NEW_FOLLOWING_SUCCESS,
        payload: { following: following },
      });
      dispatch(userInitialdataAction());
    }
  };
};

export const unfollowStoreAction = (from) => {
  return async (dispatch) => {
    const res = await axiosIntance.put(`/unfollow`, { ...from });
    if (res.status === 201) {
      dispatch(userInitialdataAction());
    }
  };
};

const getCartItems = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const res = await axiosIntance.post(`/user/getCartItems`);
      if (res.status === 200) {
        const { cartItems } = res.data;
        console.log({ getCartItems: cartItems });
        if (cartItems) {
          dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (product, newQty = 1) => {
  return async (dispatch) => {
    const {
      user: { cartItems },
      auth,
    } = store.getState();
    //console.log('action::products', products);
    //const product = action.payload.product;
    //const products = state.products;
    const qty = cartItems[product._id]
      ? parseInt(cartItems[product._id].qty + newQty)
      : 1;
    cartItems[product._id] = {
      ...product,
      qty,
    };

    if (auth.authenticate) {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const payload = {
        // cartItems: Object.keys(cartItems).map((key, index) => {
        //     return {
        //         quantity: cartItems[key].qty,
        //         product: cartItems[key]._id
        //     }
        // })
        cartItems: [
          {
            product: product._id,
            quantity: qty,
            storeId: product.storeId,
          },
        ],
      };
      console.log(payload);
      const res = await axiosIntance.post(`/user/cart/addtocart`, payload);
      console.log(res);
      if (res.status === 201) {
        dispatch(getCartItems());
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(cartItems));
      dispatch({
        type: cartConstants.ADD_TO_CART_SUCCESS,
        payload: { cartItems },
      });
    }

    console.log("addToCart::", cartItems);

    dispatch({
      type: cartConstants.ADD_TO_CART_SUCCESS,
      payload: { cartItems },
    });
  };
};

export const removeCartItem = (payload) => {
  return async (dispatch) => {
    try {

      const {
        auth
      } = store.getState();
      if(auth.authenticate){
        dispatch({ type: cartConstants.REMOVE_CART_ITEM_REQUEST });
        const res = await axiosIntance.post(`/user/cart/removeItem`, { payload });
        if (res.status === 202) {
          dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS });
          dispatch(getCartItems());
        } else {
          const { error } = res.data;
          dispatch({
            type: cartConstants.REMOVE_CART_ITEM_FAILURE,
            payload: { error },
          });
        }
      }else{
        dispatch({
           type: cartConstants.REMOVE_CART_ITEM_SUCCESS1,
           payload: {productId:payload.productId}
         });

      }
     
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCart = () => {
  return async (dispatch) => {
    const { auth } = store.getState();
    let cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;

    if (auth.authenticate) {
      localStorage.removeItem("cart");
      //dispatch(getCartItems());
      if (cartItems) {
        const payload = {
          cartItems: Object.keys(cartItems).map((key, index) => {
            return {
              quantity: cartItems[key].qty,
              product: cartItems[key]._id,
            };
          }),
        };
        if (Object.keys(cartItems).length > 0) {
          const res = await axiosIntance.post(`/user/cart/addtocart`, payload);
          if (res.status === 201) {
            dispatch(getCartItems());
          }
        }
      } else {
        dispatch(getCartItems());
      }
    } else {
      if (cartItems) {
        dispatch({
          type: cartConstants.ADD_TO_CART_SUCCESS,
          payload: { cartItems },
        });
      }
    }
  };
};

export { getCartItems };





export const getAddress = () => {
  return async (dispatch) => {
    try {
      const res = await axiosIntance.post(`/user/getaddress`);
      dispatch({ type: userContants.GET_USER_ADDRESS_REQUEST });
      if (res.status === 200) {
        const {
          userAddress: { address },
        } = res.data;
        dispatch({
          type: userContants.GET_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userContants.GET_USER_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addAddress = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axiosIntance.post(`/user/address/create`, { payload });
      dispatch({ type: userContants.ADD_USER_ADDRESS_REQUEST });
      if (res.status === 201) {
        // console.log(res);
        const {
          address: { address },
        } = res.data;
        dispatch({
          type: userContants.ADD_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userContants.ADD_USER_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };


};

export const deleteAddressAction = (addId) => {
  return async (dispatch) => {
    try {
      const res = await axiosIntance.post(`/user/deleteaddress`,  {...addId} );
      // dispatch({ type: userContants.ADD_USER_ADDRESS_REQUEST });
      if (res.status === 201) {
      dispatch(getAddress())
      } else {
        const { error } = res.data;
        // dispatch({
        //   type: userContants.ADD_USER_ADDRESS_FAILURE,
        //   payload: { error },
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const addOrder = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axiosIntance.post(`/addOrder`, payload);
      dispatch({ type: userContants.ADD_USER_ORDER_REQUEST });
      if (res.status === 201) {
        console.log(res);
        const { order } = res.data;
        dispatch({
          type: cartConstants.RESET_CART,
        });
        dispatch({
          type: userContants.ADD_USER_ORDER_SUCCESS,
          payload: { order },
        });
        dispatch(getOrders())
        // const {
        //   address: { address },
        // } = res.data;
        // dispatch({
        //   type: userConstants.ADD_USER_ADDRESS_SUCCESS,
        //   payload: { address },
        // });
      } else {
        const { error } = res.data;
        dispatch({
          type: userContants.ADD_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await axiosIntance.get(`/getOrders`);
      dispatch({ type: userContants.GET_USER_ORDER_REQUEST });
      if (res.status === 200) {
        console.log(res);
        const { orders } = res.data;
        dispatch({
          type: userContants.GET_USER_ORDER_SUCCESS,
          payload: { orders },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userContants.GET_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// single order with complete info and delivery location
export const getOrder = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axiosIntance.post(`/getOrder`, payload);
      dispatch({ type: userContants.GET_USER_ORDER_DETAILS_REQUEST });
      if (res.status === 200) {
        console.log(res);
        const { order } = res.data;
        dispatch({
          type: userContants.GET_USER_ORDER_DETAILS_SUCCESS,
          payload: { order },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userContants.GET_USER_ORDER_DETAILS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};


