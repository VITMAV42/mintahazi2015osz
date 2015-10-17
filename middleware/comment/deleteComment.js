var requireOption = require('../common').requireOption;

/**
 * Delete comment
 */
module.exports = function (objectrepository) {

  return function (req, res, next) {
    /**
     * Something like:
     *  if (typeof res.tpl.comment === 'undefined')
     *  {
     *    return next();
     *  }
     *
     *  res.tpl.comment.remove(function(err){
     *    if (err){
     *      return next(err);
     *    }
     *
     *    next();
     *  )
     */

    return next();
  };

};
