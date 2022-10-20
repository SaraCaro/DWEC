let columns = parseInt(prompt("Introduce el número de columnas: "));
let height = parseInt(prompt("Introduce la altura: "));
let width = parseInt(prompt("Introduce la anchura: "));

document.write(`<table border="0" cellspacing="2" bgcolor="black" width="200">`);
document.write(`<tr bgcolor= "white" height="${height}>"`);

for(let i=0; i<=columns; i++)
{
    document.write(`<td width="${width}">&nbsp;</td>`);
}

document.write(`</tr>`);
document.write(`</table>`);