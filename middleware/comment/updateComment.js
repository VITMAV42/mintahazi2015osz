var requireOption = require('../common').requireOption;
var ObjectId = require('mongoose').Schema.Types.ObjectId;

/**
 * Create (or update) a comment if we have the data for it
 * update if we have a res.tpl.comment, create if we don't have
 *  - if there is no comment, set tpl.error
 *  - if everything is ok redirect to /task/:id
 *  requires tpl.task to be set
 */
module.exports = function (objectrepository) {

  var commentModel = requireOption(objectrepository, 'commentModel');
  var userModel = requireOption(objectrepository, 'userModel');

  function saveCallback(res, next, comment) {
    comment.save(function (err, result) {
      if (err) {
        return next(err);
      }

      return res.redirect('/task/' + res.tpl.task.id);
    });
  }

  return function (req, res, next) {

    if (typeof req.body.newcomment === 'undefined') {
      return next();
    }

    var comment = undefined;
    if (typeof res.tpl.comment !== 'undefined') {
      comment = res.tpl.comment;
      comment.comment = req.body.newcomment

      return saveCallback(res, next, comment);
    } else {
      comment = new commentModel();
      comment.comment = req.body.newcomment;
      comment._task = res.tpl.task;

      userModel.findById(req.session.userid, function (err, me) {
        comment._user = me;
        return saveCallback(res, next, comment);
      });
    }

  }
}
