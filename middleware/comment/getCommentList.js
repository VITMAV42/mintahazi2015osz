var requireOption = require('../common').requireOption;

/**
 * Get the comment for the :taskid task
 *  - if there is one, put it on res.tpl.comments
 */
module.exports = function (objectrepository) {

  var commentModel = requireOption(objectrepository, 'commentModel');

  return function (req, res, next) {
    commentModel.find({
      task: req.param('taskid')
    }, function (err, results) {
      if (err) {
        return next(err);
      }

      res.tpl.comments = results;
      return next();
    });
  };

};
