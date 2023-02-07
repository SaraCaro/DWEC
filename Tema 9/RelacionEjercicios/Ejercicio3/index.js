const app = document.getElementById('app');


function Boton(props){
   function clickHandler(){
       alert('You clicked on button ' + props.numero);
   }

    return(
        <button onClick={clickHandler}>Boton {props.numero}</button>
    );
}


function Cuerpo(){
    return(
        <div>
            <Boton numero="1"/>
            <Boton numero="2"/>
            <Boton numero="3"/>
        </div>
    );
}  

ReactDOM.render(<>
    <Cuerpo/>
</>, app);
