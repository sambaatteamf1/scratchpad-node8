"use strict";

var _marked = [bar, foo].map(regeneratorRuntime.mark);

// function *foo() {
//  console.log("exec foo ..")
//  let x = 1 + (yield "foo")
//  console.log(" #{x} = ", x)
// }


// let g = foo()
// console.log("invoke generator 1 ..")
// console.log(g.next())
// console.log("invoke generator 2 ..")
// console.log(g.next(2))
// console.log("Exit")
// 

// function bar() {
//  console.log("hello world!")
// }

// let i = bar()

// console.log(typeof foo())


// for (let g of foo()) {
//  console.log(g)
// }
// 
// 

function bar() {
    return regeneratorRuntime.wrap(function bar$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return 3;

                case 3:
                    _context.next = 8;
                    break;

                case 5:
                    _context.prev = 5;
                    _context.t0 = _context["catch"](0);

                    console.log("error caught in bar ..");

                case 8:
                    return _context.abrupt("return", 4);

                case 9:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[0, 5]]);
}

function foo() {
    var y;
    return regeneratorRuntime.wrap(function foo$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return 1;

                case 2:
                    return _context2.delegateYield(bar(), "t0", 3);

                case 3:
                    y = _context2.t0;

                    console.log("y:", y);
                    _context2.next = 7;
                    return 6;

                case 7:
                    throw "ugh!";

                case 8:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}

// for (let x of foo()) {
//  console.log(x)
// }
// 
// 
var it = foo();
console.log(it.next()); // 1
console.log(it.next()); // 3
console.log(it.throw("oops!"));
try {
    console.log(it.next()); // 6    
} catch (err) {
    console.log("Error:", err);
}
//# sourceMappingURL=generator.js.map