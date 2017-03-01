'use strict';

/**
 * @constructor
 */
function Hitokotonushi() {}

/**
 * @param {object} config
 */
Hitokotonushi.prototype.setConfig = function(config) {
  this.config = config;
};

/**
 * @param {string} mode
 */
Hitokotonushi.prototype.setMode = function(mode) {
  this.config.mode = mode;
};

/**
 * @return {string}
 */
Hitokotonushi.prototype.getMode = function() {
  return this.config.mode;
};

/**
 * @return {string}
 */
Hitokotonushi.prototype.getScheme = function() {
  var mode = this.getMode();

  return this.config[mode].scheme;
};

/**
 * @return {string}
 */
Hitokotonushi.prototype.getHost = function() {
  var mode = this.getMode();

  return this.config[mode].host;
};

/**
 * @param  {string} key
 * @return {string}
 */
Hitokotonushi.prototype.getPath = function(key) {
  return this.config.path[key];
};

/**
 * @param  {string} key
 * @return {string}
 */
Hitokotonushi.prototype.getUri = function(key) {
  var scheme = this.getScheme();
  var host   = this.getHost();
  var path   = this.getPath(key);

  return scheme + '://' + host + path;
};

module.exports = Hitokotonushi;
