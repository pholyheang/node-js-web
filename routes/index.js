var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/icon', function(req, res, next) {
  res.render('component/icon', { title: 'Express'});
});

router.get('/button', function(req, res, next) {
  res.render('component/button', { title: 'Express'});
});
router.get('/loading', function(req, res, next) {
  res.render('component/loading', { title: 'Express'});
});

router.get('/table', function(req, res, next) {
  res.render('table/stable', { title: 'Express'});
});
router.get('/table-smart', function(req, res, next) {
  res.render('table/table-smart', { title: 'Express'});
});



module.exports = router;
