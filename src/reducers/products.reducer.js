import { productContants } from "../actions/constants";

const initState = {
  products: [],
};

const product = (state = initState, action) => {
  switch (action.type) {
    case productContants.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;

    default:
      return state;
  }
  return state;
};

export default product;
