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
  // GET route for getting all of the items
  app.get("/api/items", function(req, res) {
    var query = {};
    if (req.query.items_search) {
      query.title = req.query.items_search;
    }
    // left outer join for Items
    db.Items.findAll({
      where: query,
      // include: [db.Users]
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });
  // Get route for retrieving a single item
  app.get("/api/items/:id", function(req, res) {
    db.Items.findOne({
      where: {
        id: req.params.id
      },
    //   include: [db.Events]
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });
  // POST route for saving a new item
  app.post("/api/items", function(req, res) {
    db.Items.create(req.body).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });
  // DELETE route for deleting Item
  app.delete("/api/items/:id", function(req, res) {
    db.Items.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });
  // PUT route for updating Item
  app.put("/api/items", function(req, res) {
    db.Items.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbItems) {
        res.json(dbItems);
      });
  });
};