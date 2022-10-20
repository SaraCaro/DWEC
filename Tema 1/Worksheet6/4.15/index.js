let num1 = parseInt(prompt("Introduce un número: "))
let num2 = undefined

while(num1 != num2)
{
    num2 = parseInt(prompt("Adivina el número: "));
    if (num1<num2)
    {
        alert("El número es más pequeño");
    }
    else if(num1>num2){
        alert("El número es más grande");
    }
    else{
        alert("Has acertado el número")
    }
}