const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const {userData, userStoreData, userinitialdata } = require('../controller/userinitialdata');
const router = express.Router();


router.get('/userData',userData);
router.get('/userStoreData',requireSignin,userMiddleware,userStoreData)
router.get('/userInitialdata',requireSignin,userMiddleware,userinitialdata)
// router.get('/userData',requireSignin,userMiddleware,userData);

module.exports = router;
