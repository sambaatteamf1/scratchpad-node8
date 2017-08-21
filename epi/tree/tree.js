function printInLevelOrder(node, queue) {
	let str = "[" + node.data + "]"

	if (node.left != null) {
		queue.push(node.left)
	} 

	if (node.right != null) {
		queue.push(node.right)
	} 
	
	console.log(str)

	// dequeue node
	node = queue.shift()
	if (node != null) {
		printInLevelOrder(node, queue)
	}

	return
}


class TreeNode {

	constructor(element) {
		this.data =  element

		this.left = null
		this.right = null
	}


	bfs() {
		let queue = []
		printInLevelOrder(this, queue)
	}

	add(node) {

		if (node.data == this.data) {
			return
		}

		if (node.data < this.data) {

			if (this.left != null) {
				this.left.add(node)	
			} else {
				this.left = node
			}
			
		}

		if (node.data > this.data) {

			if (this.right != null) {
				this.right.add(node)	
			} else {
				this.right = node
			}
		}
	}
}

export default TreeNode