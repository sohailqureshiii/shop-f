import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import categoryReducer from './category.reducer';
import locationReducers from './location.reducers';
import productsReducer from './products.reducer';
import storeReducer from './store.reducer';
import userReducer from './user.reducer';
import userstoreReducer from './userstore.reducer';

const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer,
    category: categoryReducer,
    location: locationReducers,
    userStore:userstoreReducer,
    products:productsReducer,
    stores:storeReducer

});



export default rootReducer;