const express = require('express');
const { addCatalog } = require('../controller/catalog');
const router = express.Router();
const {requireSignin,userMiddleware} = require('../common-middleware/index')


router.post('/category/catalog',requireSignin,userMiddleware,addCatalog)


module.exports = router;