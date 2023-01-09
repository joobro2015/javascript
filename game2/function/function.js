// 1. Function declaration
// function name(param1, param2) { body...return;}
// one function === one thing

function printHello() {
    console.log('hello');
}
printHello();


// Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

//default parameters (added in ES6)
function showMessage(message, from = 'unkown') {
    console.log(`${message} by: ${from}`)
}
showMessage('hi!');

// Rest parameters(added in ES6)
function printAll(...args) {
    for (let i =0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream','coding','joobro','wow')

// Local scope
let globalMessage = 'global';
function printMessage(){
    let message = 'hello hi wow';
    console.log(message);
}
printMessage();

// Return a value
function sum(a,b){
return a + b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`)

// Early return, early exit
// bad

function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic
}

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reachese it
const print = function(){ //anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3))

// 2. Callback function using function esxpression
function randomQuiz(answer, printYes, printNo){
    if (answer === "hi"){
        printYes();
    } else{
        printNo();
    }

}
const printYes = function print() {
    console.log('yes')
};

const printNo = function print() {
    console.log('no')
};

randomQuiz('hi', printYes, printNo);
randomQuiz('wrong', printYes, printNo);

// Arrow Function
// always anonymous

const simplePrint = function() {
    console.log('simplePrint');
}

const add = (a,b) => a+b

const simpleMultiplaly = (a,b) => {
    // do something more
    return a * b;
}






