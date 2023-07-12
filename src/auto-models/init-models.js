var DataTypes = require("sequelize").DataTypes;
var _boards = require("./boards");
var _comments = require("./comments");
var _tasklists = require("./tasklists");
var _taskmodule = require("./taskmodule");
var _tasks = require("./tasks");
var _taskstatus = require("./taskstatus");
var _taskuser = require("./taskuser");
var _users = require("./users");

function initModels(sequelize) {
  var boards = _boards(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var tasklists = _tasklists(sequelize, DataTypes);
  var taskmodule = _taskmodule(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var taskstatus = _taskstatus(sequelize, DataTypes);
  var taskuser = _taskuser(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  tasks.belongsToMany(users, { as: 'userid_users', through: taskuser, foreignKey: "taskid", otherKey: "userid" });
  users.belongsToMany(tasks, { as: 'taskid_tasks', through: taskuser, foreignKey: "userid", otherKey: "taskid" });
  taskmodule.belongsTo(boards, { as: "board", foreignKey: "boardid"});
  boards.hasMany(taskmodule, { as: "taskmodules", foreignKey: "boardid"});
  tasks.belongsTo(boards, { as: "board", foreignKey: "boardid"});
  boards.hasMany(tasks, { as: "tasks", foreignKey: "boardid"});
  comments.belongsTo(tasks, { as: "task", foreignKey: "taskid"});
  tasks.hasMany(comments, { as: "comments", foreignKey: "taskid"});
  tasklists.belongsTo(tasks, { as: "task", foreignKey: "taskid"});
  tasks.hasMany(tasklists, { as: "tasklists", foreignKey: "taskid"});
  taskmodule.belongsTo(tasks, { as: "task", foreignKey: "taskid"});
  tasks.hasMany(taskmodule, { as: "taskmodules", foreignKey: "taskid"});
  taskuser.belongsTo(tasks, { as: "task", foreignKey: "taskid"});
  tasks.hasMany(taskuser, { as: "taskusers", foreignKey: "taskid"});
  tasks.belongsTo(taskstatus, { as: "status", foreignKey: "statusid"});
  taskstatus.hasMany(tasks, { as: "tasks", foreignKey: "statusid"});
  boards.belongsTo(users, { as: "createdby_user", foreignKey: "createdby"});
  users.hasMany(boards, { as: "boards", foreignKey: "createdby"});
  boards.belongsTo(users, { as: "user", foreignKey: "userid"});
  users.hasMany(boards, { as: "user_boards", foreignKey: "userid"});
  comments.belongsTo(users, { as: "createdby_user", foreignKey: "createdby"});
  users.hasMany(comments, { as: "comments", foreignKey: "createdby"});
  comments.belongsTo(users, { as: "user", foreignKey: "userid"});
  users.hasMany(comments, { as: "user_comments", foreignKey: "userid"});
  tasklists.belongsTo(users, { as: "createdby_user", foreignKey: "createdby"});
  users.hasMany(tasklists, { as: "tasklists", foreignKey: "createdby"});
  tasks.belongsTo(users, { as: "createdby_user", foreignKey: "createdby"});
  users.hasMany(tasks, { as: "tasks", foreignKey: "createdby"});
  taskuser.belongsTo(users, { as: "user", foreignKey: "userid"});
  users.hasMany(taskuser, { as: "taskusers", foreignKey: "userid"});
  users.belongsTo(users, { as: "createdby_user", foreignKey: "createdby"});
  users.hasMany(users, { as: "users", foreignKey: "createdby"});

  return {
    boards,
    comments,
    tasklists,
    taskmodule,
    tasks,
    taskstatus,
    taskuser,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
