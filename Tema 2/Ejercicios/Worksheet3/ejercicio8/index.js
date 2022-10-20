function contarNumPalabras(cadena){
    let contador = 0;
    let cadenaSpli = cadena.split(" ");
    for(let palabra of cadenaSpli){
        if(palabra != " " && palabra != ''){
            contador ++;
        }
    }
    return contador;
}

document.write(contarNumPalabras("Hola    buenos dias   "));