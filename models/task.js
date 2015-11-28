var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Task = db.model('Task', {
  name: String,
  title: String,
  description: String,
  state: {
    type: Number,
    default: 0
  },
  _assignedto: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = Task;
