// class family{
//     constructor(name, age){
//         this.name = name;
//         console.log(this.name);
//         this.age = age;
//         console.log(this.age);
//     }
//         speak(age){
//             console.log(`${this.name} : hi!!!I'm ${this.age}`)
//         }

//     }


//     // object=====================  object.function() 함수실행

//     const joobro = new family('joohyeong', 28);
//     const saein = new family('saein, 32');
//     const dad = new family('dad', 58);
//     const mom = new family('mom', 54);
//     joobro.speak();


class highschool{
    constructor(name, location){
        this.name = name;
        this.location = location;
        this.student = new Student();
        let GHF = {name : 'gyeongjooHighSchool', location:'HwangOhDong'}
    }
    information(Student){
        const joobro = new Student(3, 4);
           console.log(`${this.name},${this.location}`);
           console.log(this.student.fix)
        }
        
    }


// 클래스 함수를 넣어서 새로운 객체를 만들때는 괄호를 사용한다.