//simple function
function greet(name){
    return `hello, ${name}`;
}
console.log(greet("basant"));

// function expression
const greet1 = function(name){
    return `hello, ${name}`;
}
console.log(greet1("basant"));

// Arrow function in js

const add = (a,b)=>a+b;
console.log(add(2,3));
const squre = (x)=>x*x;
console.log(squre(33));

const obj = {
    value: 42,
    regularFunction: function() {
      console.log(this.value); // Output: 42
    },
    arrowFunction: () => {
      console.log(this.value); // Output: undefined (in non-strict mode)
      // arraw function do not have their own this context
    }
  };
  
  obj.regularFunction(); // Output: 42
  obj.arrowFunction();   // Output: undefined


  // real example of arrow  function 
  const employees = [
    { name: "John", age: 28 },
    { name: "Jane", age: 32 },
    { name: "Jake", age: 25 }
  ];
  
  // Using an arrow function to filter employees above 30
  const olderEmployees = employees.filter(employee => employee.age > 30);
  console.log(olderEmployees); // Output: [{ name: "Jane", age: 32 }]



  //-->Function Hoisting --> function declaration move to the top of the function scope
  greet();
  function greet(){
    console.log("hello");
    
  }
  
  //in the case of function exprassion
//   greet1(); // error
//   let greet1 = function(){
//     console.log("basant");
    
//   }




//-->function inside function
function outerFunction() {
    function innerFunction() {
      console.log("Hello from the inner function!");
    }
  
    innerFunction(); // Calling the inner function
  }
  
  outerFunction(); // Output: "Hello from the inner function!"
  
  
  

