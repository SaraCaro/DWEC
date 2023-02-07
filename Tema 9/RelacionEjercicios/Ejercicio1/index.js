const app = document.getElementById('app');

function Cuerpo(){
    return(
        <div>
            <p>Hello World</p>
        </div>
    );
}


ReactDOM.render(<>
    <Cuerpo/>
</>, app);