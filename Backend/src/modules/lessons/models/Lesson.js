module.exports = (sequelize, Sequelize) => {
  const Lesson = sequelize.define('Lesson', {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    classDate: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });

  Lesson.associate = models => {
    Lesson.belongsTo(models.Module, {
      foreignKey: 'ModuleId'
    });
  };

  return Lesson;
};
