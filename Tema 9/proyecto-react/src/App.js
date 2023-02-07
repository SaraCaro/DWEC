import logo from './logo.svg';
import './App.css';
import Cabecera from './cabecera/Cabecera';
import Ejercicio1_2 from './Ejercicio1.2/ejercicio1-2';
import Ejercicio1_3 from './Ejercicio1.3/ejercicio1-3';
import Ejercicio1_4 from './Ejercicio1.4/ejercicio1-4';
import Ejercicio2 from './Ejercicio2/ejercicio2';
import Ejercicio2_2 from './Ejercicio2.2/ejercicio2_2';
import Ejercicio3 from './Ejercicio3/ejercicio3';
import Ejercicio3_2 from './Ejercicio3.4/ejercicio3_4';

function App() {
  return (
    <div className="App">
      <Ejercicio1_2 />
      <Ejercicio1_3 />
      <Ejercicio1_4 />

      <Ejercicio2 />
      <Ejercicio2_2 />

      <Ejercicio3 />
      <Ejercicio3_2 />
    </div>
  );
}

export default App;
