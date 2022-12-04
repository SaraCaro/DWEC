$(document).ready(function() {
    $("#startAn").click(function() {
        $("div").animate({
            left: '+=250px',
            backgroundColor: 'blue',
            top: '-=500px',
        },5000);
    });
    $("#stopAn").click(function() {
        $("div").stop();
    });
    }
);