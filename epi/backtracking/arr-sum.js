import * as _ from "lodash"

// valid inputs
var A = [2, 3, 7];

// Total
var Sum = 15;

// solution set
var solution_set = [];

// is the sum eq to 15
function is_a_solution(solution) {

	var total = solution.reduce(function (sum, element) {
		return sum += element;
	}, 0);

	// console.log("Checking solution:" +  current_solution + " sum: " + total)

	if (total === Sum) {
		return true;
	}

	return false;
}

// print the combination that sums to  15
function process_solution(solution) {
	var str = "[";
	_.each(solution, function (value, index) {
		str += " " + value + " ";
	});

	str += "] ";

	console.log(str);
	return;
}

// check if the combination is being repeated
function generate_combinations(current_solution) {
	var candidates = [];
	var current_sum = current_solution.reduce(function (sum, element) {
		return sum += element;
	}, 0);

	var last = _.last(current_solution);
	var filtered = [];
	if (last) {
		filtered = _.filter(sortedA, function (element) {
			return element <= last;
		});
	} else {
		filtered = sortedA;
	}

	var remaining = Sum - current_sum;

	_.each(filtered, function (value, index) {

		if (remaining - value >= 0) {
			candidates.push(value);
		}
	});

	return candidates;
}

function backtrack(current_solution, currNum) {

	if (is_a_solution(current_solution)) {
		// add solution to the solution set 
		solution_set.push(current_solution);
		process_solution(current_solution);
	} else {

		var candidates = generate_combinations(current_solution);
		// console.log("Got candidates :", candidates)

		_.each(candidates, function (value, index) {
			// make move
			current_solution.push(value);
			backtrack(current_solution);

			// unmake move
			current_solution.pop();
		});
	}
}

var current_solution = [];
var sortedA = _.reverse(_.sortBy(A));
backtrack(current_solution);