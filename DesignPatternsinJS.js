// Creational Design Patterns

// A constructor Pattern
const Task = function(name) {
  this.name = name;
  this.completed = false;
};

// The methods need not be created again and again with each new object creating if we attach the methods to the object constructor.
Task.prototype.complete = function() {
  console.log(`${this.name} is being performed and will be done soon`);
};
Task.prototype.save = function() {
  console.log(`Saving ${this.name}`);
};

const task1 = new Task("code all night!");
const task2 = new Task("eat fish");
const task3 = new Task("Go to sleep");

///////////////////////////////////////////////////////
// Module Pattern
const Module = function() {
  // Module pattern basically has a funtion that returns an object of methods
  return {
    method: function(params) {
      console.log("hi");
      return {
        status: 200
      };
    },
    nextMethod: function() {
      return {
        status: 404
      };
    }
  };
};

////////////////////////////////////////////////////////
// Factory Pattern
// Simple object creation pattern
const Animal = function(name, sound) {
  const animal = {};
  animal.name = name;
  animal.sound = sound;
  animal.speak = function() {
    console.log(this.sound);
  };
  return animal;
};

// a mixin to add more characteristic to `Animal`
const isWild = {
  validate() {
    console.log("Yes, I am wild!");
  }
};
const WildAnimal = function(name, sound) {
  const regularAnimal = Animal(name, sound);
  const wildAnimal = Object.assign(regularAnimal, isWild);
  return wildAnimal;
};
// To add more features just create more mixins and pass them as arguments in the `Object.assing()` above
const cat = Animal("Mittens", "Meawoooo!");
const tiger = WildAnimal("Tiger", "Roar");

// tiger.validate();
// tiger.speak()

//////////////////////////////////////////////////////
// Singleton Design Pattern
// Just restricts the the object to a single instance throughout the application
// In angular most objects are created basedon the singleton object creation pattern
