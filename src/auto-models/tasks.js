const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasks', {
    task_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'lists',
        key: 'list_id'
      }
    },
    task_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    task_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tasks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "lists_pkey_1",
        unique: true,
        fields: [
          { name: "task_id" },
        ]
      },
    ]
  });
};
