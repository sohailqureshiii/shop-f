const express = require('express');
const { addCategory, addLocation,addStorePlan } = require('../controller/catloc');
const router = express.Router();


router.post('/category/create',addCategory)
router.post(`/addloaction`,addLocation)
router.post('/addStorePlan',addStorePlan)

module.exports = router;