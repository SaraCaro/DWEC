function onlyUniques(...numbers)
{
    result = []
    for (number of numbers)
    {
        if(!(result.includes(number)))
        result.push(number)
    }
    return result;
}


// function onlyUniques(...arguments){
//     let uniqueArray = [...new Set(arguments)];
//     return uniqueArray;
// }

// document.write(onlyUniques(4,4,5,5,1,3));