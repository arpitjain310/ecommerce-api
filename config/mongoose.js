const mongoose = require('mongoose');

//connect to the database
mongoose.connect("mongodb://localhost/ecommerce")

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//success
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});