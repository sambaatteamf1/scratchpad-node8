// var A  = [ 7, 2, 1, 6, 8, 5 , 3 , 4]
var A = [21, 11, 14, 1, 7, 3]

function swap(A, leftIndex, cursor) {
	var tmp 

	console.log("swap: " + A[leftIndex] + " <- " + A[cursor])
	tmp = A[leftIndex]
	A[leftIndex] = A[cursor]
	A[cursor] = tmp

	return
}

function sort(A, start, end, k) {
	var pivot = 0
	var pivotIndex =  0
	var leftIndex = start
	var cursor = start

	var length = end - start
	if (length == 0) {
		return A[start]
	}

	pivotIndex = end
	pivot = A[pivotIndex]

	console.log("A:" + A +  " start: " + start + " end: " + end + " pivot:" + pivot)

	// parition elements using the pivot
	while (cursor < (start + length)) {
		if (A[cursor] <=  pivot) {
			swap(A, leftIndex, cursor)
			leftIndex = leftIndex + 1
		}
		++cursor
	}

	swap(A, leftIndex, pivotIndex)
	pivotIndex = leftIndex 

	var nsorted = leftIndex + 1 

	if (nsorted == k) {
		return A[pivotIndex]
	} else if (nsorted > k) {
		return sort(A, start, pivotIndex-1, k)
	} else {
		return sort(A, pivotIndex+1, end, k)
	}
}


// find the kth smallest element
function main(k) {
	return sort(A, 0, A.length-1, k)
}


var element = main(4)
console.log(element)