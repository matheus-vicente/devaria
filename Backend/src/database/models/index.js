const Sequelize = require('sequelize');

const config = require('..');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
    host: 'db',
  },
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("../../modules/users/models/User")(sequelize, Sequelize);
db.Module = require("../../modules/lessons/models/Module")(sequelize, Sequelize);
db.Lesson = require("../../modules/lessons/models/Lesson")(sequelize, Sequelize);

db.Lesson.associate(db);
db.Module.associate(db);

module.exports = db;
