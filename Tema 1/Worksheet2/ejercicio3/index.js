const pi = 3.14;

let radius;
let circuference;
let area;

radius = 4;

document.write("Radio " +radius+"</br>");


circuference = 2*pi*radius;
area = pi*(radius*radius);

document.write("Circunferencia " +circuference+"</br>");
document.write("Area " +area+"</br>");

console.log(`El radio es ${radius}`);
console.log(`La circunferencia es ${circuference}`);
console.log(`El area ${area}`);
