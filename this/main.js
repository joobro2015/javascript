// const car ={
//     name : 'sonata',
//     getName : function(){
//         console.log("car getName",this)
//     }
// }

// // car.getName()

// const globalCar = car.getName.bind(car)
// globalCar();

// // 화살표 함수에서의 this는 함수가 속해있는곳의 상위 this를 계승받는다.
// const testCar = {
//     name : "benz",
//     getName : function(){
//         console.log("this", this);
//         const innerFunc = function(){
//             console.log("this", this);
//         };
//         innerFunc();
//     },
// };
// testCar.getName();

const ageTest = {
    unit: "살",
    ageList: [10,29,30],
    getAgeList: function(){
        const result = this.ageList.map(function(age){
            return age+this.unit;
        });
        console.log(result);
    }
}
ageTest.getAgeList();

// const btn = document.getElementById("button");
// btn.addEventListener("click",car.getName.bind(this))