'use strict';

const { Router } = require('express');
const router = Router();

const {
  getPayments,
  postPayment,
  addPaymentForm
} = require('../controllers/paymentCtrl.js');

router.get('/payments', isLoggedIn, getPayments);
router.get('/postPayment', isLoggedIn, addPaymentForm);
router.post('/postPayment', isLoggedIn, postPayment);

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/login');
}