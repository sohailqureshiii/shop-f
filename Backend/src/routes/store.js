const express = require('express');
const { userMiddleware, requireSignin, uploadS3 } = require('../common-middleware');
const router = express.Router();
const {createStore} = require('../controller/store')



router.post('/store/create',requireSignin,userMiddleware,createStore);

module.exports = router;
