var requireOption = require('../common').requireOption;

/**
 * Redirect the user if the loaded comment is not by
 * the user who is currently logged in
 */
module.exports = function (objectrepository) {

  return function (req, res, next) {
    /**
     * Something like:
     * if (req.session.id !== res.tpl.comment.user)
     * {
     *    return res.redirect('/task/' + res.tpl.task.id);
     * }
     */
    return next();
  };

};
