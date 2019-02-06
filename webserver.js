const express = require('express');
const bodyParser = require('body-parser');

// Imports routes for the products
const dataRoute = require('./route');

// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds223685.mlab.com:23685/producttutorialnode';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/data', dataRoute);

let port = 1234;

app.listen(port, () => {
    console.log('Server is listening on port number: ' + port);
});

