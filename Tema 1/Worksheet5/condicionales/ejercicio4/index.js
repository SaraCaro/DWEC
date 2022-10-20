let number= parseInt(prompt("Introduce un numero"));

if ( number > 100){
    number = number - (number*0.15);
    alert(number)
}
else{
    alert("Pos nada")
}