var requireOption = require('../common').requireOption;

/**
 * This middleware loads the user from model and checks the credentials,
 * if they are ok, set session values and redirect to /
 * if they are wrong, set error message
 */
module.exports = function (objectrepository) {

  var userModel = requireOption(objectrepository,'userModel');

  return function (req, res, next) {

    /**
     * The code will be "something like":
     *
     * //not enought parameter
     * if ((typeof req.body.email === 'undefined') || (typeof req.body.password === 'undefined'))
     *  {
     *    return next();
     *  }
     *
     *  //lets find the user
     * userModel.find({ email : req.body.email}, function (err,result){
     *    if ((err) || (!result)){
     *        res.tpl.error.push('Your email address is not registered!');
     *        return next();
     *    }
     *
     *    //check password
     *    if (result.password !== req.body.password){
     *        res.tpl.error.push('Wrong password!');
     *        return next();
     *    }
     *
     *    //login is ok, save id to session
     *    req.session.id = result.id;
     *
     *    //redirect to / so the app can decide where to go next
     *    return res.redirect('/');
     * });
     */
    return next();
  };

};
