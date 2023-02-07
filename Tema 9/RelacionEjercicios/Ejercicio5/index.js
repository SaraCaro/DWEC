const app = document.getElementById('app');

function Cuerpo(){
    const animales = [ 'dog', 'cat' , 'chicken', 'cow', 'horse']

    const listaAnimales = animales.map(animales => (
        <li key={animales}>{animales}</li>
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
