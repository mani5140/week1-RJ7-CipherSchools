// in JS , variables can be declared in three ways
// 1. by var
// 2. by let
// 3. by const

const sname = "mani";
console.log(sname);
// In const we cannot redeclare an variable or reassign a value to a variable under same scope;
function fun1(){
    const sname = "hari";
    console.log(sname);
}
fun1();

let mname = "surya";
mname = "dhora";
// In let we cannot redeclare a variable, but we can reasign the value;
console.log(mname);

var kname = "faiz";
var kname = "ayush";
// In var we can redeclare a variable as well as reasign the variable in any scope;
// var is always in global scope;
function fun2(){
    kname = "pankaj";
    console.log(kname);
}
fun2();
console.log(kname);

// function in js 

function fun(num1,num2){
    return num1+num2;
}
console.log(fun(3,4));

//Arrow function

const fun3 = (num1,num2) => {
    return num1+num2;
};
console.log(fun3(99,1));

// Rest and Spread operator

let arr = [12,3,45,6,7,444];
//Spread operator(...)
// Actually in spread operation the data of the array is copied and we can perform operations on it.
console.log(...arr);
console.log(arr);

// Rest operator
const rest = (...numbers) =>{
    console.log(numbers);
}
rest(1,2,3,4,5,6,7,8,9,10);

//Object in JS

let obj = {
    name : "mani",
    age : 24,
    college : "lpu",
}
let obj2 = {
    ...obj,
    // here we use spread operator to clone the obj in obj2.
    state : "odisha",
}
console.log(obj2);
