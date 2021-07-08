const express = require('express');
const { signin, signup, edituserProfile, signout ,googlelogin, googleController} = require('../controller/auth');
const { validateSigninRequest, validateSignupRequest, isRequestVaildated } = require('../validators/auth');
const { userMiddleware, requireSignin } = require('../common-middleware');
const router = express.Router();

router.post('/signin',validateSigninRequest,isRequestVaildated,signin);
router.post('/signup',validateSignupRequest,isRequestVaildated,signup);
// router.post('/googlelogin',googlelogin)
// router.post('/signout',signout);
router.post('/google-login',googleController);
// router.post('/user/editprofile',requireSignin,userMiddleware,edituserProfile);

module.exports = router;
