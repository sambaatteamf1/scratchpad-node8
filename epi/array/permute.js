import * as _ from "lodash"


// permute the elements of array
// 

var A = [ 'a', 'b', 'c', 'd' ]


function process_solution(arr) {

	let str = " { "

	_.each(arr, function(value, idx){
		str += " " + A[value] + " "
	})

	str += " } "

	console.log(str)

	return
}


function is_a_solution(arr, k) {
	let n  = A.length-1

	if (k == n) {
		return true
	} else {
		return false
	}
}

function find_combinations(arr, k) {
	let in_perm = []

	_.each(A, function(value, idx) {
		in_perm[idx] = false
	})

	_.each(arr, function(idx){
		in_perm[idx] = true
	})

	var combinations = []
	_.each(in_perm, function(value, idx) {

		if (value == true) {
			return
		}

		combinations.push(idx)
	})

	return combinations
}

function backtrack(arr, k) {
	if (is_a_solution(arr, k)) {
		process_solution(arr)
	} else {
		k = k + 1

		let combinations = find_combinations(arr, k)

		_.each(combinations, function(combination) {

			arr[k] = combination
			backtrack(arr, k)
			delete arr[k]
		})
	}
}

function permute() {
	// index of the solution array
	let arr = []
	let k = -1
	backtrack(arr, k)
}

permute()