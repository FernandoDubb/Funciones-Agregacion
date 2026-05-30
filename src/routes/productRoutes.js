const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');


router.get('/count', productController.countProducts);

router.get('/total', productController.totalValue);

router.get('/average', productController.averageValue);

router.get('/max', productController.maxValue);


module.exports = router;