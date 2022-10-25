function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

function colorRandom(){
     return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

window.onload = () => {
    let colores = []
    let divs = document.getElementsByClassName("color");
    for (i=0;i<divs.length;i++){
        let color = colorRandom()
        divs[i].style.backgroundColor = color;
    }

    for(i=0;i<divs.length;i++){
        
    }

}