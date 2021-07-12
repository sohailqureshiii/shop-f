import { categoryContants } from "../actions/constants";

const initState = {
    categories: [],
    loading: false,
    error: null
};



const category =  (state = initState, action) => {
    switch (action.type) {
        case categoryContants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }

            break;

    }

    return state;
}

export default category