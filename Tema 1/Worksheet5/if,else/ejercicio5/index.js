let examen1= parseInt(prompt("Introduce la primera nota de examen"));
let examen2= parseInt(prompt("Introduce la segunda nota de examen"));
let prueba1= parseInt(prompt("Introduce la segunda nota de la prueba"));
let prueba2= parseInt(prompt("Introduce la segunda nota de la prueba"));

media_exa = (examen1 + examen2) /2;
media_pru = (prueba1 + prueba2) /2;

if ( media_exa >= 4.5){
    porcentaje_exa = media_exa - (media_exa * 0.75)
}

if (media_pru >=4.5){
    porcentaje_pru = media_pru - (media_pru * 0.25)
}

if ((porcentaje_exa + porcentaje_pru) >= 5){
    console.log("La media está aprobada con una nota de ", porcentaje_exa+porcentaje_pru);
}
else {
    console.log("La media está suspensa")
}


