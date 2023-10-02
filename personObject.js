// Method 1: Using a Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Method 2: Using ES6 Class
  class PersonES6 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    // Member Function (inside the class)
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Method 3: Using ES6 Class with Arrow Function (non-member function)
  class PersonWithArrowFunction {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Member Function (inside the class)
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    // Arrow Function (non-member function)
    introduce = () => {
      console.log(`I am ${this.name}, and I'm still ${this.age} years old.`);
    }
  }
  
  // Create Person Objects
  const person1 = new Person("Vaishnavi", 20);
  const person2 = new PersonES6("Payoshni", 21);
  const person3 = new PersonWithArrowFunction("Gaurang", 19);
  
  // Print Person Details
  console.log("Method 1: Constructor Function");
  console.log(`Name: ${person1.name}, Age: ${person1.age}`);
  
  console.log("\nMethod 2: ES6 Class (with member function)");
  person2.greet();
  
  console.log("\nMethod 3: ES6 Class (with arrow function)");
  person3.greet();
  person3.introduce();
  