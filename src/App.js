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
import { PrivateRoute } from "./components/HOC/PrivateRoute";
import { updateCart } from "./actions/user.action";
import StoreEditProduct from "./containers/StoreContainers/EditProduct";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  useEffect(() => {
    // window.location.reload();
    dispatch(getUserDataAction());
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
    if (auth.authenticate) {
      dispatch(userStoreDataAction())
    }
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ExploreStore" exact component={ExploreStore} />
          <Route path="/:storeId/store" exact component={ShopProfile} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/account/orders" exact component={OrderPage} />
          <Route path="/Orderpage" exact component={OrderDeatilsP} />
          <Route path="/favorite" exact component={Favorite} />
          <Route path="/plansection" exact component={Planselection} />
          <Route path="/myprofile" exact component={MyProfile} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/editprofile" exact component={EditProfile} />
          <Route path="/storeForm" exact component={StoreForm} />
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
        </Switch>
      </Router>
    </div>
  );
}
export default App;
