  // Import the ORM to create functions that will interact with the database.
  var orm = require("../config/orm.js");

  var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        //console.log("Thi is working...burger.js");
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        //console.log("burger added ... burger.js");

        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        console.log("burger devoured .. burger.js");
        console.log(objColVals);
        cb(res);
      });
    }
  };

  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;
