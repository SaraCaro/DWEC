function ConsYVoc(cadena)
{
    let cadenaSpli = cadena.split(" ")
    vocales = []
    consonantes = []
    for (let letras of cadenaSpli)
    {
        switch(letras){
            case a:
            case e:
            case i:
            case o:
            case u:
                document.write("Vocales");
                break;
            case b:
            case c:
            case d:
            case f:
            case g:
            case h:
            case j:
            case k:
            case l:
            case m:
            case n:
            case p:
            case q:
            case r:
            case s:
            case t:
            case v:
            case w:
            case z:
                document.write("consonantes")
                break;
        }
    }
}

ConsYVoc("hola que tal")