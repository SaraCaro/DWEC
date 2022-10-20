function figuraPalabra(palabra) {
    let palabraSpli= palabra.split("");
    let palabraReves = palabra.split("").reverse();
    document.write("<table>");
    document.write("<tr>");
    document.write(`<td>${palabra.charAt(0)}</td>`);
    
    for (i = 1; i < palabraSpli.length; i++) {
      document.write(`<td>${palabraSpli[i]}</td>`);
    }
    document.write("</tr>");
  
    for (i = 1; i < palabraSpli.length; i++) {
      document.write(`<tr><td>${palabraSpli[i]}</td>`);
    }
  
    for (i = 1; i < palabraReves.length; i++) {
      document.write(`<td>${palabraReves[i]}</td>`);
    }
    
    document.write("</tr>");
  }
  
  figuraPalabra("HOLA");