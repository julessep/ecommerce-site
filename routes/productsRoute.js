'use strict';

const { Router } = require('express');
const router = Router();

const {
  getProducts,
  postProduct,
  addProductForm
} = require('../controllers/productCtrl.js');

// need to change to only get top 20 
router.get('/bestsellers', getProducts);
router.get('/products', getProducts);
router.get('/postProduct', addProductForm);
router.post('/postProduct', postProduct);

module.exports = router;
