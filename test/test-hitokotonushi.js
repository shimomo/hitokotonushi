'use strict'

var assert = require('assert');
var Hitokotonushi = require('../lib/hitokotonushi');

describe('hitokotonushi', function () {
  var h = new Hitokotonushi();

  before(function (done) {
    h.setConfig({
      mode: 'debug',
      debug: {
        scheme: 'http',
        host: 'debug.example.com'
      },
      release: {
        scheme: 'https',
        host: 'release.example.com'
      },
      path: {
        users: '/api/v1/users',
        groups: '/api/v1/groups'
      }
    });

    done();
  });

  describe('getMode', function () {
    it('should return debug', function () {
      assert.strictEqual(h.getMode(), 'debug');
    });
  });

  describe('getScheme', function () {
    it('should return http', function () {
      assert.strictEqual(h.getScheme(), 'http');
    });
  });

  describe('getHost', function () {
    it('should return debug.example.com', function () {
      assert.strictEqual(h.getHost(), 'debug.example.com');
    });
  });

  describe('getPath', function () {
    it('should return /api/v1/users', function () {
      assert.strictEqual(h.getPath('users'), '/api/v1/users');
    });
  });

  describe('getUri', function () {
    it('should return http://debug.example.com/api/v1/users', function () {
      assert.strictEqual(h.getUri('users'), 'http://debug.example.com/api/v1/users');
    });
  });
});
