import * as _ from "lodash"

function IntCompareFn (a, b) {
	if (a == b) {
		return 0
	}

	if (a > b) {
		return 1
	} else {
		return -1
	}
}

class Stack  {

	constructor(size, compareFn) {
		this.store = []
		this.maxStore = []

		if (typeof(compareFn) == "undefined") {
			this.compareFn = IntCompareFn
		}
	}

	// returns the depth of the stack
	push(element) {
		let top = this.store.length - 1

		if (top + 1 > this.size) {
			return null
		}

		// store element in the maxStore, 
		if (top < 0 || (this.compareFn(element, this.store[top]) > 0)) {
			this.maxStore.push(element)
		}

		this.store.push(element)

		return top + 1
	}

	peek(n) {
		let top = this.store.length - 1

		if (n > top) {
			return null
		}

		let index = top - n 
		return this.store[index]
	}

	// element or null
	pop() {
		let self = this
		let top = this.store.length - 1

		if (top < 0) {
			return null
		}

		let element = this.store.pop()

		// if element being popped is in the maxStore, remove it
		this.maxStore = _.remove(this.maxStore, function(n){
			return self.compareFn(n, element) == 0
		})

		return element
	}

	max() {
		let maxTop = this.maxStore.length - 1

		if (maxTop < 0) {
			return null
		}

		return this.maxStore[maxTop]
	}

	toString() {
		return " " +  this.store + " "
	}

	empty() {
		if (this.store.length == 0)
			return true
		else 
			return false
	}

	depth() {
		return this.store.length
	}
}

export default Stack