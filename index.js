//importing necessary modules
const express = require('express');
const app = express();
const path = require('path');
//to use env file
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

const db = require('./config/mongoose');
const Product = require('./models/product');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files with the correct MIME type
app.use('/assets', express.static(path.join(__dirname, 'assets'), { 
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

//importing routes
const productRoutes = require('./routes/productRoutes');

//routes redirection
app.use('/', productRoutes);

//print server status
app.listen(port, function(err) {
  if (err) {
    console.log('Error in running the server', err);
  }
  console.log('Yup! My Server is running on Port', port);
});
