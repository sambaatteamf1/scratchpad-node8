"use strict";

var _lodash = require("lodash");

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function findMedian(A, B) {
	var lengthA = A.length;
	var lengthB = B.length;

	var midA = 0;
	var midB = 0;

	if (lengthA > 0) {
		midA = Math.floor((lengthA - 1) / 2);
	}

	if (lengthB > 0) {
		midB = Math.floor((lengthB - 1) / 2);
	}

	console.log("A:", A, lengthA, midA);
	console.log("B:", B, lengthB, midB);

	if (lengthA == 0 && lengthB > 0) {
		return B[midB];
	}

	if (lengthB == 0 && lengthA > 0) {
		return A[midA];
	}

	if (lengthA == 1 && lengthB == 1) {
		return (A[midA] + B[midB]) / 2;
	}

	var median = -1;

	console.log("compare " + A[midA] + " " + B[midB]);

	if (A[midA] == B[midB]) {
		median = A[midA];
	} else if (A[midA] > B[midB]) {

		A = _.slice(A, 0, midA - 1);
		B = _.slice(B, midB + 1);

		median = findMedian(A, B);
	} else {

		A = _.slice(A, midA + 1);
		B = _.slice(B, 0, midB - 1);

		median = findMedian(A, B);
	}

	return median;
}

function main() {
	var A = [10, 20, 30, 40, 50, 60];
	// var B = []
	var B = [1, 15, 23, 27];
	// var A = [ 1, 2]
	// var B = [ 3, 4, 5]

	var median = findMedian(A, B);

	console.log("Median:", median);
	return;
}

main();
//# sourceMappingURL=sorted-arr-median.js.map