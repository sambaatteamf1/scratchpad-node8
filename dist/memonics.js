'use strict';

var heap = {
	'1': ['A', 'B'],
	'2': ['C', 'D'],
	'3': ['E', 'F']
};

function printPossibleC(n) {
	var remaining = Math.floor(n / 10);
	var lastDigit = n % 10;

	console.log(" l: " + lastDigit + " r: " + remaining + " n: " + n);

	var lastDigitCharMap = heap[String(lastDigit)];

	console.log(lastDigitCharMap);

	if (remaining == 0) return lastDigitCharMap;

	var partialNumberMap = printPossibleC(remaining);

	return formCombo(partialNumberMap, lastDigitCharMap);
}

function formCombo(partialNumberMap, lastDigitCharMap) {
	var resultArr = [];

	console.log("-------------");
	partialNumberMap.forEach(function (partialWord) {

		console.log(partialWord);

		lastDigitCharMap.forEach(function (character) {
			resultArr.push(partialWord.concat(character));
		});
	});

	return resultArr;
}

var wordArr = printPossibleC(123);
console.log(wordArr);
//# sourceMappingURL=memonics.js.map