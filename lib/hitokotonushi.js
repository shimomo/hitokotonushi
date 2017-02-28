'use strict';

var fs = require('fs');

var settings = {};
var Hitokotonushi = function() {}

/**
 * @param {string} file
 */
Hitokotonushi.prototype.setFile = function(file) {
  try {
    settings = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    console.error(error.toString());
  }
};

/**
 * @param {string} mode
 */
Hitokotonushi.prototype.setMode = function(mode) {
  settings.mode = mode;
};

/**
 * @return {string}
 */
Hitokotonushi.prototype.getMode = function() {
  return settings.mode;
};

/**
 * @return {string}
 */
Hitokotonushi.prototype.getScheme = function() {
  var mode = this.getMode();

  return settings[mode].scheme;
};

/**
 * @return {string}
 */
Hitokotonushi.prototype.getHost = function() {
  var mode = this.getMode();

  return settings[mode].host;
};

/**
 * @param  {string} key
 * @return {string}
 */
Hitokotonushi.prototype.getPath = function(key) {
  return settings.path[key];
};

/**
 * @param  {string} key
 * @return {string}
 */
Hitokotonushi.prototype.getUri = function(key) {
  var scheme = this.getScheme();
  var host   = this.getPath();
  var path   = this.getPath(key);

  return scheme + '://' + host + path;
};

module.exports = Hitokotonushi;
