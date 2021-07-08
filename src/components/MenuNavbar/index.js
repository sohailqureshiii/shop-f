import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

const MenuNavBar = (props) => {
  const categoriesList = useSelector((state) => state.category.categories);
  const locationList = useSelector((state) => state.location.locations);

  const inputSearch = useRef("");
  const inputLocation = useRef("");
  const inputCategory = useRef("");

  const getSearchTerm = () => {
    props.searchKeyword(inputSearch.current.value);
  };
  const getLocationTerm = () => {
    props.searchLocation(inputLocation.current.value);
  };

  const getCategoryTerm = () => {
    props.searchCategory(inputCategory.current.value);
  };
  return (
    <>
      <div
        style={{
          paddingTop: "45px",
          position: "fixed",
          width: "100%",
          zIndex: "99",
        }}
      >
        <nav
          className="NavigationBar-subcategoryList-1nX"
          style={{
            padding: "15px 10px 15px 79px",
            border: "1px solid #eaeaea",
            overflow: "auto",
            paddingLeft: "79px",
          }}
        >
          <ul style={{ display: "contents" }}>
            <li>
              <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
                <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
                  <select
                    className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5"
                    className="SubCategory-label-30F"
                    // value={filterdLocation}
                    // onChange={(e) => {
                    //   const selectedLocation = e.target.value;
                    //   setFilterdLocation(selectedLocation);
                    // }}
                    ref={inputLocation}
                    value={props.locationterm}
                    onChange={getLocationTerm}
                  >
                    <option
                      className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua"
                      value=""
                    >
                      location
                    </option>
                    {locationList.map((value) => (
                      <option key={value._id} value={value._id}>
                        {value.name}
                      </option>
                    ))}
                  </select>
                </div>
              </a>
            </li>
            <li>
              <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
                <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
                  <select
                    className="SubCategory-label-30F"
                    // value={filterdCategory}
                    // onChange={(e) => {
                    //   const selectedCategory = e.target.value;
                    //   setFilterdCategory(selectedCategory)
                    // }}
                    ref={inputCategory}
                    value={props.categoryterm}
                    onChange={getCategoryTerm}
                  >
                    <option value="">Category</option>

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
              </a>
            </li>
            <li>
              <div
                tabIndex="0"
                className="SearchTypeahead-searchContainer-175 SearchTypeahead-isTypeaheadEnabled-3i3"
              >
                <div className="SearchTypeahead-searchInputWrap-3Hg">
                  <div className="SearchTypeahead-searchIcon-1ld">
                    <svg viewBox="0 0 12 12" class="SearchTypeahead-icon-20K">
                      <path d="M11.407,10.421,8.818,7.832a4.276,4.276,0,1,0-.985.985l2.589,2.589a.7.7,0,0,0,.985-.985ZM2.355,5.352a3,3,0,1,1,3,3,3,3,0,0,1-3-3Z"></path>
                    </svg>
                  </div>
                  <form className="SearchTypeahead-searchForm-20c">
                    <label for="search">
                      <input
                        type="search"
                        name="search"
                        autocomplete="off"
                        placeholder="Search…"
                        aria-label="Search "
                        className="SearchTypeahead-searchInput-1qk e2e-SearchInput-input"
                        ref={inputSearch}
                        // onChange={(e) => {

                        //   abcd(e)
                        //   //  setSearchTerm(e.target.value)
                        //   // dispatch(searchTermAction(searchTerm))
                        //   // console.log(searchTerm);

                        // }}
                        // onChange={changeHandler}
                        value={props.term}
                        onChange={getSearchTerm}
                      />
                    </label>
                  </form>
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
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MenuNavBar;
