$(document).ready(function () {
    $("tr:gt(2)").css("background-color", "red");
    $("tr:lt(2)").css("background-color", "blue");
});