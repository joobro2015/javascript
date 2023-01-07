// {
//     let kors = [10,20,30];
//     let [kor1, kor2, kor3] = kors;

//     console.log(`kor1:${kor1}, kor2:${kor2}`)

//     let temp = [40,70,80];
//     [kor1, kor2, kor3] = temp;

//     console.log(`kor1:${kor1}, kor2:${kor2}, kor3:${kor3}`)
// }
// {
//     let kors = {
//         kor1:10,
//         kor2:20,
//         kor3:30};


//     console.log(kors.kor1)
// }
// {
// let kors = [10, 20, 30];
// let [kor1, kor2, kor3, kor4=40] = kors;

// }

// let notices = {
//     title:"공지사항",
//     list:[
//         {title:"오~", content:"내용없을무"},
//         {title:"하하", content:"ㅋㅋㅋㅋ"}
//     ]  
// };

// let {list:[,notice]} = notices
// console.log(notice.title)


// let exam = {
//     kor : 90,
//     math : 95,
//      eng : 90,
//      student : {
//         name : "joobro",
//         number : '2',
//         phone : "s21"
//      }
//  };
//  let{kor, eng:english, ma = 0,student} = exam;
//  let{name, phone} = student

//  let stud1 = {name:'dragon', phone:'010'};
//  ({name, phone} = std1);
//  console.log(phone)

let kors = [1,2,3];
let[kor1, kor2] = kors;
console.log(kor1);

let kors2 = [2,3,4];
[kor1,kor2] = kors2;
console.log(kor1);

let a, b;
[a,b] = kors2;
console.log(a);

a = 20;
b = 30;
console.log(a);
[a,b] = [b,a];
console.log(a);

let [ , , kor3] = kors;
console.log(kor3);

let nums = [1,2,3,4,5,6,7,8,9,10];
let [n1, n2,...rest] = nums;
console.log(rest);
console.log("---------------------------------------------------------")

let set = new Set([2,3,45,4,8,5,4,3,1,23,1,325,1856,1,23,145,12,2,3]);

console.log(`size : ${set.size}`);


for(let k in set)
    console.log(k);


for(let n of set)
    console.log(n);
    console.log("----------------------of------------------------------")
    set.forEach((v)=>{
        console.log(`value : ${v}`);

    });
    console.log("***********************forEach**********************************")

// set.forEach((v, k)=>{
//     console.log(`key:${k}, value : ${v}`);
//     console.log("************************forEach*******************************")
// });
    

let map = new Map();
map.set("id", 1);
map.set("title", "map이란?");

console.log("for each=================")
map.forEach(function(v, k){
    console.log(`key:${k}, value:${v}`);
});
console.log("/forEach===================")

let notice = new Map();
notice.set("id", 1);
notice.set("title", "map is.......");
notice.set("writer", "joobro");

notice.forEach((v,k)=>{
    console.log(`key:${k}, value:${v}`);
});

for(let key of notice.keys())
    console.log(`key:${key}`);

for(let value of notice.keys())
    console.log(`value:${value}`);

for(let [k,v] of notice.entries()){
    console.log(`key : ${k}, value : ${v}`)
}
for(let array of notice)
    console.log(`array: ${array[1]}`)

let exam3 = {
    kor:10,
    eng:20,
    math:30
};


let list = [
    {id:1, title : "jsp is..", writerId:"Joobro"},
    {id:2, title : "servlet is..", writerId:"Joobro"},
    {id:3, title : "javascript is..", writerId:"Joobro"},
    {id:4, title : "spring is..", writerId:"Joobro"}
];
list.forEach((n)=>{});
let ar = list.map((n)=>{return `<span>${n.title}</span>`});
    console.log(ar);



// {

//     let attr = "kor";
//     let exam = {

//         [attr] : 10

//     }

//     console.log(exam.kor);
// }

// let exam = {
//     kor : 90,
//     math : 95,
//      eng : 90
//  }


// function print({kor,math,eng}){

//     console.log(`kor:${kor},math:${math},eng:${eng}`)

// }


// let{kor: hangle, student:{phone,name,number}} = exam;
// console.log(`kor:${hangle}, phone:${phone}, name:${name}, number:${number}`)



// {
// function printExam(exam){
// var kor = exam.kor;
// var eng = exam.eng;
// var math = exam.math;

// var total = kor + eng + math;

// console.log(`kor : ${kor}, eng : ${eng}, math:${math}`);
// console.log(`total is ${total}`)

// }
// }


// {
//     let title = "ES6"
//     let content = "새로운 문자열"
//     let template = String.raw`<section>
//                         <h1>${title}</h1>
//                         <p>${content}</p>
//                     </section>`;

//     console.log(template);
// }
// {
//     let kor =70;
//     let eng =80;
//     let math = 100;

//     let exam = {kor,eng,math,total(){
//         return kor+eng+math

//     }};
//     console.log(exam.total);
// }


// -----const----------
// {
//     const N = 1;
//     const S = 5;

//     var walkTo = 'S';
// }
// // S = 3;

// {
//     var add = function (a, b) {
//         return a + b;
//     }

//     console.log(add(3, 4));
// }

// ----------------------------------
// let x = 30;
// console.log(x);

