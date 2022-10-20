let semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

let buscarPosicion = semana.findIndex((dia) => dia.charAt(0) == "M");

console.log(buscarPosicion);