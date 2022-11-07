// Ejercicio5 (Exa5)

function Exa5(str) {
    let str1 = str.split("");
    let str2 = str1.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) == index;
    });
    let str3 = str2.map(function (item) {
        return item + ":" + str1.filter(function (item2) {
            return item2 == item;
        }).length;
    });
    return str3.join("+");
}

document.write(Exa5("Chicago")+ "<br>");
document.write(Exa5("Granada")+ "<br>");





// Ejercicio6 (Exa6)

function Exa6(arr) {
    let arr1 = arr.map(function (item) {
        return item.sort(function (a, b,c) {
            return a + b + c;
        });
    });
    return arr1.reverse(function (a, b,c) {
        return b - a - c;
    });
}

document.write(Exa6([[1,3], [4,2], [2,1]]) + "<br>");


// Ejercicio7 (Exa7)

function exa7() {
    let div = document.getElementById('ejercicio8');
    div.style.fontSize = "12px";
    div.style.color = "green";
    div.style.backgroundColor = "blue";
    div.style.fontFamily = "Comic Sans MS";
}



// Ejercicio 8 (Exa8)

window.onload = () =>{
    function random(number) {
        return Math.floor(Math.random() * (number+1));
      }
    
    function colorRandom(){
         return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    }


function rightColor() {
    let colores = []
    let divs = document.getElementsById("cuadro");
    for (i=0;i<divs.length;i++){
        let color = colorRandom()
        divs[i].style.backgroundColor = color;
        colores.push(color)
    }
}
}