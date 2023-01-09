'use strict';

// Declaration

const arr1 = new Array();
const arr2 = [];

// Index position🍎🍌

const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits['0']);
console.log(fruits['1']);

// 3. Looping over an array
// a. for
// for(let i = 0; i< fruits.length;i++){
//     console.log(fruits[i]);
// }

// // b. for of
// for(let fruit of fruits){
//     console.log(fruit);
// }


// c. forEach
console.clear
fruits.forEach((fruit,index)=>console.log(fruit,index))

// Addition, deletion, copy
// push : add an item to the end
fruits.push('🍓','🍒');
console.log(fruits)

fruits.pop();
console.log(fruits)
