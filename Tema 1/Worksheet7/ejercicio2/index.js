function addOnlyNums(...numbers)
{
    let contador=0;
    for(let value of numbers)
    {
        if(typeof value == "number"){
            contador += value;
        }
    }
    return contador;
}

document.write(addOnlyNums(1, 'cat', 3, 4)); //8