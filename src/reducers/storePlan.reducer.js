import { storePlansContants } from "../actions/constants";

const initState = {
  storePlans: [],

};

const storePlan = (state = initState, action) => {
  switch (action.type) {
    case storePlansContants.GET_ALL_Store_Plans_SUCCESS :
      state = {
        ...state,
        storePlans: action.payload.storePlans,
      };

      break;

    default:
      return state;
  }

  return state;
};

export default storePlan;
