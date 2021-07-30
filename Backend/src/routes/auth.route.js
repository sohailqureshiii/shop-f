const express = require('express');
const { signin, signup, signout, googleController,facebooklogin} = require('../controller/auth');
const { validateSigninRequest, validateSignupRequest, isRequestVaildated } = require('../validators/auth');
const router = express.Router();

router.post('/signin',validateSigninRequest,isRequestVaildated,signin);
router.post('/signup',validateSignupRequest,isRequestVaildated,signup);
router.post('/signout',signout);
router.post('/google-login',googleController);
router.post('/facebooklogin',facebooklogin);
module.exports = router;
