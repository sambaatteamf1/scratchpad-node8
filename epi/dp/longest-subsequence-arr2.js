// find the length of the longest increasing subsequence

// var A = [1, 3, 2, 3, 4, 8, 7, 9]

var A = [ 10, 22, 9, 33, 21, 50, 41, 60 ]

//  1, 3, 

//  1,2,3,4,8,9 or 1,2,3,4,7,9

// iterate through the array
// maintain the subsequence starting a each index in S

// Consider smaller array subsets. 
// Use sliding window to check max (LIS[j], LIS[i] + 1)
// 
// 
// [ 10 ]
// [ 10, 22 ]
// [ 10, 22, 9]
//  ... 
// [ 10, 22 ... 60]

var LIS = []
var max = -1
var arrLen = A.length - 1

for (let i=0; i <= arrLen ;i++) {

	LIS[i] = 1

	for (let j=0; i > 0 && j <= i-1; j++) {

		if (A[i] > A[j]) {
			LIS[i] = Math.max(LIS[i] ,  LIS[j]+1)
		}

		if (LIS[i] > max) {
			max = LIS[i]
		}

	}
}

console.log("Max:", max)