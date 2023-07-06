const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//crud routes
router.post('/create', productController.createProduct);
router.get('/', productController.listProducts);
router.post('/:id/update_quantity', productController.updateProductQuantity);
router.post('/:id/delete', productController.deleteProduct);

module.exports = router;
