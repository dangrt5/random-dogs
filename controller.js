const Product = require('./model');
// import axios from 'axios';

// Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.breeds = function (req, res) {
    console.log("HELLOOOOO");
    res.send({"hello": "hello"})
};
