// // Promise in js

// let num1 = 20;
// let num2 = 10;

// let myPromise = new Promise((fulfilled,notFulFilled) => {
//     let sum = num1+num2;
//     if(sum > 20){
//         fulfilled();
//     }
//     else{
//         notFulFilled();
//     }
// });

// myPromise.then(() => {
//     console.log("Promise was fulfilled");
// })
// .catch(() => {
//     console.log("Promise was not Fullfilled");
// });

// As the above logic can also be done with the help of if statement 
// but what is the need of promises in js , this is because of wired nature of js
// for example, here the function already returned the value as 0 but,after 5 sec 
// it is showing sum as 30.

let n1 = 10;
let n2 = 20;

function addNum(n1,n2){
    let sum =0;
    setTimeout(() => {
        console.log(n1+n2);
        sum = n1+n2;
    },5000);
    console.log();
    return sum;
}

console.log(addNum(10,20));

// In order to control the unsync behaviour of js we use promise;