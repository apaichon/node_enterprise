/*
  ** Constant
*/
const number = 99, text = 'Hello', object = {id: 1, name: 'John'}

/*
  ** Scoping
  ** Block-Scoped Variables
*/

/* var */
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
varTest()

/* let */
var i = 100, b = 'Hello'
for (let i = 0; i < b.length; i++) {
  let y = b[i]
  console.log(`loop let i = ${i}`)
}
console.log(`var i = ${i}`)

/*
  ** Arrow Function
  ** Expression Bodies
*/

let evens = [2, 4, 6, 8]
/* ES6 */
let odds  = evens.map(v => v + 1)
console.log(odds)
/* ES5 */
let odds2  = evens.map(function (v) { return v + 1 })
console.log(odds2)

/*
  ** Arrow Function
  ** Statement Bodies
*/

let nums = [1, 2, 3, 4, 5], fives = []

/* ES6 */
nums.forEach(v => { if (v % 5 === 0) fives.push(v) })
console.log(fives)

/* ES5 */
nums.forEach(function (v) { if (v % 5 === 0) fives.push(v) })
console.log(fives)

/*
  ** Extended Parameter Handling
  ** Default Parameter Values
*/
/* ES6 */
function f (x, y = 7, z = 42) {
  return x + y + z
}
console.log(f(1) === 50)
/* ES5 */
function f (x, y, z) {
  if (y === undefined)
      y = 7;
  if (z === undefined)
      z = 42;
  return x + y + z;
};
f(1) === 50;

/*
  ** 
*/

var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
const f1 = (x, y, ...a) => (x + y) * a.length
console.log(f1(1, 2, ...params) === 9 )

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]

var other = [ 1, 2 ].concat(params); // [ 1, 2, "hello", true, 7 ]

function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f.apply(undefined, [ 1, 2 ].concat(params)) === 9;

function f2 (x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}; 
console.log(f2.apply(undefined, [ 1, 2 ].concat(params)) === 9);

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log(message)

console.log(0b111110111 === 503)
console.log(0o767 === 503)

parseInt("111110111", 2) === 503;
parseInt("767", 8) === 503;

var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]

var list = [ 1, 2, 3 ];
var a = list[0], b = list[2];
var tmp = a; a = b; b = tmp;

const getASTNode = () => {
  var op = { id: 1, name: "A"}
  var lhs = 99.5, rhs = 300, pi = 3.14
  return { op, lhs, rhs, pi}
}
var { op, lhs, rhs } = getASTNode()
console.log(op, lhs, rhs)

/* index.js */
import * as math from "./lib/math"
console.log("2π = " + math.sum(math.pi, math.pi))

import { sum, pi } from "./lib/math"
console.log("2π = " + sum(pi, pi))

class Shape {
  constructor (id, x, y) {
      this.id = id
      this.move(x, y)
  }
  move (x, y) {
      this.x = x
      this.y = y
  }
}

class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
      super(id, x, y)
      this.width  = width
      this.height = height
  }
}
class Circle extends Shape {
  constructor (id, x, y, radius) {
      super(id, x, y)
      this.radius = radius
  }
}

/*
class Shape {
  …
  toString () {
      return `Shape(${this.id})`
  }
}
class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
      super(id, x, y)
      …
  }
  toString () {
      return "Rectangle > " + super.toString()
  }
}

class Rectangle extends Shape {
  …
  static defaultRectangle () {
      return new Rectangle("default", 0, 0, 100, 100)
  }
}
class Circle extends Shape {
  …
  static defaultCircle () {
      return new Circle("default", 0, 0, 100)
  }
}
var defRectangle = Rectangle.defaultRectangle()
var defCircle    = Circle.defaultCircle()
*/

/*
class Rectangle {
  constructor (width, height) {
      this._width  = width
      this._height = height
  }
  set width  (width)  { this._width = width               }
  get width  ()       { return this._width                }
  set height (height) { this._height = height             }
  get height ()       { return this._height               }
  get area   ()       { return this._width * this._height }
}
var r = new Rectangle(50, 20)
console.log(r.area === 1000)
*/

