import axiosIntance from "../helpers/axios";
import { storeContants, userInitialdata } from "./constants";

// export const addStoreAction = (store) =>{
 
//     return async (dispatch) => {
  
//           dispatch({ type: storeContants.ADD_NEW_STORE_REQUEST})
//           const res = await axiosIntance.post(`/store/create`, {
//               ...store
//           });
//           if(res.status === 201){
  
//               const {store,data} =  res.data;
//               dispatch({
//                       type: storeContants.ADD_NEW_STORE_SUCCESS,
//                        payload: { stores:store,data }
//                      });
//           }else{
//               const {error} =  res.data;
//               dispatch({
//                   type: storeContants.ADD_NEW_STORE_FAILURE,
//                   payload: { error }
//           });
//           }
          
//         }
  
//       }
  

      export const addStoreAction = store => dispatch => {
        axiosIntance
          .post("/store/create", {...store})
          .then(res => {
            const {Store,user} =  res.data;
            dispatch({
                    type: storeContants.ADD_NEW_STORE_SUCCESS,
                     payload: { stores:Store }
                   });
           dispatch({
             type:userInitialdata.GET_USER_DETAILS_SUCCESS,
             payload:{user}
           }) 
          }).catch(error =>{    
            dispatch({
              type: storeContants.ADD_NEW_STORE_FAILURE,
              payload: {error:"Something went worng"}
             });
          }
      
          );
      };
      