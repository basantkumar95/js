// call method -- use to call a function immediately and allow us to set this to a specific object
function about(hobby,favmusic){
    // console.log(this.firstname , this.age, hobby , favmusic);
};
const user1 = {
    firstname : "amit",
    age   : 20
};
const user2 = {
    firstname : "rahul",
    age   : 22
};

// now we we have to call a function for the user1 using call method
// about.call(user1,"guitor","arijit singh");

// appyly method-- is same like call method but it takes arguments in array not individually
about.apply(user2,["music","sonu Nigam"]);

// Bind method -- it return an function that can can called later
const func = about.bind(user1,"music","chirag");
func();


// Real example of call method 
/*
call: Useful for method reusability where 
functions can be used by multiple objects with
specific this values.
 */
const admin = { name: "Admin", accessLevel: "high" };
const guest = { name: "Guest", accessLevel: "low" };

function displayAccessInfo(role) {
//   console.log(`${this.name} is a ${role} with ${this.accessLevel} access.`);
}

// Use `call` to reuse `displayAccessInfo` for different objects
displayAccessInfo.call(admin, "Administrator"); // "Admin is an Administrator with high access."
displayAccessInfo.call(guest, "Guest User");    // "Guest is a Guest User with low access."

/* Real example of apply methods in development
apply: Great for handling data in arrays that need to 
be passed as individual arguments,
like with math calculations.
 */
const transactions = [1500, 2700, 450, 12000, 3000];

// `apply` passes the array as individual arguments to `Math.max`
const maxTransaction = Math.max.apply(null, transactions);
// console.log(`The highest transaction amount is $${maxTransaction}.`); // $12000


/**
 * Real example of bind methods 
 * bind: Essential for stabilizing this in asynchronous code or when
 *  passing methods as callbacks in event handling.
 */
