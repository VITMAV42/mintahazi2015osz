var Schema = require('mongoose').Schema;
var db = require('../config/db');

var User = db.model('User', {
  name: String,
  email: String,
  password: String,
  gps: {
    long: Number,
    lat: Number,
  }
});

module.exports = User;
