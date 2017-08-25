//  EPI - 10.2 
//  
import TreeNode from "./tree"


// build tree
var t = new TreeNode(4)
t.add(new TreeNode(6))
t.add(new TreeNode(5))
t.add(new TreeNode(2))
t.add(new TreeNode(1))
t.add(new TreeNode(3))
t.add(new TreeNode(7))



console.log("....... print tree in order ............")
t.inorder()
console.log(".........................")



console.log("....... print tree level order ............")
t.bfs()
console.log(".........................")


// in-order without recursion
console.log("....... print in-order ............")

var S = []

var current = t

while (current != null || S.length > 0) {

	while (current != null) {
		S.push(current)
		current = current.left
	}

	current = S.pop()
	if (current != null) {
		console.log("[" + current.data + "]")
	}

	current = current.right
}
console.log(".........................")


console.log("....... print pre-order ............")
var A = []
var current = t

A.push(current)

while(A.length > 0) {
	current = A.pop()
	console.log("[" + current.data + "]")

	if (current.right != null) {
		A.push(current.right)
	}

	if (current.left != null) {
		A.push(current.left)	
	}
}
console.log(".........................")



var A = []
var B = []
console.log("------------- print post-order------------")
var current = t

A.push(current)

while(A.length > 0) {
	current = A.pop()
	B.push(current)

	if (current.left != null) {
		A.push(current.left)
	}

	if (current.right != null) {
		A.push(current.right)
	}
}


while(B.length > 0) {
	current = B.pop() 
	console.log("[" + current.data + "]")
}
console.log("-------------------------------------------")