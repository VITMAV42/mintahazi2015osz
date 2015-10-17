var mainRedirectMW = require('../middleware/generic/mainRedirect');
var inverseAuthMW = require('../middleware/generic/inverseAuth');
var checkUserLoginMW = require('../middleware/login/checkUserLogin');
var renderMW = require('../middleware/generic/render');

var userModel = require('../models/user');

module.exports = function (app) {

  var objectRepository = {
    userModel: userModel
  };

  app.get('/',
    mainRedirectMW(objectRepository)
  );

  app.use('/login',
    inverseAuthMW(objectRepository),
    checkUserLoginMW(objectRepository),
    renderMW(objectRepository, 'login')
  );

};
