const mongoose = require (  'mongoose' );
const cartSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cartItems: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
            quantity: { type: Number, defualt: 1 },
        }
    ],
    
    

}
,{timestamps: true}
);

module.exports = mongoose.model('Cart', cartSchema);