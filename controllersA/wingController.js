var express = require("express");

var router = express.Router();

// Import the model (wing.js) to use its database functions.
var wing = require("../models/wing.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  wing.all(function(data) {
    var hbsObject = {
      wings: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  wing.create([
    "name", "hungry"
  ], [
    req.body.name, req.body.hungry
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  wing.update({
    hungry: req.body.hungry
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  wing.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
