var express = require('express');
var router = express.Router();
// routes/index.js
const passport = require('passport');


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


const env = {
  AUTH0_CLIENT_ID: 'KZgl1fB7QhYwHXd0XIU4Wn6gGxnKTfe6',
  AUTH0_DOMAIN: 'village.auth0.com',
  AUTH0_CALLBACK_URL: 'http://localhost:3000/callback'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



router.get(
  '/login',
  passport.authenticate('auth0', {
    clientID: '5aZR7JZ44XsJ5o2H0ACoN2AXS3GesYwa',
    domain: 'village.auth0.com',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://village.auth0.com/userinfo',
    responseType: 'code',
    scope: 'openid profile'
  }),
  function(req, res) {
    res.redirect('/');
  }
);

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get(
  '/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/'
  }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/');
  }
);

module.exports = router;