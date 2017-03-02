(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.hitokotonushi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Hitokotonushi = require('./lib/hitokotonushi');
var hitokotonushi = new Hitokotonushi();

module.exports = hitokotonushi;

},{"./lib/hitokotonushi":2}],2:[function(require,module,exports){
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

},{}]},{},[1])(1)
});