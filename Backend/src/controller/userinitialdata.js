const Category = require("../models/category");
const Product = require("../models/product.model");
const Store = require("../models/store");
const StoreLocation = require("../models/location");
const User = require("../models/auth");
const Order = require("../models/order");
const Catalog = require("../models/catalog");
const StorePlan = require("../models/store.plan");

exports.userData = async (req, res) => {
  const categories = await Category.find({}).sort("-createdAt").exec();
  const locations = await StoreLocation.find({}).sort("-createdAt").exec();
  const storePlans = await StorePlan.find({}).exec();

  const stores = await Store.find({})
    .populate({ path: "createdBy", select: "name" })
    .populate({ path: "storeCategory", select: "_id name" })
    .populate({ path: "storeLocation", select: "_id name" })
    .populate({ path: "storeCatalogs", select: "_id name" })
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
    storePlans,
  });
};

exports.userinitialdata = async (req, res) => {
  try {
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
    res.status(200).json({
      user,
      following,
      followingProduct,
      followingStore,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

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
      const catalog = await Catalog.find({ storeId: storeDetails._id })
        .select("name")
        .sort("-createdAt")
        .exec();
      const orders = Order.find({
        items: {
          $elemMatch: {
            storeId: storeDetails._id,
          },
        },
      })
        .populate("items.productId", "productName")
        .populate({ path: "user", select: "name" })
        .sort("-createdAt")
        .exec();

      return res.status(200).json({
        store,
        product,
        orders,
        catalog,
      });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};
