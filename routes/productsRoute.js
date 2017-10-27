'use strict';

const { Router } = require('express');
const router = Router();

const {
  getProducts,
  postProduct,
  addProductForm,
  getOneProduct
} = require('../controllers/productCtrl.js');


router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);
router.get('/postProduct', isLoggedIn, addProductForm);
router.post('/postProduct', isLoggedIn, postProduct);

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/login');
}
