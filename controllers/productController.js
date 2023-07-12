const Product = require('../models/product');

//read/list operation
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ data: { products } });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

//create operation
exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    await product.save();

    res.status(201).json({ data: { product } });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

//delete operation
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ data: { message: 'Product deleted' } });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

//update operation
exports.updateProductQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.body;
    const product = await Product.findByIdAndUpdate(id, { quantity: number },
    { new: true }
    );
    res.json({ data: { product, message: 'Updated successfully' } });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
