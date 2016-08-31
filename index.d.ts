/**
 * Perform a binary search on a sorted array of values.
 * @param {any[]}   values - an array of sorted values to search
 * @param {any}     value - a value to search for
 * @return {number} if positive the index of the value else
 *                  the bitwise negation of the insertion index
 *                  that would maintain sort order.
 */
export default function binsearch<T>(values: T[], value: T): number;
