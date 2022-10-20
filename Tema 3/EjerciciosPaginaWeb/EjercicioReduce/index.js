let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3]

let sumNotas = arrayNotas.reduce((total,nota)=>total+= nota)/arrayNotas.length;

document.write(sumNotas)