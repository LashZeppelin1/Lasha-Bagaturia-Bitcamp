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


// 29 დავალება
/* 
let myArr = [5, 3, 67, 3];

let removeElemmentIndex = 0;

myArr.splice(removeElemmentIndex, 1);

console.log(myArr);
*/


// 30 დავალება
/* 
let myArr = [5, 3, 67, 3, 85, 3, 2, 65, 2, 66, 55, 1, 43, 2, 3];

let occElement = 1;

console.log(numOccurences(myArr, occElement));

function numOccurences(arr, occurence){
  let counter = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == occurence){
      counter++;
    }
  }
  return counter;
}
*/

// 31 დავალება
/*
let myString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada imperdiet. Quisque.";

console.log(countChars(myString));

function countChars(str){
  let chars = 0;
  let words = str.split(" ");
  
  
  for(let i = 0; i < words.length - 1; i++){
      let wordLen = i + 1;
      
      if(chars < words[wordLen].length) {
        chars = words[wordLen].length;
      }  else {
          chars = words[0].length;
      }
      }
      return chars
  }

*/


// 32 დავალება
/*
let myString = "Civic";

reverseString(myString);

function reverseString(str) {
    let convertToLower = str.toLowerCase();
    let myReverseString = "";
    let stringContainer;
    for(i = convertToLower.length - 1; i >= 0; i--){
        stringContainer = convertToLower.charAt(i);
        myReverseString += stringContainer;
    }
    if(myReverseString == convertToLower) {
      console.log("The string is palindrome");
    } else{
      console.log("The string is not a palindrome");
    }
}
*/

// 33 დავალება
/* 
let myString = "Civic iasd das. dasgrasdasdasdasasdas. reggergerger asdasdasasdas. asdasc hrthrthrt hsdaf.";

console.log(splitString(myString));


function splitString(str){
  let myArr = str.split(" ");
  let firstChar = ("");
  let sentence = ("");
  for(let i = 0; i < myArr.length; i++){
    let backToStr = myArr[i].toString();
    let capitalize = backToStr.charAt(0).toUpperCase();
    firstChar = capitalize + backToStr.slice(1);
    sentence += firstChar + " ";
  }
   let finalSentence = sentence.slice(0, sentence.length - 1);
   let arrTwo = finalSentence.split(" ");
   let result = arrTwo.join(" ");
   return result
  }
  
*/

// 34 დავალება
/*
let myArr = [1, 6, 4, 13, 7, 2, 18, 17, 12];

console.log(sumEvens(myArr));

function sumEvens(arr){
  let sum = 0;
  for(i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum
}
*/

// 35 დავალება
/*
let myString = "Lorem ipsum dolor sit amet";

reverseSentence(myString);

function reverseSentence(str){
  let myArr = str.split(" ");
  let container = [];
  for(let i = myArr.length - 1; i >= 0; i--){
    container.push(myArr[i]);
  }
  let reversedStr = container.join(" ");
  console.log(reversedStr);
}
*/

