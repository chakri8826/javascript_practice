let person = {
  name: "Chakri",
  age: 19,
  run: function () {
    console.log("Started Running");
  },

  habits: ["Playing Chess", "Singing"],

  car: {
    name: "Audi",
    model: "A6",
    color: "White",
  },
};
// FUNCTION
// person.run();

//ARRAY
// console.log(person.habits);
// console.log(person.habits[0]);
// console.log(person.habits[1]);

//OBJECT
console.log(person.car);
console.log(person.car.name);
console.log(person.car['model']);

