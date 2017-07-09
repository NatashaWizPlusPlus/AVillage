var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AVillage' });
});

router.get('/eventID', function(req, res, next) {
  res.render('event', { title: 'AVillage' });
});

router.get('/create', function(req, res, next) {
  res.render('create', { title: 'AVillage' });
});

module.exports = router;
