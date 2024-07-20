let person = {
  name: "Chakri",
  age: 19,
  city: "Nandyal",
  1: "value1",
  "my choice": "value2",
  key: "lock",
};
// let { name } = person;
// console.log(name);
// console.log(person.name);

let { name, age, city, gender } = person;
console.log(name);
console.log(age);
console.log(gender);  // undefined
