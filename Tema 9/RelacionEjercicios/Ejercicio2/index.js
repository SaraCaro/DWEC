const app = document.getElementById('app');

function Cuerpo(){

    function alerta(){
        alert("Clicked");
    }

    return(
        <button onClick={alerta}>Click Me</button>
    );

}

ReactDOM.render(<>
    <Cuerpo/>
</>, app);