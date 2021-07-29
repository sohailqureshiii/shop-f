import React, { useState } from "react";
import "./style.css";
import Navigationbar from "../../components/Navbar";
import Footer from "../../components/Footerr/Footer";
import Product from "../../components/Product";
import MenuNavbar from "../../components/MenuNavbar";
import { useSelector } from "react-redux";
import category from "../../reducers/category.reducer";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const products = useSelector((state) => state.products.products);
  const storeId = useSelector((state) => state.auth.user.storeId);
  const productLists = products.filter(
    (product, index) => product.storeId._id !== storeId
  );

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

  const renderProduct = () => {
    if (searchTerm === "" && categoryTerm === "" && locationTerm === "") {
      return (
        <div style={{ padding: "30px", paddingTop: "125px" }}>
          <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
            {productLists.map((product, index) => (
              <Product product={product} index={index} />
            ))}
          </div>
        </div>
      );
    }
    if (searchTerm !== "") {
      const searchTermProducts = productLists.filter(
        (product) =>
          product.productName
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(searchTerm.toLowerCase().split(" ").join("")) ||
          product.storeId.storeName
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(searchTerm.toLowerCase().split(" ").join("")) ||
          product.productCategory.name
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(searchTerm.toLowerCase().split(" ").join("")) ||
          product.productParentCategory.name
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(searchTerm.toLowerCase().split(" ").join("")) ||
          product.productDescription
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(searchTerm.toLowerCase().split(" ").join(""))
      );

      return (
        <div style={{ padding: "30px", paddingTop: "135px" }}>
          <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
            {searchTermProducts.length > 0
              ? searchTermProducts.map((product, index) => (
                  <Product product={product} index={index} />
                ))
              : "No Product"}
          </div>
        </div>
      );
    }
    if (categoryTerm !== "" && locationTerm === "") {
      const categoryTermProducts = productLists.filter((product) =>
        product.productParentCategory._id.includes(categoryTerm)
      );
      return (
        <div style={{ padding: "30px", paddingTop: "135px" }}>
          <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
            {categoryTermProducts.length > 0
              ? categoryTermProducts.map((product, index) => (
                  <Product product={product} index={index} />
                ))
              : "No Product"}
          </div>
        </div>
      );
    }
    if (locationTerm !== "" && categoryTerm === "") {
      const locationTermProducts = productLists.filter((product) =>
        product.storeLocation._id.includes(locationTerm)
      );
      return (
        <div style={{ padding: "30px", paddingTop: "135px" }}>
          <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
            {locationTermProducts.length > 0
              ? locationTermProducts.map((product, index) => (
                  <Product product={product} index={index} />
                ))
              : "No Product"}
          </div>
        </div>
      );
    }
    if (locationTerm !== "" && categoryTerm !== "") {
      const locationCategoryTermProducts = productLists.filter(
        (product) =>
          product.storeLocation._id.includes(locationTerm) &&
          product.productParentCategory._id.includes(categoryTerm)
      );
      return (
        <div style={{ padding: "30px", paddingTop: "135px" }}>
          <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
            {locationCategoryTermProducts.length > 0
              ? locationCategoryTermProducts.map((product, index) => (
                  <Product product={product} index={index} />
                ))
              : "No Products"}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Navigationbar />
      <MenuNavbar
        term={searchTerm}
        locationterm={locationTerm}
        categoryterm={categoryTerm}
        searchKeyword={searchHandler}
        searchLocation={searchLocation}
        searchCategory={searchCategory}
      />
      <Footer />
      {renderProduct()}
    </>
  );
};

export default HomePage;
