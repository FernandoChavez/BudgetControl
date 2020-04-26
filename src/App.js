import React, {useState} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // definir el state
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos] = useState([]);

  // UseEffect que actualiza el restante
  

  // Cuando agreguemos un nuevo gastos
  const agregarNuevoGasto = gasto => {
    guardarGastos([
      ...gastos,
      gasto
    ])
  }

 return (
    <div className="container">
        <header>
          <h1>Gasto Semanal</h1>

          <div className = "contenido-principal contenido">
            { mostrarpregunta ? 
              (
                <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
              ) : 
              (
                <div className="row">
                  <div className="one-half column">
                    <Formulario
                      agregarNuevoGasto = {agregarNuevoGasto}
                    />
                  </div>
                    <Listado
                      gastos={gastos}
                    />

                    <ControlPresupuesto
                      presupuesto={presupuesto}
                      restante={restante}
                    />
                  <div className="one-half column">
                    
                  </div>
                </div>
              )
            }
            
            
           
          </div>
        </header>
    </div>
 );
}

export default App;
