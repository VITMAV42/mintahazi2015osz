var requireOption = require('../common').requireOption;

/**
 * Check if the email address is already registered, if not
 * create the user (no extra checks on password)
 */
module.exports = function (objectrepository) {

  var userModel = requireOption(objectrepository, 'userModel');

  return function (req, res, next) {
    return next();
  };

};
