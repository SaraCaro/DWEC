$(document).ready(function() {
    var input = $("#pass");
    var message = $("#message");
    message.fadeOut();

    input.keyup(function() {
        var pass = input.val();
        if (pass.length < 5) {
            message.text("No segura");
            message.fadeIn(1000);
        } 
        else if( pass.length > 5 && pass.length < 8) {
            message.text("Medianamente segura");
            message.fadeIn(1000);
        }
        else {
            message.text("Segura");
            message.fadeIn(1000);
        }
    });

});