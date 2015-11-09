/**
 * Comment model (mock)
 * @constructor
 */
var Comment = function () {
};

/**
 * An instance
 */
var CommentInstanceMock = {
  id: 1,
  task: 1,
  user: 1,
  date: '2015-01-02',
  comment: 'Lorem ipsum'
};

/**
 * Find one element with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
Comment.findOne = function (criteria, cb) {

  //returns 1 mocked item
  return cb(null, CommentInstanceMock);
};

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
Comment.find = function (criteria, cb) {

  //returns 3 mocked item
  return cb(null, [CommentInstanceMock, CommentInstanceMock, CommentInstanceMock]);
};

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
Comment.prototype.save = function (cb) {
  return cb(null, this);
};

/**
 * Delete an object
 * @param cb
 * @returns {*}
 */
Comment.prototype.remove = function (cb) {
  return cb(null);
};

module.exports = Comment;
