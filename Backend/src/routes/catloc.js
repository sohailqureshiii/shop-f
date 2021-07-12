const express = require('express');
const { addCategory, addLocation } = require('../controller/catloc');
const router = express.Router();


router.post('/category/create',addCategory)
router.post(`/addloaction`,addLocation)

module.exports = router;