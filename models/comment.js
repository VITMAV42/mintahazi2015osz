var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Comment = db.model('Comment', {
  _task: {
    type: Schema.Types.ObjectId,
    ref: 'Task'
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now
  },
  comment: String
});

module.exports = Comment;
