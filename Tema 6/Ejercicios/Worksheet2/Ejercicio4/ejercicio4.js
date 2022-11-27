window.onload = () => {
    document.querySelector("button").addEventListener("click", recogerCorreo);
}


function recogerCorreo() {
    httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", "resultado.php?username=pedro", true);
    httpRequest.onreadystatechange = trataRespuesta;
    httpRequest.send();
}


function trataRespuesta() {
    if(httpRequest.readyState == 4 && httpRequest.status == 200) {
        console.log(httpRequest.responseText);
    }
}















// function trataRespuesta() {
//     if (httpRequest.readyState === XMLHttpRequest.DONE) {
//       if (httpRequest.status === 200) {
//         var datosUsuario = JSON.parse(httpRequest.responseText);
//         datosUsuario = datosUsuario.usuario;
//         var usuario = document.getElementById("username").value;

//         for(var i = 0; i < datosUsuario.length; i++){
//             if(datosUsuario[i].username == usuario){
//                 document.getElementById("resultado").innerHTML = "Usuario no disponible";
//             }
//             else{
//                 document.getElementById("resultado").innerHTML = "Usuario disponible";
//             }
//         }
//       } else {
//         alert("There was a problem with the request.");
//       }
//     }

// }