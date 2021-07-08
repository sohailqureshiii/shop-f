const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const shopSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    storeName: {
      type: String,
      required: true,
    },
    storeType: {
      type: String,
      required: true,
      trim: true,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    storeProfilePicture: {
      img: { type: String },
    },
    storeBackgroundPicture: {
      img: { type: String },
    },
    storeCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    storeLocation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StoreLocation",
      required: true,
    },
    storePhoneNo: {
      type: Number,
      trim: true,
      required: true,
    },
    storeAddress: {
      type: String,
      trim: true,
      required: true,
    },
    storeDescription: {
      type: String,
      default: "N.A",
    },
    storePinCode: {
      type: String,
      trim: true,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Store", shopSchema);
