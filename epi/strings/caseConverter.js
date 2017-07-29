import * as _ from "lodash"

// Write functions to convert between snake and camel case

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

	if (typeof(str) == "undefined") {
		return null
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