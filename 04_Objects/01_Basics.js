let person = {
  name: "Chakri",
  age: 19,
  city: "Nandyal",
  1: "value1",
  "my choice": "value2",
  key:"lock",
};
console.log(person);
//ACCESSING USING DOT NOTATION
//CANNOT USE TO ACCESS INVALID KEYS
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

//ACCESSING USING BRACKET NOTATION
// console.log(person['name']);

//CAN USE TO ACCESS INVALID KEYS ALSO
// console.log(person["1"]);
// console.log(person["my choice"]);

//IT WILL GIVE UNDEFINED IF U TRY TO ACCESS NON-EXISTING PROPERTIES
// console.log(person["gender"]);


let key = "name";
console.log(person[key]);
console.log(person.key);

