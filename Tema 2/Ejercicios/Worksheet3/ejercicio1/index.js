// // 1 a
// function invertirCadena(cadena)
// {
//     return(cadena.split(" ").reverse().join(""))
// }

// document.write(invertirCadena("Hola buenos dias"))

// // 1b
// function invertirPalabras(cadena)
// {
//     return(cadena.split("").reverse().join(""))
// }

// document.write(invertirPalabras("Hola buenos dias"))


// 1c
// function palabraMasLarga(cadena){
//     let cadenaSpli = cadena.split(" ")
//     let palabraLarga = cadenaSpli[0]
//     for(let palabra of cadenaSpli)
//     {
//         if(palabra.length >= palabraLarga.length){
//             palabraLarga = palabra
//         }
//     }
//     return palabraLarga
// }

// document.write(palabraMasLarga("Buenas Gracias, Muchas Tardes"))

// 1d
function filtraPalabraLarga(cadena,i)
{
    let contador = 0
    let cadenaSpli = cadena.split(" ")
    for(let palabra of cadenaSpli){
        if(palabra.length > i){
            contador++
        }
    }
    return contador
}

document.write(filtraPalabraLarga("buenas gracias, muchas tardes"))


// 1e
// function cadenaBienFormada(cadena)
// {
//     let capitalized = cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
//     return capitalized
// }

// document.write(cadenaBienFormada("buenas gracias, muchas tardes"))
