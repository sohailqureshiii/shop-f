import axiosIntance from "../helpers/axios";
import {
  categoryContants,
  locationContants,
  productContants,
  storeContants,
  userInitialdata,
  userStoreData,
} from "./constants";

export const getUserDataAction = () => {
  return async (dispatch) => {
    const res = await axiosIntance.get(`/userData`);
    if (res.status === 200) {
      const { categories, locations,products,stores} = res.data;
      dispatch({
        type: categoryContants.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories },
      });
      dispatch({
        type: locationContants.GET_ALL_LOCATION_SUCCESS,
        payload: { locations },
      });
      dispatch({
        type: productContants.GET_ALL_PRODUCTS_SUCCESS,
        payload:{products}
      })
      dispatch({
        type: storeContants.GET_ALL_STORE_SUCCESS,
        payload:{stores}
      })
    } else {
      dispatch({
        type: categoryContants.GET_ALL_CATEGORIES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const userInitialdataAction = () => {
  return async (dispatch) => {
    const res = await axiosIntance.get(`/userInitialdata`);
    if (res.status === 200) {
      const { user,store } = res.data;
      dispatch({
        type: userInitialdata.GET_USER_DETAILS_SUCCESS,
        payload: { user: user }
      });
    } else {
      console.log("Error");
    }
  };
};


export const userStoreDataAction = () =>{
  return async (dispatch) => {
    const res = await axiosIntance.get(`/userStoreData`);
    if (res.status === 200) {
      const {store,product } = res.data;
      dispatch({
        type: userStoreData.GET_USER_STORE_DETAILS_SUCCESS,
        payload: { store,product }
      });
    } else {
      console.log("Error");
    }
  };
}