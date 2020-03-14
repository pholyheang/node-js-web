var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/icon', function(req, res, next) {
  res.render('partials/ionic/font_ionic', { title: 'Express' });
});

module.exports = router;
