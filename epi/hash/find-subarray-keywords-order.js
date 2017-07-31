//  EPI 13.9
//  
//  Let A and Q be arrays of strings. Define a subarray A[i:j] to cover Q if
//  for all k belongs to [0, Nq-1] where Nq is the length of Q
//  
//  there exists l belongs to  [i, j], Q[k] = A[l]
//  
//  Write a function that takes two arrays A and Q and compute a 
//  minimum length subarray A[i:j] that covers Q
//  
//  Suppose that A is presented in streaming fashion, i.e elements are
//  read one at a time, you cannot read earlier entries. The array
//  Q is much smaller and can be stored in RAM. How would you
//  modify your solution for this case.
//  
//  

import * as _ from "lodash"


var A = "My paramount object in this struggle is to save the union " + 
		"and is not either to save or destroy slavery. If i could save " + 
		"the union without freeing any slave I would do it, and If i could " +
		"save by freeing all the slaves I would do it"

var Q = "union save"

var qTbl = Q.split(" ")	
var aTbl = A.split(" ")
var keywordsFoundCount =  0

// initialize keyword positions
var keywords = {}
for (let index=0; index < qTbl.length; index++) {
	keywords[qTbl[index]] = -1
}

function isAKeyword(str) {
	return typeof(keywords[str]) != 'undefined'
}

// position of first keyword found
var startIdx = -1
var currentKeywordIdx = 0
var minStartIndex = -1
var minSubarrayLength = Infinity

// iterate through the array
for (let index = 0; index < aTbl.length; index++) {
	let word = aTbl[index]

	// skip if not a keyword
	if (isAKeyword(word) == false) {
		continue
	}

	if (qTbl[currentKeywordIdx] != word) {
		startIdx = -1
		currentKeywordIdx = 0
		continue
	}

	if (startIdx < 0) {
		startIdx = index
	}

	++currentKeywordIdx

	if (currentKeywordIdx == qTbl.length) {
		let subarrayLength = index - startIdx
		if (subarrayLength < minSubarrayLength) {
			minSubarrayLength = subarrayLength
			minStartIndex = startIdx
		}
		// reset tracking variables
		startIdx = -1
		currentKeywordIdx = 0
	}
}


console.log("min sub array length: ", minSubarrayLength)
console.log("min start index: ", minStartIndex)
