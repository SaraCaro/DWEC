var bola,posX,posY, direccionX, direccionY, velocidadX, velocidadY, radio, rect1, rect2, puntos1, puntos2;

window.onload = () => {
    bola = document.getElementById('bola');
    radio = bola.getAttribute('r');
    rect1 = document.getElementById('rect1');
    rect2 = document.getElementById('rect2');
    posX = 50;
    posY = 50;
    direccionX = 1;
    direccionY = 1;
    velocidadX = 5;
    velocidadY = 3;
    radio = 20;
    resultado1 = document.getElementById('resultado1');
    resultado2 = document.getElementById('resultado2');
    setInterval(dibujarEscenario,30);


    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if(keyName == 'w')
            if(parseInt(rect1.getAttribute('y'))>10)
                rect1.setAttribute('y',parseInt(rect1.getAttribute('y'))-20);
        if(keyName == 's')
            if(parseInt(rect1.getAttribute('y'))<280)
                rect1.setAttribute('y',parseInt(rect1.getAttribute('y'))+20);
    });

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if(keyName == 'ArrowUp')
            if(parseInt(rect2.getAttribute('y'))>10)
                rect2.setAttribute('y',parseInt(rect2.getAttribute('y'))-20);
        if(keyName == 'ArrowDown')
            if(parseInt(rect2.getAttribute('y'))<280)
                rect2.setAttribute('y',parseInt(rect2.getAttribute('y'))+20);
    });

};


function dibujarEscenario()
{

    // condicional para que rebote en los rectangulos
    if(posX+radio>=parseInt(rect1.getAttribute('x')) && posX-radio<=parseInt(rect1.getAttribute('x'))+parseInt(rect1.getAttribute('width')) && posY+radio>=parseInt(rect1.getAttribute('y')) && posY-radio<=parseInt(rect1.getAttribute('y'))+parseInt(rect1.getAttribute('height')))
    {   
        direccionX = 1;
    }
    if(posX+radio>=parseInt(rect2.getAttribute('x')) && posX-radio<=parseInt(rect2.getAttribute('x'))+parseInt(rect2.getAttribute('width')) && posY+radio>=parseInt(rect2.getAttribute('y')) && posY-radio<=parseInt(rect2.getAttribute('y'))+parseInt(rect2.getAttribute('height')))
    {  
        direccionX = -1;
    }


    if(posX>(600-radio) || posX<(0+radio))
        direccionX *= -1;

    posX += direccionX*velocidadX;
    bola.setAttribute('cx',posX);

    if(posY>(400-radio) || posY<(0+radio))
        direccionY *= -1;

    posY += direccionY*velocidadY;
    bola.setAttribute('cy',posY);

}

function puntuacion(jugador){
    if(jugador == rect1){
        puntos1++;
        resultado1.innerHTML = puntos1;
        posX = 50;
        posY = 50;
        velocidadX = Math.floor(Math.random() * 10) + 1;
        velocidadY = Math.floor(Math.random() * 10) + 1;
        direccionX *= 1;
        direccionY *= 1;
        posX += direccionX*velocidadX;
        posY += direccionY*velocidadY;
        bola.setAttribute('cx',posX);
        bola.setAttribute('cy',posY);
    }
    else if(jugador == rect2){
        puntos2++;
        resultado2.innerHTML = puntos2;
        posX = 50;
        posY = 50;
        velocidadX = Math.floor(Math.random() * 10) + 1;
        velocidadY = Math.floor(Math.random() * 10) + 1;
        direccionX *= -1;
        direccionY *= -1;
        posX += direccionX*velocidadX;
        posY += direccionY*velocidadY;
        bola.setAttribute('cx',posX);
        bola.setAttribute('cy',posY);
    }

}