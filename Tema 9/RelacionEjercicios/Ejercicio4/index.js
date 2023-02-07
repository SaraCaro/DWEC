const app = document.getElementById('app');

function Contador(){

    const [contador, incrContador] = React.useState(0);

    function incrementaContador(){
        incrContador(contador + 1)
    }

    return <div>
        <button onClick={incrementaContador}>Click me</button>
        <h3>Button has been clicked = {contador}</h3>
    </div>
}


ReactDOM.render(<>
    <Contador/>
</>, app);
