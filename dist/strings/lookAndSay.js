"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.lookAndSay = lookAndSay;

//  1, 11, 21, 1211, 111221, 312211
//  
//  start with a 1
//  maintain a str which represents the current number
//  scan the current runner, hava a frequency counter representing the number of repititions
//  


function getNext(currentNum, iterNo) {
	var currentNumStr = String(currentNum);
	var currentCharFreq = 0;
	var cursor = 0;
	var prevChar = -1;
	var nextNumberStr = "";
	var currentChar = 0;

	console.log("iter:", iterNo);

	prevChar = Number(currentNumStr.charAt(cursor));

	while (cursor < currentNumStr.length) {

		currentChar = Number(currentNumStr.charAt(cursor));

		console.log("currentChar:" + currentChar + " prevChar:" + prevChar + " freq: " + currentCharFreq);

		if (currentChar == prevChar) {
			currentCharFreq++;
		} else {
			nextNumberStr += String(currentCharFreq) + String(prevChar);
			currentCharFreq = 1;
		}

		cursor = cursor + 1;
		prevChar = currentChar;
	}

	nextNumberStr += String(currentCharFreq) + String(prevChar);
	console.log("next number:", nextNumberStr);

	return Number(nextNumberStr);
}

function lookAndSay(n) {
	var numArr = [];
	var index = 0;

	numArr.push(1);
	++index;

	while (index < n) {
		numArr.push(getNext(numArr[index - 1], index));
		index++;
	}

	return numArr;
}
//# sourceMappingURL=lookAndSay.js.map