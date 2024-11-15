//-->string - it is a sequence of character 
let firstName = "basant";
let middleName = 'kumar';
let lastName = `ahirwar`;
let fullName = "basant  kumar ahirwar";

// lenght
console.log(firstName.length);
// toUppercase
console.log(firstName.toUpperCase);
console.log(middleName.toLowerCase);

//trim() - remove extra space
console.log(fullName.trim());
// charAt()
console.log(firstName.charAt(2));

// substring()
console.log(fullName.substring(3,6));

// split()- convert into an array
console.log(fullName.split(","));

// include() - string is present or not 
console.log(fullName.includes("kumar"));

// multiline string using backticks 
let greeting = `Hello ${firstName} how are you ${lastName} is your sirname!!`;
console.log(greeting);