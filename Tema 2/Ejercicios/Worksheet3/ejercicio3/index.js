function contarPalabras(cadena, subcadena)
{
    let contador = 0
    let cadenaSpli = cadena.split(" ")
    for(let palabra of cadenaSpli){
        if(palabra == subcadena){
            contador++
        }
    }
    return contador
}

document.write(contarPalabras("buenas gracias, muchas gracias"))
