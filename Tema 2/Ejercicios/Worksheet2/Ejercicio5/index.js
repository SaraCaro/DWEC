function ecuacion(a,b,c)
{
    let first_result = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    let second_result = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    return (
      "1º Solución: " + first_result +
      "</br>" +
      "2º Solución: " + second_result
    );
  }

  document.write(ecuacion(4, 15, -7));