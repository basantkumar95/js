// for in loop is used to iterate the property of object

// let user = {
//     name: "rahul",
//     age : 33,
//     bio: "hello"
// }
// for(let key in user){
//     console.log(key+":"+user[key]);
// }

// for of loop --> used to iterate the iterable object like array ,string maps etc

// let arr = [2,3,4,4];
// for(let value of arr){
//     console.log(value);
// }


//-->real world example

// let cart = [
//     {name:"laptop",price:44000},
//     {name:"dell",price:30000},
//     {name:"asus",price:4000}
// ];

// let total = 0;
// for(let i = 0; i<cart.length; i++){
//        total += cart[i].price;
// }
// console.log(`the total price is ${total}`);

// let userProfile = {
//     name: "Basant",
//     age: 25,
//     email: "basant@example.com",
//     role: "Admin"
//   };
  
//   // Using for...in to iterate over the properties of the userProfile object
//   for (let key in userProfile) {
//     console.log(`${key}: ${userProfile[key]}`);
//   }
  
  // Output:
  // name: Basant
  // age: 25
  // email: basant@example.com
  // role: Admin

//   let products = ["Phone", "Laptop", "Tablet", "Camera"];

// // Using for...of to iterate over the array
// for (let product of products) {
//   console.log(`Product: ${product}`);
// }

// Output:
// Product: Phone
// Product: Laptop
// Product: Tablet
// Product: Camera
