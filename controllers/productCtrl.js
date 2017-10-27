'use strict'

const passport = require('passport');

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

module.exports.getOneProduct = (req, res, next) => {
  // console.log("getOneProduct ");
  // console.log(req.session.passport.user.id);
  const { Product, Category } = req.app.get('models'); 
  // console.log(Category);
  Product.findOne({where: {id: req.params.id} })
  .then( (data) => {
      const {dataValues:product} = data;
      res.render('product-details', {product});        
  })
  .catch( (err) => {
    console.log('error!')
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
  const { Product, Category } = req.app.get('models');
  Product.create({
    userId: req.session.passport.user.id,
    title: req.body.title,
    quantity: req.body.quantity,
    price: req.body.price,
    category: req.body.category,
    categoryId: req.body.selectval,
    date_added: req.body.date
  })
  .then( () => {
    res.redirect('products');
  })
  .catch( (err) => {
    console.log(err);    
  });
};