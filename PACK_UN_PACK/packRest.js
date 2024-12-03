// let [a, b, ...rest] = [1, 2, 3, 4, 5];

// console.log(a); // 1
// console.log(b); // 2
// console.log(rest);


// let arr1 = [2, 3];
// let arr2 = [1, ...arr1, 4];

// console.log(arr2); 


// let sum = (a,b)=>a+b;
// console.log(sum(2,4));

// let user = (name) =>  ({ firstname: name });
            

// console.log(user("Chakri"));


// function createCar(color,brand){
//     return {
//         color:color,
//         brand:brand,
//         start:function(){
//             console.log(started);
//         }
//     };
// }

// function createCar(color, brand) {
//   return {
//     color,
//     brand,
//     start() {
//       console.log(started);
//     },
//   };
// }
// let car1 = createCar("blue","Audi");
// console.log(car1);



function CreateCar(color,brand){
    this.color=color;
    this.brand=brand;
    this.start=function(){
        console.log("Hello");
    };
}

let car1 = new CreateCar("Black","Mercedes");
console.log(car1);
// console.log(CreateCar.name);
// console.log(car1.constructor);


// let now = new Date(2004,9,6,11,30,22,5);
// console.log(now);
// console.log(typeof(now));

// let date = new Date("2020-08");
// console.log(date); 

// commas are ignored
// let date4 = new Date("JULY,1,2021");
// console.log(date4);  