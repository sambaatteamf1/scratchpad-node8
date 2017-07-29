'use strict';

var arr = ['0', 'A', 'C', 'A', 'C', 'A', 'G', 'T'];

var m = arr.length;
var H = [];
var k = 0;

H[0] = -1;
H[1] = 0;

for (var q = 2; q < m; q++) {
	console.log("q:" + q);

	while (k > 0 && arr[k + 1] != arr[q]) {
		console.log("reset k = ", H[k]);
		k = H[k];
	}

	if (arr[k + 1] == arr[q]) {
		console.log("matched k= " + (k + 1) + " q=" + q);
		k = k + 1;
	}

	H[q] = k;
	console.log("q: " + q + " k: " + k);
}

console.log(H);
//# sourceMappingURL=prefix.js.map