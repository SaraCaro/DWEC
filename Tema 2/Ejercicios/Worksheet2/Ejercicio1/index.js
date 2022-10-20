// ENTRE EL 0 Y EL 1
// function getRandom()
// {
//     return Math.random();
// }

// document.write(getRandom(2));

// ENTRE EL 100 Y EL 200
// function getRandomInt(min, max) 
// {
//     return Math.floor(Math.random() * (max - min) + min); 
// }

// document.write(getRandomInt(100,200));



// Usuario pide números y te saca número aleatorio
let number1 = parseInt(prompt("Escribe un número: "));
let number2 = parseInt(prompt("Escribe otro número: "));

function getRandomBetween(number1, number2) 
{
    return Math.floor(Math.random() * (number1 - number2) + number1); 
}


document.write(getRandomBetween(number1,number2));