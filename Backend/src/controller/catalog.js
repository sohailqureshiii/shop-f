const Catalog = require("../models/catalog");
const Store = require("../models/store")

exports.addCatalog = async (req, res) => {
  try {
    let store = await Store.findOne({ createdBy: req.user._id });
    if (!store) {
      return res.status(400).json({ message: "Something went worng" });
    }

    if(!req.body.name){
      return res.status(400).json({ message: "Enter the values" });
    }
    catalog = new Catalog({
      name: req.body.name,
      createdBy: req.user._id,
      storeId: store._id,
    });

    await catalog.save((error, catalog) => {
      if (error) return res.status(400).json({ error });
      if (catalog) {
        return res.status(201).json({ catalog });
      }
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
