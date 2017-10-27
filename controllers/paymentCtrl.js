'use strict'

const passport = require('passport');

module.exports.getPayments = (req, res, next) => {
  const { Payment } = req.app.get('models');
  Payment.findAll()
  .then( (payments) => {
    res.render('payments', {payments});
  })
  .catch( (err) => {
    next(err); 
  });
};

module.exports.addPaymentForm = (req, res, next) => {
    res.render('add-payment')
};

module.exports.postPayment = (req, res, next) => {
  console.log(req.session.passport.user.id);

  const { Payment } = req.app.get('models');
  Payment.create({
    userId: req.session.passport.user.id,
    cardNickname: req.body.cardNickname,
    cardNumber: req.body.cardNumber
  })
  .then( () => {
    res.redirect('payments');
  })
  .catch( (err) => {
    console.log(err);    
  });
};