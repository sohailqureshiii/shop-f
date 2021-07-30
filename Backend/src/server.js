const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/auth.route");
const storeRoutes = require("./routes/store");
const productRoutes = require("./routes/product.route");
const cartRoutes = require("./routes/cart.route");
const addressRoutes = require("./routes/address.route");
const oderRoutes = require("./routes/order");
const userinitialdata = require("./routes/userinitialdata");
const followRoutes = require("./routes/follow.route");
const catloc = require("./routes/catloc");
const catalog = require("./routes/catalog");

env.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.iwbbb.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log(`Database connected to ${process.env.MONGO_DB_DATABASE}`);
  });

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", storeRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", addressRoutes);
app.use("/api", oderRoutes);
app.use("/api", userinitialdata);
app.use("/api", followRoutes);

app.use("/api", catloc);
app.use("/api", catalog);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
