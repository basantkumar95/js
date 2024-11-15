//-->shallow Copy - we can perform this using spread operator 
// let obj1 = {
//     name:"basant",
//     details:{
//         age:24,
//         city:'delhi'
//     }
// };

// //shallow copy using spread operator
// // shallow copy me nested object hi copy hote hai our unki actual value bhi change kar sakte hai 
// // but real obj ki nahi
// let obj2 = {...obj1};
// obj2.details.age = 22;
// obj2.name = "rahul";
// console.log(obj1.name);
// console.log(obj1);


//-->deep copy using json method
// let obj1 = {
//     name: "Basant",
//     details: {
//       age: 25,
//       city: "Delhi"
//     }
//   };
  
//   // Creating a deep copy using JSON methods
//   let obj2 = JSON.parse(JSON.stringify(obj1));
//   obj1.name = "rahul";
//   console.log(obj1.name);
//   obj2.details.age = 30; // Modifying the nested object in the deep copy
  
//   console.log(obj1.details.age);  // Output: 25 (original remains unchanged)
  