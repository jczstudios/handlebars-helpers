'use strict';

var sortBy = require('array-sort');
var flatten = require('arr-flatten');

// Html utils
var block = require('to-gfm-code-block');
var tag = require('html-tag');

// JavaScript language utils
var typeOf = require('kind-of');

// Matching utils
var isGlob = require('is-glob');
var mm = require('micromatch');
var falsey = require('falsey');

// Number utils
var isEven = require('is-even');
var isNumber = require('is-number');

// Object utils
var createFrame = require('create-frame');
var getObject = require('get-object');
var get = require('get-value');
var forOwn = require('for-own');

// Path utils
var relative = require('relative');

// Expose the utils by creating an object that groups them
module.exports = {
  // Array utils
  sortBy,
  flatten,

  // Html utils
  block,
  tag,

  // JavaScript language utils
  typeOf,

  // Matching utils
  isGlob,
  mm,
  falsey,

  // Number utils
  isEven,
  isNumber,

  // Object utils
  createFrame,
  getObject,
  get,
  forOwn,

  // Path utils
  relative,
};
