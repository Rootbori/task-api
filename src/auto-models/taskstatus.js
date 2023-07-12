const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taskstatus', {
    statusid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    statusname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "taskstatus_statusname_key"
    }
  }, {
    sequelize,
    tableName: 'taskstatus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "taskstatus_pkey",
        unique: true,
        fields: [
          { name: "statusid" },
        ]
      },
      {
        name: "taskstatus_statusname_key",
        unique: true,
        fields: [
          { name: "statusname" },
        ]
      },
    ]
  });
};
