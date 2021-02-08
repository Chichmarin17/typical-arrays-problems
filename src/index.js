
exports.min = function min (array) {
  if (typeof(array) == "undefined") return 0;
  if (array.length == 0) return 0;
  return Math.min(...array);
}

exports.max = function max (array) {
  if (typeof(array) == "undefined") return 0;
  if (array.length == 0) return 0;
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (typeof(array) == "undefined") return 0;
  if (array.length == 0) return 0;
  return array.reduce((a, b) => a + b) / array.length;
}
