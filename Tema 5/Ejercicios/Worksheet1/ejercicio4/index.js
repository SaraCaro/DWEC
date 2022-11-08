var boton = document.getElementById("boton");
var input = document.getElementById("inputusuario");
var listafunc = document.querySelector("ul");

boton.addEventListener("click", function() {
    var nuevoli = document.createElement("li");
    var textoli = document.createTextNode(input.value);
    nuevoli.appendChild(textoli);
    listafunc.appendChild(nuevoli);
});



