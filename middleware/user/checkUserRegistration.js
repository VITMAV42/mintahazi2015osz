var requireOption = require('../common').requireOption;

/**
 * Check if the email address is already registered, if not
 * create the user (no extra checks on password)
 */
module.exports = function (objectrepository) {

  var UserModel = requireOption(objectrepository, 'userModel');

  return function (req, res, next) {

    //not enough parameter
    if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
      (typeof req.body.password === 'undefined')) {
      return next();
    }

    //lets find the user
    UserModel.findOne({
      email: req.body.email
    }, function (err, result) {

      if ((err) || (result !== null)) {
        res.tpl.error.push('Your email address is already registered!');
        return next();
      }

      if (req.body.name.length < 3) {
        res.tpl.error.push('The username should be at least 3 characters!');
        return next();
      }

      //create user
      var newUser = new UserModel();
      newUser.name = req.body.name;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      newUser.save(function (err) {
        //redirect to /login
        return res.redirect('/login');
      });
    });
  };
};
