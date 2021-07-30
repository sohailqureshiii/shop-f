const Store = require("../models/store");
const User = require("../models/auth");

exports.createStore = async (req, res) => {
  const {
    userName,
    storeName,
    storeType,
    storeCategory,
    storeLocation,
    storePhoneNo,
    storeAddress,
    storeDescription,
    storePinCode,
    storePlan,
    storeCity,
    storeState,
  } = req.body;

  try {
    let store = await Store.findOne({ createdBy: req.user._id });
    if (store) {
      return res.status(400).json({ message: "Store already Exists" });
    }

    store = new Store({
      userName,
      storeName,
      storeType,
      storeCategory,
      storeLocation,
      storePhoneNo,
      storeAddress,
      storeDescription,
      storePinCode,
      storePlan,
      storeCity,
      storeState,
      createdBy: req.user._id,
    });

    await store.save((error, Store) => {
      if (error) return res.status(400).json({ error });
      if (Store) {
        User.findByIdAndUpdate(
          { _id: req.user._id },
          { $set: { store: "Yes", storeId: store._id } },
          { new: true, useFindAndModify: false },

          (err, data) => {
            if (err) {
              return res.status(400).json({ err });
            }
            if (data) {
              const { _id, name, role, following, loginId, store, storeId } =
                data;
              return res.status(201).json({
                Store,
                user: {
                  _id,
                  name,
                  role,
                  following,
                  loginId,
                  store,
                  storeId,
                },
              });
            }
          }
        );
      }
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};


exports.editStore = async (req, res) => {
  const { storeName, storePhoneNo, storeAddress, storeDescription } = req.body;

  const updatedStoreProfile = await Store.findOneAndUpdate(
    { createdBy: req.user._id },
    { $set: { storeName, storePhoneNo, storeAddress, storeDescription } },
    { new: true, useFindAndModify: false },
    (err, updatedStoreInfo) => {
      if (err) {
        return res.status(400).json({ err });
      }
      if (updatedStoreInfo) {
        const store = Store.findOne({ createdBy: req.user._id })
          .populate({ path: "storeCategory", select: "_id name" })
          .populate({ path: "storeLocation", select: "_id name" })
          .populate({ path: "followers", select: "name" })
          .exec((err, storeInfo) => {
            if (err) return res.status(400).json({ err });
            if (storeInfo) {
              return res.status(201).json({ storeInfo });
            }
          });
      }
    }
  );
};

exports.uploadProfilePic = async (req, res) => {
  let storeProfilePicture = null;
  if (req.file) {
    storeProfilePicture = { img: req.file.location };
  }

  const updatedStoreProfile = await Store.findOneAndUpdate(
    { createdBy: req.user._id },
    { $set: { storeProfilePicture } },
    { new: true, useFindAndModify: false },
    (err, updatedStoreInfo) => {
      if (err) {
        return res.status(400).json({ err });
      }
      if (updatedStoreInfo) {
        const store = Store.findOne({ createdBy: req.user._id })
          .populate({ path: "storeCategory", select: "_id name" })
          .populate({ path: "storeLocation", select: "_id name" })
          .populate({ path: "followers", select: "name" })
          .exec((err, storeInfo) => {
            if (err) return res.status(400).json({ err });
            if (storeInfo) {
              return res.status(201).json({ storeInfo });
            }
          });
      }
    }
  );
};

exports.uploadBackgroundPic = async (req, res) => {
  let storeBackgroundPicture = null;
  if (req.file) {
    storeBackgroundPicture = { img: req.file.location };
  }

  const updatedStoreProfile = await Store.findOneAndUpdate(
    { createdBy: req.user._id },
    { $set: { storeBackgroundPicture } },
    { new: true, useFindAndModify: false },
    (err, updatedStoreInfo) => {
      if (err) {
        return res.status(400).json({ err });
      }
      if (updatedStoreInfo) {
        const store = Store.findOne({ createdBy: req.user._id })
          .populate({ path: "storeCategory", select: "_id name" })
          .populate({ path: "storeLocation", select: "_id name" })
          .populate({ path: "followers", select: "name" })
          .exec((err, storeInfo) => {
            if (err) return res.status(400).json({ err });
            if (storeInfo) {
              return res.status(201).json({ storeInfo });
            }
          });
      }
    }
  );
};
