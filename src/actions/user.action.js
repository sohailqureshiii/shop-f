import axiosIntance from "../helpers/axios";
import { followContants } from "./constants";
import { userData } from "./user.action";

export const followStoreAction = (from) =>{

    return async(dispatch)=>{
      const res = await axiosIntance.put(`/follow`,{...from});
  
    if(res.status===201){
         const {following} = res.data;
        dispatch({
          type:followContants.ADD_NEW_FOLLOWING_SUCCESS,
          payload:{following:following}
        })
        // dispatch(userData());
    }
    }
   
  
  }
  
  export const unfollowStoreAction = (from) =>{
    return async(dispatch)=>{
      const res = await axiosIntance.put(`/unfollow`,{...from});
      if(res.status===201){
        // dispatch(userData());
   }
  
    }
   
  
  }
  