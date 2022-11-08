imagenes = [
    "playlist.jpg",
    "foto7.jpg",
    "foto14.jpg",
    "rap.jpg",
    "rosas.jpg",
]

document.getElementById("siguiente").addEventListener("click", siguiente);
document.getElementById("anterior").addEventListener("click", anterior);

function siguiente() {
    let imagen = document.getElementById("imagen");
    let indice = imagenes.indexOf(imagen.getAttribute("src"));
    if (indice < imagenes.length - 1) {
        imagen.setAttribute("src", imagenes[indice + 1]);
    }
}

function anterior() {
    let imagen = document.getElementById("imagen");
    let indice = imagenes.indexOf(imagen.getAttribute("src"));
    if (indice > 0) {
        imagen.setAttribute("src", imagenes[indice - 1]);
    }
}