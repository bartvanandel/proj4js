if (global.Float32Array) {
  // phantomjs supports Float32Array but not Float64Array
  if (!global.Float64Array) {
    module.exports = function(value) {
      return Array.isArray(value) || value instanceof Float32Array;
    };
  } else {
    module.exports = function(value) {
      return Array.isArray(value) || value instanceof Float32Array || value instanceof Float64Array;
    };
  }
} else {
  module.exports = Array.isArray;
}
