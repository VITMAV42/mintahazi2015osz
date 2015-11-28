var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Task = db.model('Task', {
  name: String,
  title: String,
  description: String,
  state: Number,
  _assignedto: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: [ {ki: String }]
});

module.exports = Task;
