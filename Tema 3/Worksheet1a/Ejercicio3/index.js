function lanzamiento(){
    return Math.floor(Math.random() * 7);
}


function simulacion(){
    numero1 = 0;
    numero2 = 0;
    numero3 = 0;
    numero4 = 0;
    numero5 = 0;
    numero6 = 0;
    for(i=0;i<6000;i++){
        ocurr = lanzamiento()
        if(ocurr == 1){
            numero1 ++;
        }
        else if(ocurr == 2){
            numero2 ++;
        }
        else if(ocurr == 3){
            numero3 ++;
        }
        else if(ocurr == 4){
            numero4 ++;
        }
        else if(ocurr == 5){
            numero5 ++;
        }
        else if(ocurr == 6){
            numero6 ++;
        }
    }
    document.write(`Numero 1: ${numero1}<br>`)
    document.write(`Numero 2: ${numero2}<br>`)
    document.write(`Numero 3: ${numero3}<br>`)
    document.write(`Numero 4: ${numero4}<br>`)
    document.write(`Numero 5: ${numero5}<br>`)
    document.write(`Numero 6: ${numero6}<br>`)
}

simulacion()
