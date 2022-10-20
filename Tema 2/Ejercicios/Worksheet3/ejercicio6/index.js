function dosCadenas(cadena, subcadena)
{
    if(cadena.includes(subcadena)){
        document.write(`La segunda cadena ${subcadena}</br> está en la primera cadena  ${cadena}`);
    }
    else{
        document.write(`La segunda cadena ${subcadena}</br>no está en la primera cadena ${cadena}`);
    }
}

dosCadenas("hola que tal","que tal")