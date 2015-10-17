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
     *  if ((typeof req.body.title === 'undefined') ||
     *  (typeof req.body.description === 'undefined'))
     *  {
     *    return next();
     *  }
     *
     *  var task = undefined;
     *  if (typeof res.tpl.task !=='undefined') {
     *     task = res.tpl.task;
     *  }else{
     *     task = new taskModel();
     *  }
     *  task.title = req.body.title;
     *  task.description = req.body.description;
     *
     *  task.save(function(err,result){
     *    if (err){
     *      return next(err);
     *    }
     *
     *    return res.redirect('/task/' + result.id);
     *  )
     */

    return next();
  };

};
