const app = document.getElementById('app');

function Form(){
    function procesar(){
        alert('Hola ' + nombre + ' ' + apellido)
    }

    function onChangeNombre(e){
        setNombre(e.target.value)
    }

    function onChangeApellido(e){
        setApellido(e.target.value)
    }

    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    return <div>
        <input type="text" value={nombre} onChange={onChangeNombre}/>
        <input type="text" value={apellido} onChange={onChangeApellido}/>
        <button onClick={procesar}>Procesar</button>
    </div>
}


ReactDOM.render(<>
    <Form/>
</>, app);
