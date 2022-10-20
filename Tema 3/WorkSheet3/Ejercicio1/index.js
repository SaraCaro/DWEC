// Find largest Number
let arrayNotas = [5, 3.9, 6, 9, 7, 3]
let largestNum = arrayNotas.reduce((max,nota)  => nota > max ? nota : max) 

document.write(`The largest number: ${largestNum}`);

document.write("<br>")


// find longest string
let array = ["hola", "buenos", "dias"];
let longestStr = "";
for (let i=0; i<array.length; i++){
    if (array[i].length > array.length){
        longestStr = array[i];
    }
}
document.write("The longest string: "+longestStr+"<br>");


// find even numbers
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenNumbers = arr.filter(number => {
  return number % 2 === 0;
});

document.write("The even numbers are: " + evenNumbers);
document.write("<br>")

// find odd numbers
let oddNumbers = arr.filter(number => {
  return number % 2 !== 0;
});

document.write("The odd numbers are: " + oddNumbers);



// find words that contain 'is'
// let stringIS = ["historia", "pistola", "banco"];
// let findIS = stringIS.find((strIS) => strIS == "is");

// document.write(findIS)
document.write("<br>")


// assert all numbers are divisible by three
let nums = [6,89,26,7,16,35];
let divisibleThree = [];
nums.forEach(num => {
    if(num % 3 == 0)
        divisibleThree.push(num);
});
document.write("Number: "+divisibleThree+"<br>");


// zip two arrays together
let array1 = ["hola", "adios", 5];
let array2 = ["jugar", 20, "pelota"];
document.write(array1.concat(array2)+"<br>");


// sort joined array from smallest to largest
let arrayNums = [874, 34, 19, 50000, 224];
arrayNums.sort((a, b) => {
    return a - b;
});
document.write("Numbers in order: "+arrayNums+"<br>");


// remove the first word in the array
let wordsList = ["hello", "name", "Sara"];
deleteWord = wordsList.shift();
document.write(wordsList+"<br>")

// place a new word at the start of the array
wordsList.unshift("newWord");
document.write("New Word: "+wordsList+"<br>")


// replace some elements
deleteLast = wordsList.slice(1,1,"anotherWord");
document.write("Another new Word: "+wordsList+"<br>")
