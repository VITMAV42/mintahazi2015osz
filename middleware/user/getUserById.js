var requireOption = require('../common').requireOption;

/**
 * Load a user (if exists) with the :userid param
 * and put it on res.tpl.user
 */
module.exports = function (objectrepository) {

  var userModel = requireOption(objectrepository,'userModel');

  return function (req, res, next) {

    /**
     * The code will be "something like":
     *
     * //not enought parameter
     * if (typeof req.param('userid') === 'undefined')
     *  {
     *    return next();
     *  }
     *
     *  //lets find the user
     * userModel.findOne({ id : req.param('userid')}, function (err,result){
     *    if (err){
     *        return next(err);
     *    }
     *
     *    res.tpl.user = result;
     *
     *    return next();
     * });
     */
    return next();
  };

};
