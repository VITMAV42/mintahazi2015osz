var requireOption = require('../common').requireOption;

/**
 * Create (or update) a comment if we have the data for it
 * update if we have a res.tpl.comment, create if we don't have
 *  - if there is no comment, set tpl.error
 *  - if everything is ok redirect to /task/:id
 *  requires tpl.task to be set
 */
module.exports = function (objectrepository) {

  var taskModel = requireOption(objectrepository, 'taskModel');

  return function (req, res, next) {

    /**
     * Something like:
     *  if (typeof req.body.comment === 'undefined')
     *  {
     *    return next();
     *  }
     *
     *  var comment = undefined;
     *  if (typeof res.tpl.comment !=='undefined') {
     *     comment = res.tpl.comment;
     *  }else{
     *     comment = new commentModel();
     *     comment.task = res.tpl.task.id;
     *     comment.user = req.session.id;
     *  }
     *  comment.comment = req.body.comment;
     *
     *  comment.save(function(err,result){
     *    if (err){
     *      return next(err);
     *    }
     *
     *    return res.redirect('/task/' + res.tpl.task.id);
     *  )
     */

    return next();
  };

};
