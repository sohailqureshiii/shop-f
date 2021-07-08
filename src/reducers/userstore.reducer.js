import {storeContants, userStoreData } from "../actions/constants";


const initState = {
    userStore :{},
    storeProduct:[],
    storeOrder:[],
    error: "",
    message: "",
    loading: false,
   
}

export default (state = initState, action) => {
    switch (action.type) {
        case storeContants.ADD_NEW_STORE_SUCCESS:
      state = {
        ...state,
        userStore: action.payload.stores,
      };
      break;

      case userStoreData.GET_USER_STORE_DETAILS_SUCCESS:
        state = {
          ...state,
          userStore: action.payload.store,
          storeProduct: action.payload.product

        };
        break;
    }
    return state;
}