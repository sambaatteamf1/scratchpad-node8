//  EPI: 9.9 sort a stack in descending order


import Stack from "./stack"

var s = new Stack(10)
// populate the stack
s.push(6)
s.push(7)
s.push(3)
s.push(2)
s.push(1)
s.push(9)


function Insert(e) {
	if (s.empty() == true || s.peek(0) <= e) {
		s.push(e)
	} else {
		let f = s.pop()

		Insert(e)

		s.push(f)
	}
}

function Sort() {

	if (s.empty() != true) {

		let e = s.pop()

		// pop all the elements of the stack
		Sort()

		// insert e in the correct order
		Insert(e)
	}

}

Sort(s)

console.log("stack:", s.toString())