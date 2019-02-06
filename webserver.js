const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

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



const getBreeds = async () => {
  try {
    return await axios.get('https://dog.ceo/api/breeds/image/random/4')
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async () => {
  const breeds = await getBreeds()

  if (breeds.data.message) {
    console.log('4 breeds populated: ', breeds.data.message);
  }
}

let port = 1234;

app.use('/breeds', dataRoute);


app.listen(port, () => {
    console.log('Server is listening on port number: ' + port);
});

