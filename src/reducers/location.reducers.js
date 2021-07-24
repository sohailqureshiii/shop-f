import { locationContants } from "../actions/constants";

const initState = {
  locations: [],
  loading: false,
  error: null,
};

const location = (state = initState, action) => {
  switch (action.type) {
    case locationContants.GET_ALL_LOCATION_SUCCESS:
      state = {
        ...state,
        locations: action.payload.locations,
      };

      break;

    default:
      return state;
  }

  return state;
};

export default location;
