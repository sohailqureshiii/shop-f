const slugify = require("slugify");
const StoreLocation = require("../models/location");
const Category = require("../models/category")

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
