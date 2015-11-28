var requireOption = require('../common').requireOption;

/**
 * Get the comment for the :taskid task
 *  - if there is one, put it on res.tpl.comments
 */
module.exports = function (objectrepository) {

  var commentModel = requireOption(objectrepository, 'commentModel');

  return function (req, res, next) {
    commentModel.find({
      _task: req.param('taskid')
    }).populate('_user').exec(function (err, results) {
      if (err) {
        return next(err);
      }

      res.tpl.comments = results;
      return next();
    });
  };

};
