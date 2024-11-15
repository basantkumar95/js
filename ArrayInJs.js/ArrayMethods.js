//--map() method -->used to apply changes on every element of the array

// Original array of product prices
const prices = [100, 200, 300, 400];

// Define the discount percentage
const discountPercentage = 10;

// Use map() to apply the discount to each price
const discountedPrices = prices.map(price => {
    return price - (price * (discountPercentage / 100));
});

// Output the original and discounted prices
// console.log("Original Prices:", prices); // Output: Original Prices: [100, 200, 300, 400]
// console.log("Discounted Prices:", discountedPrices); // Output: Discounted Prices: [90, 180, 270, 360]


//->Filter method --> it is used to filter some items in the array based on the condition

const arr = [1,2,3,4,4,5];
const newArray = arr.filter(element =>{
    return element%2==0;
});
// console.log(newArray);

//-->Real example
// Original array of tasks
const tasks = [
    { id: 1, title: "Do laundry", completed: true },
    { id: 2, title: "Clean the house", completed: false },
    { id: 3, title: "Buy groceries", completed: false },
    { id: 4, title: "Pay bills", completed: true }
];

// Use filter() to get only pending tasks
const pendingTasks = tasks.filter(task => !task.completed);
const completeTasks = tasks.filter(task =>task.completed);

// Output the original and filtered tasks
// console.log("Original Tasks:", tasks);
// console.log("completed task ",completeTasks);
// console.log("Pending Tasks:", pendingTasks);


//-->Reduce method--> it is used to calculate the total sum or when you need to calculate 
// single value from the array then we are using this method

const numbers = [1,2,3,4,5,10];
const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
});
// console.log(sum);

//->Real example 

// Original array of items in the shopping cart
// Array of items
const cart = [
    { name: "Shirt", price: 250, quantity: 2 },
    { name: "Pants", price: 500, quantity: 1 },
    { name: "Shoes", price: 800, quantity: 1 }
];

// Using reduce to calculate total price
const totalPrice = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
}, 0);// initial value of the accumulator

// console.log("Total Price:", totalPrice); // Output: Total Price: 1800


//-->Sort method 

const number = [40, 100, 1, 5, 25, 10];
number.sort((a, b) => a - b);
console.log(number); // Output: [1, 5, 10, 25, 40, 100]


const products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

// Sorting by price in ascending order
products.sort((a, b) => a.price - b.price);
// console.log(products);
// Output:
// [
//   { name: "Tablet", price: 300 },
//   { name: "Phone", price: 500 },
//   { name: "Laptop", price: 800 }
// ]

//-->Find method --> it is used to find a specific element in the array that is associated with some condition
const myArray = ["hello","cat","basant"];
// console.log(myArray.find(string=>string.length==3));
console.log(myArray.find(string=>{
    if(string.length==6){
        // console.log(string);
        
    }
}));


const cart1 = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

const tabletItem = cart.find(item => item.name === "Tablet");

if (tabletItem) {
//     console.log("Tablet is in the cart:", tabletItem);
// } else {
//     console.log("Tablet is not in the cart.");
}

// Output: Tablet is in the cart: { name: "Tablet", price: 300 }




//->Every method
/**
 * The every() method in JavaScript is used to test whether all
 *  elements in an array satisfy a specific condition. It returns 
 * true if all elements pass the test and false otherwise. Once every() 
 * encounters an element that does not meet the condition, it stops and 
 * returns false.
 */

const numbe = [5, 10, 15, 20];
const allPositive = numbe.every(num => num > 0);

// console.log(allPositive); // Output: true

const cart2 = [
    { name: "Laptop", inStock: true },
    { name: "Phone", inStock: true },
    { name: "Tablet", inStock: true }
];

const canCheckout = cart.every(item => item.inStock);

// if (canCheckout) {
//     console.log("All items are in stock. Proceed to checkout!");
// } else {
//     console.log("Some items are out of stock.");
// }

// Output: All items are in stock. Proceed to checkout!



//-->Some Method -- check whether at least one element meet the required condition
const numbers1 = [5, -10, 15, 20];
const hasNegative = numbers1.some(num => num < 0);

// console.log(hasNegative); // Output: true

const seats = [
    { seat: 1, available: false },
    { seat: 2, available: true },
    { seat: 3, available: false }
];

const hasAvailableSeat = seats.some(seat => seat.available);

// console.log(hasAvailableSeat); // Output: true



//-->Fill() method -- to fill or replace elemenet in the array
const numbers3 = [1,2,4,5];
numbers3.fill(0);
// console.log(numbers3);

//fill in range (value,startIndex,endIndex)
const numbers4 = [1, 2, 3, 4, 5];
numbers4.fill(0, 1, 4);
// console.log(numbers4); // Output: [1, 0, 0, 0, 5]


//-->Real example - book VIP seat in movie theater for the actors and vip person 
const seats1 = new Array(10).fill("Available");
seats1.fill("VIP",4,6);
// console.log(seats1);



//-->Splice() method -- used to replace original array or delate oraginal array element
const fruits = ["apple","banana","cherry","data"];
const removeItem = fruits.splice(1,2);
console.log(fruits);
console.log(removeItem);








