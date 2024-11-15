let age = 18;
// if(age>=18){
//     console.log("you can vote ");
// }
// else {
//     console.log("not");
// }


//-->ternary operator
// let result = (age>=18) ? "you can vote ":"you can not vote";
// console.log(result);

//--Switch statement
// let day = 2;
// switch(day){
//     case 1:
//     console.log("it is a sunday");
//     break;
//     case 2:
//     console.log("it is a monday");
//     break;
//     default:
//     console.log("not a day");
//     break;
// }

//-->real life example 

// Example user object with a role
let user = {
    username: "Basant",
    password: "password123",
    role: "admin"  // Possible roles: "admin", "editor", "viewer"
  };
  
  // Function to handle login and role-based access
  function login(username, password) {
    // Check if username and password match (mock check)
    if (username === user.username && password === user.password) {
      console.log("Login successful!");
      // Determine access based on role
      if (user.role === "admin") {
        console.log("Access granted to Admin Dashboard.");
        showAdminDashboard();
      } else if (user.role === "editor") {
        console.log("Access granted to Editor Dashboard.");
        showEditorDashboard();
      } else if (user.role === "viewer") {
        console.log("Access granted to Viewer Dashboard.");
        showViewerDashboard();
      } else {
        console.log("Invalid role. No access.");
      }
    } else {
      console.log("Login failed! Invalid username or password.");
    }
  }
  
  // Mock functions to simulate dashboards
  function showAdminDashboard() {
    console.log("Welcome to the Admin Dashboard. You have full access.");
  }
  
  function showEditorDashboard() {
    console.log("Welcome to the Editor Dashboard. You can edit content.");
  }
  
  function showViewerDashboard() {
    console.log("Welcome to the Viewer Dashboard. You can view content.");
  }
  
  // Test the login with different roles
  login("Basant", "password123");  // Testing with correct credentials
  