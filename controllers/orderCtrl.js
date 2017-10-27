'use strict'

const passport = require('passport');
// veriable to set the active order
let activeOrder = null; 

// 
module.exports.addProductCart = (req, res, next) => {
  const { Order, Product } = req.app.get('models');
  Order.findAll({
    where: {
      userId: req.session.passport.user.id,
      paymentId: null
    }
  })
  .then( (order) => {
    // checks to see if the user has an active order
    if(order[0]){
      Order.findById(order[0].id, {
        include: [{ model: Product }]
      }).then(activeOrder => {
        activeOrder.addProducts(req.params.id);
        res.redirect('/products');
      });
    // if not a new order is created
    } else {
      createOrder(req, res, next)
    }
  })
  .catch(err => {
    next(err);
  });
};

// adds new order to Orders 
let createOrder = (req, res, next) => {
  let currentUser = req.session.passport.user.id; 
  const { Order } = req.app.get('models');
  let newOrder = {
    paymentId: null,
    userId: req.session.passport.user.id,
    createdAt: new Date().toISOString()
  }
  Order.create(newOrder) 
  .then( () => {
    module.exports.addProductCart(req, res, next);
  });
};
