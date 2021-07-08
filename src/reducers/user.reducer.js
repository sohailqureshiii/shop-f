import { authConstants } from "../actions/constants";


const initState = {
    error: "",
    message: "",
    loading: false,
    authenticate: false,
    errorTF:false
}

export default (state = initState, action) => {
    switch (action.type) {
        case authConstants.SIGNUP_REQUEST:
            state = {
                ...state,
                loading: true,
                errorTF:false
            }
            break;
        case authConstants.SIGNUP_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message,
                authenticate: true,
                errorTF:false,
            }
            break;
        case authConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
                errorTF:true
            }
            break;
    }
    return state;
}