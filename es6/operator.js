// 1.String concatenation

console.log('my' + 'cat')
console.log(`my cat`)
console.log('1' + 2)
console.log(1 + 2)
console.log(`string literals : 1+2 = ${1 + 2}`)

// 2. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;

// counter = counter +1;
// preIncremnt = counter;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// poestIncrement = counter;
// counter = counter+1;

//  ||(or), finds the first truthy value
let value1 = false;
let value2 = 4 < 2;
console.log(`or: ${value1 || value2 || check()}`);

// &&(and) finds the first flasy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObjec.something


function check() {
    for (let i = 0; i < 10; i++)
        //    wasting time
        console.log('㉾㈜')
    return true;
}


// operator if / else if / else
// console.log(name === 'eee' ? 'yes' : 'no');

const browser = 'IE';

switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'chrome':
        console.log('come on!')
        break;
    default:
        console.log('same all')
        break;
}

let i = 3;
while(i>0){
    console.log(`while: ${i}`)
    i--;
}