'use strict';

const { Router } = require('express');
const router = Router();

const {
  getProducts
} = require('../controllers/productCtrl.js');

// need to change to only get top 20 
router.get('/bestsellers', getProducts);

module.exports = router;
