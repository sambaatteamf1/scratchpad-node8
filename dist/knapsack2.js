"use strict";

var score_ways = [1, 2];
var k = 4;

// var score_ways = [2, 3, 7];
// var k = 12;

var combinations = new Array(k + 1).fill(0);

combinations[0] = 1;

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = score_ways[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var score = _step.value;


    console.log("score:", score);

    for (var j = score; j <= k; j++) {
      combinations[j] = combinations[j - score] + combinations[j];

      console.log("combinations[" + j + "]=" + combinations[j]);
    }
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log("Number of combinations", combinations[k]);
//# sourceMappingURL=knapsack2.js.map