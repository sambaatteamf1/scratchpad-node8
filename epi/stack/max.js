// epi. 9.1  - Implement a max API for the stack
// 
import  Stack  from "./stack"


var s = new Stack(5)
s.push(1)
s.push(2)
s.push(3)
// s.pop(3)
console.log("max:", s.max())
console.log(s.toString())