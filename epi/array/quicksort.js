//  Implement quick sort
//  


var A = [99, 21, 11, 14, 1, 7, 3, 12, 10, 19, 33]

// var A = [21, 11, 14, 1, 7, 3 ]

// var A = []

// var A = [ 12 , 10]

function swap(x, y) {
	console.log(`swap: ${A[x]} <=> ${A[y]} index: ${x} <=> ${y}`)

	let tmp = A[x]
	A[x] = A[y]
	A[y] = tmp
	return
}

function quicksort(start, end) {
	let wall = start
	let pivot = A[end]

	console.log(`start: ${start} end: ${end} pivot: ${pivot}`)

	if (start >= end) {
		console.log("terminate recursion..")
		return
	}
	
	console.log(`sort elements using pivot: ${pivot} at index: ${end}`)

	for (let current=start; current < end; current++) {

		if (A[current] < pivot) {
			swap(current, wall)
			++wall
		}
	}

	console.log(`wall is at ${wall}`)

	// drop the pivot on the wall. The pivot is
	// on in the correct sorted postion
	swap(wall, end)

	// sort the left partition
	quicksort(start, wall-1)

	console.log(`sort right parition of ${A} from ${wall+1} to ${end} (${start} - ${end})`)

	// sort the right parition
	quicksort(wall+1, end)	

	return
}


console.log("A:", A)
quicksort(0, A.length-1)
console.log("after sorting A:", A)

