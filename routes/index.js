'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.use(require('./authRoute'));
router.use(require('./productsRoute'));
router.use(require('./categoriesRoute'));
router.use(require('./orderRoute'));
router.use(require('./paymentsRoute'));

module.exports = router;
