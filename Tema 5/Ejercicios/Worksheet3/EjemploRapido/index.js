let gatico = document.getElementsByClassName("gatos");

let contadorP = document.getElementById("contadorP");

let contador1 = 0;
let contador2 = 0;

gatico[0].addEventListener("click", function() {
    contador1 ++;
    contadorP[0].innerHTML = "La imagen ha sido pulsada " + contador1 + " veces";
});

gatico[1].addEventListener("click", function() {
    contador2 ++;
    contadorP[1].innerHTML = "La imagen ha sido pulsada " + contador2 + " veces";
});

