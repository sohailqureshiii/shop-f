const Category = require("../models/category");
const Product = require("../models/product.model");
const Store = require("../models/store");
const StoreLocation = require("../models/location");
const User = require("../models/auth");
const Order = require("../models/order");

exports.userData = async (req, res) => {
  const categories = await Category.find({}).sort("-createdAt").exec();
  const locations = await StoreLocation.find({}).sort("-createdAt").exec();

  const stores = await Store.find({})
  .populate({ path: "createdBy", select: "name" })
    .populate({ path: "storeCategory", select: "_id name" })
    .populate({ path: "storeLocation", select: "_id name" })
    .sort("-createdAt")
    .exec();
  const products = await Product.find({})
    .populate({ path: "productCategory", select: "_id name" })
    .populate({ path: "productParentCategory", select: "_id name" })
    .populate({ path: "storeId", select: "_id storeName " })
    .populate({ path: "storeLocation", select: "_id name" })
    .sort("-createdAt")
    .exec();
  res.status(200).json({
    stores,
    categories,
    locations,
    products,
  });
};

exports.userinitialdata = async (req, res) => {
  const user = await User.findOne({ _id: req.user._id })
    .select("-password")
    .exec();
  const { following } = user;
  const followingProduct = await Product.find({ storeId: { $in: following } })
    .populate({ path: "productCategory", select: "_id name" })
    .populate({ path: "productParentCategory", select: "_id name" })
    .populate({ path: "storeId", select: "_id storeName " })
    .populate({ path: "storeLocation", select: "_id name" })
    .sort("-createdAt")
    .exec();
  const followingStore = await Store.find({ _id: { $in: following } })
    .select("storeName storeProfilePicture")
    .sort("-createdAt")
    .exec();
  // const store = await Store.findOne({createdBy: req.user._id}).exec();
  res.status(200).json({
    user,
    following,
    followingProduct,
    followingStore,
  });
};

// exports.userStoreData = async (req, res) => {

//   const {
//     storeID
//   } = req.body;

//   const store = await Store.findOne({ createdBy: req.user._id })
//     .populate({ path: "storeCategory", select: "_id name" })
//     .populate({ path: "storeLocation", select: "_id name" })
//     .populate({path:"followers",select:"name"})
//     .exec();
//   const product = await Product.find({ storeId:storeID })
//     .populate({ path: "productCategory", select: "_id name" })
//     .populate({ path: "productParentCategory", select: "_id name" })
//     .populate({ path: "storeLocation", select: "_id name" })
//     .sort("-createdAt")
//     .exec();

//  const orders =  Order.find({
//     items: {
//       $elemMatch: {
//         storeId:  req.body.storeID,
//       },
//     },
//   })
//     .populate("items.productId", "productName")
//     .populate({ path: "user", select: "name" })
//     .exec();
//     // let orders = []

//     // if( store._id !== null){
//     //    orders = await Order.find({
//     //     items: {
//     //       $elemMatch: {
//     //         storeId: store._id,
//     //       },
//     //     },
//     //   })
//     //     .populate("items.productId", "productName")
//     //     .populate({ path: "user", select: "name" })
//     //     .exec();
//     // }
//   res.status(200).json({
//     store,
//     product,
//     orders,
//   });
// };

exports.userStoreData = async (req, res) => {
  try {
    let storeDetails = await Store.findOne({ createdBy: req.user._id });

    if (storeDetails) {
      const store = await Store.findOne({ _id: storeDetails._id })
        .populate({ path: "storeCategory", select: "_id name" })
        .populate({ path: "storeLocation", select: "_id name" })
        .populate({ path: "followers", select: "name" })
        .exec();
      const product = await Product.find({ storeId: storeDetails._id })
        .populate({ path: "productCategory", select: "_id name" })
        .populate({ path: "productParentCategory", select: "_id name" })
        .populate({ path: "storeLocation", select: "_id name" })
        .sort("-createdAt")
        .exec();
      const orders = Order.find({
        items: {
          $elemMatch: {
            storeId: storeDetails._id
          },
        },
      })
        .populate("items.productId", "productName")
        .populate({ path: "user", select: "name" })
        .exec();

      return res.status(200).json({
        store,
        product,
        orders
      });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};
