var DataTypes = require("sequelize").DataTypes;
var _boards = require("./boards");
var _cards = require("./cards");
var _comments = require("./comments");
var _lists = require("./lists");
var _tasks = require("./tasks");
var _users = require("./users");

function initModels(sequelize) {
  var boards = _boards(sequelize, DataTypes);
  var cards = _cards(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var lists = _lists(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  lists.belongsTo(boards, { as: "board", foreignKey: "board_id"});
  boards.hasMany(lists, { as: "lists", foreignKey: "board_id"});
  comments.belongsTo(cards, { as: "card", foreignKey: "card_id"});
  cards.hasMany(comments, { as: "comments", foreignKey: "card_id"});
  cards.belongsTo(lists, { as: "list", foreignKey: "list_id"});
  lists.hasMany(cards, { as: "cards", foreignKey: "list_id"});
  tasks.belongsTo(lists, { as: "list", foreignKey: "list_id"});
  lists.hasMany(tasks, { as: "tasks", foreignKey: "list_id"});

  return {
    boards,
    cards,
    comments,
    lists,
    tasks,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
