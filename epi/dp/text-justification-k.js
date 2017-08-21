import * as _ from "lodash"

var text = `On Monday, the moon will completely eclipse the sun, and people all over the U.S. will watch. 
For those who have been boning up on eclipse trivia for weeks, congratulations. For everyone 
else, here are the things you need to know about the phenomenon. A partial solar eclipse will be visible 
everywhere in the contiguous United States, but to see the total solar eclipse, 
you'll need to be in a sash of land that cuts from Oregon to South Carolina. A lot of people 
are extremely excited, and are traveling enormous distances (and paying lots of money) to get 
to the the so-called path of totality. This is the first coast-to-coast solar eclipse in 99 years. 
People in parts of the contiguous U.S. last saw a total solar eclipse in 1979. NASA is also 
live-streaming the eclipse for four and a half hours, beginning at 11:45 a.m. ET.`

var words = _.words(text)
var n = words.length

function badness(i, j, pageWidth) {
	let totalWidth = 0
	// chars occupied for words + number of spaces between words	
	for (let index = i;  index < j; index++) {
		// one space after a word is ok
		totalWidth += words[index].length + 1    	
	}
	
	let b_value = pageWidth - totalWidth
	// console.log(`b value at ${i} = ${b_value}`)
	if ( b_value < 0 ) {
		return  Infinity
	} else {
		return b_value
	}
}

function justify_text_for_width(pageWidth) {
	// store index where the next line begins
	var parent = []

	// memo table for minimizing the badness of the next line
	var DP = []

	// badness=0 if the current line started at the last (i.e n-1th index) word 
	// because there will not be any second line
	DP[n] = 0

	for (let i = n-1; i >= 0; i--) {
		let min = 0
		
		if (DP[i] == undefined) {
			min = Infinity
		}

		for (let j = i+1; j < n+1; j++) {
			let badness_j = DP[j] +  badness(i, j, pageWidth)
			if (badness_j <= min) {
				min = badness_j
				parent[i] = j
			}
		}

		DP[i] = min	
	}

	return parent	
}

function printText(parent) {
	let count = 0
	var start = 0
	for (let i=0; i < parent.length ; ) {
		let end = parent[i]
		let line = ""
		for (let index=start; index < end; index++) {
			line = line + words[index] + " "
		}
		console.log(line)
		start = end
		i = parent[i]
		count += 1
	}

	return count	
}

var maxLines = 5
var pageWidth = 72

if (maxLines > n) {
	console.log(`More lines than words. Setting lines to ${n}`)
	maxLines = n
}

if (maxLines <= 0) {
	return
}

while (true) {
	let parent = justify_text_for_width(pageWidth)
	let lineCount = printText(parent)

	console.log(`With page width=${pageWidth} , total no. lines=${lineCount}`)

	if (lineCount > maxLines) {
		// increase pagewidth
		pageWidth += 1
	} else if (lineCount < maxLines) {
		// decrease pagewidth
		pageWidth -= 1
	} else {
		break
	}
}
