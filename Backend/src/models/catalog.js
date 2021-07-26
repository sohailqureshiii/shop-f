const mongoose = require('mongoose')
const catalogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true

    },
    storeId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true
    }
}, { timestamps: true });


module.exports = mongoose.model("Catalog", catalogSchema)