/**
 * Delete the task object, if its already loaded
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {

    if (typeof res.tpl.task === 'undefined') {
      return next();
    }

    res.tpl.task.remove(function (err) {
      if (err) {
        return next(err);
      }

      //redirect to all tasks
      res.redirect('/tasks/');
    });
  };

};
