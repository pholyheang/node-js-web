var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/icon', function(req, res, next) {
  res.render('icon', { title: 'Express'});
});

router.get('/button', function(req, res, next) {
  res.render('button', { title: 'Express'});
});


module.exports = router;
