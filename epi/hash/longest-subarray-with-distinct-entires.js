//  13.11 - Longest subarray with distinct entires
//  

var A = [ 5, 7, 5, 11, 13, 2, 11, 19, 2, 11]

var longestSubArray = -1
var longestSubArrayStartIdx = 0
var subarrayLength = 0
var startIdx = 0
var cache = {}

for (let index = 0; index < A.length;  index++) {
	var num = A[index]

	// if we have already seen the number
	var pos = cache[num]
	if (typeof(cache[num]) != "undefined" && pos >= startIdx) {
		subarrayLength = index - startIdx
		if (subarrayLength > longestSubArray) {
			longestSubArray = subarrayLength
			longestSubArrayStartIdx = startIdx
		}

		// set
		startIdx = pos + 1
	}

	cache[num] = index
}

console.log("longest subarray:", longestSubArray)
console.log("longest subarray start Index:", longestSubArrayStartIdx)
