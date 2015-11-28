var markdown = require("markdown").markdown;
var async = require('async');
var emojis = require("emojilib");

module.exports = function (txt, cb) {
  var html = markdown.toHTML(txt);

  async.reduce(emojis, html, function (memo, item, callback) {

    async.eachSeries(item.keywords, function (item2, callback2) {
      memo = memo.replace(':' + item2 + ':', item.char);
      return callback2();
    }, function (err) {
      return callback(err, memo);
    });

  }, function (err, result) {
    cb(null, result);
  });
};