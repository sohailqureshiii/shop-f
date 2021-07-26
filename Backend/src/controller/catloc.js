const slugify = require("slugify");
const StoreLocation = require("../models/location");
const Category = require("../models/category");
const StorePlan = require("../models/store.plan")

exports.addLocation = (req, res) => {
  const locationobj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  const location = new StoreLocation(locationobj);
  location.save((error, location) => {
    if (error) return res.status(400).json({ error });
    if (location) {
      return res.status(201).json({ location });
    }
  });
};

exports.addCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }

  const cat = new Category(categoryObj);
  cat.save((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category) {
      return res.status(201).json({ category });
    }
  });
};

exports.addStorePlan = (req, res) => {
  const storePlanObj = {
    planName: req.body.planName,
    planDescription: req.body.planDescription,
    planPrice: req.body.planPrice,
    noOfProducts: req.body.noOfProducts,
    noOfCatalogs: req.body.noOfCatalogs,
  };
  const storePlan = new StorePlan(storePlanObj);
  storePlan.save((error, plan) => {
    if (error) return res.status(400).json({ error });
    if (plan) {
      return res.status(201).json({ plan });
    }
  });
};
