//  Given an array return the length of the longest increasing subarray
//  
//  A = [1, 3, 2, 3, 4, 8, 7, 9]
//  
//  longest increasing sub-array =  [ 2, 3, 4, 8]


var A = [1, 3, 2, 3, 4, 8, 7, 9]

// start from the last element
var l_subarr_start = A[A.length-1]
var l_subarr_length = 1
var curr_subarr_length = 1

for (let i=A.length-2; i >= 0; i--) {

	// check if elements are in increasing order
	if (A[i] <= A[i+1]) {
		curr_subarr_length++
	} else {
		// start  a new sub array including this element
		curr_subarr_length = 1
	}

	if (curr_subarr_length > l_subarr_length) {
		l_subarr_length = curr_subarr_length
		l_subarr_start = i
	}
}


console.log(`longest subarray starts at: ${l_subarr_start}. Length:${l_subarr_length}`)