import React, { useState } from 'react'
import './style.css'
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { WhatsappIcon,FacebookIcon } from "react-share";
import {IoMdCreate} from 'react-icons/io'
import DashBoard from '../../../components/DashBoardSidebar'
import  Navbar  from "../../../components/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { shareApi } from '../../../urlConfig';
import { Modal } from '../../../components/MaterialUI';
import { storeProfileAction } from '../../../actions/store.action';

const StoreProfile = () => {
 const storeDetails = useSelector((state)=>state.userStore)
 const [storeProfileEdit,setStoreProfileEdit] = useState(false)
 const [storeProfile, setstoreProfile] = useState('');
 const dispatch = useDispatch()

 const handleProfileImage = (e) => {
  setstoreProfile(e.target.files[0]);

}

const uploadStoreProfile = (e) =>{
  e.preventDefault();
  if(!storeProfile){
    return alert("Select Pic")
  }
  const form = new FormData();
  form.append('storeProfilePicture',storeProfile)
  dispatch(storeProfileAction(form))
  setStoreProfileEdit(false)
  
}


    return (
       <>
       <Navbar/>
        <DashBoard  sidebar>
        <div style={{paddingTop:'135px'}}>
          <div className="StoreCard__container">
        <div className="StoreCard__row">
        <img className="Shop__logo"
         src= {storeDetails.userStore.storeProfilePicture.img ? storeDetails.userStore.storeProfilePicture.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0-c7PZi3hJulH_fnbH3UfG_4iX6ULwsuKQ&usqp=CAU"}
          alt="Logo" />
              <IoMdCreate 
               onClick ={()=>setStoreProfileEdit(true)}
               

               /> 
         
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
      <Modal visible={storeProfileEdit} onClose={()=>setStoreProfileEdit(false)} >
      <input type="file" name="Store Profile" onChange={handleProfileImage} />
      <button
      onClick={uploadStoreProfile}
      >
        Upload
      </button>
      </Modal>
       </>
    )
}

export default StoreProfile
