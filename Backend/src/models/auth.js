const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 3,
        max: 30
    },
   
    loginId: { 
      type: String,
      required: true,
      unique: true,
    },
  
      password:{
          type: String,
          required: true
      },
      role:{
          type: String,
          enum: ['user'],
          default: 'user'
      },
      store:{
        type: String,
        enum: ['Yes','No'],
        default: 'No' 
      },
      storeId:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Store'
      },
      contactNumber:{type: String},
      pofilePicture: {type: String},
      following:[{
        type: mongoose.Schema.Types.ObjectId,ref: 'Store'
      }], 
  
  },{timestamps: true});

module.exports = mongoose.model('User',userSchema);




    // useraddress: {
    //     type: String,
    //     trim: true,
    //   },
    // userEmail:{
    //       type: String,
    //       trim: true,
    //       lowercase: true
    //   },


    // email:{
    //   type:String,
    //   required:true
    // },