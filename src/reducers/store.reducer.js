import {storeContants } from "../actions/constants";

const initState = {
 stores:[]
}

export default (state = initState, action) => {
    switch (action.type) {
        case storeContants.GET_ALL_STORE_SUCCESS:
            state = {
                ...state,
                stores: action.payload.stores
            }
            break;
        
    }
    return state;
}