// // W.7 -> 1

// V1 - getPosition
// function showPosition(miPos){
//     document.write("Latitud: "+miPos.coords.latitude+"</br>");
//     document.write("Longitud: "+miPos.coords.longitude);
// }

// function error(){
//     return "No se puede acceder a la ubicacion";
// }

// function getPosition(){
//         return navigator.geolocation.getCurrentPosition(showPosition, error);
// }

// document.write(getPosition());

// V2 - watchPosition
function showPosition(miPos){
    document.write("Latitud: "+miPos.coords.latitude+"<br>");
    document.write("Longitud: "+miPos.coords.longitude+"<br>");
}

function error(){
    return "No se puede acceder a la ubicacion";
}

function getPosition(){
        return navigator.geolocation.watchPosition(showPosition, error);
}

document.write(getPosition());

