/**
 * Reassign task to someone (or null)
 *  - we loaded the user, so if the id is not null we should have the user
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    //grab the task
    if (typeof res.tpl.task === 'undefined') {
      return next();
    }

    //grab the user
    var who = null;

    if (req.param('userid') === 'null') {
      who = null;
    } else if (typeof res.tpl.user == 'undefined') {
      //wrong userid
      return next(new Error('No such userid'));
    } else {
      //nice
      who = res.tpl.user;
    }

    res.tpl.task._assignedto = who;
    res.tpl.task.save(function (err) {
      if (err) {
        return next(err);
      }

      return next();
    });
  };

};
