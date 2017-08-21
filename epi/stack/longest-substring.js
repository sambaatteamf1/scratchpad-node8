//  epi : 9.4 Compute longest substring with matching parens
//  
//  s =  )((3+4)(4+3)(
//  longest substring  = (3+4)(4+3)
//  
//  
import Stack from "./stack"

var max =  -Infinity

function longest_matching_substr(s) {
	let store = new Stack(s.length)
	let index = 0
	let indexOfOpenParen = -1

	for (index =0; index < s.length ; index++) {

		if (s[index] == "(") {
			store.push(index)
			continue
		}

		if (s[index] == ")") {

			indexOfOpenParen = store.peek(0)
			if (typeof(indexOfOpenParen) == "undefined") {
				continue
			}

			let length = (index - indexOfOpenParen)
			if (length > max) {
				console.log("max substring: start:" + indexOfOpenParen + " end:" + index)
				max = length
			}

			store.pop()
		}
	}
}


var s = ")((3+4)(4+3))("
longest_matching_substr(s)
console.log("max substring length:", max)