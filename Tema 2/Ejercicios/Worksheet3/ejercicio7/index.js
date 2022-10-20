function palindromo(cadena)
{
    let cadenaReves = cadena.split("").reverse();
    cadenaReves = cadenaReves.join("");
    if (cadena == cadenaReves) {
      document.write(`${cadena} es palíndromo`);
    } else {
      document.write(`${cadena} NO es palíndromo`);
    }

}

palindromo("oso")