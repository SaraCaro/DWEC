const app = document.getElementById('app');

function Cabecera(){
    return <div>
        <h1>Cabecera</h1>
        <p>Parrafo Cabecera</p>
    </div>
}


var pie = "Pie desde variable"
var nombreDesarrollador = "Sara"
function Pie(props){
    return <div>
        <h3>{props.textoPie} - Desarrollado por {props.desarrollador}</h3>
    </div>
}

function Cuerpo(){
    const nombres = [{nombre:"Paco",edad:30}, {nombre:"Adeli",edad:25}, {nombre:"Sara",edad:20}]

    const listaNombres = nombres.map((entrada) => (
        <li key={entrada.nombre}>{entrada.nombre} con {entrada.edad} años</li>
    ))

    function trataEvento(){
        console.log("Evento click")
    }

    return <div>
        <Cabecera/> 
        <h1>Cuerpo</h1>
        <ul>
            {listaNombres}
        </ul>
        <button onClick={trataEvento}>Prueba Captura de evento</button>
        <Pie desarrollador="Paco" textoPie="Texto 1"/>
        <Pie desarrollador="Adeli" textoPie="Texto del segundo comp"/>
    </div>
}

function Contador(){

    const [contador, incrContador] = React.useState(0);

    function incrementaContador(){
        incrContador(contador + 1)
        console.log("Valor contador = " + contador);
    }

    return <div>
        <button onClick={incrementaContador}>Incrementa</button>
        <h3>Contador = {contador}</h3>
    </div>
}


ReactDOM.render(<>
    <Cuerpo/>
    <Contador/>
</>, app);