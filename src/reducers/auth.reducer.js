import { authConstants, storeContants, userInitialdata } from "../actions/constants";

const initState = {
  token: null,
  user: {
    name: "",
    loginId: "",
    userEmail: "",
    role: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: "",
  message: "",
  errorTF: false,
  // userStore: {
  //   _id: "",
  //   userName: "",
  //   storeName: "",
  //   storeType: "",
  //   storeCategory: "",
  //   storeLocation: "",
  //   storePhoneNo: "",
  //   storeAddress: "",
  //   storePinCode: "",
  // },
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };

      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
        errorTF: false,
        error: "",
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        errorTF: true,
        error: action.payload.error,
        loading: false,
      };
      break;
    case storeContants.ADD_NEW_STORE_SUCCESS:
      state = {
        ...state,
        user: action.payload.data,
        authenticate: true,
        authenticating: false,
        errorTF: false,
        error: "",
      };
      case userInitialdata.GET_USER_DETAILS_SUCCESS:
        state = {
          ...state,
          user: action.payload.user,
          // userStore: action.payload.stores,
          authenticate: true,
          authenticating: false,
          errorTF: false,
          error: "",
        };
    default:
      return state;
  }

  return state;
};

export default auth;
