import * as _ from "lodash"

// Algorithm
// ---------
//  
// The problem has two constraints
//  a) the words must be optimally spaced
//  b) the ad size must have k lines
// 
// Optimal spaced words
// =================== 
// badness = 
//     - number of additional spaces in a line. (one space after a word is ok) 
//     - Infinity = if the line does not fit in the given width
//     
// DP[i] = DP[j] + badness(i, j)
//       for j=i+1 to n + 1
// 
// 
// Starting from the end of the text we try to optimize the number
// of words that can fit into a given width. After the last line
// is optimized, we continue doing so until the beginning of 
// the text.
// 
// In this way the entire text is optimized in O(n^2) time
// 
// Ref: https://youtu.be/ENyox7kNKeY?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb
// 
// 
// Enforcing K Lines
// =================
//  Run the above alorithm for varying width, such that it results in number of 
//  lines = K.  The below code does it is O(n), taking small steps of 1. 
//  
// 

function badness(i, j, pageWidth) {
	let totalWidth = 0
	// chars occupied for words + number of spaces between words	
	for (let index = i;  index < j; index++) {
		// one space after a word is ok
		totalWidth += words[index].length + 1    	
	}

	let b_value = pageWidth - totalWidth

	return b_value
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

		for (let j = i+1; j < n+1; j++) {

			// we already know that lower values of j does
			// not fit the line. Abort!
			if (DP[j] == undefined) {
				break				
			}

			let badness_j = badness(i, j, pageWidth)
			if (badness_j < 0) {
				// [i, j] does not fit the line
				// console.log(`string [i,j] ${i},${j} does not fit line`)				
				break
			}

			DP[i] = DP[j] + badness_j
			parent[i] =  { next : j , total_badness : DP[i] , badness : badness_j }
		}

	}

	return parent	
}

function printText(parent) {
	let count = 0
	var start = 0
	var text = ""

	for (let i=0; i < parent.length ; ) {
		let end = parent[i]
		if (end == undefined) {
			return { count : 0 , text : text }	
		}

		let line = ""
		for (let index=start; index < end.next; index++) {
			line = line + words[index] + " "
		}

		// text += line + " [badness = " +  end.badness + " ] " +  "\n"

		text += line + "\n"

		start = end.next
		i = parent[i].next

		count += 1
	}

	return { count : count , text : text }	
}


var text = `On Monday, the moon will completely eclipse the sun, and people all over the U.S. will watch. 
For those who have been boning up on eclipse trivia for weeks, congratulations. For everyone 
else, here are the things you need to know about the phenomenon. A partial solar eclipse will be visible 
everywhere in the contiguous United States, but to see the total solar eclipse, 
you'll need to be in a sash of land that cuts from Oregon to South Carolina. A lot of people 
are extremely excited, and are traveling enormous distances (and paying lots of money) to get 
to the the so-called path of totality. This is the first coast-to-coast solar eclipse in 99 years. 
People in parts of the contiguous U.S. last saw a total solar eclipse in 1979. NASA is also 
live-streaming the eclipse for four and a half hours, beginning at 11:45 a.m. ET.`

// var text = `I have a cool pet`

// var text = `You are given a string containing space-separated words of Latin letters that needs 
//             to be converted to an ad and (possibly) split into multiple lines. 
//             Ad can not occupy more than K line`

// var text = ""

var maxLines = 10
var pageWidth = 20

var words = _.words(text)
var n = words.length

if (maxLines > n) {
	console.log(`More lines than words. Setting lines to ${n}`)
	maxLines = n
}

if (maxLines <= 0) {
	process.exit(0)
}

var pw = {}

while (true) {

	// abort for invalid page widths
	if (pageWidth <= 0) {
		break
	}

	// if we have already run, the justification
	// for the given width, then break
	if (pw[pageWidth] != undefined) {
		break
	}

	let parent = justify_text_for_width(pageWidth)
	let parsed = printText(parent)

	// console.log(`With page width=${pageWidth} , total no. lines=${parsed.count}`)

	pw[pageWidth] =  parsed.count

	if (!parsed.count || parsed.count > maxLines) {
		// increase pagewidth
		pageWidth += 1

	} else if (parsed.count < maxLines) {
		// decrease pagewidth
		pageWidth -= 1
	} else {
		console.log(parsed.text)
		break
	}
}