import "./Cabecera.css";

function Item(props) {
    if (props.isPacked) {
      return <li className="item">{props.name} ✔</li>;
    }
    return <li className="item">{props.name}</li>;
  }
  
  export default function Cabecera() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  
