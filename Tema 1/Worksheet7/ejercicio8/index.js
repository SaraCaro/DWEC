function sumAndSquare(...numbers)
{
    let contador = 0;
    for(let value of numbers)
    {
        contador += value*value;
    }
    return contador;
}

document.write(sumAndSquare(2, 4, 3)); //29
// document.write(sumAndSquare(1, 2)); //5
