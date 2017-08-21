//  Given an array return the length of the longest increasing subarray
//  
//  A = [1, 3, 2, 3, 4, 8, 7, 9]
//  
//  longest increasing sub-array =  [ 2, 3, 4, 8]


var A = [1, 3, 2, 3, 4, 8, 7, 9]
var arrLen = A.length 


var max_start = 0
var max_end = 0



var curr_start=0
var curr_end=0 
var length = 1

var maxLength = 1

for (let i=1; i < arrLen; i++) {

	if (A[i] < A[i-1]) {
		// switch 
		curr_end = curr_start = i 
		length = 1
	} else {
		++curr_end
		++length		
	}

	// update max length
	if (length > maxLength) {
		maxLength = length
		max_start = curr_start
		max_end = curr_end
	}
}


console.log(`longest subarray starts at: ${max_start}. Length:${maxLength}`)