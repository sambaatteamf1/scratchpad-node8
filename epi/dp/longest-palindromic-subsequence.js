// find the longest palindromic subsequence

// Example: underqualified -> deified

var str = "underqualified"


var start = 0
var end = str.length - 1
var cache = []
var cached = 0
var non_cached = 0

function longest_subsequence(start, end) {

	if (typeof(cache[start]) == 'undefined') {
		cache[start] = []
	}


	var count = cache[start][end]
	if (typeof(count) == 'undefined') {

		// middle character 
		if (start == end) {
			count = 1		

		// found equal chars, advance both cursors
		} else if (str[start] == str[end]) {
			count = 2 + longest_subsequence(start+1, end-1)		
		} else {

			// case 1: advance start
			// case 2: advance end
			// choose the case which results in max count
			count = Math.max(longest_subsequence(start, end-1), longest_subsequence(start+1, end))
		}

		++non_cached

	} else {
		++cached
	}

	cache[start][end] = count

	return count	
}



// deified
var size = longest_subsequence(start, end)
console.log(size)
console.log(`read from cache: ${cached}, non cached: ${non_cached}`)
