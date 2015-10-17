var mainRedirectMW = require('../middleware/generic/mainRedirect');
var inverseAuthMW = require('../middleware/generic/inverseAuth');
var checkUserLoginMW = require('../middleware/login/');
var renderMW = require('../middleware/generic/render');

module.exports = function (app) {

  var objectRepository = {};

  app.get('/',
    mainRedirectMW(objectRepository)
  );

  app.use('/login',
    inverseAuthMW(objectRepository),
    checkUserLoginMW(objectRepository),
    renderMW(objectRepository, 'login')
  );

};