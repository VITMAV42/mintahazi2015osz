var requireOption = require('../common').requireOption;

/**
 * Load all the users
 * and put them on res.tpl.users
 */
module.exports = function (objectrepository) {

  var userModel = requireOption(objectrepository, 'userModel');

  return function (req, res, next) {

    //lets find the user
    userModel.find({}, function (err, results) {
      if (err) {
        return next(err);
      }

      res.tpl.users = results;

      return next();
    });

  };

};
