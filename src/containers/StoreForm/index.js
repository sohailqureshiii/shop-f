import React, { useState } from "react";
import Navigationbar from "../../components/Navbar";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addStoreAction } from "../../actions/store.action";
import {
  CountryDropdown,
  RegionDropdown,
} from "react-indian-state-region-selector";
import "./style.css";
import { Button } from "../../components/MaterialUI";

const StoreForm = (props) => {
  const auth = useSelector((state) => state.auth);
  const categoriesList = useSelector((state) => state.category.categories);
  const locationList = useSelector((state) => state.location.locations);
  const store = useSelector((state) => state.userStore.userStore);
  const dispatch = useDispatch();
  const [storeName, setStoreName] = useState("");
  const [storeType, setStoreType] = useState("");
  const [storeCategory, setStoreCategory] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [storePhoneNo, setStorePhoneNo] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const [storePinCode, setStorePinCode] = useState("");

  const [storeState, setStoreState] = useState("");
  const [storeCity, setStoreCity] = useState("");

  const history = useHistory();
  const [storePlanDetails, setStorePlanDetails] = useState("");

  console.log(storePlanDetails);

  // if (
  //   props.location &&
  //   props.location.state &&
  //   props.location.state.storePlan
  // ) {
  //   setStorePlanDetails(props.location.state.storePlanId);
  // } else {

  //     history.push({
  //       pathname: "/plansection"
  //     })

  // }

  const createStore = (e) => {
    e.preventDefault();
    const store = {
      userName: auth.user.name,
      storeName,
      storeType,
      storeCategory,
      storeLocation,
      storePhoneNo,
      storeAddress,
      storeDescription,
      storePinCode,
      storeState,
      storeCity,
    };
    dispatch(addStoreAction(store));
    console.log(store);
  };

  if (
    auth.authenticate &&
    store.hasOwnProperty("_id") &&
    Object.keys(store).length !== 0
  ) {
    return <Redirect to="/storeDashboard" />;
  }

  return (
    <>
      <Navigationbar />
      <div className="CardLayout-Toaster-Container">
        <section className="CardLayout">
          <section className="CardLayout__content">
            <div className='cbwiacawc' >
              <h4 className="section-text-5 mb24">Store Form</h4>
              <Button
                title="Save & Choose Plan"
                backgroundColor
                border
                color
                border-radius="3px"
                padding="5px"
                width="20%"
                height="30px"
                radius="3px"
                fontSize="12px"
                onClick={createStore}
              ></Button>
            </div>
            <form>
              <section className="EmailPage__email-field form-group">
                <div className="new-addproduct-input-div-mar">
                  <div className="icdsbnlcses">
                    <label className="spectrum-FieldLabel">Store Name</label>
                    <input
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      className="spectrum-Textfield spectrum-Textfield--quiet"
                      placeholder="Please Enter Store Name"
                    ></input>
                  </div>
                  <div>
                    <label className="spectrum-FieldLabel">Store Type</label>
                    <input
                      value={storeType}
                      onChange={(e) => setStoreType(e.target.value)}
                      className="spectrum-Textfield spectrum-Textfield--quiet"
                      placeholder="Please Enter Store Type Ex. Reatailer,Manufacture."
                    ></input>
                  </div>
                </div>
                <div className="new-addproduct-input-div-mar">
                  <div className="icdsbnlcses">
                    <label className="spectrum-FieldLabel">Category</label>
                    <select
                      id="CountryDropdown"
                      value={storeCategory}
                      onChange={(e) => setStoreCategory(e.target.value)}
                    >
                      <option
                        className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua"
                        value=""
                      >
                        Please Select Store Category
                      </option>
                      {categoriesList
                        .filter((category) => !category.parentId)
                        .map((filterCategory) => (
                          <option
                            key={filterCategory._id}
                            value={filterCategory._id}
                          >
                            {filterCategory.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="spectrum-FieldLabel">Location</label>
                    <select
                       id="CountryDropdown"
                      value={storeLocation}
                      onChange={(e) => setStoreLocation(e.target.value)}
                    >
                      <option
                        className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua"
                        value=""
                      >
                        Please Select Store Location
                      </option>
                      {locationList.map((value) => (
                        <option key={value._id} value={value._id}>
                          {value.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="new-addproduct-input-div-mar">
                  <div className="icdsbnlcses">
                    <label className="spectrum-FieldLabel">Mobile Number</label>
                    <input
                      value={storePhoneNo}
                      onChange={(e) => setStorePhoneNo(e.target.value)}
                      className="spectrum-Textfield spectrum-Textfield--quiet"
                      placeholder="Please Enter Store Mobile Number"
                    ></input>
                  </div>
                  <div>
                    <label className="spectrum-FieldLabel">Store Address</label>
                    <input
                      value={storeAddress}
                      onChange={(e) => setStoreAddress(e.target.value)}
                      className="spectrum-Textfield spectrum-Textfield--quiet"
                      placeholder="Please Enter Store Address"
                    ></input>
                  </div>
                </div>

                <div className="new-addproduct-input-div-mar">
                  <div className="icdsbnlcses">
                    <label className="spectrum-FieldLabel">Description</label>
                    <input
                      value={storeDescription}
                      onChange={(e) => setStoreDescription(e.target.value)}
                      className="spectrum-Textfield spectrum-Textfield--quiet"
                      placeholder="Please Enter Store Description"
                    ></input>
                  </div>
                  <div>
                    <label className="spectrum-FieldLabel">Pin Code</label>
                    <input
                      value={storePinCode}
                      onChange={(e) => setStorePinCode(e.target.value)}
                      className="spectrum-Textfield spectrum-Textfield--quiet"
                      placeholder="Please Enter Store Pin Code"
                    ></input>
                  </div>
                </div>
                {/* // */}
                <div className="new-addproduct-input-div-mar">
                  <div>
                    <label className="spectrum-FieldLabel">State</label>

                    <CountryDropdown
                      value={storeState}
                      onChange={(e) => setStoreState(e)}
                      id="CountryDropdown"
                    />
                  </div>
                  <div>
                    <label className="spectrum-FieldLabel">City</label>
                    <RegionDropdown
                      country={storeState}
                      defaultOptionLabel="Select City"
                      value={storeCity}
                      onChange={(e) => setStoreCity(e)}
                      id="CountryDropdown"
                    />
                  </div>
                </div>
              </section>
              <section className="EmailPage__submit mod-submit">
              </section>
            </form>
          </section>
        </section>
      </div>
    </>
  );
};

export default StoreForm;
