listaCompra = ["Peras", "Manzanas", "Kiwis", "Plátanos","Mandarinas"]

let eliminarManzanas = listaCompra.splice(1,1)

console.log(listaCompra);
console.log(eliminarManzanas);


let añadirFruta = listaCompra.splice(3,0,"Naranjas","Sandias");
console.log(listaCompra);

let sustituirFruta = listaCompra.splice(1,1,"Cerezas","Nisperos");
console.log(listaCompra)