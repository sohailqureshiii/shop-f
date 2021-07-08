import React from 'react'
import './style.css'
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { WhatsappIcon,FacebookIcon } from "react-share";
import {IoMdCreate} from 'react-icons/io'
import DashBoard from '../../../components/DashBoardSidebar'
import  Navbar  from "../../../components/Navbar";

const StoreProfile = () => {
    return (
       <>
       <Navbar/>
        <DashBoard  sidebar>
        <div style={{paddingTop:'135px'}}>
          <div className="StoreCard__container">
        <div className="StoreCard__row"><img className="Shop__logo"
         src= "https://as1.ftcdn.net/jpg/03/01/31/70/500_F_301317052_ajbJFzcmAbkAUJPW57nj4fevWm4ZlKJB.jpg"
          alt="Logo" />
         
        </div>
        <div className="StoreCard__column">
            <div className="StoreCard__column1">
                <div>
                <div className="Shop__name">store.shopName

               <div className="Store_Edit" style={{marginLeft:"250px"}}>
               <IoMdCreate 
              //  onClick ={()=>setStoreEditModal(true)}

               /> 
              </div>
                </div>
               
                <i className="Shop__type" >store.shopEmail</i>
                <i className="Shop__type" style={{marginLeft:"20px"}}>store.shopPhoneNo</i>

                </div>
              
            </div>
            <div className="StoreCard__column1">
                <div className="Shop__numberVar">product.products.length</div>
                <div className="Shop__heading">products</div>
                <div className="Shop__numberVar">99</div>
                <div className="Shop__heading">followers</div>
            </div>
            <div className="StoreCard__column1"><div className="Shop__type">Shop Des...</div></div>
            <div className="StoreCard__column1"><div className="Shop__location">
              store.shopAddress
     
              </div>
              </div>
              <div className="StoreCard__column1"><div className="Shop__type">store.shopType</div></div>
              <div className="StoreCard__column1"><div className="Shop__type">store.shopCategory.name</div></div>
              <div className="Store_Share">
                <WhatsappShareButton
                // title={store.shopName}
                separator=" "
                url="https://www.npmjs.com/package/react-share">
                  <WhatsappIcon logoFillColor="green" round={true} size={50}>
                  </WhatsappIcon>
                </WhatsappShareButton>
                <FacebookShareButton
                style={{marginLeft:"12px"}}
                // title={store.shopName}
                // quote={`Follow My Shop at Shopisthan ${store.shopName}`}
                hashtag="#myShopAtShopisthan #dsfwe"
                url="https://www.npmjs.com/package/react-share">
                  <FacebookIcon logoFillColor="green" round={true} size={50}>
                  </FacebookIcon>
                </FacebookShareButton>
              </div>
             
      </div> </div></div>
      </DashBoard>
       </>
    )
}

export default StoreProfile
