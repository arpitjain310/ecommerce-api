const Product = require('../models/product');

//read/list operation
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (error) {
    res.render('message', { message: 'An error occurred' });
  }
};

//create operation
exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    await product.save();

    res.render('message', { message: 'Product added successfully' });
  } catch (error) {
    res.render('message', { message: 'An error occurred' });
  }
};

//delete operation
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    res.render('message', { message: 'An error occurred' });
  }
};

//update operation
exports.updateProductQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    await Product.findByIdAndUpdate(id, { quantity });
    res.redirect('/');
  } catch (error) {
    res.render('message', { message: 'An error occurred' });
  }
};
