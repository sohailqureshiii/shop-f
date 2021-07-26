const Catalog = require("../models/catalog");
const Store = require("../models/store");

exports.addCatalog = async (req, res) => {
  try {
    let store = await Store.findOne({ createdBy: req.user._id })
      .select("storePlan")
      .populate({ path: "storePlan", select: "_id noOfCatalogs" })
      .exec();
    if (!store) {
      return res.status(400).json({ message: "Something went worng" });
    }

    if (store) {
      const catalogLimit = store.storePlan.noOfCatalogs;
      const noOfStoreCatalogs = await Catalog.find({
        createdBy: req.user._id,
      }).countDocuments();

      if (catalogLimit > noOfStoreCatalogs) {
        if (!req.body.name) {
          return res.status(400).json({ message: "Enter the name" });
        }
        catalog = new Catalog({
          name: req.body.name,
          createdBy: req.user._id,
          storeId: store._id,
        });
        await catalog.save((error, catalog) => {
          if (error) return res.status(400).json({ error });
          if (catalog) {
            Store.findByIdAndUpdate(
              store._id,
              {
                $push: { storeCatalogs: catalog._id },
              },
              {
                new: true,
                useFindAndModify: false,
              },
              (err, result) => {
                if (err) {
                  return res.status(422).json({ error: err });
                }
                if (result) {
                  return res.status(201).json({ catalog });
                }
              }
            );
          }
        });
      } else {
        return res.status(400).json({ message: "No more" });
      }
    }

    // if (!req.body.name) {
    //   return res.status(400).json({ message: "Enter the name" });
    // }
    // catalog = new Catalog({
    //   name: req.body.name,
    //   createdBy: req.user._id,
    //   storeId: store._id,
    // });

    // await catalog.save((error, catalog) => {
    //   if (error) return res.status(400).json({ error });
    //   if (catalog) {
    //     Store.findByIdAndUpdate(
    //       store._id,
    //       {
    //         $push: {storeCatalogs:catalog._id},
    //       },
    //       {
    //         new: true,
    //         useFindAndModify: false,
    //       },
    //       (err, result) => {
    //         if (err) {
    //           return res.status(422).json({ error: err });
    //         }
    //         if (result) {
    //           return res.status(201).json({ catalog });
    //         }
    //       }
    //     );
    //   }
    // });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
