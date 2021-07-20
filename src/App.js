import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExploreStore from "./containers/ExploreStore";
import ShopProfile from "./containers/newShopProfile";
import Signin from "./containers/Signin";
import Signup from "./containers/SignUp";
import OrderDeatilsP from "./containers/Oder details page";
import OrderPage from "./containers/OrdersPage";
import Favorite from "./containers/Fav";
import Planselection from "./containers/StorePlanselection";
import MyProfile from "./containers/MyProfile";
import CartPage from "./containers/CartPage";
import EditProfile from "./components/EditProfile";
import StoreForm from "./containers/StoreForm";
import StoreProduct from "./containers/StoreContainers/StoreProduct";
import StoreOrder from "./containers/StoreContainers/StoreOrder";
import StoreDasboard from "./containers/StoreContainers/StoreDashboard";
import ProductDetailsPage from "./containers/ProductDetailsPage";
// import CheckoutPage from "./containers/CheckoutPage";
import StoreCoustomers from "./containers/StoreContainers/StoreCoustomers";
import StoreProfile from "./containers/StoreContainers/StoreProfile";
import StoreAddProduct from "./containers/StoreContainers/AddProduct";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions/auth.action";
import {
  getUserDataAction,
  userInitialdataAction,
  userStoreDataAction,

} from "./actions/initialData.action";
import { PrivateRoute,SharePrivateRoute } from "./components/HOC/PrivateRoute";

import { getOrder, getOrders, updateCart } from "./actions/user.action";
import StoreEditProduct from "./containers/StoreContainers/EditProduct";
import CheckoutPage from "./containers/CheckoutPage";
import NewCart from "./containers/New Cart Page/cartindex";
import store from "./store";
import CartCheckoutPage from "./containers/CartCheckoutPage";


function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const store = useSelector((state) => state.userStore.userStore);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(updateCart())
  }, []); 

  useEffect(() => {
    // window.location.reload();
    dispatch(getUserDataAction());
    dispatch(getOrders())
  }, [auth.authenticate]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(userInitialdataAction());
      dispatch(updateCart())
    }
    // if(auth.authenticate && auth.user.store === "Yes"){
    //   console.log("yes");
    // }
  }, [auth.authenticate]);

  useEffect(() => {
    if (auth.authenticate && auth.user.store==="Yes") {
      dispatch(userStoreDataAction())
    }
    
  }, [auth.authenticate && auth.user.store==="Yes"]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ExploreStore" exact component={ExploreStore} />
          <Route path="/:storeId/store" exact component={ShopProfile} />
          <SharePrivateRoute path="/store/:storeId" exact component={ShopProfile} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/account/orders" exact component={OrderPage} />
          <Route path="/Orderpage" exact component={OrderDeatilsP} />
          <Route path="/favorite" exact component={Favorite} />
          <Route path="/plansection" exact component={Planselection} />
          <Route path="/myprofile" exact component={MyProfile} />
          <Route path="/cart" exact component={NewCart} />
          <Route path="/editprofile" exact component={EditProfile} />
          <SharePrivateRoute path="/storeForm" exact component={StoreForm} />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route path="/order_details/:orderId" component={OrderDeatilsP} />
          <PrivateRoute path="/storeDashboard" exact component={StoreDasboard} />
          <PrivateRoute path="/storeProduct" exact component={StoreProduct} />
          <PrivateRoute path="/storeOrder" exact component={StoreOrder} />
          <PrivateRoute path="/editProduct" exact component={StoreEditProduct} />
          <Route
            path="/:productSlug/:productId/p"
            component={ProductDetailsPage}
          />
          {/* <Route path="/checkout" exact component={CheckoutPage} /> */}
          <PrivateRoute path="/storeCoustomer" exact component={StoreCoustomers} />
          <PrivateRoute path="/storeProfile" exact component={StoreProfile} />
          <PrivateRoute path="/Addproduct" exact component={StoreAddProduct} />
          <Route path="/products/details" component={ProductDetailsPage} />
          <Route path="/cartcheck" component={CartCheckoutPage} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
