let fechaActual = new Date();

document.write(`La fecha actual es ${fechaActual} </br>`);

let fecha85 = fechaActual.setDate(fechaActual.getDate() + 85);
fecha85 = new Date(fecha85);
document.write(`Fecha de hoy y 85 dias añadidos: ${fecha85} </br>`);

let fecha187 = fechaActual.setDate( fechaActual.getDate() - 187);
fecha187 = new Date(fecha187);
document.write(`Fecha de hoy y 187 dias restados: ${fecha187} </br>`);

let fecha85Suma = fecha85.setFullYear(fecha85.getFullYear() + 2);
fecha85Suma = new Date(fecha85Suma);
document.write(`Sumar 2 años a la variable fecha85: ${fecha85Suma} </br>`);

let fecha187Resta = fecha187.setHours(fecha187.getHours() - 24);
fecha187Resta = new Date(fecha187Resta);
document.write(`Restar 24 horas a la variable fecha187: ${fecha187Resta} </br>`);


let fechaResto = fecha85.getDate() - fecha187.getDate()
fechaResto = new Date(fechaResto)
document.write(`La resta de las fechas es ${fechaResto}`)