const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const controller = require('./controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', controller.test);

module.exports = router;