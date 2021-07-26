const mongoose = require("mongoose");
const storePlanSchema = new mongoose.Schema(
  {
    planName: {
      type: String,
      required: true,
    },
    planDescription: {
      type: String,
    },
    planPrice: {
      type: Number,
      required: true,
    },
    noOfProducts:{
        type: Number,
        required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("StorePlan", storePlanSchema);
