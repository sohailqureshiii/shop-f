const Store = require("../models/store");
const User = require("../models/auth")

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
      createdBy: req.user._id,
    });

   
    await store.save((error, store) => {
      if (error) return res.status(400).json({ error });
      if (store) {
 
      User.findByIdAndUpdate({_id:req.user._id},{$set:{store:"Yes",storeId:store._id}},
       {new:true,useFindAndModify: false},
       (err,data)=>{
        if(err) {
                     return res.status(400).json({err});
                }
                if(data){
                    return res.status(201).json({data,store});
                }
       }
       )
        
        // res.status(201).json({ store });
      }
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Store.findByIdAndUpdate(req.body.followId,{
  //         $push:{followers: req.user._id}
  //     },{
  //         new:true,useFindAndModify: false
  //     },(err,result)=>{
  //         if(err){ 
  //             return res.status(422).json({error:err})
  //         }

  // const updatedProduct = await Product.findOneAndUpdate({_id:_id},{$set:{name, price, description, quantity,discount,discountPrice,discountPercentage }},
  //   {new:true,useFindAndModify: false},
  //   (err,updatedProductInfo)=>{
  //       if(err) {
  //            return res.status(400).json({err});
  //       }
  //       if(updatedProductInfo){
          
  //           return res.status(201).json({updatedProductInfo});
  //       }

  //   })