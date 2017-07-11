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

    //list all users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({
    //   include: [db.Events]
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  app.get("/api/users/:id", function(req, res) {
    //find one user based on id (we can change this later to name if you want)
    db.Users.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Events]
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  //post a new user
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  //delete a user
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });


  // update route for updating User
  app.put("/api/users", function(req, res) {
    db.Users.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbUsers) {
        res.json(dbUsers);
      });
  });
};