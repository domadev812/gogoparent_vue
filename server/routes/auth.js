var express = require('express');
var router = express.Router();

var AuthController = require('../controllers/AuthController');
// get token
router.get('/token', function (req, res) {
  AuthController.getToken(req, res);
});

module.exports = router;