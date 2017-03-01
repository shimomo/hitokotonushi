'use strict';

/**
 * @constructor
 */
function Hitokotonushi() {}

/**
 * @param {object} settings
 */
Hitokotonushi.prototype.setSettings = function(settings) {
  this.settings = settings;
};

/**
 * @param {string} mode
 */
Hitokotonushi.prototype.setMode = function(mode) {
  this.settings.mode = mode;
};

/**
 * @return {string}
 */
Hitokotonushi.prototype.getMode = function() {
  return this.settings.mode;
};

/**
 * @return {string}
 */
Hitokotonushi.prototype.getScheme = function() {
  var mode = this.getMode();

  return this.settings[mode].scheme;
};

/**
 * @return {string}
 */
Hitokotonushi.prototype.getHost = function() {
  var mode = this.getMode();

  return this.settings[mode].host;
};

/**
 * @param  {string} key
 * @return {string}
 */
Hitokotonushi.prototype.getPath = function(key) {
  return this.settings.path[key];
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
