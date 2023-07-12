const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasks', {
    taskid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    taskname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    taskdescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    taskstatus: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "To Do"
    },
    boardid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'boards',
        key: 'boardid'
      }
    },
    statusid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'taskstatus',
        key: 'statusid'
      }
    },
    datestart: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    createdby: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'userid'
      }
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    dateend: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tasks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tasks_pkey",
        unique: true,
        fields: [
          { name: "taskid" },
        ]
      },
    ]
  });
};
