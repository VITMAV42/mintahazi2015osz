/**
 * Task model (mock)
 * @constructor
 */
var Task = function () {
};

/**
 * An instance
 */
var TaskInstanceMock = {
  id: 1,
  title: 'Task title',
  description: 'Lorem ipsum',
  //userid or null
  assignedto: 1,
  //0 - not ready, 1 - ready
  state: 1
};

/**
 * Find one element with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
Task.findOne = function (criteria, cb) {

  //returns 1 mocked item
  return cb(null, TaskInstanceMock);
};

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
Task.find = function (criteria, cb) {

  //returns 3 mocked item
  return cb(null, [TaskInstanceMock, TaskInstanceMock, TaskInstanceMock]);
};

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
Task.prototype.save = function (cb) {
  return cb(null, this);
};

/**
 * Delete an object
 * @param cb
 * @returns {*}
 */
Task.prototype.remove = function (cb) {
  return cb(null);
};

module.exports = Task;
