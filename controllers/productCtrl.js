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

module.exports.addProductForm = (req, res, next) => {
  const { Category } = req.app.get('models');
  Category.findAll()
  .then( (categories) => {
    res.render('add-product', {
      categories
    });
  })
  .catch( (err) => {
    next(err);
  }); 
};

module.exports.postProduct = (req, res, next) => {
  const { Product } = req.app.get('models');
  Product.create({
    title: req.body.title,
    quantity: req.body.quantity,
    price: req.body.price,
    category: req.body.category,
    categoryId: req.body.selectval
  })
  .then( () => {
    res.redirect('products');
  })
  .catch( (err) => {
    console.log(err);    
  });
};