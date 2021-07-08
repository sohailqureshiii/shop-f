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
    // if (auth.authenticate) {
      dispatch(userInitialdataAction());
    // }
    // if(auth.authenticate && auth.user.store === "Yes"){
    //   console.log("yes");
    // }
  }, [auth.authenticate]);

  useEffect(() => {
    // if (auth.authenticate && auth.user.store === "Yes") {
      dispatch(userStoreDataAction())
    // }
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
          <Route path="/storeDashboard" exact component={StoreDasboard} />
          <Route path="/storeProduct" exact component={StoreProduct} />
          <Route path="/storeOrder" exact component={StoreOrder} />
          <Route
            path="/:productSlug/:productId/p"
            component={ProductDetailsPage}
          />
          {/* <Route path="/checkout" exact component={CheckoutPage} /> */}
          <Route path="/storeCoustomer" exact component={StoreCoustomers} />
          <Route path="/storeProfile" exact component={StoreProfile} />
          <Route path="/Addproduct" exact component={StoreAddProduct} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
