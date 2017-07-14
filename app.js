var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var hb = require('express-handlebars');

var fs = require('fs');
// Requiring our models for syncing
var db = require("./models");
var index = require('./routes/index');
var users = require('./routes/users');
var app = express();
// app.js for Oauth

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.engine ('hbs', hb({defaultLayout:'layout'}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Requiring our routes
require("./routes/events-api-routes.js")(app);
require("./routes/users-api-routes.js")(app);
require("./routes/items-api-routes.js")(app);

app.use('/', index);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || 3000;

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);

    //Dummy data -- to delete later more dummies to test dynamic modals
    db.Users.create({
      name: 'Chris'
    });
    db.Users.create({
      name: 'Nick'
    });
    db.Events.create({
      title: 'Event 1',
      description: 'this is the description for event 1',
      date: '06/12/2017 10:00 AM',
      category: 'party',
    });
    db.Events.create({
      title: 'Event 2',
      description: 'this is the description for event 2',
      date: '06/13/2017 10:00 AM',
      category: 'film',
    });
    db.Events.create({
      title: 'Event 3',
      description: 'this is the description for event 3',
      date: '06/14/2017 10:00 AM',
      category: 'play',
    });
    db.Events.create({
      title: 'Event 4',
      description: 'this is the description for event 4',
      date: '06/11/2017 10:00 AM',
      category: 'game',
    });
    db.Items.create({
      title: 'item1',
      description: 'description of item1',
      quantity: 4,
      donated: false
    });

  });
});

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

module.exports = app;

