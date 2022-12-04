$(document).ready(function(){
    $("div:nth-child(1)").css("font-size", "30px");
    $("div:nth-child(2)").css("font-size", "20px");
    $("div:nth-child(3)").css("font-size", "10px");

    $("h2").click(function(){
        $(this).siblings().toggle("slow");
    });

    $("p").hover(function(){
        $(this).css("background-color", "yellow");
    }, function(){
        $(this).css("background-color", "white");
    });

    // $("p").mouseout(function(){
    //     $(this).css("background-color", "white");
    // });
});