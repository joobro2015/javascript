//object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object



// 변수에는 하나만 값을 넣을 수 있따.

// 개선하기 위해서 오브젝트를 사용



const obj1 = {};
const obj2 = new Object();

function print(person){
    console.log(person.name);
    console.log(person.age);
}
const joobro = { name : 'joobro', age:4}
print(joobro);

// computed properties
console.log(joobro.name)
console.log(joobro["name"])
joobro['hasjob'] = true;
console.log(joobro.hasjob)

function printvalue(obj, key){
    console.log(obj[key])
}
printvalue(joobro, 'name');
printvalue(joobro, 'age');

// property value shorthand
const person1 = {name: 'bob', age:2};
const person2 = {name: 'steve', age:3};
const person3 = {name: 'dave', age:4};
const person4 = new Person('joobro', 28);


// function makePerson(name, age){
// return{
//     name,
//     age,
// };

// }

// Constructor function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this
}

//  for .. in vs for.. of
// for(key in obj)

console.clear();

for(key in joobro){
console.log(key)
}

// for(value of iterable)
const array = [1,2,3,4,5];
for(value of array){
    console.log(value);
}

// Fun cloning
// Object.assign(dest, [obj1, obj2 ...])

const user = {name: 'joobro', age: '27'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(key in user){
    user3[key] = user[key]
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4)