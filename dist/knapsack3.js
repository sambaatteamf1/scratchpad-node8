"use strict";

var _lodash = require("lodash");

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var score_ways = [1, 2];
var k = 4;

function countChange(money, coins) {

	if (money == 0) {
		console.log("money: " + money + " coins: " + coins + " ways:1");
		return 1;
	} else if (money > 0 && _.isEmpty(coins) == false) {
		var score = _.head(coins) || 0;
		var ways = countChange(money - score, coins) + countChange(money, _.tail(coins));
		console.log("money: " + money + " coins: " + coins + " ways:" + ways);
		return ways;
	} else {
		console.log("money: " + money + " coins: " + coins + " ways:0");
		return 0;
	}
}

var count = countChange(k, score_ways);

console.log(count);
//# sourceMappingURL=knapsack3.js.map