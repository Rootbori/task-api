const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cards', {
    card_id: {
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
    card_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    card_description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cards',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cards_pkey",
        unique: true,
        fields: [
          { name: "card_id" },
        ]
      },
    ]
  });
};
