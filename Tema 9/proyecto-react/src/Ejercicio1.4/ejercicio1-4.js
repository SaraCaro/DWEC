function Ejercicio1_4(){
   const linksInHtml = [
    <li class="nav-item">
      <a class="nav-link" href="#">Link to google.com</a>
    </li>,
    <li class="nav-item">
      <a class="nav-link" href="#">Link to facebook.com</a>
    </li>,
    <li class="nav-item">
      <a class="nav-link" href="#">Link to amazon.com</a>
    </li>
   ];

   const links = <ul>{linksInHtml}</ul>

    return (
      <div>
        <ul>
          {links}
        </ul>
      </div>
    );
}

export default Ejercicio1_4;