//-->falsy values - that evaluate false in boolean context
// if(0){
//     console.log("this code is will not run");
// }
// else{
//     console.log("hello");
// }
// if(""){
//     console.log("will not run");
    
// }
// if(false){
//     console.log("not run");
// }
// if(null){
//     console.log("not run");
// }
// if(undefined){
//     console.log("code will not run");
// }
// if(NaN){
//     console.log('code will not run');
    
// }


//-->truthy values -- that evaluate true when we use these in context of boolean
// if(3){
//     console.log("number is a truthy value");
    
// }
// if(true){
//     console.log("true is truthy value");
    
// }
// if("rahul"){
//     console.log("string is truthy value");
// }
// if([]){
//     console.log("array is also a truthy value");
// }
// if({}){
//     console.log("object is also a truthy value even it is empty");
// }


//-->real life example used in creating app

// function userInfo(user){
//     let userName = user.name||" Gaust";
//     //iska matlab hai ki agar user ka name nahi ata to user ka name gaust print kar do  
//     let age = user.age ||"0";
//     let bio = user.bio || "this user doent have a bio ";
//     console.log(`Name: ${userName} Age :${age}  bio:${bio}`);
// }
// let user = {
//     name:"basant",
//     age :33,
//     bio:"hello this is basant"
// }
// userInfo(user);

// let article = {
//     title: "Understanding JavaScript",
//     content: "Lorem ipsum dolor sit amet..."  // Example short content
// };

// // Only show 'Read More' if content length exceeds 100 characters
// if (article.content && article.content.length > 100) {
//     console.log("Show 'Read More' button");
// } else {
//     console.log("No need for 'Read More' button");
// }
