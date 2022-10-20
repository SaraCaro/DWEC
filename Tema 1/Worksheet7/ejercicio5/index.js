function sumEveryOther(...numbers)
{
    let counter = 0;
    for(let position = 0; position <=numbers.length; position += 2){
        counter += numbers[position];
    }
    return counter;
}

document.write(sumEveryOther(5, 6, 3, 4, 1) + '</br>'); //9
document.write(sumEveryOther(10, 2, 11)); //21