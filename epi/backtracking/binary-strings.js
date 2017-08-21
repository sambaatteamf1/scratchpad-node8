// 
// Write a program that takes a positive integer N, and returns the number
// of binary strings of length N such that there are no consecutive 1s. For example, if N = 3, the result
// is 5, corresponding to the strings 000, 001, 010, 100, 101


var n = 10

function countBinString(s, prev) {
	let add0 = "0"
	let add1 = "1"

	// base case : found string of length n
	if (s.length == n) {
		// console.log("s=", s)
		return 1
	}

	if (prev == add1) {

		// case : next = 0
		return countBinString((s+add0).slice(), add0)	
	} else {

		// case: next = 0 , next = 1
		return countBinString((s+add1).slice(), add1) + countBinString((s+add0).slice(), add0)		
	}

}

var count = countBinString("", "")



console.log(`Number of bit strings of length ${n}:`, count)
