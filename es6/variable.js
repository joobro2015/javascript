// whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5

'use strict';

// 2. Variable(read/write)
// let (added in ES6)
{
let name = 'joobro';
name =  '주형'
console.log(name)
}

// don't use var
// var hoisting(move declaration from bottom to top)
// has no block scope

// 3. Contant
// favor immutable data type always for a few reasons;
// -security
// -thread safety
// -reduce human mistake

const dayInWeek = 7;
const maxNumber = 5;

// 4. variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first -class function

const count = 18; //integer
const size = 17.1; //decimal number

console.log(`value: ${count}, type: ${typeof count}`)
console.log(`value: ${size}, type: ${typeof size}`)

//number - spicla numeric values : infinity, -infinity, NaN

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number';

//stiring

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;

console.log(`value: ${greeting}, type:${typeof greeting}`)
const helloBob = `hi${brendan}!`;
console.log(`value:${helloBob}. type: ${typeof helloBob}`);


// boolean
// false = 0, null, undefined, NaN,''
// true : any other value