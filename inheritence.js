class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, rollNo) {
      super(name, age); // Call the constructor of the parent class
      this.rollNo = rollNo;
  
      // Check for erroneous data (e.g., roll number is zero)
      if (rollNo === 0) {
        throw new Error("Invalid roll number. Roll number cannot be zero.");
      }
    }
  
    // Override the introduce method from the parent class
    introduce() {
      console.log(`Hello, I am a student named ${this.name}, I am ${this.age} years old, and my roll number is ${this.rollNo}.`);
    }
  
    study() {
      console.log(`${this.name} is studying.`);
    }
  }
  
  // Create a Student object
  try {
    const student1 = new Student("Vaishnavi", 20, 9);
    const student2 = new Student("Sejal", 23, 0); // This will generate an exception
  
    // Demonstrate usage of super and overriding
    student1.introduce(); // Calls the overridden method in Student class
    student2.study(); // Calls the method from the Student class
  } catch (error) {
    console.error(error.message); // Handle the exception when erroneous data is entered
  }
  