

window.onload = () => {
  let cerrarSesion = document.getElementById('clear');
  cerrarSesion.addEventListener("click", deleteCookie);
}



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

function setCookie(cname, cvalue, exmins) {
  const d = new Date();
  d.setTime(d.getTime() + (exmins*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "") {
      setCookie("username", username, 5);
    }
  }
}

function deleteCookie() {
  document.cookie = "username" + '=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/;';
}

checkCookie();