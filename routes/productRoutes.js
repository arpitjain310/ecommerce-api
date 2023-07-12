const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//crud routes
router.post('/create', productController.createProduct);
router.get('/', productController.listProducts);
router.put('/:id/update_quantity', productController.updateProductQuantity);
router.delete('/:id/delete', productController.deleteProduct);

module.exports = router;
