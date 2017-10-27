'use strict';

const { Router } = require('express');
const router = Router();

const {
  addProductCart
} = require('../controllers/orderCtrl.js');

router.post('/cart/:id', isLoggedIn, addProductCart);

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/login');
}
