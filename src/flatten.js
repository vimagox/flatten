/**
 * Flattens/Merges an array of arrays.
 * Returns duplicate values.
 * @param {Array} array
 * @return {Array} flatten_array
 */
exports.flatten = function(array) {
  return [].concat.apply([], array)
}
