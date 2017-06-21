exports.flatten = function(array) {
  return [].concat.apply([], array)
}
