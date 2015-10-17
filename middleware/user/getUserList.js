var requireOption = require('../common').requireOption;

/**
 * Load all the users
 * and put them on res.tpl.users
 */
module.exports = function (objectrepository) {

  var userModel = requireOption(objectrepository,'userModel');

  return function (req, res, next) {

    /**
     * The code will be "something like":
     *
     *  //lets find the user
     * userModel.findOne({}, function (err,results){
     *    if (err){
     *        return next(err);
     *    }
     *
     *    res.tpl.users = results;
     *
     *    return next();
     * });
     */
    return next();
  };

};
