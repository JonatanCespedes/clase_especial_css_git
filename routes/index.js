var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Comisión 4' });
});
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Comisión 4' });
});

module.exports = router;
