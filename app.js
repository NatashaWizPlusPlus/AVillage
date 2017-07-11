var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var fs = require('fs');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// Configure Passport to use Auth0
const strategy = new Auth0Strategy({
  domain: 'village.auth0.com',
  clientID: '5aZR7JZ44XsJ5o2H0ACoN2AXS3GesYwa',
  clientSecret: 'TjUIe4Z4dWQ5SEACqBH3bMkWKmemf7EmVBo7Xj0zqM2z_v9gMnU6kYmlT03smWby',
  callbackURL:  'http://localhost:3000/callback'
}, (accessToken, refreshToken, extraParams, profile, done) => {
  return done(null, profile);
});

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// ...
app.use(passport.initialize());
app.use(passport.session());

// //Google Passport
// passport.use(new GoogleStrategy({
//   returnURL:'http://localhost:3000/'
// },
// function(identifier, done){
//   User.findByOpenID({ openId:identifier }, function(err, user){
//     return done (err, user);
//   });
// }
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3000;

  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });

module.exports = app;

