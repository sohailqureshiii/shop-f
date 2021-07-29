const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');


//routes



const userRoutes = require('./routes/auth.route');
const storeRoutes = require('./routes/store');
const productRoutes = require('./routes/product.route')
const cartRoutes = require('./routes/cart.route');
const addressRoutes = require('./routes/address.route');
const oderRoutes = require('./routes/order');
// const wishListRoutes = require('./routes/wishlist');
const userinitialdata = require('./routes/userinitialdata');
const followRoutes = require('./routes/follow.route');
// const UsereditProfile = require('./routes/auth');
const catloc = require('./routes/catloc')
const catalog = require('./routes/catalog')

// environment variable 
env.config();

// mongodb connection
// `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@e-commcluster.m62kr.mongodb.net
    // /${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.iwbbb.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
 ).then(() => {
        console.log(`Database connected to ${process.env.MONGO_DB_DATABASE}`);
    });


app.use(cors());
app.use(express.json());


app.use('/api',userRoutes);
app.use('/api',storeRoutes);
app.use('/api',productRoutes)
app.use('/api', cartRoutes);
app.use('/api', addressRoutes);
app.use('/api', oderRoutes);
// app.use('/api', wishListRoutes);
app.use('/api',userinitialdata);
app.use('/api',followRoutes);
// app.use('/api',UsereditProfile)
 
app.use('/api',catloc)
app.use('/api',catalog);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})



// {
//     "userName":"rahul",
//    "storeName":"mi store",
//    "storeType":"Home Made",
//    "storeCategory":"60e2df39898d7732bcec45d3",
//    "storeLocation":"60e2dfa1898d7732bcec45e9",
//    "storePhoneNo":"1234567890",
//    "storeAddress":"abcd 12 abcd 12",
//    "storeDescription":"N.A.N.A",
//    "storePinCode":"4110032"
// }


// 2982396945335003
// 8fe1d543f7e5cc1d55ccc119bbd1cef1