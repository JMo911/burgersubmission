var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require('../config/connection');


const Burger = sequelize.define('burger', {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
  }, {
    timestamps: false
});

Burger.sync();

module.exports = Burger;