/**
 * User model (mock)
 * @constructor
 */
var User = function () {
};

/**
 * An instance
 * @type {{id: number, name: string, email: string, pass: string}}
 */
var UserInstanceMock = {
  id: 1,
  name: 'Lorem',
  email: 'lorem@example.org',
  pass: 'asdasd'
};

/**
 * Find one element with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
User.prototype.findOne = function (criteria, cb) {

  //returns 1 mocked item
  return cb(null, UserInstanceMock);
};

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
User.prototype.find = function (criteria, cb) {

  //returns 3 mocked item
  return cb(null, [UserInstanceMock, UserInstanceMock, UserInstanceMock]);
};

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
Kutya.prototype.save = function (cb) {
  return cb(null, this);
};

module.exports.User = User;