function combineTwoArrays(first,second)
{
    let newArray = [...first,...second];
    return newArray;
}

let first = [7,2,4];
let second = [1,8,5];

document.write(combineTwoArrays(first,second));