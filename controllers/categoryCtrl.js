'use strict'

module.exports.getCategories = (req, res, next) => {
  const { Category } = req.app.get('models');
  Category.findAll()
  .then( (categories) => {
    res.render('categories', {categories});
  })
  .catch( (err) => {
    next(err); 
  });
};

module.exports.addCategoryForm = (req, res, next) => {
  const { Category } = req.app.get('models');
  Category.findAll()
  .then( () => {
    res.render('add-category')
  })
  .catch( (err) => {
    next(err);
  }); 
};

module.exports.postCategory = (req, res, next) => {
  const { Category } = req.app.get('models');
  Category.create({
    name: req.body.name
  })
  .then( () => {
    res.redirect('categories');
  })
  .catch( (err) => {
    console.log(err);    
  });
};