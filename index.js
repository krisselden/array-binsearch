'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Perform a binary search on a sorted array of values.
 * @param {any[]}   values - an array of sorted values to search
 *                           does not with arrays longer than
 *                           length 1073741824
 * @param {any}     value - a value to search for
 * @return {number} if positive the index of the value else
 *                  the bitwise negation of the insertion index
 *                  that would maintain sort order.
 */
exports.default = function binsearch(values, value) {
  for (var min = 0, max = values.length - 1; min <= max; ) {
    var mid = min + max >> 1, midValue = values[mid];
    if (midValue > value) {
      max = mid - 1;
    } else if (midValue < value) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return ~min;
}
