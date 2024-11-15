// Lexical Scope --> finding a variable in the current scope and moving to outword to the global scope until
// it is not find

function outerFunction(){
    let outerVar = "hello from outer function";
    function innerFunction(){
        let innerVar = "hello froom inner function";
        // console.log(outerVar);// we can access the parent function property from the child function
    }
    innerFunction();
    // console.log(innerVar); // we can not access the childfunction property from the parent function
}
outerFunction();

// lexical scope with closures
function createCounter() {
    let count = 0;
  
    return function() {
      count++; // count is accessed from the lexical scope of createCounter
      return count;
    };
  }
  
  const counter = createCounter();
//   console.log(counter()); // Output: 1
//   console.log(counter()); // Output: 2



// Block scope vs function scopre
if(true){
    let x = 20;
    // console.log(x);
    
}
// console.log(x);// x is not defined

// function scope -> var variable create function scope
function example(){
    if(true){
        var x = 20;

    }
    console.log(x);
}
example();
// console.log(x);


  