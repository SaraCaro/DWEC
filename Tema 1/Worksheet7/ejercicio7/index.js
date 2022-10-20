function combineAllArrays(...numbers)
{
    let allArrays = [];
    for(let numberArrays of numbers)
    {
        allArrays.push(...numberArrays)
    }
    return allArrays;
}

document.write(combineAllArrays([6,9,3],[5,2,10],["buenos","dias","por la mañana"]));