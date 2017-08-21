// find the length of the longest increasing subsequence

// var A = [1, 3, 2, 3, 4, 8, 7, 9]

var A = [ 10, 22, 9, 33, 21, 50, 41, 60 ]

//  1, 3, 

//  1,2,3,4,8,9 or 1,2,3,4,7,9

// iterate through the array
// maintain the subsequence starting a each index in S

var S = []
var max = -Infinity
var maxIndex = -1
var arrLen = A.length - 1

for (let i=0; i <= arrLen ;i++) {

	S[i] = [ A[i] ]

	for (let j=0; j < S.length; j++) {

		let seq = S[j] || []
		let last = seq.length-1

		// push if it is an increasing sequence
		if (A[i] > seq[last]) {
			seq.push(A[i])
		}

		if (seq.length > max) {
			max = seq.length
			maxIndex = j
		}

		S[j] = seq
	}
}

console.log("max subsequence length:", max)
console.log("max subsequence:", S[maxIndex])