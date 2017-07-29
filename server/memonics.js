

let heap = {
  '1' : [ 'A' , 'B' ],
  '2' : [ 'C' , 'D' ],
  '3' : [ 'E' , 'F' ]	
}


function printPossibleC(n) {
	let remaining = Math.floor(n / 10)
	let lastDigit = n % 10

	console.log(" l: " +  lastDigit + " r: " + remaining + " n: " + n)

	let lastDigitCharMap = heap[String(lastDigit)]

	console.log(lastDigitCharMap)

	if (remaining == 0)
		return lastDigitCharMap

	let partialNumberMap  = printPossibleC(remaining)

	return formCombo(partialNumberMap, lastDigitCharMap)
}


function formCombo(partialNumberMap, lastDigitCharMap) {
	let resultArr = []

	console.log("-------------")
	partialNumberMap.forEach(function(partialWord) {

		console.log(partialWord)

		lastDigitCharMap.forEach(function(character) {
			resultArr.push(partialWord.concat(character))	
		})	

	})

	return resultArr
}


let wordArr = printPossibleC(123)
console.log(wordArr)