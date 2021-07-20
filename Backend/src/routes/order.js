const { requireSignin, userMiddleware } = require("../common-middleware");
const { addOrder, getOrders, getOrder, getStorePhone } = require("../controller/order");
const router = require("express").Router();

router.post("/addOrder", requireSignin, userMiddleware, addOrder);
router.get("/getOrders", requireSignin, userMiddleware, getOrders);
router.post("/getOrder", requireSignin, userMiddleware, getOrder);
router.post("/storePhone", getStorePhone);
module.exports = router;