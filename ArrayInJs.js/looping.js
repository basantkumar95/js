//-->ForEach method

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// Output: 
// 0: apple
// 1: banana
// 2: cherry

//-->ForIn loop used in to iterate over the propertios of the object

// const user = {
//     name :"basant",
//     age :33,
//     city: "bhopal"
// }
// for(let key in user){
//     console.log(key +" "+user[key]);
// }


//-->ForOf loop = used in to iterate over iterable object like array strings and map
// const fruit = ["apple", "banana", "cherry"];
// for (const key of fruit) {
//     console.log(key);
// }
// // Output: apple, banana, cherry
