const app = document.getElementById('app');

function Cuerpo(){
    const animales = [{icono:'🐕',nombre:'dog'}, 
                      {icono:'🐈',nombre:'cat'},
                      {icono:'🐓',nombre:'chicken'},
                      {icono:'🐄',nombre:'cow'},
                      {icono:'🐎',nombre:'horse'}]

    const listaAnimales = animales.map((entrada) => (
        <li key={entrada.nombre}>{entrada.icono} {entrada.nombre}</li>
    ))


    return <div>
        <ul>
            {listaAnimales}
        </ul>
    </div>
}

ReactDOM.render(<>
    <Cuerpo/>
</>, app);