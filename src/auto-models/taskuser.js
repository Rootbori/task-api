const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taskuser', {
    taskid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tasks',
        key: 'taskid'
      }
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'userid'
      }
    }
  }, {
    sequelize,
    tableName: 'taskuser',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "taskuser_pkey",
        unique: true,
        fields: [
          { name: "taskid" },
          { name: "userid" },
        ]
      },
    ]
  });
};
