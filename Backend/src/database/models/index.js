const Sequelize = require('sequelize');

const config = require('..');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("../../modules/users/models/User")(sequelize, Sequelize);

module.exports = db;
