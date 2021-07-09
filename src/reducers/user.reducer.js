import { cartConstants, followContants } from "../actions/constants";


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
    cartItems: {
        // 123: {
        //     _id: 123,
        //     name: 'Samsung mobile',
        //     img: 'some.jpg',
        //     price: 200,
        //     qty: 1,
        // }
    },
    updatingCart: false,
    error: null
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
      
            case cartConstants.ADD_TO_CART_REQUEST:
                state = {
                    ...state,
                    updatingCart: true
                }
                break;
            case cartConstants.ADD_TO_CART_SUCCESS:
                state = {
                    ...state,
                    cartItems: action.payload.cartItems,
                    updatingCart: false
                }
                break;
            case cartConstants.ADD_TO_CART_FAILURE:
                state = {
                    ...state,
                    updatingCart: false,
                    error: action.payload.error
                }
                break;
            case cartConstants.RESET_CART:
                state = {
                    ...initState
                }
                break;
    }
    return state;
}