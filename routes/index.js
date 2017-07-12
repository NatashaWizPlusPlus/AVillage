var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AVillage' });
});

// router.get('/event/:id', function(req, res, next) {
//   res.render('event', { title: 'Event Information' });
// });

router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Create Event' });
});

module.exports = router;