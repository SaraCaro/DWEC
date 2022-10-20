function eliminarDuplicadosConsecutivos(cadena) {
    cadena=cadena.toString();
    return cadena.split('').filter((el, i) => i==0 || cadena[i-1]!=el).join('');
}

document.write(eliminarDuplicadosConsecutivos("Holaaaaaa amigoooo"));