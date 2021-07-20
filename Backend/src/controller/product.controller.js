const Store = require("../models/store");
const User = require("../models/auth");
const Product = require("../models/product.model");

exports.createProduct = async (req, res) => {
  const {
    productName,
    productPrice,
    productQuantity,
    productDescription,
    productCategory,
  } = req.body;

  let productPictures = [];

  // if (req.files.length > 0) {
  //   productPictures = req.files.map(file => {
  //     return { img: file.filename };
  //   });
  // }
  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.location };
    });
  }

  try {
    let store = await Store.findOne({ createdBy: req.user._id });
    if (!store) {
      return res.status(400).json({ message: "Something went worng" });
    }

    product = new Product({
      productName,
      productPrice,
      productQuantity,
      productDescription,
      productCategory,
      productPictures,
      productParentCategory: store.storeCategory,
      createdBy: req.user._id,
      storeId: store._id,
      storeLocation: store.storeLocation,
    });

    await product.save((error, product) => {
      if (error) return res.status(400).json({ "error ": error });
      if (product) {
        return res.status(200).json({ product });
      }
    });
  } catch (error) {
    return res.status(400).json({ "error ": error });
  }
};

// exports.createProduct = (req, res) => {
//   //res.status(200).json( { file: req.files, body: req.body } );

//   const {

//         productName,
//         productPrice,
//         productQuantity,
//         productDescription,
//         productCategory,
//         productParentCategory,
//         storeLocation,

//   } = req.body;
//   let productPictures = [];

//   if (req.files.length > 0) {
//     productPictures = req.files.map(file => {
//       return { img: file.filename };
//     });
//   }

//   const product = new Product({
//     productName,
//     productPrice,
//     productQuantity,
//     productDescription,
//     productCategory,
//     createdBy: req.user._id,
//     productParentCategory,
//     storeLocation,
//     productPictures
//   });

//   product.save((error, product) => {
//     if (error) return res.status(400).json({ error });
//     if (product) {
//       res.status(201).json({ product, files: req.files });
//     }
//   });
// };

exports.editProduct = async (req, res) => {
  const {
    productName,
    productPrice,
    productQuantity,
    productDescription,
    _id,
    productCategory,
  } = req.body;

  const updatedProduct = await Product.findOneAndUpdate(
    { _id: _id },
    {
      $set: {
        productName,
        productPrice,
        productQuantity,
        productDescription,
        productCategory,
      },
    },
    { new: true, useFindAndModify: false },
    (err, updatedProductInfo) => {
      if (err) {
        return res.status(400).json({ err });
      }
      if (updatedProductInfo) {
        return res.status(201).json({ updatedProductInfo });
      }
    }
  );
};
