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
  // GET route for getting all of the items
  // app.get("/api/items", function(req, res) {
  //     var query = {};
  //     if (req.query.items_search) {
  //       query.title = req.query.items_search;
  //     }
  //     // left outer join for Items
  //     db.Items.findAll({
  //       where: query,
  //       // include: [db.Users]
  //     }).then(function(dbItems) {
  //       res.json(dbItems);
  //     });
  //   });
  // Get route for retrieving a single item
  // app.get("/api/items/:id", function(req, res) {
  //   db.Items.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //   //   include: [db.Events]
  //   }).then(function(dbItems) {
  //     res.json(dbItems);
  //   });
  // });

  // app.get("/events/:id", function (req, res) {
  //   db.Items.findOne({
  //     where: {
  //       EventId: req.params.id
  //     },
  //     include: [db.Events]
  //   }).then(function (data) {
  //     res.render('event', data.dataValues);
  //   });
  // });



  // POST route for saving a new item
  app.post("/api/items", function (req, res) {
    console.log(req.body);
    db.Items.create({
      title: req.body.title,
      description: req.body.description,
      quantity: req.body.quantity,
      EventId: req.body.EventId,
      donated: false
    }).then(function (data) {
      // res.redirect("/events/" + req.body.EventId);
      res.json(data);
    });
  });

  // DELETE route for deleting Item
  // app.find("/api/items/:id", function(req, res) {
  //   db.Items.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbItems) {
  //     res.json(dbItems);
  //   });
  // });
  // PUT route for updating Item
  app.put("/items/donate/:id", function (req, res) {
    db.Items.update({ donated: req.body.donated },
      {
        fields: ['donated'],
        where: {
          id: req.params.id
        }
      }
    ).then(function (data) {
      res.json(data)
    });
  })
}