import axiosIntance from "../helpers/axios";
import { productContants } from "./constants";
import { userStoreDataAction } from "./initialData.action";

export const createProductAction = (form) => (dispatch) => {
  axiosIntance
    .post("/create/product", form)
    .then((res) => {
      const { product } = res.data;
      console.log(product);
      dispatch({
        type: productContants.ADD_NEW_PRODUCT_SUCCESS,
        payload: { product },
      });
      dispatch(userStoreDataAction());
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: productContants.ADD_NEW_PRODUCT_FAILURE,
        payload: { error: "Something went worng" },
      });
    });
};



export const editProductAction = (form) => (dispatch) => {
  axiosIntance
    .post("/edit/product", {...form})
    .then((res) => {
      const { updatedProductInfo } = res.data;
      console.log(updatedProductInfo);
      // dispatch({
      //   type: productContants.ADD_NEW_PRODUCT_SUCCESS,
      //   payload: { product },
      // });
      dispatch(userStoreDataAction());
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: productContants.ADD_NEW_PRODUCT_FAILURE,
        payload: { error: "Something went worng" },
      });
    });
};
