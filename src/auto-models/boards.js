const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boards', {
    boardid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    boardname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'userid'
      }
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
    tableName: 'boards',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "boards_pkey",
        unique: true,
        fields: [
          { name: "boardid" },
        ]
      },
    ]
  });
};
