var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var hb = require('express-handlebars');

var methodOverride = require('method-override');


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

app.use(passport.initialize());
app.use(passport.session());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
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

   
    db.Categories.create({
      name: 'film',
      imgURL: './images/film.png'
    });
    db.Categories.create({
      name: 'game',
      imgURL: './images/game.png'
    });
    db.Categories.create({
      name: 'music',
      imgURL: './images/music.png'
    });
    db.Categories.create({
      name: 'party',
      imgURL: './images/party.png'
    });
    db.Categories.create({
      name: 'play',
      imgURL: './images/play.png'
    });
    db.Categories.create({
      name: 'art',
      imgURL: './images/art.png'
    });
    db.Events.create({
      title: 'Hip-Hop Video Shoot!',
      description: 'this is the description for event 1',
      date: '08/12/2017 10:00 AM',
      category: 'film',
      CategoryId: '1'
    });
    db.Events.create({
      title: 'Giant Game of Capture the Flag!',
      description: 'this is the description for event 2',
      date: '08/13/2017 1:00 PM',
      category: 'game',
      CategoryId: '2'
    });
    db.Events.create({
      title: '100 People Playing Guitar at the Beach!',
      description: 'this is the description for event 3',
      date: '08/14/2017 09:00 PM',
      category: 'music',
      CategoryId: '3'
    });
    db.Events.create({
      title: 'Neighborhood Potluck',
      description: 'this is the description for event 4',
      date: '09/11/2017 10:30 PM',
      category: 'party',
      CategoryId: '4'
    });
    db.Events.create({
      title: 'A Midsummer Night'+"'"+ 's Dream - In the Park',
      description: 'this is the description for event 5',
      date: '10/11/2017 12:00 PM',
      category: 'play',
      CategoryId: '5'
    });
    db.Events.create({
      title: 'New Gallery Opening Event!',
      description: 'this is the description for event 6',
      date: '12/11/2017 11:20 AM',
      category: 'art',
      CategoryId: '6'
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


module.exports = app;

