// default parameter -- we can set a default parameter in case if user doest not passed anything
function greet(name = "gauet"){
    // console.log(`hello, ${name}`);
};
greet("Basant kumar");
greet();

// Rest parameter -- a function can take indefinite paramter
function add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// console.log(add(2, 3, 5));          // Output: 10
// console.log(add(1, 2, 3, 4, 5));    // Output: 15


// combination of both default and rest parameter 
function introduce(greeting = "Hello", ...names) {
    return `${greeting}, ${names.join(" and ")}!`;
}

// console.log(introduce("Hi", "Basu", "John", "Jane"));  // Output: Hi, Basu and John and Jane!
// console.log(introduce());                              // Output: Hello, !


// parameter destructuring
function displayUser({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

const user = { name: "Basu", age: 24, city: "Delhi", country: "India" };
displayUser(user);  
// Output: Name: Basu, Age: 24, City: Delhi


// with default values
function displayUser({ name, age, city = "Unknown" }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

const user1 = { name: "Basu", age: 24 };
displayUser(user1);  
// Output: Name: Basu, Age: 24, City: Unknown



//-->Function return function
function createLogger(prefix) {
    return function (message) {
        console.log(`[${prefix}] ${message}`);
    };
}

const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");

infoLogger("This is an info message.");   // Output: [INFO] This is an info message.
errorLogger("This is an error message."); // Output: [ERROR] This is an error message.

