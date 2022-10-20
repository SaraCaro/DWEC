let i = 60;

function reloj()
{
    if(i != 0){
        document.write(i + "</br>")
        setTimeout(reloj, 1000)
        i -= 1
    }
    else{
        document.write("Final!")
    }
}

setTimeout(reloj,1000);


 