// let myArr = [5,2,"six", 2, 8];
// // let itemIndex = myArr.findIndex(function(item){
// //     console.log(item);
// // });

// //FINDING THE INDEX OF EACH ITEM
// let itemind = myArr.findIndex(function(eachItem){
//     if(eachItem===2){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(itemind);


let custData = [
  { name: "chakri", id: 101 },
  { name: "bunty", id: 102 },
  { name: "daaddy", id: 103 },
];

let itemInd = custData.findIndex(function(eachItem){
    if(eachItem.id==103){
        return true;
    }
    else{
        return false;
    }
});

console.log(itemInd);