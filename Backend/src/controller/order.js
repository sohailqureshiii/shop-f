const Order = require("../models/order");
const Cart = require("../models/cart");
const Address = require("../models/address");
const Store = require("../models/store");


function reviceStorePhoneNo(orderId) {
  Order.findOne({ _id: orderId })
    .select("storeID")
    .populate("storeID.storeId", "_id storeName storePhoneNo ")
    .exec((error, order) => {
      if (error) return res.status(400).json({ error });
      if (order) {
        let storePh = order.storeID.map((obj) => obj.storeId.storePhoneNo);
         storePh.forEach(element => {
           console.log(element);
         });
      }
    });
  
}

exports.addOrder = (req, res) => {
  Cart.deleteOne({ user: req.user._id }).exec((error, result) => {
    if (error) return res.status(400).json({ error });
    if (result) {
      req.body.user = req.user._id;
      req.body.orderStatus = [
        {
          type: "ordered",
          date: new Date(),
          isCompleted: true,
        },
        {
          type: "packed",
          isCompleted: false,
        },
        {
          type: "shipped",
          isCompleted: false,
        },
        {
          type: "delivered",
          isCompleted: false,
        },
      ];
      const order = new Order(req.body);
      order.save((error, order) => {
        if (error) return res.status(400).json({ error });
        if (order) {
          res.status(201).json({ order });

          // reviceStorePhoneNo(order._id)

          // Order.findOne({ _id: order._id })
          // .select("storeID")
          // .populate("storeID.storeId", "_id storeName storePhoneNo ")
          // .exec((error, order) => {
          //   if (error) return res.status(400).json({ error });
          //   if (order) {
          //     // res.status(200).json({
          //     //   order,
          //     // });
          //     let storePh = order.storeID.map((obj) => obj.storeId.storePhoneNo);
          //     console.log(storePh);
          //   }
          // });

        
        }
      });
    }
  });
};

exports.getOrders = async (req, res) => {
  await Order.find({ user: req.user._id })
    .select("_id paymentStatus paymentType orderStatus items totalAmount")
    .populate("items.productId", "_id productName productPictures")
    .exec((error, orders) => {
      if (error) return res.status(400).json({ error });
      if (orders) {
        res.status(200).json({ orders });
      }
    });
};

exports.getOrder = (req, res) => {
  Order.findOne({ _id: req.body.orderId })
    .populate("items.productId", "_id name productPictures")
    .lean()
    .exec((error, order) => {
      if (error) return res.status(400).json({ error });
      if (order) {
        Address.findOne({
          user: req.user._id,
        }).exec((error, address) => {
          if (error) return res.status(400).json({ error });
          order.address = address.address.find(
            (adr) => adr._id.toString() == order.addressId.toString()
          );
          res.status(200).json({
            order,
          });
        });
      }
    });
};

// exports.storeOrders = async (req, res) => {
//   const storeId = await Store.findOne({createdBy: req.user._id})
//   const orders = await Order.find({
//     items: {
//       $elemMatch: {
//         storeId: storeId._id
//       },
//     },
//   })
//     .populate("items.productId", "productName")
//     .exec((error, orders) => {
//       if (error) return res.status(400).json({ error });
//       if (orders) {
//         res.status(200).json({
//           orders
//         });
//       }
//     });
// };

exports.getStorePhone = (req, res) => {
  Order.findOne({ _id: req.body.orderId })
    .select("storeID")
    .populate("storeID.storeId", "_id storeName storePhoneNo ")
    .exec((error, order) => {
      if (error) return res.status(400).json({ error });
      if (order) {
        res.status(200).json({
          order,
        });
        let storePh = order.storeID.map((obj) => obj.storeId.storePhoneNo);
        console.log(storePh);
      }
    });
};


  // const data = order
  // const st =  Order
  // .populate(order,{path:'storeID.storeId',select:'_id storeName storePhoneNo'})
  // .execPopulate();
  // console.log(st);
  

  // Order
  //   .select("storeID")
  //   .populate("storeID.storeId", "_id storeName storePhoneNo ")
  //   .exec((error, storePhones) => {
  //     if (error) return res.status(400).json({ error });
  //     if (storePhones) {
  //       let storePh = storePhones.storeID.map(
  //         (obj) => obj.storeId.storePhoneNo
  //       );
  //       console.log(storePh);
  //     }
  //   });