'use strict'

module.exports.getProducts = (req, res, next) => {
  const { Product } = req.app.get('models');
  Product.findAll()
  .then( (products) => {
    res.render('products', {products});
  })
  .catch( (err) => {
    next(err); 
  });
};