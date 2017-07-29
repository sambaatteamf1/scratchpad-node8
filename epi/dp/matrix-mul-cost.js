//  CLRS 15.2 Matrix chain multiplication
//  
//  Parenthesize the matrix such that the cost of multiplication is optimal

function buildInput(n) {
	let m = []
	let nRows = Math.floor(Math.random() * 10)
	let nCols = Math.floor(Math.random() * 10)

	for (let i=0; i <= n ; i++) {
		m[i] = [nRows, nCols]
		nRows = nCols 
		nCols = Math.floor(Math.random() * 10)
	}

	return m
}


// let m = buildInput(4)
// console.log(m)


let m = []
m[0] = [100, 50]
m[1] = [50, 5]
m[2] = [5, 25]
m[3] = [25, 30]
m[4] = [30, 29]

let  memo = {}
let memoOptimalBreak = {}

function parenthesize(i, j) {
	let nCost = Infinity

	if (i >= j) {
		return 0
	}

	let key = i + "-" + j
	if (memo[key] != undefined) {
		return memo[key]
	} 


	for (let k = i; k < j; k++) {
		

		let iCost = parenthesize(i, k) + parenthesize(k+1, j) + (m[i][0] * m[j][1])

		if (iCost < nCost) {
			memoOptimalBreak[key] = k
			nCost = iCost
		}

		console.log("k:" + k + " i:" + i + " j:" + j + " iCost:" + iCost + " nCost: " + nCost)

	}

	memo[key] = nCost
	return nCost
}


let cost = parenthesize(0, m.length-1)
console.log(cost)

function printPattern(i, j){
	if (i == j){
		console.log(m[i])
	}
	else
	{
		let key = memoOptimalBreak[i +'-' + j]
		
			console.log("(")
			printPattern(i, key)
			printPattern(key+1, j)
			console.log(")")			
		

	}
}

console.log(memoOptimalBreak)
// { '3-4': 3,
//   '2-4': 3,
//   '2-3': 2,
//   '1-4': 1,
//   '1-2': 1,
//   '1-3': 1,
//   '0-4': 1,
//   '0-1': 0,
//   '0-2': 1,
//   
//   '0-3': 1 }

printPattern(0, m.length-1)