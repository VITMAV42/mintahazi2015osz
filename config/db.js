var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo');

module.exports = mongoose;