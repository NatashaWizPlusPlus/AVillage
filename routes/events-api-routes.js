// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the events
  // app.get("/api/events", function(req, res) {
  //   var query = {};
  //   if (req.query.events_search) {
  //     query.title = req.query.events_search;
  //   }
  //   // left outer join for Items
  //   db.Events.findAll({
  //     where: query,
  //     // include: [db.Users]
  //   }).then(function(dbEvents) {
  //     res.json(dbEvents);
  //   });
  // });

  // app.get("/", function (req, res) {
  //   db.Events.findAll({}).then(function (data) {
  //     var hbsObject = { "Events": data };
  //     res.render('index', hbsObject);
  //   });
  // });

  app.get("/", function (req, res) {
    db.Events.findAll({
      order: [['date', 'ASC']],
      include: [db.Items]
    }).then(function (data) {
      var hbsObject = { "Events": data };
      res.render('index', hbsObject);
    });
  });

  // Get rotue for retrieving a single event
  // app.get("/api/events/:id", function (req, res) {
  //   db.Events.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Items]
  //   }).then(function (dbEvents) {
  //     res.json(dbEvents);
  //   });
  // });


  app.get("/events/:id", function (req, res) {
    db.Events.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Items]
    }).then(function (data) {
      var hbsObject = { "Events": data };
      res.render('event', hbsObject);
    });
  });

  // POST route for saving a new event NOt currently working - no errors thrown
  app.post("/api/events", function (req, res) {
    db.Events.create({
      title: req.body.eventTitle,
      description: req.body.eventDescription,
      date: req.body.eventDate,
      category: req.body.category,
    }).then(function(data) {
    res.redirect('/');
    });
  });

  // DELETE route for deleting events
  app.delete("/api/events/:id", function (req, res) {
    db.Events.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbEvents) {
      res.json(dbEvents);
    });
  });
  // PUT route for updating events
  app.put("/api/events", function (req, res) {
    db.Events.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbEvents) {
        res.json(dbEvents);
      });
  });
};