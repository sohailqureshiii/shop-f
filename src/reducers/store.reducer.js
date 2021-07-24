import { storeContants } from "../actions/constants";

const initState = {
  stores: [],
};

const store = (state = initState, action) => {
  switch (action.type) {
    case storeContants.GET_ALL_STORE_SUCCESS:
      state = {
        ...state,
        stores: action.payload.stores,
      };
      break;

    default:
      return state;
  }
  return state;
};

export default store;
