// epi - 9.3 print keys in a BST using a stack
// 


import TreeNode from "../tree/tree"
import Stack from "./stack"



// build tree
var t = new TreeNode(4)
t.add(new TreeNode(2))
t.add(new TreeNode(5))
t.add(new TreeNode(3))
t.add(new TreeNode(1))


// print
var node = t
var s = new Stack(10)

while (!s.empty() || node != null) {

	if (node != null) {

		s.push(node)

		// go left 
		node = node.left
	} else {
		node = s.pop()
		if (node == null) {
			break
		}

		// print node
		console.log(" " + node.data + "  ")

		// go right
		node = node.right			
	}
}