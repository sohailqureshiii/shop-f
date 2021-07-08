import React, { useState } from "react";
import Navigationbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addStoreAction } from "../../actions/store.action";

const StoreForm = () => {
  const auth = useSelector((state) => state.auth);
  const categoriesList = useSelector((state) => state.category.categories);
  const locationList = useSelector((state) => state.location.locations);
  const dispatch = useDispatch();
  const [storeName, setStoreName] = useState("");
  const [storeType, setStoreType] = useState("");
  const [storeCategory, setStoreCategory] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [storePhoneNo, setStorePhoneNo] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const [storePinCode, setStorePinCode] = useState("");

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
    };
    dispatch(addStoreAction(store));
    console.log(store);
  };

  return (
    <>
      <Navigationbar />
      <div className="CardLayout-Toaster-Container">
        <section className="CardLayout">
          <section className="CardLayout__content">
            <form>
              <section className="EmailPage__email-field form-group">
                <div>
                  <label className="spectrum-FieldLabel">storeName</label>
                  <input
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="spectrum-Textfield spectrum-Textfield--quiet"
                  ></input>
                </div>
                <div>
                  <label className="spectrum-FieldLabel">storeType</label>
                  <input
                    value={storeType}
                    onChange={(e) => setStoreType(e.target.value)}
                    className="spectrum-Textfield spectrum-Textfield--quiet"
                  ></input>
                </div>
                <div>
                  <label className="spectrum-FieldLabel">storeCategory</label>
                  <select
                    className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5"
                    className="SubCategory-label-30F"
                    value={storeCategory}
                    onChange={(e)=>setStoreCategory(e.target.value)}
                  >
                    <option
                      className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua"
                      value=""
                    >
                      storeCategory
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
                  <label className="spectrum-FieldLabel">storeLocation</label>
                  <select
                    className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5"
                    className="SubCategory-label-30F"
                    value={storeLocation}
                    onChange={(e)=>setStoreLocation(e.target.value)}
                  >
                    <option
                      className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua"
                      value=""
                    >
                      storeLocation
                    </option>
                    {locationList.map((value) => (
                      <option key={value._id} value={value._id}>
                        {value.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="spectrum-FieldLabel">storePhoneNo</label>
                  <input
                    value={storePhoneNo}
                    onChange={(e) => setStorePhoneNo(e.target.value)}
                    className="spectrum-Textfield spectrum-Textfield--quiet"
                  ></input>
                </div>
                <div>
                  <label className="spectrum-FieldLabel">storeAddress</label>
                  <input
                    value={storeAddress}
                    onChange={(e) => setStoreAddress(e.target.value)}
                    className="spectrum-Textfield spectrum-Textfield--quiet"
                  ></input>
                </div>
                <div>
                  <label className="spectrum-FieldLabel">
                    storeDescription
                  </label>
                  <input
                    value={storeDescription}
                    onChange={(e) => setStoreDescription(e.target.value)}
                    className="spectrum-Textfield spectrum-Textfield--quiet"
                  ></input>
                </div>
                <div>
                  <label className="spectrum-FieldLabel">storePinCode</label>
                  <input
                    value={storePinCode}
                    onChange={(e) => setStorePinCode(e.target.value)}
                    className="spectrum-Textfield spectrum-Textfield--quiet"
                  ></input>
                </div>
              </section>
              <section className="EmailPage__submit mod-submit">
                <div className="ta-left"></div>
                <div className="ta-right">
                  <Link to="/plansection">
                    <button
                      onClick={createStore}
                      className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right"
                    >
                      <span className="spectrum-Button-label">Submit</span>
                    </button>
                  </Link>
                </div>
              </section>
            </form>
          </section>
        </section>
      </div>
    </>
  );
};

export default StoreForm;
