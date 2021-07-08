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
  const storeLists = useSelector((state)=>state.stores.stores)
  const [searchTerm , setSearchTerm] = useState(""); 
  const [categoryTerm , setCategoryTerm] = useState(""); 
  const [locationTerm , setLocationTerm] = useState("");

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


    if(searchTerm === "" && categoryTerm === "" && locationTerm === ""){
      return (
        <div style={{ padding: "30px",paddingTop:'135px' }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
      { 
         storeLists.map((store,index)=>(
          <Store store={store} index={index} />
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
         storeLists.filter((store)=>
         store.storeName
                  .toLowerCase()
                  .split(" ")
                  .join("")
                  .includes(searchTerm.toLowerCase().split(" ").join(""))
         ).map((store,index)=>(
          <Store store={store} index={index} />
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
         storeLists.filter((store)=>
         store.storeCategory._id.includes(categoryTerm)
         ).map((store,index)=>(
          <Store store={store} index={index} />
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
         storeLists.filter((store)=>
         store.storeLocation._id.includes(locationTerm)
         ).map((store,index)=>(
          <Store store={store} index={index} />
        ))
      }
        </div>
        </div>
      )
    }
    if(locationTerm !=="" && categoryTerm !== "" ){
      return (
        <div style={{padding: "30px",paddingTop:'135px' }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
      { 
         storeLists.filter((store)=>
         store.storeLocation._id.includes(locationTerm) && store.storeCategory._id.includes(categoryTerm)
         ).map((store,index)=>(
          <Store store={store} index={index} />
        ))
      }
       
        </div>
        </div>
      )
    }

  };

  return (
    <>
      <NavBar />
      <MenuNavbar
        term={searchTerm}
        locationterm={locationTerm}
        categoryterm={categoryTerm}
        searchKeyword={searchHandler}
        searchLocation={searchLocation}
        searchCategory={searchCategory}
      />
      <div> {renderStores()}</div>
      <Footer />
    </>
  );
};

export default ExploreStore;
