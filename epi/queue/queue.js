

class Queue {

	constructor (size) {
		this.store = []
	}

	// get the first element without removing it
	head () {
		let length = this.store.length

		if (length == 0) {
			return undefined
		}

		return this.store[0]
	}

	// get the last element without removing it
	tail () {
		let length = this.store.length

		if (length == 0) {
			return undefined
		}

		return this.store[length - 1]
	}

	enqueue (element) {
		let length = this.store.length

		if (length == size) {
			throw(new Error("QUEUE_FULL"))
		}

		return this.store.push(element)
	}

	dequeue () {
		let length = this.store.length

		if (length == 0) {
			return undefined
		}

		return this.store.shift()
	}

	length () {
		return this.store.length
	}
}

export default Queue