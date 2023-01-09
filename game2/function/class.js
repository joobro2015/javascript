'use strict';

// 1. Class declarations
// 붕어빵
class person {
    // constructor
    constructor(name, age){
// fields
this.name = name;
this.age = age;
    }
    speak(){
        console.log(`${this.name}: hello`)
    }   
}

// object 객체 팥,크림
const joobro = new person('joobro', 27)
console.log(joobro.name)
console.log(joobro.age)
joobro.speak();

// 2. Getter and Setters

class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this. lastName = lastName;
        this.age = age;
    }

    get age(){
        return  this._age;
    }

    set age(value){
        // if(value<0){
        //     throw Error('age can not be negative')
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const joobro1 = new User('joohyeong', 'kwon', -1);
console.log(joobro1.age);