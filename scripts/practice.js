let a = 221; // 변수는 let으로 선언
let b = a-5;
const a = 221; // 상수는 const
var c = 3; // 변수는 var으로도 선언 가능
var d = 4; // 4년여전까지만 해도 var만 사용 가능했다.

const what = "Moons" // String 타입 상수

// camelCase 변수명에서 띄어쓰기가 시작할 경우 띄어쓰기 대신 대문자로 표기

const mon = "Mon";
const tue = "Tues";
const wed = "Wed";
const tur = "Thur";
const fri = "Fri";
const sat = "Sat";
const sun = "Sun";

const daysOfWeek = [mon, tue, wed, tur, fri, sat, sun, true, false];
console.log(daysOfWeek[2]);

const moonsInfo = {
    name:"Moons",
    age:23,
    gender:"Male",
    isHandsome:true,
    favMovies: ["Along the gdos", "LOTR", "Oldboy"],
    favFood: [
        {
            name:"Kimchi", 
            fatty:false
        }, 
        {
            name:"Hamburger",
            fatty:true
        }
    ]
};
console.log(moonsInfo);

function sayHello(name, age){
    return `Hello ${name} you are ${age} years old.`;
}

sayHello("Moons", 15);

const greetMoons = sayHello("Moons", 23);
console.log(greetMoons);

const calculator = {
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    mult: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    }
};
const plus = calculator.plus(5,5);
console.log(plus);
