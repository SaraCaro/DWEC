window.onload = () => {
    document.getElementById("boton").addEventListener("click", lanzaPeticion);
};

var httpRequest;

function lanzaPeticion(){
    httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", `http://www.omdbapi.com/?apikey=e5e01699&s=${document.getElementById("titulo").value}`, true);
    httpRequest.onreadystatechange = trataRespuesta;
    httpRequest.send();
}

function trataRespuesta(){
    let container = document.getElementById("container");
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            container.innerHTML = "";
            let respuesta = JSON.parse(httpRequest.responseText);
            for(let i = 0; i < respuesta.Search.length; i++){
                let div = document.createElement("div");
                div.innerHTML = `<h2>`+respuesta.Search[i].Title+`</h2>` + `<br>`;
                div.innerHTML += `<img src="`+respuesta.Search[i].Poster+`">`;
                container.appendChild(div);
            }
        } else {
          alert("There was a problem with the request.");
        }
    }
}