'use strict';

const { Router } = require('express');
const router = Router();

const {
  addProductCart,
  getActiveOrder,
  completeOrder,
  paymentOptions
} = require('../controllers/orderCtrl.js');

router.get('/cart', isLoggedIn, getActiveOrder)
router.post('/cart/:id', isLoggedIn, addProductCart);
router.get('/complete-order', isLoggedIn, paymentOptions);
router.post('/complete-order', isLoggedIn, completeOrder);


module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/login');
}
