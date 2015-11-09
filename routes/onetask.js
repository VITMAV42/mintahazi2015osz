var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');

var getTaskMW = require('../middleware/task/getTask');
var getUserListMW = require('../middleware/user/getUserList');
var updateCommentMW = require('../middleware/comment/updateComment');
var deleteCommentMW = require('../middleware/comment/deleteComment');
var getCommentMW = require('../middleware/comment/getComment');
var getCommentListMW = require('../middleware/comment/getCommentList');
var onlyMyCommentMW = require('../middleware/comment/onlyMyComment');

var taskModel = require('../models/task');
var commentModel = require('../models/comment');
var userModel = require('../models/user');

module.exports = function (app) {
  var objectRepository = {
    taskModel: taskModel,
    commentModel: commentModel,
    userModel: userModel
  };

  /**
   * Show one task
   */
  app.get('/task/:taskid',
    authMW(objectRepository),
    getTaskMW(objectRepository),
    //we need all the users to make a list of them for "reassign"
    getUserListMW(objectRepository),
    getCommentListMW(objectRepository),
    renderMW(objectRepository, 'task')
  );

  /**
   * Show task page POST part
   * - only new comments can come from here :)
   */
  app.post('/task/:taskid',
    authMW(objectRepository),
    getTaskMW(objectRepository),
    updateCommentMW(objectRepository),
    //simple redirect
    function (req, res, next) {
      return res.redirect('/task/' + req.param('taskid'));
    });

  /**
   * Edit comment
   */
  app.use('/comment/:taskid/:commentid/edit',
    authMW(objectRepository),
    getTaskMW(objectRepository),
    getCommentMW(objectRepository),
    onlyMyCommentMW(objectRepository),
    updateCommentMW(objectRepository),
    renderMW(objectRepository, 'commentmod')
  );

  /**
   * Delete comment
   */
  app.use('/comment/:taskid/:commentid/delete',
    authMW(objectRepository),
    getTaskMW(objectRepository),
    getCommentMW(objectRepository),
    onlyMyCommentMW(objectRepository),
    deleteCommentMW(objectRepository),
    //simple redirect
    function (req, res, next) {
      return res.redirect('/task/' + req.param('taskid'));
    });
};
