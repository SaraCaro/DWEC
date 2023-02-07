function ejercicio2(){
    const animalsInHTML = [
        <li>Horse</li>,
        <li>Turtle</li>,
        <li>Elephant</li>,
        <li>Monkey</li>
      ];

    const animals = animalsInHTML.map((animal) => {
        return <li>{animal}</li>
    }
    );

    return (<>
        <div>
            <ul>
                {animals}
            </ul>
        </div>
    </>);
}

export default ejercicio2;