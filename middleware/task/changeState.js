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

    /**
     * Something like:
     *  if ((typeof res.tpl.task ==='undefined') ||
     *  (typeof app.param('state') === 'undefined')){
     *      return next();
     *  }
     *
     *  res.tpl.task.state = app.param('state');
     *  res.tpl.save(function(err,result){
     *    if (err)
     *    {
     *      return next(err);
     *    }
     *
     *    next();
     *  });
     */

    return next();
  };

};
