document.getElementById("añadir").addEventListener("click", añadirFichero);

function añadirFichero() {
    let element = document.createElement("input");
    element.setAttribute("type", "file");
    document.getElementById("form").appendChild(element);
}