window.onload = () => {
    let numEnlaces = document.getElementsByTagName('a');
    console.log("Hay " + numEnlaces.length + " enlaces en la página");

    // Direccion del penultimo enlace
    let penultimoEnlace = document.getElementsByTagName('a')[numEnlaces.length - 2];
    console.log("La dirección del penúltimo enlace es: " + penultimoEnlace.href);

    
    let googleEn = document.querySelectorAll('a[href*="google"]');
    console.log("El primer enlace que apunta a google es: " + googleEn[0].href);

    // Numero de enlaces del tercer párrafo
    let tercerParrafo = document.getElementsByTagName('p')[2];
    let enlacesParrafo = tercerParrafo.getElementsByTagName('a');
    console.log("El tercer párrafo tiene " + enlacesParrafo.length + " enlaces");

}

