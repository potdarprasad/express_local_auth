var express = require('express');
const isLoggedIn = require('../utils/middlewares/isLoggedIn');
var router = express.Router();

/* GET home page. */
router.get('/', isLoggedIn,(req, res, next) =>{
  res.render('dashboard');
});

module.exports = router;
