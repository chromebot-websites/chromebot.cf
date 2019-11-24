'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function objectMerge() {
  for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }

  return objs.filter(function (obj) {
    return obj !== undefined;
  }).reduce(function (a, b) {
    var obj = _extends({}, a);
    var keys = Object.keys(b).filter(function (k) {
      return b[k] !== undefined;
    });

    keys.forEach(function (k) {
      if (_typeof(b[k]) === 'object' && _typeof(obj[k]) === 'object') {
        obj[k] = objectMerge(obj[k], b[k]);
      } else {
        obj[k] = b[k];
      }
    });
    return obj;
  }, {});
}

module.exports = objectMerge;