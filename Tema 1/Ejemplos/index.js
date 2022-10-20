// EJEMPLO 1

// const miVariable="jose";
// let miVariable;
// var miVariable; Ahora no se ve ninguna diferencia

// miVariable=33;

// console.log(`EL valor de miVariable es= ${miVariable}`);

// miVariable=true;

// console.log(`EL valor de miVariable es= ` +miVariable);


// EJEMPLO 2
// let a = 3;
// let b = 5;

// let suma = a+b;
// let mul = a*b;

// console.log(`Suma= ` +suma);
// console.log(`Mul= ` +mul);



// EJEMPLO IF
// let a = 3;
// let b = 5;
// let booleano = false;

// if (a==3 || a==5)
// // // if (a==3 && b==5)
// // if (a>=3)
// // if (a!=3)
// {
//     console.log("La condicion es true")
//     console.log("FIN DEL IF")
// }

// else
// {
//     console.log("Condicion es falso")
// }


// EJEMPLO SWITCH
// edad= parseInt(prompt("Introduce tu edad"));
// console.log(edad)
// let a = 3;
// switch (a){
// case 3:
//     console.log("a vale 3");
//     console.log("FIN DEL CASE");
//     break;
// case 5:
//     console.log("a vale 5");
//     break
// default:
//     console.log("entra en default ")
// }




// EJEMPLO LOOP

// let nombres=["pepe","juan","armando","pedro"];
// for (let i=0; i<nombres.length; i++)
// {
//     document.write(nombres[i]+"</br>")
// }

// for (let i=10; i>=0; i--)
// {
//     document.write(i+"</br>")
// }

// for (let nombre of nombres)
//     document.write(nombre+"</br>")

// // EJEMPLO WHILE
// let contador = 11
// do{
//     document.write(contador,"</br>")
//     contador++;
// }
// while (contador <=10)


// EJEMPLOS OPERADORES

// function suma(a=0,b=0,c=0)
// {
//     let result = a+b+c;
//     document.write(result);
// }

// let numeros = [1,3,5];
// suma(...numeros);

function suma(...numeros)
{
    document.write(numeros.length);
}
suma(1,2,3,5,9);