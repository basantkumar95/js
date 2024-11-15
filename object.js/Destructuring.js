//Array Destructuring in js 
const user = { name: "Basant", age: 25, location: "India" };
const { name, age } = user;

console.log(name); // Output: Basant
console.log(age);  // Output: 25


//Renaming the values
const user1 = { name: "Basant", age: 25 };
const { name: userName, age: userAge } = user1;

console.log(userName); // Output: Basant
console.log(userAge);  // Output: 25


//Setting default values
const user3 = { name: "Basant" };
const { name1, age1 = 30 } = user3;

console.log(name); // Output: Basant
console.log(age);  // Output: 30


//nested object destructuring
const user4 = {
    name: "Basant",
    location: {
      city: "Delhi",
      country: "India",
    },
  };
  
  const {
    location: { city, country },
  } = user4;
  
  console.log(city); // Output: Delhi
  console.log(country); // Output: India

  //real example
  const response = {
    data: {
      id: 1,
      user: {
        username: "basant",
        email: "basant@example.com",
      },
    },
  };
  
  // Destructure only the needed values
  const {
    data: {
      user: { username, email },
    },
  } = response;
  
  console.log(username); // Output: basant
  console.log(email);    // Output: basant@example.com
  
  