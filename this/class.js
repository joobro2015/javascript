'use strict';

// Array 

// 1. Declaration
const arr1 = new Array()
const arr2 = [1,2];

// 2. Index. position

const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits['0'])
console.log(fruits['1'])

//  for of

for(let fr of fruits){

    console.log(fr)
}

// forEach

fruits.forEach(function(fruit, index, array){
    console.log(fruit,index)
})