function informacion(cadena)
{
    if(cadena == cadena.toUpperCase()){
        document.write("Esta en mayúsculas")
    }
    else if(cadena == cadena.toLowerCase()){
        document.write("La cadena está en minúscula")
    }
    else{
        document.write("Está igual")
    }
}

(informacion("hola"))