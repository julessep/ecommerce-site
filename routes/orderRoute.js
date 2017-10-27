'use strict';

const { Router } = require('express');
const router = Router();

const {
  addProductCart,
  getActiveOrder
} = require('../controllers/orderCtrl.js');

router.get('/cart', isLoggedIn, getActiveOrder);
router.post('/cart/:id', isLoggedIn, addProductCart);

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/login');
}
