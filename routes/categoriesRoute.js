'use strict';

const { Router } = require('express');
const router = Router();

const {
  getCategories,
  postCategory,
  addCategoryForm
} = require('../controllers/categoryCtrl.js');

router.get('/categories', getCategories);
router.get('/postCategory', isLoggedIn, addCategoryForm);
router.post('/postCategory', isLoggedIn, postCategory);

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/login');
}