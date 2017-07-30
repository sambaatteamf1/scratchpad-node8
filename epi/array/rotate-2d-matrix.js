import * as _ from "lodash"

function buildMxNMatrix(nRows, nCols) {
	let m = []

	for (let row=0; row < nRows ; row++) {
		m[row] = []
		for (let col=0; col < nCols; col++) {
			m[row][col]= Math.floor(Math.random(new Date().getTime()) * 100)
		}
	}

	return m
}


function printMatrix(m) {

	console.log("[ ")
	for (let row=0; row < m.length ; row++) {
		let rowStr = " "
		for (let col=0; col < m[row].length; col++) {
			rowStr += " " + m[row][col] + " "
		}
		console.log(rowStr)
	}
	console.log("] ")

	return
}


function swap(arr, start, end) {
	let tmp = arr[start]
	arr[start] = arr[end]
	arr[end] = tmp 
	return
}

// reverse an array between two indexes
function reverse(arr, start, end) {

	if (start == end) {
		return
	}

	while (start < end) {
		swap(arr, start, end)
		++start
		--end
	}

	return
}

function rotateMatrix(m) {
	let n = []

	// reverse all rows
	for (let row=0; row < m.length; row++) {
		reverse(m[row], 0, m[row].length-1)
	}

	// swap rows
	let start = 0 
	let end = m.length - 1
	while (start < end) {
		let tmp = _.clone(m[start])
		n[start] = m[end]
		n[end] = tmp

		++start 
		--end
	}

	// set the middle row if the length is odd
	if (m.length % 2 != 0) {
		n[start] = m[start]	
	}
	

	return n
}


let m = buildMxNMatrix(4 , 4)
printMatrix(m)

console.log("-------------------------------")
let n = rotateMatrix(m)
printMatrix(n)
console.log("-------------------------------")