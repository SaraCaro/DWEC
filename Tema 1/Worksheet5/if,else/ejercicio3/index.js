let edad= parseInt(prompt("Introduce tu edad"));

if ( edad <= 5){
    alert("Debe asistir al Jardin de Infancia")
}
else if (edad >=6 && edad <= 11){
    alert("Debe asistir a primaria")
}
else if(edad >=12 && edad <= 16)
{
    alert("Debe asistir a la ESO")
}
else if(edad >=17 && edad <= 21)
{
    alert("Debe asistir a la Bachiller o Ciclos")
}
else if(edad > 21)
{
    alert("Debe asistir a Universidad")
}