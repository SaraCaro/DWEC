import "./ejercicio2_2.css"
function Ejercicio2_2(){
    const planets = [ 'Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune' ];

    return (
        <div>
            <ul>
                {planets.map((planet) => {
                    return <li>{planet}</li>
                }
                )}
            </ul>
        </div>
    );

}

export default Ejercicio2_2;