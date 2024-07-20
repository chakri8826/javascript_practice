let person = {
  name: "Chakri",
  age: 19,
  city: "Nandyal",
  1: "value1",
  "my choice": "value2",
  key: "lock",
};

//Dot Notation
person.name = "Abhi";
console.log(person.name);

//Bracket Notation
person["name"] = "Abhi";
console.log(person["name"]);

//Adding a property
// person.gender = "Male";
person['gender'] = "Male";
console.log(person);

