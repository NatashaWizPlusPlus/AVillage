var express = require('express');
var router = express.Router();
// routes/index.js

const passport = require('passport');

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
    res.redirect(req.session.returnTo || '/user');
  }
);

module.exports = router;
//OAUth for Google
// app.get('/auth/google/',
//   passport.authenticate('google'));

// app.get('/auth/google/return',
//   passport.authenticate('google',{ failureRedirect: '/login'}),
//   function(req, res){
//     //Succeful authentication, redirect home
//     res.redirect('/');
//   });  
