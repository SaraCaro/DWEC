window.onload = () => {
    document.getElementById("boton").addEventListener("click", nuevaPagina);

    // darle con la tecla enter
    document.getElementById("titulo").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("boton").click();
        }
    }
    );
};

window.addEventListener("scroll", () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight -5){
        lanzaPeticion();
    }
});


var httpRequest;
var page = 1;
var peticion = false;

function lanzaPeticion(){

   if(peticion==false){

        peticion = true;
        httpRequest = new XMLHttpRequest();

        httpRequest.open("GET", `http://www.omdbapi.com/?apikey=e5e01699&s=${document.getElementById("titulo").value}&page=${page}`);
        httpRequest.onreadystatechange = trataRespuesta;
        httpRequest.send();
        page ++;
   }
}


function nuevaPagina(){
    document.getElementById("container").innerHTML = "";
    lanzaPeticion();
}


function trataRespuesta(){
    let container = document.getElementById("container");
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            let respuesta = JSON.parse(httpRequest.responseText);
            for(let i = 0; i < respuesta.Search.length; i++){
                let div = document.createElement("div");
                div.innerHTML = `<h2>`+respuesta.Search[i].Title+`</h2>` + `<br>`;
                div.innerHTML += `<img src="`+respuesta.Search[i].Poster+`">`;
                container.appendChild(div);
                peticion = false;
            }
        } else {
          alert("There was a problem with the request.");
        }
    }
}