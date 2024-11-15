//-->Array Destructuring in js
const fruits = ["apple","banan","cherry"];
const[first,second,third] = fruits;
// console.log(first);
// console.log(second);
// console.log(third);

// const numbers = [10, 20, 30, 40];
// const [first, , third] = numbers;

// console.log(first);  // Output: 10
// console.log(third);  // Output: 30
const colors = ["red"];
const [primary, secondary = "blue"] = colors;

console.log(primary);   // Output: "red"
console.log(secondary); // Output: "blue"
console.log(colors);

//-->real life example of array destructuring 
const popularItems = ["Laptop", "Smartphone", "Tablet", "Headphones"];
const [top1, top2, top3] = popularItems;

console.log(`Top 3 Popular Items: ${top1}, ${top2}, and ${top3}`);
// Output: Top 3 Popular Items: Laptop, Smartphone, and Tablet

