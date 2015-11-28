var requireOption = require('../common').requireOption;

/**
 * Load a user (if exists) with the :userid param
 * and put it on res.tpl.user
 */
module.exports = function (objectrepository) {

  var userModel = requireOption(objectrepository, 'userModel');

  return function (req, res, next) {
    //not enought parameter
    if ((typeof req.param('userid') === 'undefined') || (req.param('userid') === 'null')) {
      return next();
    }

    //lets find the user
    userModel.findOne({_id: req.param('userid')}, function (err, result) {
      if (err) {
        return next(err);
      }

      res.tpl.user = result;

      return next();
    });

  };

};
