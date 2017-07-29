"use strict";

var _lodash = require("lodash");

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var L = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reverse_L = L.reverse();
var P = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
var costArr = [];
var costArr2 = [];

function cutRod(n) {
	// max cost for a rod of length n
	var nCost = 0;

	// console.log("calculating cost for length:", n)

	if (n == 0) return 0;

	if (costArr[n] != null && costArr[n] > 0) {
		return costArr[n];
	}

	_.each(L, function (length, index) {

		if (n - length < 0) {
			return;
		}

		// cost of cutting the rod at i 
		var iCost = P[length - 1] + cutRod(n - length);

		nCost = Math.max(nCost, iCost);

		// console.log("iCost:" + iCost + " price:" + P[length-1] + " nCost:" + nCost)
	});

	costArr[n] = nCost;

	return nCost;
}

function cutRod2(n) {
	costArr2[0] = 0;
	var S = [];

	var arr = new Array(n).fill(0).map(function (x, i) {
		return i + 1;
	});

	_.each(arr, function (size) {
		// get the max revenue for a rod of size <size>
		var maxCostForSize = 0;

		_.each(L, function (length, index) {
			if (size - length < 0) {
				return;
			}

			var iCost = costArr2[size - length] + P[length - 1];
			if (iCost > maxCostForSize) {
				S[size] = index;
				maxCostForSize = iCost;
			}

			maxCostForSize = Math.max(iCost, maxCostForSize);
		});

		// console.log(" size:" + size + " max cost:" + maxCostForSize)

		costArr2[size] = maxCostForSize;
	});

	var k = n;
	console.log(" { ");
	while (k > 0) {
		var length = L[S[k]];
		console.log(length + " ");
		k = k - length;
	}
	console.log(" } ");

	return costArr2[n];
}

console.log("cutRod:", cutRod(22));
console.log("cutRod2:", cutRod2(22));
//# sourceMappingURL=cutRod.js.map