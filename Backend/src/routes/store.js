const express = require('express');
const { userMiddleware, requireSignin, uploadS3 } = require('../common-middleware');
const router = express.Router();
const {createStore,uploadProfilePic,uploadBackgroundPic} = require('../controller/store')



router.post('/store/create',requireSignin,userMiddleware,createStore);
router.post('/store/profilepic',requireSignin,userMiddleware,uploadS3.single('storeProfilePicture'),uploadProfilePic);
router.post('/store/backpic',requireSignin,userMiddleware,uploadS3.single('storeBackgroundPicture'),uploadBackgroundPic);



module.exports = router;
