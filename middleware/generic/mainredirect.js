/**
 * This middleware has one purpose, when the user visits the / main page,
 * should be redirected to
 *    - /login when not signed in
 *    - /tasks when signed in
 */
module.exports = function (objectrepository) {

  return function (req, res, next) {

    if (typeof req.session.userid === 'undefined') {
      return res.redirect('/login');
    } else {
      return res.redirect('/tasks');
    }
  };

};
