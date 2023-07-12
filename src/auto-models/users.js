const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    userid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    useremail: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "users_useremail_key"
    },
    userpassword: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    imagefilename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    facebookid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gmailid: {
      type: DataTypes.TEXT,
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
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "users_useremail_key",
        unique: true,
        fields: [
          { name: "useremail" },
        ]
      },
    ]
  });
};
