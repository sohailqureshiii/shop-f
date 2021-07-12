const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productDescription: {
        type: String,
        require: true,
        trim: true
    },
    productPictures: [
        {
            img: { type: String }
        }
    ],
    productOutOfStock:{
        type: String,
        enum: ['Yes','No'],
        default: 'No'
    },
    productDiscount:{
        type: String,
        enum: ['Yes','No'],
        default: 'No'
    },
    productDiscountedPrice:{
        type: Number,
    
    },
    productDiscountedPercentage:{
        type: Number,
    },
    productCategory: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true
    },
    productParentCategory: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true

    },
    storeId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true

    },
    storeLocation: {
        type: mongoose.Schema.Types.ObjectId, ref: 'StoreLocation', required: true

    },
    updatedAt: Date,


}, { timestamps: true });


module.exports = mongoose.model("Product", productSchema)