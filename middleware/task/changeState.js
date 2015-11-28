var requireOption = require('../common').requireOption;

/**
 * Create (or update) task if we have the data for it
 * update if we have a res.tpl.task, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /task/:id
 */
module.exports = function (objectrepository) {

  var taskModel = requireOption(objectrepository, 'taskModel');

  return function (req, res, next) {

    if ((typeof res.tpl.task === 'undefined') ||
      (typeof req.param('newstate') === 'undefined')) {
      return next();
    }

    res.tpl.task.state = req.param('newstate');

    res.tpl.task.save(function (err, result) {
      if (err) {
        return next(err);
      }

      next();
    });
  };

};
