let chess = parseInt(prompt("Introduce el ancho de la celda: "));

const size = 8;

document.write(`<table border="0" cellspacing="2" bgcolor="black">`);

for(let i=1;i<=size;i++)
{
    document.write(`<tr height="${chess}" bgcolor="white">`);
    for(let j=1;j<=size;j++)
    {
        if((j+i)%2 == 0)
        {
            document.write(`<td width="${chess}">&nbsp;</td>`);
        }
        else
        {
            document.write(`<td width="${chess}" bgcolor="black">&nbsp;</td>`);
        }
    }
    document.write("</tr>");
}

document.write(`</table>`);