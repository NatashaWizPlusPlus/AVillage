// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the events
  app.get("/api/events", function(req, res) {
    var query = {};
    if (req.query.events_search) {
      query.title = req.query.events_search;
    }
    // left outer join for Items
    db.Events.findAll({
      where: query,
      // include: [db.Users]
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });
  // Get rotue for retrieving a single event
  app.get("/api/events/:id", function(req, res) {
    db.Events.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Items]
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });
  // POST route for saving a new event
  app.post("/api/events", function(req, res) {
    db.Events.create(req.body).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });
  // DELETE route for deleting events
  app.delete("/api/events/:id", function(req, res) {
    db.Events.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });
  // PUT route for updating events
  app.put("/api/events", function(req, res) {
    db.Events.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbEvents) {
        res.json(dbEvents);
      });
  });
};