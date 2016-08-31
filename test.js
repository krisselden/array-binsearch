var binsearch = require("./index").default;

var subject = [2, 4, 6, 8, 9, 11];
var inOutPairs = [
  [2,   0],
  [4,   1],
  [6,   2],
  [8,   3],
  [9,   4],
  [11,  5],
  [1,  ~0],
  [3,  ~1],
  [5,  ~2],
  [7,  ~3],
  [10, ~5],
  [12, ~6]
];

function test(binsearch) {
  var ok = true;
  console.log("TAP version 13");
  console.log("# testing binary search of " + JSON.stringify(subject));
  console.log("1.." + inOutPairs.length);
  inOutPairs.forEach(function ([input, expected], i) {
    var count = i + 1;
    var actual = binsearch(subject, input);
    if (actual === expected) {
      console.log("ok " + count + " - search for " + input + " returns " + expected);
    } else {
      ok = false;
      console.log("not ok " + count + " - expected output for input " + input + " to be " + expected + " but was " + actual);
    }
  });

  return ok;
}

module.exports = test;

if (!test(binsearch)) process.exit(1);
