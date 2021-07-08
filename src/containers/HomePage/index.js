import React, { useState } from "react";
import "./style.css";
import Navigationbar from "../../components/Navbar";
import Footer from "../../components/Footerr/Footer";
import Product from "../../components/Product";
import MenuNavbar from "../../components/MenuNavbar";
import { useSelector } from "react-redux";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {

  const [searchTerm , setSearchTerm] = useState(""); 
  const [categoryTerm , setCategoryTerm] = useState(""); 
  const [locationTerm , setLocationTerm] = useState("");
  const productLists = useSelector((state)=>state.products.products)
  
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


    if(searchTerm === "" && categoryTerm === "" && locationTerm === ""){
      return (
        <div style={{ padding: "30px",paddingTop:'135px' }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
      { 
         productLists.map((product,index)=>(
          <Product product={product} index={index} />
        ))
      }
        </div>
        </div>
      )
    }
    if(searchTerm !=="" ){
      return (
        <div style={{padding: "30px",paddingTop:'135px' }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
      { 
         productLists.filter((product)=>
         product.productName
                  .toLowerCase()
                  .split(" ")
                  .join("")
                  .includes(searchTerm.toLowerCase().split(" ").join("")) ||
                product.storeId.storeName
                  .toLowerCase()
                  .split(" ")
                  .join("")
                  .includes(searchTerm.toLowerCase().split(" ").join(""))
         ).map((product,index)=>(
          <Product product={product} index={index} />
        ))
      }
        </div>
        </div>
      )
    }
    if(categoryTerm !=="" && locationTerm === "" ){
      return (
        <div style={{ padding: "30px",paddingTop:'135px' }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
      { 
         productLists.filter((product)=>
         product.productParentCategory._id.includes(categoryTerm)
         ).map((product,index)=>(
          <Product product={product} index={index} />
        ))
      }
        </div>
        </div>
      )
    }
    if(locationTerm !=="" && categoryTerm === "" ){
      return (
        <div style={{ padding: "30px",paddingTop:'135px' }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
      { 
         productLists.filter((product)=>
         product.storeLocation._id.includes(locationTerm)
         ).map((product,index)=>(
          <Product product={product} index={index} />
        ))
      }
        </div>
        </div>
      )
    }
    if(locationTerm !=="" && categoryTerm !== "" ){

      const abcd =  productLists.filter((product)=>
      product.storeLocation._id.includes(locationTerm) && product.productParentCategory._id.includes(categoryTerm)
      )
      return (
        <div style={{padding: "30px",paddingTop:'135px' }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
      {/* { 
         productLists.filter((product)=>
         product.storeLocation._id.includes(locationTerm) && product.productParentCategory._id.includes(categoryTerm)
         ).map((product,index)=>(
          <Product product={product} index={index} />
        ))
      } */}
       {
         abcd.length > 0 ? abcd.map((product,index)=>(
          <Product product={product} index={index} />
        )):"No Products"
       }
        </div>
        </div>
      )
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
