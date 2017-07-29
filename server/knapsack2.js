

var score_ways = [ 1, 2 ]
var k = 4

// var score_ways = [2, 3, 7];
// var k = 12;

var combinations = new Array(k+1).fill(0)

combinations[0] = 1

for (let score of score_ways ) {

	console.log("score:", score)

	for (let j = score ; j <= k ; j++ ) {
  		combinations[j] = combinations[j-score] + combinations[j]

  		console.log("combinations[" + j  + "]=" + combinations[j])
  	}
}
    

console.log("Number of combinations", combinations[k])


