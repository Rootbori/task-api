const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lists', {
    list_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    board_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'boards',
        key: 'board_id'
      }
    },
    list_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    list_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lists',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "lists_pkey",
        unique: true,
        fields: [
          { name: "list_id" },
        ]
      },
    ]
  });
};
