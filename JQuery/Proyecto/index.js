
if(localStorage.reminders != null) {
    var reminders = JSON.parse(localStorage.getItem('reminders'));
}
else {
    var reminders = [];
}

$(document).ready(function() {
    $(document).keypress(function(e) {
        if(e.which == 13) {
            $('#boton').click();
        }
    });


    var bton = $('#boton');
    var input = $('#recordar');
    var div = $('#container');
    var borrado = $('#borrar');
    pendientes = 0;
    total = 0;


    if (localStorage.getItem('reminders') != null) {
        writeLocalStorage();
    }

    bton.click(function() {
        var recordatorio = input.val();
        div.append('<div id="eliminarTarea"><i class="fa-regular fa-circle"></i><i class="fa-solid fa-circle-minus"></i> <h2>' +recordatorio + '</h2><h6>Prioridad <button id="low">Low</button><button id="normal">Normal</button><button id="high">High</button></h6></div>');
        input.val('');
        total++;
    }
    );    

    div.on('click', '.fa-circle-minus', function() {
        $(this).parent().remove();
    });

    div.on('click', '.fa-circle', function() {
        $(this).toggleClass('fa-circle fa-check-circle');
        $(this).siblings("h2").toggleClass('tachado');
    });

    div.on('click', '.fa-check-circle', function() {
        $(this).toggleClass('fa-check-circle fa-circle');
        $(this).siblings("h2").toggleClass('tachado');
    });

    // poner colores de prioridad
    div.on('click', '#low', function() {
        $(this).toggleClass('low').css('background-color', 'green');
    });

    div.on('click', '#normal', function() {
        $(this).toggleClass('normal').css('background-color', 'blue');
    });

    div.on('click', '#high', function() {
        $(this).toggleClass('high').css('background-color', 'red');
    });

    // desquitar colores de prioridad
    div.on('click', '.low', function() {
        $(this).toggleClass('low').css('background-color', 'gray');
    });

    div.on('click', '.normal', function() {
        $(this).toggleClass('normal').css('background-color', 'gray');
    });

    div.on('click', '.high', function() {
        $(this).toggleClass('high').css('background-color', 'gray');
    });


    borrado.click(function() {
        div.empty();
    });


});