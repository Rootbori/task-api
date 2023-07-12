const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taskmodule', {
    taskid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tasks',
        key: 'taskid'
      }
    },
    moduleid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    modulename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    boardid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'boards',
        key: 'boardid'
      }
    },
    modulecolor: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'taskmodule',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "taskmodule_pkey",
        unique: true,
        fields: [
          { name: "moduleid" },
        ]
      },
    ]
  });
};
