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

let notices = {
    title:"공지사항",
    list:[
        {title:"오~", content:"내용없을무"},
        {title:"하하", content:"ㅋㅋㅋㅋ"}
    ]  
};

let {list:[,notice]} = notices
console.log(notice.title)


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
//  let {kor: korean} = exam;
//  console.log(korean)
//  let{eng: english} = exam;
//  console.log(english)















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