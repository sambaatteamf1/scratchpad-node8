"use strict";

//  Design an algorithm for rotating an array A of n elements to the right by i positions


// number of positions to rotate  = i mod n 
// reverse the array
// reverse the left sub array
// reverse the right sub array


function swap(arr, start, end) {
	var tmp = arr[start];
	arr[start] = arr[end];
	arr[end] = tmp;
	return;
}

// reverse an array between two indexes
function reverse(arr, start, end) {

	if (start == end) {
		return;
	}

	while (start < end) {
		swap(arr, start, end);
		++start;
		--end;
	}

	return;
}

// rotate an array by i positions
function rotate(arr, i) {
	var n = arr.length;

	if (arr.length == 0) {
		return arr;
	}

	i = i % n;

	reverse(arr, 0, arr.length - 1);
	reverse(arr, 0, i - 1);
	reverse(arr, i, arr.length - 1);

	return arr;
}

// tests
// var A  = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// var i = 3

// var A  = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// var i = 10

var A = [];
var i = 3;

console.log("rotating array A: " + A + "  " + i + " times:", rotate(A, i));
//# sourceMappingURL=rotate.js.map