const express = require("express");
const { requireSignin, userMiddleware, uploadS3 } = require("../common-middleware");
const router = express.Router();
const { createProduct, editProduct } = require("../controller/product.controller");
const multer = require("multer");
const path = require("path");
const shortid = require("shortid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

var upload = multer({ storage });

router.post(
  "/create/product",
  requireSignin,
  userMiddleware,
  uploadS3.array("productPictures"),
  createProduct
);

router.post("/edit/product",requireSignin,userMiddleware,editProduct)



module.exports = router;
