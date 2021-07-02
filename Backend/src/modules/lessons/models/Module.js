module.exports = (sequelize, Sequelize) => {
  const Module = sequelize.define('Module', {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });

  Module.associate = models => {
    Module.hasOne(models.Lesson);
  }

  return Module;
};
