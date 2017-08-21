//  Write a program to find the sum of contiguous  subarray within a one-dimensional array of numbers
//  which has the largest sum


 var A = [ -2, -3, 4, -1, -2, 1, 5, -3 ]

// Let S be the sum array. It stores the maximum sum at a given position. 

// To get a maximum at position i = Max(S[i-1]+A[i] , A[i])

var S = []
var max = -Infinity
var end_index = -1
var start_index = -1
var range = 0

S[0] = A[0]

for (let i=1; i < A.length; i++) {
	
	// sum if current element is included
	let sum = S[i-1] + A[i]

	S[i] = Math.max(sum, A[i])

	// console.log(`S[i] = ${S[i]}`)

	// Increment range if contiguous elements are being
	// considered.
	
	if (S[i] != A[i]) {
		++range
	} else {
		range = 0
	}

	if (S[i] > max) {

		max = S[i]

		// console.log(`max= ${max}`)

		end_index = i
		start_index = i - range
	}
}

console.log(`Largest sum:= ${max} at range = [ ${start_index} - ${end_index} ] `)