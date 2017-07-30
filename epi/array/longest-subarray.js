//  Implement an algorithm that takes as input an array A of n elements, and returns
//  the beginning and ending indices of a longest increasing subarray of A
//  
//  For example, A = [ 2, 11, 3, 5, 13, 7, 19, 17, 23 ]
//  
//  Longest increasing sub-array = [ 3, 5, 13 ]
//  



// Use a sliding window
// 
// subArrayStart :  start index of longest increasing subarray
// subArrayEnd   :  end index of longest increasing subarray
// 
// maxSubArrayLen : lenght of increasing subarray
// 
// startWin : start of the sliding window
// cursor : current element being considered 
// currSubArrayLen : length of the current sub-array
// 
// Algorithm:
// 
// 1. Set all variables to the start of the  array
//   currSubArrayLen = startWin = cursor = subArrayStart =  subArrayEnd = 0
//  
//
// 2.cursor = 1
// 
// 3. Loop until end of string
//    if A[cursor] > a[cursor-1]
//       currSubArrayLen += 1 
//
//    # reset the indexes
//    if A[cursor] <= a[cursor-1]  
//       
//       if currSubArrayLen > maxSubArrayLen
//       	  subArrayStart = startWin
//       	  subArrayEnd = cursor	
//            maxSubArrayLen = currSubArrayLenn
//            
//       startWin = cursor
//       
//    ++cursor             
//       
//       

// results 
var subArrayStart = 0
var subArrayEnd = 0
var maxSubArrayLen = 0

function longestSubArray(arr) {
	// variables
	let startWin = 0
	let cursor = 0
	let currSubArrayLen = 0

	// case arr.length = 0, 1
	if (arr.length < 2) {
		maxSubArrayLen = arr.length
		return
	}

	cursor = 1

	while (cursor <  arr.length) {

		// current element is gt previous
		if (arr[cursor] >= arr[cursor-1]) {
			currSubArrayLen += 1
		} else {

			// record if max
			if (currSubArrayLen > maxSubArrayLen) {
				subArrayStart = startWin
				subArrayEnd = cursor - 1
				maxSubArrayLen = currSubArrayLen
			}

			// reset the window
			currSubArrayLen = 0
			startWin = cursor
		}

		++cursor
	}

	return
}



// var A = [ 2, 11, 3, 5, 13, 16, 19, 17, 23 ]
var A = [ 2, 11, 3, 5, 13, 16, 19, 19, 17, 23 ]
// var  A = []
// var  A = [1]

longestSubArray(A)

let index = subArrayStart
let result = " { "
while (index <= subArrayEnd) {
	result += " " + A[index] + " "
	++index	
}

result += " } "
console.log(result)