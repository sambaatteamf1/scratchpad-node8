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

function badness(words, i, j, pageWidth) {
	let totalWidth = 0
    let nwords = j - i
    let lastWord = j - 1
   
    if (nwords == 0) {
        return 0
    }
    
	// chars occupied for words + number of spaces between words	
	for (let index = i;  index < j; index++) {

		// one space after a word is ok, except for the last word
        // (because line has to be left and right justified)
        if (index == lastWord) {
            totalWidth += words[index].length
        } else {
            totalWidth += words[index].length + 1    
        }
	}

	let b_value = pageWidth - totalWidth

	return b_value
}

function justify_text_for_width(words, pageWidth) {
	// store index where the next line begins
	var parent = []

    let n = words.length
    
	// memo table for minimizing the badness of the next line
	var DP = []

	// badness=0 if the current line started at the last (i.e n-1th index) word 
	// because there will not be any second line
	DP[n] = 0


	for (let i = n-1; i >= 0; i--) {
		let min = Infinity
		
		for (let j = i+1; j < n+1; j++) {

			// we already know that lower values of j does
			// not fit the line. Abort!
			if (DP[j] == undefined) {
				break				
			}

			let badness_j = badness(words, i, j, pageWidth)
			if (badness_j < 0) {
				// [i, j] does not fit the line
				// console.log(`string [i,j] ${i},${j} does not fit line`)				
				break
			}

			let total_badness = DP[j] + Math.pow(badness_j, 3)
			if (total_badness <= min) {
				min = DP[i] = total_badness
				parent[i] =  { next : j , total_badness : DP[i] , badness : badness_j }	
				// console.log(`min badness: ${min} spaces: ${badness_j} for i=${i} and next line at j=${j}`)
			} else {
                // console.log(`badness: ${total_badness} for i=${i} and next line at j=${j}`)
            }
			
		}

	}

	return parent	
}

function printText(words, parent, pageWidth) {
	let count = 0
	var start = 0
	var text = []

	for (let i=0; i < parent.length ; ) {
		let end = parent[i]

		if (end == undefined) {
			return { count : 0 , text : text }	
		}

		// last word in the line
		let last = end.next-1
		let line = ""

		// fill it with 1, atleast one space after a word
		let nwords = end.next - start 
		let spacesArr = new Array(nwords).fill(1)
        
		// distribute the badness equally from left to right equally, except for the last line.
        // For the last line of text, it should be left justified and no extra space is inserted between words.
        
        if (last < words.length - 1) {
            // console.log(`Adding spaces for line which starts at word ${i}`)
            
            let extra_spaces = end.badness
            while (extra_spaces > 0 && start < last) {

                for (let index=start, widx=0; ((extra_spaces > 0) && (index < last)); index++, widx++) {
                    spacesArr[widx] += 1	    
                    --extra_spaces
                }
            } 
        }
        
		for (let index=start, widx=0; index < last; index++, widx++) {
			let spaces = ""

            // console.log(`Adding ${spacesArr[widx]} spaces after word: ${words[index]}`)
            
			while (spacesArr[widx] > 0) {
				spaces += " "
				spacesArr[widx] -= 1
			}

			line = line + words[index] + spaces
		}

        
		// line = line +  words[last] + "[badness = " +  end.badness + " ] " 

		line = line + words[last] 

        // fill spaces at the end         
        if  (line.length != pageWidth) {
            let diff = pageWidth - line.length
            while (diff > 0 ) {
                line = line + " "
                --diff
            }
        }
    
        text.push(line)
        
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

var text = `I have a cool pet`

var text = `You are given a string containing space-separated words of Latin letters that needs 
            to be converted to an ad and (possibly) split into multiple lines. 
            Ad can not occupy more than K line`

// var text = ""

// var text = "This is an example of text justification."

var maxLines = 4

function optimizeTextForKLines() {
	let pageWidth = 14

	let words = _.words(text)
	let n = words.length

	if (maxLines > n) {
		console.log(`More lines than words. Setting lines to ${n}`)
		maxLines = n
	}

	if (maxLines <= 0) {
		process.exit(0)
	}


	var pw = {}
	let parent = []
	let parsed = {}

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

		parent = justify_text_for_width(words, pageWidth)
		parsed = printText(words, parent, pageWidth)

		// console.log(`With page width=${pageWidth} , total no. lines=${parsed.count}`)

		pw[pageWidth] =  parsed.count

		if (!parsed.count || parsed.count > maxLines) {
			// increase pagewidth
			pageWidth += 1

		} else if (parsed.count < maxLines) {
			// decrease pagewidth
			pageWidth -= 1
		} else {
			break
		}
	}

	return parsed.text
}

console.log(optimizeTextForKLines())



