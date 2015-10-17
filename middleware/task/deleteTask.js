/**
 * Delete the task object, if its already loaded
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {

    /**
     * Something like:
     *  if (typeof res.tpl.task === 'undefined') {
     *      return next();
     *  }
     *
     *  req.tpl.remove(function(err){
     *    if (err){
     *      return next(err);
     *    }
     *
     *    return next();
     *  });
     */

    return next();
  };

};
