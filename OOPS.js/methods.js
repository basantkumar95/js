//methods -- methods is a function that belongs to an object. 
const obj = {
    propertyName : "value",
    // methodName : function(){
    //     console.log("hello this is from method ");
        
    // }
    //method without function keyword

    methodName(){
        console.log("hello this is from method without function keyword");
        
    }
};
// console.log(obj.methodName());

/*
  methods--
   1 instance method --> instance methods are associated to individual object and can use the property of the o
   of the object using this keyword

   2 static method --> which are not associated to the object and can not use the property of the object
   it belongs to class not the individual object
*/

class car {
     
    constructor(brand){
        this.brand = brand; // this brand is the property of the mycar objectt so instance method can use it
    };
    // instance method
    displayCar(){
        return ` Car is a : ${this.brand} `;
    }
};

// creating object of class car
const myCar = new car("Toyota");
// calling the display car method
// console.log(myCar.displayCar());


// static methods 
class animal{
    constructor(name){
        this.name = name;
    };
    animalname = "dog";
    static displayInfo(){
        return `animal ${this.animalname} can walk fast `;
    }
}
const dog = new animal("dog");
// console.log(animal.displayInfo());


// method chaining -->Each method returns the object instance (often this), allowing successive calls on that instance.

class Calculator {
    constructor(value = 0) {
      this.value = value;
    }
  
    add(num) {
      this.value += num;
      return this;
    }
  
    subtract(num) {
      this.value -= num;
      return this;
    }
  
    result() {
      return this.value;
    }
  }
  
  const calc = new Calculator();
//   console.log(calc.add(10).subtract(3).result()); // 7
  

// window object
// window.alert("Welcome to the page!"); // Displays alert
// window.location.href = "https://www.google.com"; // Redirects to a new page
// window.prompt("hello")