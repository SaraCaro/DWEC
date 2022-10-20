let semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

let nameJ = semana.filter((name) => name.charAt(0) == "J");
nameJ.sort();

document.write(nameJ);