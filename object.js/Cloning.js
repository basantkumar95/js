//-->cloning of object using spread operator
const user = {
    name : "basant",
    age :33
};
const student1 = {
    id : 1,
    school : "xyz",
    year :2022
};
// const cloneUser = {...user};
const cloneUser = {...user , job:"engineer"};
// console.log(cloneUser);

// merging two objects
const info = {...user,...student1};
// console.log(info);


//-->Real world example 
// update user profile using spread operator
const profile = {
    username: "basant",
    email: "basant@example.com",
    language: "en",
  };
  
  const updatedProfile = {
    ...profile,
    email: "newemail@example.com", // Only email is updated
  };
  
  console.log(updatedProfile);
  /* Output:
  {
    username: "basant",
    email: "newemail@example.com",
    language: "en"
  }
  */
  