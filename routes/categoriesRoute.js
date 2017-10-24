'use strict';

const { Router } = require('express');
const router = Router();

const {
  getCategories,
  postCategory,
  addCategoryForm
} = require('../controllers/categoryCtrl.js');

router.get('/categories', getCategories);
router.get('/postCategory', addCategoryForm);
router.post('/postCategory', postCategory);

module.exports = router;