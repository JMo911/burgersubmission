var orm = require("../config/orm");
var Burgers = require("./sburgermodel");
var sequelize = require("../config/connection")
var express = require("express");
var app = express();

var burger = {
  all: function(cb) {
    // orm.all("burgers", function(res) {
    //   cb(res);
    // });

      Burgers.findAll({}).then(cb);

  },
  create: function(name, cb) {
    // orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
    Burgers.create({
      burger_name: name,
      devoured: false
    }).then(cb);
  },
  update: function(id, cb) {
    // var condition = "id=" + id;
    // orm.update("burgers", {
    //   devoured: true
    // }, condition, cb);
    Burgers.update({
      where: {
        id: id
      },
      devoured: true
    }).then(cb);
  }
};

module.exports = burger;
