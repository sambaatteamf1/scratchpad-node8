// Search an element in a sorted rotated array
// 

// var A = [ 10, 20 , 1, 3, 6, 7, 8]

// start : start of sub-array 
// end  : end of sub-array

// length of array

var x = 1

// var A = [ 1, 3, 6, 7, 8, 9 , 10]

// Test cases
// -----------
// Empty array
// var A = []

// Array with 2 elements
// var A = [10 ,1]

// Middle element is the pivot
var A = [ 10, 20 , 30, 40, 50, 1, 3, 6, 7, 8]

// Target is not present
// var x = 12

function search(start, end) {
	let mid = Math.floor(start + (end - start)/ 2)

	console.log(`start: ${start} end: ${end} mid: ${mid}`)

	if (start > end) {
		return -1
	}

	if (A[mid] == x) {
		return mid
	}

	if ((x >= A[start]) && (x <= A[mid-1])) {
		return search(start, mid-1)
	} else if ((x >= A[mid + 1]) && (x <= A[end])) {
		return search(mid+1, end)
	} else {
		return -1
	}
}

function rotated_search(start, end) {

	let mid = Math.floor(start + (end - start)/ 2)

	console.log(`start: ${start} end: ${end} mid: ${mid}`)

	if (start > end) {
		return -1
	}

	if (A[mid] == x) {
		return mid
	}

	// partition is in the first half
	if (A[start] > A[mid-1]) {

		if ((x >= A[mid+1]) &&  (x <= A[end])) {
			return search(mid+1, end)
		} else {
			return rotated_search(start, mid-1)	
		}
	} else if (A[mid+1] > A[end]) {
		
		if ((x >= A[start]) && (x <= A[mid-1])) {
			return search(mid+1, end)
		} else {
			return rotated_search(mid+1, end)
		}
	} else {
		return search(start, end)
	}

}

var index = rotated_search(0, A.length-1)
console.log("found at index:", index)