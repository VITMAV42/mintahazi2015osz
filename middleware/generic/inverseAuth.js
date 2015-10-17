/**
 * If the user is logged in, redirects to /
 */
module.exports = function (objectrepository) {

  return function (req, res, next) {
    return next();
  };

};
