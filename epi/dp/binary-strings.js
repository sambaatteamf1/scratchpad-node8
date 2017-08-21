// 
// Write a program that takes a positive integer N, and returns the number
// of binary strings of length N such that there are no consecutive 1s. For example, if N = 3, the result
// is 5, corresponding to the strings 000, 001, 010, 100, 101


// Let a[i] = count of number of binary strings with non-consecutive 1s and ending with 0
// Let b[i] = count of number of binary strings with non-consecutive 1s and ending with 1


var a = []
var b = []

var n = 10

a[0]=1
b[0]=1

for (let i=1; i < n; i++) {

	// if the binary string ends with 0, then we can form two strings by appending 1, 0 
	a[i] = a[i-1] + b[i-1]
	// console.log("i = " + i + " a[i]=" + a[i])

	// if the binary string ends with 1, then we can for only one string by appending 0
	b[i] = a[i-1]
	// console.log("i = " + i + " b[i]=" + b[i])	

}

var count = a[n-1] + b[n-1]

console.log("Number of bit strings with non-consecutive 1's of length ${n}:", count)