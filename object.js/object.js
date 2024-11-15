//creating object using object literals 
const person = {
    name: "basant",
    age : 22,
    job :"engineer",
    city :"bhopal",
};
// creating object using new object() method
const student = new Object();
student.name = "Rahul";
student.age = 22;
student.job = "enginerr";

//Accessing object key and value 
//using dot notaiton and using bracket notation 
// console.log(person.age);
// console.log(person["name"]);

//Adding new element in the object
person.gender = "male";
// deleting object key value pair
delete person.gender;
// console.log(person.gender);

// Iterate in an array using for in loop 
const person1 = {
    name: "basant",
    age : 22,
    job :"engineer",
    city :"bhopal",
};

for(const key in person1){
    // console.log(`${key} : ${person1[key]}`);
};

// using object.key() method 
Object.keys(person1).forEach(key=>{
    // console.log(`${key} : ${person1[key]}`);
})

//-->Using object.values() method 
Object.values(person1).forEach(value=>{
    // console.log(value);
});

//-->Using object.entries() method
Object.entries(person1).forEach(([key ,value])=>{
    // console.log(`${key} : ${value}`);
})

// Real example of e-commerse website to calulate total using object.values method

const cart = {
    item1: { name: "Laptop", price: 50000, quantity: 1 },
    item2: { name: "Phone", price: 20000, quantity: 2 },
  };
  
  let total = 0;
  Object.values(cart).forEach(value=> {
    total += value.price * value.quantity;
  });
//   console.log("Total Price:", total); // Total Price: 90000


//-->computed propertis in js -->using this we can dynamically set the properties of the object
const key = "name";
const person2 = {
    [key] : "basant"
};
// console.log(person2);


const prefix = "user";
const id = 123;
const user = {
  [`${prefix}_id`]: id,
  [`${prefix}_name`]: "Basant"
};

// console.log(user); // { user_id: 123, user_name: "Basant" }

  


