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
    },
    isactive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    isdrop: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
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
