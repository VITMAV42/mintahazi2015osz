var expect = require('chai').expect;
var getUserListMW = require('../../../middleware/user/getUserList');

describe('getUserList middleware ', function () {

  it('should return users', function (done) {
    var req = {};
    var res = {
      tpl: {}
    };
    var fakeUserModel = {
      find: function (some, cb) {
        cb(undefined, ['user1', 'user2'])
      }
    };

    getUserListMW({
      userModel: fakeUserModel
    })(req, res, function (err) {
      expect(res.tpl.users).to.eql(['user1', 'user2']);
      expect(err).to.eql(undefined);
      done();
    });
  });

  it('should return error when db returns error', function (done) {
    var fakeUserModel = {
      find: function (some, cb) {
        cb('pistike', undefined)
      }
    };

    getUserListMW({
      userModel: fakeUserModel
    })({}, {}, function (err) {
      expect(err).to.eql('pistike');
      done();
    });
  });
});
