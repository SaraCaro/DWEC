let semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
let todos = semana.some((dia) => dia.endsWith == "s");
console.log(todos);


let semana2 = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
let algunos = semana2.some((dia) => dia[0] == "S");
console.log(algunos);