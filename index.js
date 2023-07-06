const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'assets')));

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
