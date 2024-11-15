//using literal syntax
let fruits = ['hello','jello','mello'];
fruits[0] = 55;
// console.log(fruits);
//using array constructor
let fruit = new Array(1,3,4,5);
fruit[2] = "basant";
// console.log(fruit);


// push and pop operation

let cart = ["apple","banana","orange"];
cart.push("cherry");
console.log(cart);
// let lastItem = cart.pop();
console.log(cart);
// console.log(lastItem);

//Shift -->remove from the begginnig
let firstItem = cart.shift();
console.log(firstItem);
console.log(cart);

//unshift -->add in the begninig
let firstElement = cart.unshift("hello");
console.log(firstElement);//this return the new length of the array 
// console.log(cart);