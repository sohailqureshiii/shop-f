import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footerr/Footer";
import Store from "../../components/Store/index";
import MenuNavbar from "../../components/MenuNavbar";

/**
 * @author
 * @function ExploreStore
 **/

const ExploreStore = (props) => {
  const storeLists = useSelector((state) => state.stores.stores);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");

  const searchHandler = (searchValue) => {
    setSearchTerm(searchValue);
    setCategoryTerm("");
    setLocationTerm("");
  };
  const searchLocation = (LocationValue) => {
    setLocationTerm(LocationValue);
    setSearchTerm("");
  };
  const searchCategory = (CategoryValue) => {
    setCategoryTerm(CategoryValue);
    setSearchTerm("");
  };

  const renderStores = () => {
    if (searchTerm === "" && categoryTerm === "" && locationTerm === "") {
      return storeLists.map((store, index) => (
        <Store store={store} index={index} />
      ));
    }
    if (searchTerm !== "") {
      return storeLists
        .filter((store) =>
          store.storeName
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(searchTerm.toLowerCase().split(" ").join(""))
        )
        .map((store, index) => <Store store={store} index={index} />);
    }
    if (categoryTerm !== "" && locationTerm === "") {
      return storeLists
        .filter((store) => store.storeCategory._id.includes(categoryTerm))
        .map((store, index) => <Store store={store} index={index} />);
    }
    if (locationTerm !== "" && categoryTerm === "") {
      return storeLists
        .filter((store) => store.storeLocation._id.includes(locationTerm))
        .map((store, index) => <Store store={store} index={index} />);
    }
    if (locationTerm !== "" && categoryTerm !== "") {
      return storeLists
        .filter(
          (store) =>
            store.storeLocation._id.includes(locationTerm) &&
            store.storeCategory._id.includes(categoryTerm)
        )
        .map((store, index) => <Store store={store} index={index} />);
    }
  };

  return (
    <>
      <NavBar />
      {/* <MenuNavbar
        term={searchTerm}
        locationterm={locationTerm}
        categoryterm={categoryTerm}
        searchKeyword={searchHandler}
        searchLocation={searchLocation}
        searchCategory={searchCategory}
      /> */}
      {/* <div> {renderStores()}</div> */}
      <div className="store-list-main-container">
        <div className="filter-for-store">
          <div className="filter-bar-filter-explore-header">
            <h1 className="filter-bar-filter-explore-h2-tag">Filters</h1>
          </div>
          <div style={{ marginTop: "10px" }}>
            <div className="new-compo-conatiner-div">
              {" "}
              <div className="filter-bar-filter-new">
                <h1 className="filter-bar-filter-header-h1-tag">
                  Search For Shops
                </h1>
              </div>
              <div className="compo-for-filter">
                <div
                  tabIndex="0"
                  className="bsjnansnaksn SearchTypeahead-isTypeaheadEnabled-3i3"
                >
                  <div className="SearchTypeahead-searchInputWrap-3Hg">
                    <div className="SearchTypeahead-searchIcon-1ld">
                      <svg viewBox="0 0 12 12" class="SearchTypeahead-icon-20K">
                        <path d="M11.407,10.421,8.818,7.832a4.276,4.276,0,1,0-.985.985l2.589,2.589a.7.7,0,0,0,.985-.985ZM2.355,5.352a3,3,0,1,1,3,3,3,3,0,0,1-3-3Z"></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      name="search"
                      autocomplete="off"
                      placeholder="Search…"
                      aria-label="Search "
                      className="SearchTypeahead-searchInput-1qk e2e-SearchInput-input"
                      style={{ outline: "none" }}
                      // ref={inputSearch}
                      // value={props.term}
                      // onChange={getSearchTerm}
                      // ref={inputSearch}
                      // value={props.term}
                    />
                  </div>
                  <button
                    tabIndex="-1"
                    className="Btn-button-BGn Btn-ghost-2Wn Btn-small-2_o SearchTypeahead-mobileCloseButton-OkE"
                  >
                    <div className="Btn-labelWrapper-1jSE">
                      <div className="Btn-label-1Zf e2e-Btn-label">Cancel</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="new-compo-conatiner-div">
              {/* <div className="filter-bar-filter-new">
                <h1 className="filter-bar-filter-header-h1-tag">Show Only</h1>
              </div> */}
              <h1 className="show-only-tag">Show Only</h1>
              <div className='uhcacxdsa'
              >
                <input type="radio" style={{ cursor: "pointer" }}></input>
                <h1 className="cbildcbdc">On Sale</h1>
              </div>
              <div
                className='uhcacxdsa'
              >
                <input type="radio" style={{ cursor: "pointer" }}></input>
                <h1 className="cbildcbdc">On Disscount</h1>
              </div>
              <div
               className='uhcacxdsa'
              >
                <input type="radio" style={{ cursor: "pointer" }}></input>
                <h1 className="cbildcbdc">Verified</h1>
              </div>
            </div>
            <div className="new-compo-conatiner-div">
              <div className="filter-bar-filter-new">
                <h1 className="filter-bar-filter-header-h1-tag">Location</h1>
              </div>
              <div className="compo-for-filter">
                <div className="SubCategory-root-mwEfghi ">
                  <select
                    className="SubCategory-root-mwE"
                    className="SubCategory-label-30Fmjdh"
                    // value={filterdLocation}
                    // onChange={(e) => {
                    //   const selectedLocation = e.target.value;
                    //   setFilterdLocation(selectedLocation);
                    // // }}
                    // ref={inputLocation}
                    // value={props.locationterm}
                    // onChange={getLocationTerm}
                  >
                    <option
                      className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua"
                      value=""
                    >
                      State
                    </option>
                    {/* {locationList.map((value) => ( */}
                    <option
                    // key={value._id} value={value._id}
                    >
                      {/* {value.name} */}
                    </option>
                    {/* ))} */}
                  </select>
                </div>
              </div>
              <div className="compo-for-filter">
                <div className="SubCategory-root-mwEfghi ">
                  <select
                    className="SubCategory-root-mwE"
                    className="SubCategory-label-30Fmjdh"
                    // value={filterdLocation}
                    // onChange={(e) => {
                    //   const selectedLocation = e.target.value;
                    //   setFilterdLocation(selectedLocation);
                    // // }}
                    // ref={inputLocation}
                    // value={props.locationterm}
                    // onChange={getLocationTerm}
                  >
                    <option
                      className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua"
                      value=""
                    >
                      City
                    </option>
                    {/* {locationList.map((value) => ( */}
                    <option
                    // key={value._id} value={value._id}
                    >
                      {/* {value.name} */}
                    </option>
                    {/* ))} */}
                  </select>
                </div>
              </div>
            </div>
            <div className="new-compo-conatiner-div">
              <div className="filter-bar-filter-new">
                <h1 className="filter-bar-filter-header-h1-tag">Category</h1>
              </div>
              <div className="compo-for-filter">
                <div className="SubCategory-root-mwEfghi SubCategory-active-Sxz NavigationBar-subcategory-2m5">
                  <select
                    className="SubCategory-label-30Fmjdh"
                    // value={filterdCategory}
                    // onChange={(e) => {
                    //   const selectedCategory = e.target.value;
                    //   setFilterdCategory(selectedCategory)
                    // }}
                    // ref={inputCategory}
                    // value={props.categoryterm}
                    // onChange={getCategoryTerm}
                  >
                    <option value="">Category</option>

                    {/* {categoriesList
                      .filter((category) => !category.parentId)
                      .map((filterCategory) => ( */}
                    <option
                    // key={filterCategory._id}
                    // value={filterCategory._id}
                    >
                      {/* {filterCategory.name} */}
                    </option>
                    {/* ))} */}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="new-store-page-container-one">
          <div className="new-store-page-container-two">{renderStores()}</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ExploreStore;
