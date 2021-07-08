import { followContants } from "../actions/constants";


const initState = {
    address: [],
    orders: [],
    following:[],
    followingStores:[],
    followingProducts:[],
    orderDetails: {},
    error: null,
    loading: false,
    orderFetching: false,
    placedOrderId: null,
}

export default (state = initState, action) => {
    
    switch (action.type){
        case followContants.GET_ALL_FOLLOWING_SUCCESS:
            state = {
                ...state,
                following:action.payload.following
            }
          break;
          case followContants.GET_ALL_FOLLOWING_STORE_SUCCESS:
            state = {
                ...state,
                followingStores:action.payload.followingStore
            }
          break;
          case followContants.GET_ALL_FOLLOWING_PRODUCTS_SUCCESS:
            state = {
                ...state,
                followingProducts:action.payload.followingProduct
            }
          break;
    }
    return state;
}