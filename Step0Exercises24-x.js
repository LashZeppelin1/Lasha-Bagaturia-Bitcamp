// 24 დავალება
/*
let myArr = [3, 1, 5 , 6, 2, 1, 8, 4, 6];


console.log(removeDuplicates(myArr));

function removeDuplicates(x){
    let arrContainer = [];
    for(let i = 0; i < x.length; i++) {
        let arrElement = x[i];
        let arrDoesntInclude = !arrContainer.includes(arrElement);
        
        if(arrDoesntInclude){
            arrContainer.push(arrElement);
        }
        
    }
    return arrContainer;
}
*/

// 25 დავალება
/*
let myArr = [3, 1, 6, 13, 5, 1, 2, 8, 2, 19]


console.log(arraySort(myArr));


function arraySort(arr){

   for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j + 1] < arr[j]){
        
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

      }
    }
   }
   return arr
}
*/

// 26 დავალება
/*
let myArr = [3, 1, 6, 21, 71, 5, 1, 2, 8, 2, 19, 25, 69]

console.log(arrayMax(myArr));

function arrayMax(arr){
  let container = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(container < arr[i + 1]){
        container = arr[i + 1];
      }
  }
  return container
}
*/


// 27 დავალება
/* 
let myArr = [3, 1, 6, 21, 71, 5, 1, 2, 8, 2, 19, 25, 69]

console.log(arrayMin(myArr));

function arrayMin(arr){
  let container = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(container > arr[i + 1]){
        container = arr[i + 1];
      }
  }
  return container
}

*/


// 28 დავალება
/*
let myArr = [3, 1, 6, 13, 5, 1, 25, 8, 19]


arrayCheck(myArr);

function arrayCheck(arr) {
    let arrElement = 1;
    if(arr.includes(arrElement)) {
        console.log("Includes");
    } else{
        console.log("Does not include");
    }
}
*/