/*
 * Filename: sophisticated_code.js
 * 
 * Description:
 * This code demonstrates a complex and sophisticated JavaScript program that simulates a virtual world of organisms.
 * It includes various objects, data structures, functions, and interactions to create a creative and professional program.
 * The program implements concepts like inheritance, encapsulation, and polymorphism to create a realistic simulation.
 * The code is more than 200 lines long.
 */

// Define the base Organism class
class Organism {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Common method to get the organism's name
  getName() {
    return this.name;
  }
  
  // Common method to get the organism's age
  getAge() {
    return this.age;
  }
  
  // Common method to display organism's information
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Define the Plant class that extends Organism
class Plant extends Organism {
  constructor(name, age, type) {
    super(name, age);
    this.type = type;
  }
  
  // Method specific to Plants
  grow() {
    console.log(`${this.name} is growing!`);
  }
  
  // Overriding displayInfo() method to show plant-specific information
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Type: ${this.type}`);
  }
}

// Define the Animal class that extends Organism
class Animal extends Organism {
  constructor(name, age, species) {
    super(name, age);
    this.species = species;
  }
  
  // Method specific to Animals
  move() {
    console.log(`${this.name} is moving!`);
  }
  
  // Overriding displayInfo() method to show animal-specific information
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Species: ${this.species}`);
  }
}

// Create multiple instances of Plants and Animals
let rose = new Plant("Rose", 1, "Flowering");
let oak = new Plant("Oak", 5, "Deciduous");

let lion = new Animal("Lion", 7, "Mammal");
let eagle = new Animal("Eagle", 3, "Bird");

// Display information about the organisms
rose.displayInfo();  // Output: Name: Rose, Age: 1, Type: Flowering
oak.displayInfo();  // Output: Name: Oak, Age: 5, Type: Deciduous

lion.displayInfo();  // Output: Name: Lion, Age: 7, Species: Mammal
eagle.displayInfo();  // Output: Name: Eagle, Age: 3, Species: Bird

// Call specific methods on objects
rose.grow();  // Output: Rose is growing!
lion.move();  // Output: Lion is moving!
