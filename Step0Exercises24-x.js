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