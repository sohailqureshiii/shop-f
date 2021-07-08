import axiosIntance from "../helpers/axios";
import { productContants } from "./constants";



      export const createProductAction = form => dispatch => {
        axiosIntance
          .post("/create/product",form)
          .then(res => {
            const {product} =  res.data;
            console.log(product);
            dispatch({
                    type: productContants.ADD_NEW_PRODUCT_SUCCESS,
                     payload: {product }
                   });
          }).catch(error =>{    
            console.log(error);
            dispatch({
              type: productContants.ADD_NEW_PRODUCT_FAILURE,
              payload: {error:"Something went worng"}
             });
          }
      
          );
      };

