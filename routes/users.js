var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Get the user profile
router.get('/', function(req, res, next) {
  res.render('users', {
    user: req.users,
    userProfile: JSON.stringify(req.users, null, '  ')
  });
});

module.exports = router;


