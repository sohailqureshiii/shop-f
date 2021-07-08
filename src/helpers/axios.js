// import React, { useEffect } from "react";
// import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { api } from '../urlConfig';
// import { useEffect } from 'react';

   // window.location.reload();

// const token = window.localStorage.getItem('token');

// useEffect(()=>{
//    if(!token){
//     auth = useSelector((state)=>state.auth);
//     token = auth.token
//    }
   
//    // cosnt auth = useSelector((state)=>state.auth);
//  },[])
 

// const auth ="";

// // if(!token){
  
// // }




const axiosIntance = axios.create({
   
   // const auth = useSelector((state=>state.auth)),
   // // if(token){

   // //   return token = auth.token
   // //  },
   baseURL: api,
  //  headers: {'Content-Type': 'multipart/form-data' }
   // headers: {
   //    'Content-Type': 'application/json',
   //  },
   // headers:{
   //  //  'Authorization': token ? `Bearer ${token}` : ""
   //   'Authorization': token ? "Bearer " + token : ""
   // }
});


axiosIntance.interceptors.request.use(
   config => {
     const token = window.localStorage.getItem('token');
 
     if (token) {
       config.headers.Authorization = `Bearer ${token}`;
     } else {
       delete axiosIntance.defaults.headers.common.Authorization;
     }
     return config;
   },
 
   error => Promise.reject(error)
 );
 

export default axiosIntance;