function startDrag(e) {
    if (e.target) {
      targ = e.target;
    } else {
      targ = e.srcElement;
    }
  
    offsetX = e.clientX;
    offsetY = e.clientY;
  
    if (!targ.style.left) {
      targ.style.left = "0px";
    }
    if (!targ.style.top) {
      targ.style.top = "0px";
    }
  
    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;
  
    document.onmousemove = dragImg;
    return false;
  }
  
  function dragImg(e) {
    if (!drag) {
      return false;
    }
  
    targ.style.left = coordX + e.clientX - offsetX + "px";
    targ.style.top = coordY + e.clientY - offsetY + "px";
    return false;
  }
  
  function stopDrag() {
    drag = false;
  }
  
  window.onload = () => {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
  };