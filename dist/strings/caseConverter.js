"use strict";

var _lodash = require("lodash");

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//  str = "this_is_a_test"
// 
// 
//  Test cases:
//  - null string , string of length 0
//  - invalid snake case . escape "_"
//  - invalid case trim any leading underscores
//  - handle character that do not have upper  case  { - , 0-9}
//  
function toCamelCase(str) {

	if (typeof str == "undefined") {
		return null;
	}

	if (str.length == 0) {
		return null;
	}

	var tokenArr = str.split("_") || [];

	var firstToken = false;

	_.each(tokenArr, function (value, index) {

		if (value.length < 1) {
			delete tokenArr[index];
			return;
		}

		if (!firstToken) {
			firstToken = true;
			return;
		}

		// iterate to the first char 
		tokenArr[index] = value.charAt(0).toUpperCase() + value.substr(1);
	});

	return tokenArr.join("");
}

// 
// str = "thisIsATest"
// 
function toSnakeCase(str) {}
//# sourceMappingURL=caseConverter.js.map