var requireOption = require('../common').requireOption;

/**
 * Get the comment for the commentid param
 *  - if there is no such task, redirect to /task/:taskid
 *  - if there is one, put it on res.tpl.comment
 */
module.exports = function (objectrepository) {

  var commentModel = requireOption(objectrepository, 'commentModel');

  return function (req, res, next) {

    commentModel.findOne({
      _id: req.param('commentid')
    }, function (err, result) {
      if ((err) || (!result)) {
        return res.redirect('/task/' + req.param('taskid'));
      }

      res.tpl.comment = result;
      return next();
    });
  };

};
