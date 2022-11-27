window.onload = () => {
    document.getElementById("peticion").onclick = lanzaPeticion;

}
var httpRequest;
function lanzaPeticion() {
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = trataRespuesta;
    httpRequest.open("GET", "prueba.xml");
    httpRequest.send();
}

function trataRespuesta() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        // alert(httpRequest.responseText);
        // document.body.innerHTML += "<h3>" + httpRequest.responseText + "</h3>";
        // var datosUsuario = JSON.parse(httpRequest.responseText);
        // document.body.innerHTML += datosUsuario.nombre;
        var datosUsuario = httpRequest.responseXML;
        document.body.innerHTML += datosUsuario.getElementsByTagName("nombre")[0].innerHTML;
      } else {
        alert("There was a problem with the request.");
      }
    }

}