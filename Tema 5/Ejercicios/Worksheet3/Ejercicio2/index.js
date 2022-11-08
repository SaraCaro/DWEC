let arrayAnimales = ["Perro","Ornitorrinco","Gato","Conejo","Pez","Cocodrilo","Tortuga","Pájaro"];


let palabra = arrayAnimales[Math.floor(Math.random() * arrayAnimales.length)];

let letras = palabra.split("");
let contadorAciertos = 0;
let totalVidas = 10;

window.onload = () => {
  
    let divLetra = document.getElementById("word");
    for (let i = 0; i < palabra.length; i++) {
      let span = document.createElement("span");
      span.className = "letraElegida";
      span.innerHTML = "_";
      divLetra.appendChild(span);
    }
  
    let spanLetras = document.getElementsByClassName("letter");

  
    for (let i = 0; i < spanLetras.length; i++) {
      spanLetras[i].addEventListener("click", (e) => {
  
        if(totalVidas > 0){
        let letra = e.target.innerHTML;
        let letraEncontrada = false;
        for (let j = 0; j < letras.length; j++) {
          if (letra == letras[j]) {
            let span = document.getElementsByClassName("letraElegida")[j];
            span.innerHTML = letra;
            letraEncontrada = true;
            contadorAciertos++;
          } 
        }
  
        if (!letraEncontrada && !e.target.classList.contains("letraFallada")) {
          totalVidas--;
          document.getElementById("lives").innerHTML = totalVidas;
          e.target.classList.add("letraFallada");
          e.target.style.opacity = "0%";
          e.target.style.cursor = "default";
          console.log(e.target.style.opacity);
        } else{
          e.target.style.backgroundColor = "green";
          e.target.style.cursor = "default";
          e.target.style.color = "white";
        }
  
      }
      });
    }
  };
