window.onload = () =>{
    let tNormal = document.getElementById("normal")
    let tMinimalista = document.getElementById("minimalista")

    tNormal.addEventListener("click", () => {

        document.querySelector("html").style.backgroundColor = "white";
        document.querySelector("body").removeAttribute("style");
        document.querySelector("nav").removeAttribute("style");
        document.querySelector("h1").removeAttribute("style");
        document.getElementById("marco").removeAttribute("style");
        document.getElementById("oculto").innerHTML = "";

        let fraseOculta = document.getElementById("oculto")
        fraseOculta.innerHTML = "Este parrafo debe ser solo visto en el tema Normal";
        fraseOculta.style.fontWeight = "bold";
    })

    tMinimalista.addEventListener("click", () => {
        document.querySelector("html").style.backgroundColor = "#FFFFCC";
        document.querySelector("body").style.paddingLeft = "15px";

        let nav = document.querySelector("nav");
        nav.style.backgroundColor = "#EEEEFF";
        nav.style.color = "blue";
        nav.style.fontWeight = "bold";
        nav.style.borderColor = "blue";
        nav.style.borderTopWidth = "1px";
        nav.style.borderLeftWidth = "1px";
        nav.style.borderStyle = "solid";
        nav.style.padding = "5px";

        document.querySelector("h1").style.fontFamily = "sans-serif";

        let marco = document.getElementById("marco");
        marco.style.backgroundColor = "yellow";
        marco.style.borderWidth = "1px";
        marco.style.borderColor = "black";
        marco.style.borderStyle = "solid";
        marco.style.padding = "5px";
        marco.style.marginRight = "20%";
    })
}