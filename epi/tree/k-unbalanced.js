//  EPI - 10.2 
//  


import TreeNode from "./tree"


// build tree
var t = new TreeNode(4)
t.add(new TreeNode(6))
t.add(new TreeNode(5))
t.add(new TreeNode(3))
t.add(new TreeNode(1))
t.add(new TreeNode(2))
t.add(new TreeNode(7))


// in-order traversal

function search(t) {
	
	let left_count = 0
	let right_count = 0

	if (t == null)  {
		return 0
	}

	// traverse left
	if (t.left != null) {
		left_count = search(t.left)
	}

	// print t 
	console.log(t.data)
	
	// traverse right
	if (t.right != null) {
		right_count += search(t.right)
	}

	// console.log("node:" + t.data + " has left=" + left_count + " right=" + right_count)

	// let diff  = abs(left_count - right_count)
	// if (diff > k) {
	// 	console.log("node:" + node.data + " has k=" + k + " unbalanced children")
	// } 

	return right_count + left_count + 1
}


let count = search(t)