import * as _ from "lodash"

var denominations = [ 1, 2 ]
var k = 4

function countChange(money, coins) {
	
	if (money == 0) {
		console.log("money: " + money + " coins: " + coins  + " ways:1")
		return 1
	} else if (money > 0 && (_.isEmpty(coins) == false)) {
		let score = _.head(coins) || 0
		let ways = countChange(money - score, coins) + countChange(money, _.tail(coins))
		console.log("money: " + money + " coins: " + coins  + " ways:" + ways)
		return ways
	} else {
		console.log("money: " + money + " coins: " + coins  + " ways:0")
		return 0
	}
}


var count = countChange(k, denominations)

console.log(count)