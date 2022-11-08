window.onload = () =>{
    btnRojo = document.getElementById("rojo");
    btnAzul = document.getElementById("azul");
  
    btnRojo.addEventListener("click",fondoRojo);
    btnAzul.addEventListener("click",fondoAzul);

    btnparrafoRojo = document.getElementById("parrafoRojo");
    btnparrafoAzul = document.getElementById("parrafoAzul");

    btnparrafoRojo.addEventListener("click",parrafoRojo);
    btnparrafoAzul.addEventListener("click",parrafoAzul);
  
    let color = getCookie("colorFondo");
  }
  
  function fondoRojo(){
    setCookie("colorFondo","red",15);
    document.body.style.backgroundColor = "red";
  }
  
  function fondoAzul(){
    setCookie("colorFondo","blue",15);
  
    document.body.style.backgroundColor = "blue";
  }

  function parrafoRojo(){
    setCookie("colorParrafo","red",15);
  
    document.querySelector("p").style.backgroundColor = "red";
  }

  function parrafoAzul(){
    setCookie("colorParrafo","blue",15);
  
    document.querySelector("p").style.backgroundColor = "blue";
  }
  
  // if(getCookie("colorFondo"))
  //     console.log(document.cookie);
  // else
  //     document.cookie = "colorFondo=red;"
  
      function getCookie(cname) {
          let name = cname + "=";
          let decodedCookie = decodeURIComponent(document.cookie);
          let ca = decodedCookie.split(';');
          for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
          }
          return "";
        }
  
        function setCookie(cname, cvalue, exdays) {
          const d = new Date();
          d.setTime(d.getTime() + (exdays*24*60*60*1000));
          let expires = "expires="+ d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }