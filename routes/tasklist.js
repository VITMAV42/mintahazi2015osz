var authMW = require('../middleware/generic/auth');

var getTaskListMW = require('../middleware/task/getTaskList');
var getTaskMW = require('../middleware/task/getTask');
var updateTaskMW = require('../middleware/task/updateTask');
var deleteTaskMW = require('../middleware/task/deleteTask');
var reassignTaskMW = require('../middleware/task/reassignTask');
var changeStateMW = require('../middleware/task/changeState');
var getUserByIdMW = require('../middleware/user/getUserById');

var renderMW = require('../middleware/generic/render');

var taskModel = require('../models/task');
var userModel = require('../models/user');

module.exports = function (app) {
  var objectRepository = {
    taskModel: taskModel,
    userModel: userModel
  };

  /**
   * Create new task
   */
  app.use('/tasks/new',
    authMW(objectRepository),
    updateTaskMW(objectRepository),
    renderMW(objectRepository, 'newtask')
  );

  /**
   * List all tasks
   */
  app.use('/tasks',
    authMW(objectRepository),
    getTaskListMW(objectRepository),
    renderMW(objectRepository, 'tasks')
  );

  /**
   * Edit the task details
   * TODO: might need some black magic on the view part
   */
  app.use('/task/:taskid/edit',
    authMW(objectRepository),
    getTaskMW(objectRepository),
    updateTaskMW(objectRepository),
    renderMW(objectRepository, 'newtask')
  );

  /**
   * Delete task (will redirect to /tasks after finish)
   */
  app.use('/task/:taskid/delete',
    authMW(objectRepository),
    getTaskMW(objectRepository),
    deleteTaskMW(objectRepository),
    function (req, res, next) {
      return res.redirect('/tasks');
    }
  );

  /**
   * Reassign task (will redirect to /task/:taskid after finish)
   * :userid will come from POST / GET, userid can be null
   */
  app.use('/task/:taskid/reassign',
    authMW(objectRepository),
    getTaskMW(objectRepository),
    getUserByIdMW(objectRepository),
    reassignTaskMW(objectRepository),
    function (req, res, next) {
      return res.redirect('/task/' + req.param('taskid'));
    }
  );

  /**
   * Change task state
   *   state should be come from req.param('state')
   */
  app.use('/task/:taskid/state',
    authMW(objectRepository),
    getTaskMW(objectRepository),
    changeStateMW(objectRepository),
    function (req, res, next) {
      res.end(""+res.tpl.task.state);
    }
  );
};
