window.onload = () => {
    lanzaPeticion_inicial();
    setInterval(lanzaPeticion, 1000);
}
var httpRequest;
var contador = 0;

function lanzaPeticion_inicial() {
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = trataRespuesta_inicial;
    httpRequest.open("GET", "prueba.xml");
    httpRequest.send();
}

function lanzaPeticion() {
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = trataRespuesta;
    httpRequest.open("GET", "prueba.xml");
    httpRequest.send();
}

function trataRespuesta() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {

        var datosUsuario = httpRequest.responseXML;
        if(contador <= datosUsuario.getElementsByTagName("remitente").length){
        var tabla = document.getElementsByTagName("tbody")[0];
        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");

        celda1.innerHTML = datosUsuario.getElementsByTagName("remitente")[contador].innerHTML;
        celda2.innerHTML = datosUsuario.getElementsByTagName("destinatario")[contador].innerHTML;
        celda3.innerHTML = datosUsuario.getElementsByTagName("asunto")[contador].innerHTML;
        celda4.innerHTML = datosUsuario.getElementsByTagName("cuerpo")[contador].innerHTML;

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);

        tabla.appendChild(fila);
        contador++;
        }


      } else {
        alert("There was a problem with the request.");
      }
    }

}

function trataRespuesta_inicial() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {

        var datosUsuario = httpRequest.responseXML;
        for(var i = 0; i < datosUsuario.getElementsByTagName("remitente").length; i++){
        var tabla = document.getElementsByTagName("tbody")[0];
        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");

        celda1.innerHTML = datosUsuario.getElementsByTagName("remitente")[contador].innerHTML;
        celda2.innerHTML = datosUsuario.getElementsByTagName("destinatario")[contador].innerHTML;
        celda3.innerHTML = datosUsuario.getElementsByTagName("asunto")[contador].innerHTML;
        celda4.innerHTML = datosUsuario.getElementsByTagName("cuerpo")[contador].innerHTML;

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);

        tabla.appendChild(fila);
        contador++;
        }


      } else {
        alert("There was a problem with the request.");
      }
    }

}