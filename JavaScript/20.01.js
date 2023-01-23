// Map function in JS
// In JS , a function is also a JS object
let arr = [1,2,3,4,5,6,7,8,999];
let arr1 = arr.map((element,index) => element*10);
console.log(arr1);

// ForEach Loop ".forEach()"
let array = [1,2,3,4,5,6];
array.forEach((element,index) => console.log(`${element} is at index ${index}`));

// .filter()

let arr2 = [1,2,3,4,66,77,33];
//if we want to find the element which are greater than 33 , to do so we can use filter function
let newarr2 = arr2.filter((element) => {
    return element >= 33;
});
console.log(newarr2);

// .sort()
let arr3 = [1,889,3,4,4,99,6,7];
let newarr3 = arr3.sort();
console.log(newarr3);

// object Destructuring 

let obj = {
    name : "mani",
    age : 44,
    country : "india",
    state : "odisha",
    parent: {
        fname : "nana",
        mname : "amma",
    }
}
let {name,age} = obj;
console.log(name);