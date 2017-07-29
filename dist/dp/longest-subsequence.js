'use strict';

var str = "underqualified";

var start = 0;
var end = str.length - 1;
var cache = [];

function longest_subsequence(start, end) {

	if (typeof cache[start] == 'undefined') {
		cache[start] = [];
	}

	var count = cache[start][end];
	if (typeof count == 'undefined') {

		if (start == end) {
			count = 1;
		} else if (str[start] == str[end]) {
			count = 2 + longest_subsequence(start + 1, end - 1);
		} else {
			count = Math.max(longest_subsequence(start, end - 1), longest_subsequence(start + 1, end));
		}
	}

	cache[start][end] = count;

	return count;
}

// deified
var size = longest_subsequence(start, end, "");
console.log(size);
//# sourceMappingURL=longest-subsequence.js.map