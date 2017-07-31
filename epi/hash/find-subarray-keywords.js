//  EPI 13.10
//  
//  Let A and Q be arrays of strings. Define a subarray A[i:j] to cover Q if
//  for all k belongs to [0, Nq-1] where Nq is the length of Q
//  
//  there exists l belongs to  [i, j], Q[k] = A[l]
//  
//  Write a function that takes two arrays A and Q and compute a 
//  minimum length subarray A[i:j] that sequentially covers Q
//  
//  Suppose that A is presented in streaming fashion, i.e elements are
//  read one at a time, you cannot read earlier entries. The array
//  Q is much smaller and can be stored in RAM. How would you
//  modify your solution for this case.
//  
//  


var A = "My paramount object in this struggle is to save the union "
		"and is not either to save or destroy slavery. If i could save "
		"the union without freeing any slave I would do it, and If i could "
		"save by freeing all the slaves I would do it"

var Q = "save union"

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

function allKeywordsFound() {

	if (keywordsFoundCount == qTbl.length)
		return true 
	else 
		return false
} 

function findNextWord() {
	let min = Infinity

	for (let index=0; index < qTbl.length; index++) {
		let word = qTbl[index]

		if (keywords[word] < min) {
			min = keywords[word]
		}

	}

	return min
} 


// position of first keyword found
var startIdx = -1
var minStartIndex = -1
var minSubarrayLength = Infinity

// iterate through the array
for (let index = 0; index < aTbl.length; index++) {
	let word = aTbl[index]

	// skip if not a keyword
	if (isAKeyword(word) == false) {
		continue
	}

	if (startIdx < 0) {
		startIdx = index
	}
	
	// position of earlier occurrence of keyword
	let pos = keywords[word]
	if (pos < 0) {
		++keywordsFoundCount
	}

	keywords[word] = index

	// if the current word is the first keyword, then move
	// the startIdx
	if (word == aTbl[startIdx]) {
		startIdx = findNextWord()
	}

	// check if all keywords found
	if (allKeywordsFound() == true) {
		let subarrayLength = index - startIdx
		if (subarrayLength < minSubarrayLength) {
			minSubarrayLength = subarrayLength
			minStartIndex = startIdx
		}
	}
}


console.log("min sub array length: ", minSubarrayLength)
console.log("min start index: ", minStartIndex)
