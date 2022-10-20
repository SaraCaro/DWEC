function clock(){
    document.open()
    var actualDate = new Date();
    var hour = actualDate.getHours();
    var minutes = actualDate.getMinutes();
    var seconds = actualDate.getSeconds();
    document.write(`${hour}.${minutes}.${seconds} </br>`);
    setTimeout(clock, 1000);
}

setTimeout(clock, 1000)