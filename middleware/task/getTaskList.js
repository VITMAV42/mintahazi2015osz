var requireOption = require('../common').requireOption;

/**
 * Get the task list and put the tasks on res.tpl.tasks
 */
module.exports = function (objectrepository) {

  var taskModel = requireOption(objectrepository, 'taskModel');

  return function (req, res, next) {

    taskModel.find({

    }).populate('_assignedto').exec(function (err, results) {
      if (err) {
        return next(new Error('Error getting tasks'));
      }

      res.tpl.tasks = results;
      return next();
    });
  };

};
