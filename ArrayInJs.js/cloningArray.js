//cloning of array-->make an copy that does not refrence real one and not affect on changing in new one
// using spread operator
// let originalArray = [2,3,4,5];
// let cloneArray = [...originalArray];
// cloneArray.push(6);
// console.log(originalArray);
// console.log(cloneArray);

//-->using slice method

let originalArray = [1,2,3,4];
// let cloneArray = originalArray.slice();
// cloneArray.push(5);
// console.log(originalArray);
// console.log(cloneArray);


//-->using Array.from() method

let cloneArray = Array.from(originalArray);
cloneArray.push(6);
console.log(originalArray);
console.log(cloneArray);

//real example of this 
// Initial Shopping Cart
let shoppingCart = ["Laptop", "Headphones", "Charger"];

// Cloning the shopping cart to create a Wishlist
let wishlist = [...shoppingCart];  // Use spread operator to clone

// User adds a new item to the Wishlist
wishlist.push("Smartphone");

// Checking both lists
console.log("Shopping Cart:", shoppingCart); // Output: ["Laptop", "Headphones", "Charger"]
console.log("Wishlist:", wishlist);          // Output: ["Laptop", "Headphones", "Charger", "Smartphone"]


