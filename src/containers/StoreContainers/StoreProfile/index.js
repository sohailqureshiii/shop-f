import React from 'react'
import './style.css'
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { WhatsappIcon,FacebookIcon } from "react-share";
import {IoMdCreate} from 'react-icons/io'
import DashBoard from '../../../components/DashBoardSidebar'
import  Navbar  from "../../../components/Navbar";
import { useSelector } from 'react-redux';
import { shareApi } from '../../../urlConfig';

const StoreProfile = () => {
 const storeDetails = useSelector((state)=>state.userStore)

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
                <div className="Shop__name"> {storeDetails.userStore.storeName}

               <div className="Store_Edit" style={{marginLeft:"250px"}}>
               <IoMdCreate 
              //  onClick ={()=>setStoreEditModal(true)}

               /> 
              </div>
                </div>
               
                <i className="Shop__type" >{storeDetails.userStore.storeLocation.name}</i>
                <i className="Shop__type" style={{marginLeft:"20px"}}>{storeDetails.userStore.storePhoneNo}</i>

                </div>
              
            </div>
            <div className="StoreCard__column1">
                <div className="Shop__numberVar">{storeDetails.storeProduct.length}</div>
                <div className="Shop__heading">products</div>
                <div className="Shop__numberVar">{storeDetails.userStore.followers.length}</div>
                <div className="Shop__heading">followers</div>
            </div>
            <div className="StoreCard__column1"><div className="Shop__type">{storeDetails.userStore.storeDescription}</div></div>
            <div className="StoreCard__column1"><div className="Shop__location">
             {storeDetails.userStore.storeAddress}
     
              </div>
              </div>
              <div className="StoreCard__column1"><div className="Shop__type">{storeDetails.userStore.storeType}</div></div>
              <div className="StoreCard__column1"><div className="Shop__type">{storeDetails.userStore.storeCategory.name}</div></div>
              <div className="Store_Share">
                <WhatsappShareButton
                title={storeDetails.userStore.storeName}
                separator=" "
                url={`${shareApi}/store/${storeDetails.userStore._id}`}>
                  <WhatsappIcon logoFillColor="green" round={true} size={50}>
                  </WhatsappIcon>
                </WhatsappShareButton>
                <FacebookShareButton
                style={{marginLeft:"12px"}}
                title={storeDetails.userStore.storeName}
                quote={`Follow My Shop at Shopisthan ${storeDetails.userStore.storeName}`}
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
