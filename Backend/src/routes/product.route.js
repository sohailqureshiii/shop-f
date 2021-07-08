const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const router = express.Router();
const {createProduct} = require('../controller/product.controller')
const multer = require('multer')
const path = require('path')
const shortid = require('shortid');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.join(path.dirname(__dirname),"uploads"))
    },
    filename: function(req,file,cb){
        cb(null,shortid.generate()+'-'+file.originalname)
    }
})

var upload = multer({storage})

router.post('/create/product',requireSignin,userMiddleware,
upload.
array('productPictures')
,createProduct);

module.exports = router;
