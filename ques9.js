// Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add introduce method to Person's prototype
  Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  // Employee constructor function
  function Employee(name, age, jobTitle) {
    // Call the Person constructor
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
  }
  
  // Set up inheritance from Person
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  
  // Add work method to Employee's prototype
  Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  };
  
  // Demonstration
  const person = new Person('Alice', 30);
  person.introduce(); // Outputs: Hi, my name is Alice and I am 30 years old.
  
  const employee = new Employee('Bob', 40, 'Software Engineer');
  employee.introduce(); // Outputs: Hi, my name is Bob and I am 40 years old.
  employee.work();     // Outputs: Bob is working as a Software Engineer.
  